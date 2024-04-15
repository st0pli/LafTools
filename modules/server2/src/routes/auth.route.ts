import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class AuthRoute implements Routes {
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // TODO: using JWT token for authentication
    this.router.post('/sign-in', ValidationMiddleware(CreateUserDto), this.auth.logIn);
    this.router.post('/sign-up', ValidationMiddleware(CreateUserDto), this.auth.signUp);
    this.router.post('/sign-out', AuthMiddleware, this.auth.logOut);
  }
}
