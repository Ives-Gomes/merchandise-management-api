import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  public async up() {
    this.schema.renameTable('adresses', 'addresses')
  }

  public async down() {
    this.schema.renameTable('addresses', 'adresses')
  }
}
