import dao from '@/dao';
import { S2User, S2UserPurchaseItem } from '@/dao/model';
import { logger } from '@/utils/logger';
import _ from 'lodash';

export let sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async () => {
  try {
    logger.info('Migrating database...');
    let daoRef = await dao();
    // handling users
    let [allUsers] = await daoRef.db_work7z.query('select * from user');
    for (let eachUser of allUsers) {
      let userID = eachUser['ID'];
      let USER_NAME = eachUser['USER_NAME'];
      let USER_PW_MD5 = eachUser['USER_PW_MD5'];
      let matchedUsers = await S2User.findAll({
        where: {
          name: USER_NAME,
        },
      });
      if (_.isEmpty(matchedUsers)) {
        logger.info('Migrating user: ' + USER_NAME);
        await S2User.create({
          id: userID,
          name: USER_NAME,
          email: eachUser['EMAIL'],
          password: USER_PW_MD5,
          phoneNumber: '', // TODO: provide phoneNumber verification method
          createdAt: eachUser['CREATE_DATE'],
        });
      } else {
        logger.debug('User already exists: ' + USER_NAME);
      }
    }
    // handling orders
    let [allOrders] = await daoRef.db_work7z.query('select  ID,USER_ID, PAY_DETAIL from USER_ORDER_LIST uol where 1=1 and IS_PAID =1');
    for (let eachOrder of allOrders) {
      let pCtn = await S2UserPurchaseItem.count({
        where: {
          orderCode: eachOrder['ID'],
          userId: eachOrder['USER_ID'],
        },
      });
      if (pCtn > 0) {
        logger.debug('Order already exists: ' + eachOrder['ID']);
        continue;
      } else {
        //
      }
    }
  } catch (e) {
    logger.error('Error migrating database: ' + e);
  }
};
