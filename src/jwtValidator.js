class JWT_Validator {
  #issuer

  /**
   * 
   * @param {string} config 
   */
  constructor(config) {
    return new Promise((resolve, reject) => {
      const issuerURLError = new Error('Invalid property passed on Initialization, please pass the issuer url.')
      if(typeof config !== "string" || !config.isValid()) {
        throw issuerURLError
      }
      this.#issuer = config
    })
  }

  static init () {
    return new Promise((resolve, reject) => {
      // Fetch the iss from the server
    })
  }
}