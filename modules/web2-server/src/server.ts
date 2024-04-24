import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { MainRoute } from './routes/main.route';

ValidateEnv();

const app = new App([new MainRoute()]);

app.listen();
