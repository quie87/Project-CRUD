const { describe, it } = require('mocha')
const app = require('../server')
const chai = require('chai')
const request = require('supertest')
const backend = request.agent('http://localhost:5000')

const expect = chai.expect
const should = chai.should

let token = null
let parentName = null
let userId = null

describe('POST /users', function () {
  it('should register user and return user', function (done) {
    backend
      .post('/api/users')
      .send({
        'name': 'test1',
        'email': 'test1@test.com',
        'password': '12345'
      })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        token = res.body.token
        userId = res.body.user.id
        expect(res.status).to.equal(200)
        expect(res.body.user.name).to.equal('test1')
        expect(res.body.user.email).to.equal('test1@test.com')
        done()
      })
  })
})

describe('POST /auth', function () {
  it('should auth user', function (done) {
    backend
      .post('/api/auth')
      .send({
        'email': 'test1@test.com',
        'password': '12345' })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        expect(res.body.user.name).to.equal('test1')
        expect(res.body.user.email).to.equal('test1@test.com')
        done()
      })
  })
})

describe('POST /projects', function () {
  it('Should create new project', function (done) {
    backend
      .post('/api/projects')
      .set('x-auth-token', token)
      .send({ 'name': 'Testar test', 'userId': userId })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        parentName = res.body.name
        expect(res.status).to.equal(200)
        expect(res.body.name).to.equal('Testar test')
        done()
      })
  })
})

describe('POST /todos', function () {
  it('Should create new todo', function (done) {
    backend
      .post(`/api/todos`)
      .set('x-auth-token', token)
      .send({
        'title': 'Testar test test',
        'parentName': parentName,
        'userId': userId
      })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        expect(res.status).to.equal(200)
        expect(res.body.title).to.equal('Testar test test')
        done()
      })
  })
})
