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
    if (
      (
        typeof config === "string" && 
        !config.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) 
      ) && !config.isValid() ) {
      throw issuerURLError
    }
    if (typeof config === 'string') {
      this.issues = config
      this.errors = require('./utils/baseErrors')
    } else {
      this.issuer = config.getConfig()
      this.errors = config.getError()
    }
    if (callback && typeof(callback) === 'function') {
      fetchIssuer(this.issuer, this.#pemStorage).then(() => {
        return callback()
      })
    } else return fetchIssuer(this.issuer, this.#pemStorage)
  }

  /**
   * 
   * @param {string} token 
   * @returns 
   */
  isValid(token) {
    const decodedJWT = jwt.decode(token, { complete: true })
		if (!decodedJWT) return (this.errors.INVALID_TOKEN)
    else if (decodedJWT.payload.iss !== this.issuer) return (this.errors.INVALID_ISS)
    else return true
  }
  
  /**
   * 
   * @param {string} token
   * @returns {*} Promise
   */
  validate(token) {
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