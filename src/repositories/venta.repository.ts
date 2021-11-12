import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMongoDataSource} from '../datasources';
import {Venta, VentaRelations} from '../models';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.id,
  VentaRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(Venta, dataSource);
  }
}
