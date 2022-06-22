import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    await Role.updateOrCreateMany(uniqueKey, [
      {
        name: 'admin',
        description: 'Access all recurses of the system',
      },
      {
        name: 'client',
        description: 'Access to shopping and product features  only',
      },
      {
        name: 'employee',
        description: 'Access to sales resources only',
      },
    ])
  }
}
