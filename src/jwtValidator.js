const fetch = require('node-fetch')

const fetchIssuer = (iss) => new Promise((resolve, reject) => {

})

class JWT_Validator {
  /**
   * 
   * @param {string} config 
   * @param {callback} function 
   */
  constructor(config, callback = null) {
    const issuerURLError = new Error('Invalid property passed on Initialization, please pass the issuer url.')
    if(typeof config !== "string" || !config.isValid()) {
      throw issuerURLError
    }
    this.issuer = config
    if (callback && typeof(callback) === 'function') {
      fetchIssuer(this.issuer).then((data) => {
        return callback()
      })
    } else fetchIssuer(this.issuer)
  }
}