const fetch = require('node-fetch')

const fetchIssuer = (iss, pemStorage) => new Promise((resolve, reject) => {
  fetch(`${iss}/.well-known/jwks.json`).then(async (response) => {
    const data = await response.json()
    for (let key of data['keys']) {
      pemStorage.set(key.kid, {
        key_id  : key.kid,
        modules : key.n,
        exponent: key.e,
        key_type: key.kty,
        pem     : jwkToPem(key)
      })
    }
    pemStorage.set('isInit', true)
    resolve(true)
  }).catch(err => reject(err))
})

class JWT_Validator {
  #pemStorage = new Map()

  /**
   * 
   * @param {string} config 
   * @param {callback} function 
   * @returns {}
   */
  constructor(config, callback = null) {
    const issuerURLError = new Error('Invalid property passed on Initialization, please pass the issuer url.')
    if(typeof config !== "string" || !config.isValid()) {
      throw issuerURLError
    }
    this.issuer = config.getConfig()
    this.errors = config.getError()
    if (callback && typeof(callback) === 'function') {
      fetchIssuer(this.issuer, this.#pemStorage).then((data) => {
        return callback()
      })
    } else fetchIssuer(this.issuer, this.#pemStorage)
  }

  validate(token) {
    const decodedJWT = jwt.decode(token, { complete: true })
		if (!decodedJWT) return(this.errors.INVALID_TOKEN)
    else if (decodedJWT.payload.iss !== JWK_URL) return(this.errors.INVALID_ISS)
    else return true
  }
  
  verify() {
    return new Promise((resolve, reject) => {
      const decodedJWT = jwt.decode(token, { complete: true })
      if (!this.#pemStorage.has(decodedJWT.header.kid)) 
        reject(this.errors.KID_NOT_FOUND(decodedJWT.header.kid))
      const pem = this.#pemStorage.get(decodedJWT.header.kid)
      jwt.verify(
        token,
        pem.pem,
        {
          issuer: pem.iss
        },
        function(err, payload) {
          if (err) reject(err)
          resolve(payload)
        }
      )
    })
  }
}

module.exports = JWT_Validator