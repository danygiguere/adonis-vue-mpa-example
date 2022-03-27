/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.register')
Route.post('/logout', 'AuthController.logout')

Route.get('/', 'PagesController.welcome')
Route.get('/account', 'PagesController.account')
Route.get('/login', 'PagesController.login')
Route.get('/register', 'PagesController.register')
Route.get('/cart', 'PagesController.cart')

Route.resource('products', 'ProductsController').except(['index'])
Route.resource('subscriptions', 'SubscriptionsController')

Route.group(() => {
  Route.resource('users', 'UsersController').only(['edit'])
  Route.get('/users/:id/orders', 'OrdersController.index')
  Route.get('/users/:id/subscriptions', 'SubscriptionsController.index')
}).middleware('auth')
