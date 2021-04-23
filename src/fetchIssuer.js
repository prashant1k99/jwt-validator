const fetch = require('node-fetch')

const fetchIssuer = (iss, pemStorage) => new Promise((resolve, reject) => {
  fetch(`${iss}/.well-known/jwks.json`).then(async (response) => {
    const data = await response.json()
    for (let key of data['keys']) {
      pemStorage.set(key.kid, {
        key_id  : key.kid,
        modules : key.n,
        exponent: key.e,
        key_type: key.kty,
        pem     : jwkToPem(key)
      })
    }
    pemStorage.set('isInit', true)
    resolve(true)
  }).catch(err => reject(err))
})

module.exports = fetchIssuer