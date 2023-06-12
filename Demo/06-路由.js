const Router = require('@koa/router');
const Koa = require('koa');
const app = new Koa();
const router = new Router();

router.get('/user/', (ctx, next) => {
    ctx.body = '欢迎使用';
})