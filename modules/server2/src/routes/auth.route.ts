import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { URL_AUTH_GET_CAPTCHA, URL_AUTH_GET_SIGNIN, URL_AUTH_GET_SIGNOUT, URL_AUTH_GET_SIGNUP } from '@/web2share-copy/server_urls';
import { DotFn } from '@/i18n/TranslationUtils';
import { InfoFn } from '@/system/info';
import { SysResponse, TypeCaptchaResponse } from './_types';
import { CaptchaService } from '@/services/captcha.service';

export class AuthRoute implements Routes {
  public router = Router();
  public auth = new AuthController();
  public captcha = new CaptchaService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // TODO: using JWT token for authentication
    this.router.post(URL_AUTH_GET_SIGNIN, ValidationMiddleware(CreateUserDto), this.auth.logIn);
    this.router.post(URL_AUTH_GET_SIGNUP, ValidationMiddleware(CreateUserDto), this.auth.signUp);
    this.router.post(URL_AUTH_GET_SIGNOUT, AuthMiddleware, this.auth.logOut);
    this.router.get(URL_AUTH_GET_CAPTCHA, async (req, res) => {
      let p = await this.captcha.generate();
      res.send({
        content: p,
      } satisfies SysResponse<TypeCaptchaResponse>);
    });
  }
}
