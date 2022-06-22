import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

import { v4 as uuidv4 } from 'uuid'

import Address from './Address'
import Purchase from './Purchase'
import Role from './Role'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public secureId: string

  @column()
  public name: string

  @column()
  public cpf: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Address)
  public addresses: HasMany<typeof Address>

  @hasMany(() => Purchase)
  public purchases: HasMany<typeof Purchase>

  @manyToMany(() => Role, {
    pivotTable: 'user_roles',
  })
  public roles: ManyToMany<typeof Role>
}
