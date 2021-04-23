const BaseErrors = {
  INVALID_TOKEN: new Error('The Token passed is not Valid.'),
  INVALID_ISS: new Error('The Token does not belong to the Initialized Project'),
  KID_NOT_FOUND: (kid) => new Error(`kId: ${kid} is not found`)
}

module.exports = BaseErrors