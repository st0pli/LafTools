import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { DotFn } from '@/i18n/TranslationUtils';
import { SysResponse } from './_types';
import { InfoFn } from '@/system/info';
import { URL_RELEASE_GET_ALL, URL_RELEASE_GET_INFO, URL_RELEASE_GET_LATEST } from '@/url';

// for host, example like "https://download.laftools.cn"
let usHost = process.env.PKG_DOWNLOAD_US_HOST;
let cnHost = process.env.PKG_DOWNLOAD_CN_HOST;

export class ReleaseRoute implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(URL_RELEASE_GET_LATEST, async (req, res) => {
      let Dot = DotFn(req);
      let info = InfoFn(req);
      res.send({
        content: 'this is URL_RELEASE_GET_LATEST',
      } satisfies SysResponse<any>);
    });
    this.router.get(URL_RELEASE_GET_ALL, async (req, res) => {
      let Dot = DotFn(req);
      let info = InfoFn(req);
      res.send({
        content: 'this is URL_RELEASE_GET_ALL',
      } satisfies SysResponse<any>);
    });
    this.router.get(URL_RELEASE_GET_INFO, async (req, res) => {
      let Dot = DotFn(req);
      let info = InfoFn(req);
      res.send({
        content: 'this is URL_RELEASE_GET_INFO',
      } satisfies SysResponse<any>);
    });
  }
}
