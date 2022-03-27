import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async edit({ view }: HttpContextContract) {
    return view.render('users/edit')
  }
}
