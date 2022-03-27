import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, auth, response }: HttpContextContract) {
    const validationSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
        rules.maxLength(255),
      ]),
      password: schema.string({ trim: true }, [rules.confirmed()]),
    })
    const validatedData = await request.validate({
      schema: validationSchema,
    })
    const user = await User.create(validatedData)
    await auth.login(user)

    return response.status(200).send({
      message: "You've been registered",
    })
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all()
    const user = await auth.attempt(email, password)

    return response.status(200).send({
      user: user,
      message: "You've been logged in",
    })
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()

    return response.status(200).send({
      message: "You've been logged out",
    })
  }
}
