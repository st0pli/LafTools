import { App } from '@/app';
import { MainRoute } from './routes/main.route';

console.log('Hello, web2-server!');

const app = new App([new MainRoute()]);

app.listen();
