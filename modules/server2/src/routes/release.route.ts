import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { DotFn } from '@/i18n/TranslationUtils';
import { SysResponse } from './_types';
import { InfoFn } from '@/system/info';

export class ReleaseRoute implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // https://github.com/work7z/LafTools/releases/download/v2.1.47-beta/LafTools-v2.1.47-beta-darwin-x64.tar.gz
    let URL_RELEASE = '/release';
    this.router.get(`${URL_RELEASE}/test`, async (req, res) => {
      let Dot = DotFn(req);
      let info = InfoFn(req);
      res.send({
        content: 'just test',
      } satisfies SysResponse<any>);
    });
    this.router.get(`${URL_RELEASE}/new-updates`, async (req, res) => {
      let Dot = DotFn(req);
      let info = InfoFn(req);
      return res.send({
        content: Dot('df-Lww5', 'new release'),
      } satisfies SysResponse<any>);
    });
  }
}
