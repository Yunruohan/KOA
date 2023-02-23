const Koa = require('koa');
const Logger = require('koa-logger');
const app = new Koa();
app.use(Logger()); // 控制台可输出详细日志
app.use(async (ctx, next) => {
    ctx.throw(401, 'error');
})
app.listen(3000);