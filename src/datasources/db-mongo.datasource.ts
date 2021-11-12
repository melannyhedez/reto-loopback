import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbMongo',
  connector: 'mongodb',
  url: 'mongodb+srv://gymdbuser:GymAppDBUser2929@cluster0.docrv.mongodb.net/gymdb?retryWrites=true&w=majority',
  host: '0.0.0.0',
  port: 0,
  user: 'gymdbuser',
  password: 'GymAppDBUser2929',
  database: 'gymdb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbMongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbMongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbMongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
