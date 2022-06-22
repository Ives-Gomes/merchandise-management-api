import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { v4 as uuidv4 } from 'uuid'

import User from 'App/Models/User'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    const searchKeyAdmin = { email: 'admin@email.com' }
    const userAdmin = await User.updateOrCreate(searchKeyAdmin, {
      secureId: uuidv4(),
      name: 'Admin',
      cpf: '000.000.000-00',
      email: 'admin@email.com',
      password: 'secret',
    })
    const roleAdmin = await Role.findBy('name', 'admin')
    if (roleAdmin) await userAdmin.related('roles').attach([roleAdmin.id])

    const searchKeyClient = { email: 'client@email.com' }
    const userClient = await User.updateOrCreate(searchKeyClient, {
      secureId: uuidv4(),
      name: 'Client',
      cpf: '000.000.000-01',
      email: 'client@email.com',
      password: 'secret',
    })
    const roleClient = await Role.findBy('name', 'client')
    if (roleClient) await userClient.related('roles').attach([roleClient.id])

    const searchKeyEmployer = { email: 'employer@email.com' }
    const userEmployer = await User.updateOrCreate(searchKeyEmployer, {
      secureId: uuidv4(),
      name: 'Employer',
      cpf: '000.000.000-02',
      email: 'employer@email.com',
      password: 'secret',
    })
    const roleEmployer = await Role.findBy('name', 'employee')
    if (roleEmployer) await userEmployer.related('roles').attach([roleEmployer.id])
  }
}
