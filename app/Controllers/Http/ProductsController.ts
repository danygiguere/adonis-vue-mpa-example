import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    const products = await Product.all()
    return view.render('products/index', { products })
  }

  public async show({ view, params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    return view.render('products/show', { product })
  }
}
