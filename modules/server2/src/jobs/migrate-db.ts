import dao from '@/dao';
import { logger } from '@/utils/logger';

export default async () => {
  logger.info('Migrating database...');
  let daoRef = await dao();
};
