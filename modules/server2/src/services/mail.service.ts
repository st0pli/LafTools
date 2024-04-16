import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Service } from 'typedi';
import { SECRET_KEY } from '@config';
import { DB } from '@database';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/httpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { Test2 } from '@interfaces/users.interface';
import { isDevEnv } from '@/web2share-copy/env';
import path from 'path';
import { randomUUID } from 'crypto';
import { readFileSync } from 'fs';
import dao from '@/dao';
import { TypeCaptchaResponse } from '@/web2share-copy/server_constants';
import nodemailer from 'nodemailer';
import { CommonHandlePass } from '@/routes/auth.route';

@Service()
export class MailService {
  public async sendMailcheck(title: string, content: string, mailTo: string): Promise<{}> {
    return {};
  }
}

// async..await is not allowed in global scope, must use a wrapper
export async function sendMailTo(
  mailTo: string,
  mailContent: {
    subject: string;
    html: string;
  },
) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  };

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'gz-smtp.qcloudmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'LafTools Team(NoReply)' + ' <noreply@noreply.codegen.cc>', // sender address
    to: mailTo, // list of receivers
    subject: mailContent.subject, // Subject line
    html: mailContent.html, // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
