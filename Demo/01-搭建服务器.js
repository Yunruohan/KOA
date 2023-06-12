const Koa = require('koa');
const app = new Koa();
// ctx是上下文
app.use(async ctx => {
    ctx.body = "hello koa"
})
app.listen(3000)