import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import { UserRoute } from '@routes/users.route';
import { sendMailTo } from './mail.service';
import { DotFn, DotFnDefault } from '@/i18n/TranslationUtils';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Test-send-email', () => {
  it('justemail', async () => {
    let Dot = DotFnDefault();
    let crtVerifCode = '193210';
    let crtUserName = 'Tommy';
    let crtMailTitle = `[LafTools] ${Dot('m1932', '{0} is Your Verification Code', crtVerifCode)}`;
    let content =
      '<!DOCTYPE html>\n' +
      '<html>\n' +
      '<head>\n' +
      '  <meta charset="utf-8" />  \n' +
      '</head>\n' +
      '<body>\n' +
      `    <p>Dear ${crtUserName},</p><br/>\n` +
      '\n' +
      `    <p>${Dot(
        'm23091',
        'Thank you for using LafTools. To complete your request, please enter the following verification code in the application:',
      )}</p>\n` +
      '\n' +
      `      <div style=" font-size: 20px; color: #2672ec; margin: 27px 27px; ">${crtVerifCode}</div>\n  \n` +
      '\n' +
      `    <p>${Dot('m2308', 'If you did not request this code, you can safely ignore this email.')}</p>\n` +
      '\n<p></p>' +
      '<div style="color:gray;font-size:12px;"><p></p>    ' +
      '<p>Thanks and Regards,</p>\n' +
      '    <p>LafTools Team (https://laftools.cn)</p></div>\n' +
      '\n' +
      '</body>\n' +
      '</html>';
    let mail = {
      subject: crtMailTitle, // Subject line
      html: content, // plain text body
    };
    sendMailTo('work7z@outlook.com', mail);
  });
});
