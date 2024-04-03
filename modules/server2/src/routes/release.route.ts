import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { DotFn } from '@/i18n/TranslationUtils';
import { SysResponse } from './_types';
import { InfoFn } from '@/system/info';

// for host, example like "https://download.laftools.cn"
let usHost = process.env.PKG_DOWNLOAD_US_HOST;
let cnHost = process.env.PKG_DOWNLOAD_CN_HOST;

export class ReleaseRoute implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    let URL_RELEASE = '/release';
    this.router.get(`${URL_RELEASE}/test`, async (req, res) => {
      let Dot = DotFn(req);
      let info = InfoFn(req);
      res.send({
        content: 'just test',
      } satisfies SysResponse<any>);
    });
    this.router.get(`${URL_RELEASE}/get-new-versions`, async (req, res) => {
      let Dot = DotFn(req);
      let info = InfoFn(req);

      return res.send({
        content: Dot('df-Lww5', 'new release'),
      } satisfies SysResponse<any>);
    });
  }
}
