const BaseErrors = {
  INVALID_TOKEN: new Error('The Token passed is not Valid.'),
  KID_NOT_FOUND: (kid) => new Error(`kId: ${kid} is not found`)
}

module.exports = BaseErrors