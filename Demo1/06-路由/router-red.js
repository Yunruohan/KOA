const Router = require('@koa/router');
const router = new Router();
router.get("/", (ctx, next) => {
    ctx.redirect('/user')
    ctx.body = "欢迎访问首页";
})
router.get("/user", (ctx, next) => {
    ctx.body = "欢迎访问首页user";
})
module.exports = router;