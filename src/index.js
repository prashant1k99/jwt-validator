const CognitoValidator = require('./services/cognito')
const jwtValidator = require('./jwtValidator')
const FirebaseValidator = require('./services/firebase')

module.exports = jwtValidator

module.exports = {
  CognitoValidator,
  FirebaseValidator
}