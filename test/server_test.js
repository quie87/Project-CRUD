const app = require('../server')
const chai = require('chai')
const request = require('supertest')

const expect = chai.expect
const should = chai.should

describe('POST /auth', function () {
  it('should log in user', function (done) {
    request(app)
      .post('/api/auth')
      .auth('test1@test.com', '12345')
      .set('Accept', 'application/json')
      .end(function (err, res) {
        res.should.have.status(200)
        if (err) throw err
        done()
      })
  })
})
