import Factory from '@ioc:Adonis/Lucid/Factory'
import Hash from '@ioc:Adonis/Core/Hash'
import Product from 'App/Models/Product'
import User from 'App/Models/User'

export const ProductFactory = Factory.define(Product, ({ faker }) => {
  return {
    title: faker.commerce.product(),
    price: faker.commerce.price(),
  }
}).build()

export const UserFactory = Factory.define(User, async ({ faker }) => {
  return {
    email: faker.internet.email(),
    password: await Hash.make(faker.internet.password()),
  }
}).build()
