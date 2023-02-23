const Koa = require('koa');
const app = new Koa();
const routerRed = require('./06-路由/router-red');
app.use(routerRed.routes());
routerRed.allowedMethods();
app.listen(3000)