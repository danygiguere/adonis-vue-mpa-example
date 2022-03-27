import test from 'japa'
//import { JSDOM } from 'jsdom'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Welcome', () => {
  test('ensure welcome page works', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200)

    assert.equal(text, '')
    // const { document } = new JSDOM(text).window
    // const title = document.querySelector('.title')
    // assert.exists(title)
    //assert.equal(title!.textContent!.trim(), 'Our Products');
  })
})
