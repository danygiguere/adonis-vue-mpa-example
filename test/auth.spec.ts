import test from 'japa'
import supertest from 'supertest'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Auth', async (group) => {
  group.before(async () => {
    await Database.beginGlobalTransaction()
  })

  group.after(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('ensure user password gets hashed during save', async (assert) => {
    const user = new User()
    user.email = 'virk@adonisjs.com'
    user.password = 'secret'
    await user.save()
    assert.notEqual(user.password, 'secret')
  })

  test('ensure user can register', async () => {
    const inputs = {
      email: 'newuser@test.com',
      password: 'secret',
      password_confirmation: 'secret',
    }
    await supertest(BASE_URL).post('/register').send(inputs).expect(200)
  })

  test('ensure user cannot register with invalid password confirmation', async (assert) => {
    const inputs = {
      email: 'newuser2@test.com',
      password: 'secret',
      password_confirmation: 'invalidPassword',
    }
    const response = await await supertest(BASE_URL).post('/register').send(inputs)
    assert.notEqual(response.status, 200)
  })

  test('ensure user can login', async () => {
    const inputs = {
      email: 'virk@adonisjs.com',
      password: 'secret',
    }
    await supertest(BASE_URL).post('/login').send(inputs).expect(200)
  })

  test('ensure user cannot login with invalid password', async (assert) => {
    const inputs = {
      email: 'virk@adonisjs.com',
      password: 'invalidPassword',
    }
    const response = await await supertest(BASE_URL).post('/register').send(inputs)
    assert.notEqual(response.status, 200)
  })
})
