const BaseConfigs = require('../utils/baseConfig')
const BaseErrors = require('../utils/baseErrors')

class FirebaseValidator extends BaseConfigs {
  /**
   * 
   * @param {object} config Cognito Identity Pool Id 
   * @param {string} config.projectId Cognito Pool Region
   * @param {string} config.userPoolId Cognito Pool Id
   * @param {string} config.token_use Cognito Pool Token
   */
   constructor(config) {
    if (!config)
      throw new TypeError(
          "Options not found. Please refer to README for usage example at https://github.com/prashant1k99/jwt-validatortree/main#readme"
      )
    if (!config.projectId || !config.userPoolId)
      throw new TypeError(
        "Options not passed correctly. Please refer to README for usage example at https://github.com/prashant1k99/jwt-validatortree/main#readme"
      )
    const configData = {
      validator: 'FIREBASE',
      iss: `https://securetoken.google.com/${config.projectId}`
    }
    super(configData)
    this.config = configData
    // Validate Config
  }

  get getConfig() {
    return this.config
  }

  get getError() {
    return {
      ...BaseErrors,
      INVALID_ISS: () => new Error('The Token does not belong to the required Firebase Project')
    }
  }
}

module.exports = FirebaseValidator