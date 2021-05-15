const BaseConfigs = require('../utils/baseConfig')
const BaseErrors = require('../utils/baseErrors')

class CognitoValidator extends BaseConfigs {
  /**
   * 
   * @param {object} config Cognito Identity Pool Id 
   * @param {string} config.region Cognito Pool Region
   * @param {string} config.userpoolId Cognito Pool Id
   * @param {string} config.token_use Cognito Pool Token
   */
  constructor(config) {
    if (!config)
      throw new TypeError(
          "Options not found. Please refer to README for usage example at https://github.com/prashant1k99/jwt-validatortree/main#readme"
      )
    if (!config.region || !config.userpoolId)
      throw new TypeError(
        "Options not passed correctly. Please refer to README for usage example at https://github.com/prashant1k99/jwt-validatortree/main#readme"
      )
    const configData = {
      validator: 'COGNITO',
      tokenUse: config.token_use || false,
      iss: `https://cognito-idp.${config.region}.amazonaws.com/${config.userpoolId}`
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
      INVALID_ISS: () => new Error('The Token does not belong to the required Cognito Pool'),
      NOT_VALID_TOKEN: (tokenUse = 'testToken') => new Error(`Not an ${tokenUse} token`)
    }
  }
}

module.exports = CognitoValidator