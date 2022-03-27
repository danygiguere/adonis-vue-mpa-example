import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SubscriptionsController {
  public async index({ view }: HttpContextContract) {
    return view.render('subscriptions/index')
  }
}
