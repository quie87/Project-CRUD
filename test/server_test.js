const { describe, it } = require('mocha')
const app = require('../server')
const chai = require('chai')
const request = require('supertest')
const backend = request.agent('http://localhost:5000')

const expect = chai.expect
const should = chai.should()

let token = null
let parentName = null
let userId = null
let todoId = null
let projectID = null

describe('POST /users', function () {
  it('should register user and return user', function (done) {
    backend
      .post('/api/users')
      .send({
        'name': 'test1',
        'email': 'test1@test.com',
        'password': '123456789'
      })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        token = res.body.token
        userId = res.body.user._id
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
        'password': '123456789' })
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
      .send({ 'name': 'Testar test',
        'userId': userId })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        parentName = res.body.name
        projectID = res.body._id
        expect(res.status).to.equal(200)
        expect(res.body.name).to.equal('Testar test')
        done()
      })
  })
})

describe('POST /todos', function () {
  it('Should create new todo', function (done) {
    backend
      .post(`/api/todos/create`)
      .set('x-auth-token', token)
      .send({
        'title': 'Testar test test',
        'parentName': parentName,
        'userId': userId
      })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        todoId = res.body._id
        expect(res.status).to.equal(200)
        expect(res.body.title).to.equal('Testar test test')
        done()
      })
  })
})

describe('POST, delete todo, /todo/:id', function () {
  it('should delete selected todo', function (done) {
    backend
      .delete(`/api/todos/${todoId}`)
      .set('x-auth-token', token)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        res.body.should.be.a('object')
        res.body.should.have.property('success').equal(true)
        expect(res.status).to.equal(200)
        done()
      })
  })
})

describe('POST, delete project, /projects/:id', function () {
  it('should delete selected project', function (done) {
    backend
      .delete(`/api/projects/${projectID}`)
      .set('x-auth-token', token)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err
        res.body.should.be.a('object')
        res.body.should.have.property('success').equal(true)
        expect(res.status).to.equal(200)
        done()
      })
  })
})
// "msg":"Could not delete todoItem from Data base"
