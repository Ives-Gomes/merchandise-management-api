import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    response.ok('index')
  }

  public async show({ request, response }: HttpContextContract) {
    response.ok('show')
  }

  public async store({ request, response }: HttpContextContract) {
    response.ok('store')
  }

  public async update({ request, response }: HttpContextContract) {
    response.ok('update')
  }

  public async destroy({ request, response }: HttpContextContract) {
    response.ok('destroy')
  }
}
