const BaseConfigs = require('./baseConfig')
const BaseErrors = require('./baseErrors')

class FirebaseValidator extends BaseConfigs {
  constructor(config) {
    // Validate Config
  }

  get getConfig() {
    // Return the configs
  }

  get getError() {
    return {
      ...BaseErrors,
      INVALID_ISS: new Error('The Token does not belong to the required Firebase Project')
    }
  }
}

module.exports = FirebaseValidator