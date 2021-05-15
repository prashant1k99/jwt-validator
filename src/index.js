const CognitoValidator = require('./services/cognito')
const jwtValidator = require('./jwtValidator')
const FirebaseValidator = require('./services/firebase')

// module.default = jwtValidator
// module.exports = jwtValidator

module.exports = {
  jwtValidator,
  CognitoValidator,
  FirebaseValidator
}