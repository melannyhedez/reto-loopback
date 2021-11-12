import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMongoDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(Producto, dataSource);
  }
}
