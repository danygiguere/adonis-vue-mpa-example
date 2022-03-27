import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class PagesController {
  public async welcome({ view }: HttpContextContract) {
    const products = JSON.stringify(await Product.all())

    return view.render('welcome', { products })
  }

  public async account({ auth, response }: HttpContextContract) {
    const user = await auth.user
    response.redirect('/users/' + user?.id + '/edit')
  }

  public register({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public cart({ view }: HttpContextContract) {
    return view.render('cart')
  }
}
