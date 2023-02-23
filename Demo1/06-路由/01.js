const Koa = require('koa');
const app = new Koa();
const route = require('./router');
const user = require('./user');
app.use(route.routes());
route.allowedMethods();

app.use(user.routes());
user.allowedMethods();

app.listen(3000, () => {
    console.log('server is running on 3000');
});