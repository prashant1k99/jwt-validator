const fetchIssuer = require('./utils/fetchIssuer')

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
      fetchIssuer(this.issuer, this.#pemStorage).then(() => {
        return callback()
      })
    } else fetchIssuer(this.issuer, this.#pemStorage)
  }

  isValid(token) {
    const decodedJWT = jwt.decode(token, { complete: true })
		if (!decodedJWT) return(this.errors.INVALID_TOKEN)
    else if (decodedJWT.payload.iss !== JWK_URL) return(this.errors.INVALID_ISS)
    else return true
  }
  
  validate() {
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