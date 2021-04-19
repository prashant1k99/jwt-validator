const CognitoValidator = require('./cognito')
const jwtValidator = require('./jwtValidator')
const FirebaseValidator = require('./firebase')

module.exports = jwtValidator

module.exports = {
  CognitoValidator,
  FirebaseValidator
}