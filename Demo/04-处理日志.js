const Koa = require('koa');
const Logger = require('koa-logger');
const app = new Koa();
app.use(Logger()); // 控制台可输出详细日志
app.use(async (ctx, next) => {
    try {
        await console.log('2');
    } catch (error) {
        throw new Error('error');
    }
})
app.listen(3000);