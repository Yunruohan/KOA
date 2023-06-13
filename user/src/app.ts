import Koa from 'koa';
const app = new Koa();
import route from './routers/index';
app.use(route.routes());
route.allowedMethods();

app.listen(3001, () => {
    console.log('server is running on 3001');
});