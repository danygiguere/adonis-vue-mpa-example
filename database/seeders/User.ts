import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserFactory } from 'Database/factories'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'johndoe@test.com',
        password: 'secret',
      },
    ])
    await UserFactory.createMany(4)
  }
}
