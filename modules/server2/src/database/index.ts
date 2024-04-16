import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModelGenerator from '@/models/test.model';
import { logger } from '@utils/logger';
import { TestFnModelGenerator, TestFnModel } from '@/models/oldjava.model';

export let newSeq = (databaseName: string): Sequelize.Sequelize => {
  return new Sequelize.Sequelize(databaseName, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    port: parseInt(DB_PORT + '', 10),
    timezone: '+09:00',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      underscored: true,
      freezeTableName: true,
    },
    pool: {
      min: 0,
      max: 5,
    },
    logQueryParameters: NODE_ENV === 'development',
    logging: (query, time) => {
      logger.info(time + 'ms' + ' ' + query);
    },
    benchmark: true,
  });
};

const tmp_work7z_sequelize = newSeq('work7z');
const tmp_s2_sequelize = newSeq('s2');

tmp_work7z_sequelize.authenticate();

export const DB = {
  Users2: UserModelGenerator(tmp_work7z_sequelize),
  TestFN: TestFnModelGenerator(tmp_work7z_sequelize),
  sequelize: tmp_work7z_sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export let work7z_sequelize = tmp_work7z_sequelize;
export let s2_sequelize = tmp_s2_sequelize;
