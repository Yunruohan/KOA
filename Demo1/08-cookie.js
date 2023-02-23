const Router = require('@koa/router');
const Koa = require('koa');
const app = new Koa();
const router = new Router();

router.get('/user', (ctx, next) => {
    // cookie是客户端对一个用户以域名为基础的标识
    // 当用户在一个域下种植了这个cookie那么接下来的请求均会携带
    // 当会话结束cookie就死了
    // 设置
    ctx.cookies.set('username', 'sun', {
        maxAge: 60
    })
    ctx.body = '欢迎使用';
})