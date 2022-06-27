import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Redis from '@ioc:Adonis/Addons/Redis'

export default class TestRedisController {
  public async store({ response }: HttpContextContract) {
    const resultRedis = await Redis.set('nome', 'Ives Moreira Gomes')

    return response.ok({ resultRedis })
  }

  public async show({ response }: HttpContextContract) {
    const myName = await Redis.get('nome')

    return response.ok({ myName })
  }

  public async destroy({ response }: HttpContextContract) {
    await Redis.del('nome')

    return response.ok('Key deleted')
  }
}
