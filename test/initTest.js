const { CognitoValidator, jwtValidator } = require('../src')

// const TOKEN = 'eyJraWQiOiJzeWJBZzFod1E4ejZESERzMldBM0F0djhYV3FzRlRtSWJwR242WDZNRm5JPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206c2F2aW5nQW1vdW50IjoiMjAiLCJzdWIiOiJmYThhNDJjYi02ZWNiLTQ4YzEtYmFkOC02MTExYzg1M2JkOWIiLCJjdXN0b206bWFuZ29QYXlVc2VySWQiOiIxMzY2MTk4MzQzIiwiYmlydGhkYXRlIjoiMTk2Ny0wMS0wNSIsImN1c3RvbTpzX3Rlcm1zQWNjZXB0ZWQiOiJ0cnVlIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfUjdIZmg5NXdGIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMDEiLCJsb2NhbGUiOiJVUyIsImF1dGhfdGltZSI6MTYyMTA2MTY5OCwiZXhwIjoxNjIxMDc0MDI2LCJpYXQiOjE2MjEwNzA0MjYsImVtYWlsIjoiYWxlamFuZHJhQGZseXdhbGxldC5pbyIsImN1c3RvbTpzX2Nvb2tpZXNBY2NlcHRlZCI6InRydWUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYWRkcmVzcyI6eyJmb3JtYXR0ZWQiOiJVUyJ9LCJjdXN0b206c2F2aW5nRGF0ZSI6IjIwMjEtMDItMDEiLCJjdXN0b206bWFuZ29QYXlDYXJkT3duZXIiOiJUZXN0aW5nIERlbW8iLCJjdXN0b206dXNlckN1cnJlbmN5Q29kZSI6IkVVUiIsImN1c3RvbTppc0FjdGl2ZSI6IjEiLCJjb2duaXRvOnVzZXJuYW1lIjoiYWxlamFuZHJhQGZseXdhbGxldC5pbyIsImN1c3RvbTptYW5nb1BheVdhbGxldElkIjoiMTM2NjE5ODM0OCIsImF1ZCI6IjYwMTg5a2k2MjdpamczdmNsajZoMWZjNmp1IiwiY3VzdG9tOm1hbmdvUGF5Q2FyZElkIjoiMTM2Nzc2ODU2NiIsImV2ZW50X2lkIjoiNWE4MWEyODQtYTI0MS00ODQ4LTljMjctZGUxMTM5MmFmOGYwIiwiY3VzdG9tOnNfcHJpdmFjeUFjY2VwdGVkIjoidHJ1ZSIsImN1c3RvbTppc1ByZW1pdW0iOiIwIiwidG9rZW5fdXNlIjoiaWQiLCJuYW1lIjoiVGVzdGluZyIsImZhbWlseV9uYW1lIjoiRGVtbyJ9.t2R7NDuYko52notmWVh4LyGduhReNXX_kfBa7_3tB0EtHnQEwnF6gpzJcdJtWmcsPrtVAwpzRYt-pWAw-akYF3sViOV2y9NypBVaB327OuWHL2JciCpiI5B03IXHts0UlQcQmcdgkoQCZFZJVBIfNSZGpEpzHu_orcypgODxduit7yVFTvTgx5oSfLmLZDN-qPxaDeqejyEDUT51pjZV3nL9Gr9G6iXMPEGPHsTuYOUSiV7PmDW8mLgNIWYMDSvXUay3e_Xu6zagd8JxJUi67YxL9OyrVPpNsBsEjhvjz1ywL357sj8m31wRNUrrwDsBaAfgU0uWbcNPH58TITDjDw'

const cognitoConfig = new jwtValidator('https://securetoken.google.com/admin-pahr.com/admin-pahrty-com')
cognitoConfig.init().then((data, el) => {
  console.log(el)
})
// const testFn = async (data, p) => {
//   console.log(data)
//   // const test = p
//   console.log(p.isValid(TOKEN))
//   console.log(await p.validate(TOKEN))
// }


// async function test() {
//   const validator = new jwtValidator(cognitoConfig)
//   await validator.init()
//   console.log(validator.validate(TOKEN))
// }

// test()

const jwt = require('jsonwebtoken')

const TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUzNmRhZWFiZjhkZDY1ZDRkZTIxZTgyNGI4OTlhMWYzZGEyZjg5NTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUHJhc2hhbnQgU2luZ2giLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWRtaW4tcGFocnR5LWNvbSIsImF1ZCI6ImFkbWluLXBhaHJ0eS1jb20iLCJhdXRoX3RpbWUiOjE2MDc5MjMzNDIsInVzZXJfaWQiOiJZV0NHSXM0UTlYV0hhRFV6UjVEbnlHc2F5SEQzIiwic3ViIjoiWVdDR0lzNFE5WFdIYURVelI1RG55R3NheUhEMyIsImlhdCI6MTYyMTA3MTAyNCwiZXhwIjoxNjIxMDc0NjI0LCJlbWFpbCI6InByYXNoYW50QHBhaHJ0eS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicHJhc2hhbnRAcGFocnR5LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YRuHY7sizcrYe7iKSgR8wwgT9MPJoBNwi-tvgzq88p7gRMqTUGEEzXfSP0m7Byc_hhLUo1w1NkOf7HA-iBZ31kDxxK1963L58DjOnggb-b3eyNvuFs6wL9E4wxqtniwE9bXDTpSjvSe9mIAd8DM0tsU9PPPcb8-naXBTAeHNkpkluK-D9XOgxGy_dVvTjbkeglSGTShkk9bi7uulw2P6nrqd52YfoUmkakgWtbr1M1JWC-8h_WF1OlHONP6uFYSCuKGtjRDh3jU4YBOJQeXfEzVpbjpt3RVmwX2z5dMSNL2s4iKKXYbuSCnTLMV2XZAgij5LZSJIQWzID-DQB01V0g'

// console.log(jwt.decode(TOKEN, '536daeabf8dd65d4de21e824b899a1f3da2f8958'))