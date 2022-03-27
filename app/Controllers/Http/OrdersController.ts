import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OrdersController {
  public async index({ view }: HttpContextContract) {
    return view.render('orders/index')
  }
}
