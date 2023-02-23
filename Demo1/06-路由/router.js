const Router = require('@koa/router');
const router = new Router();
router.get("/", (ctx, next) => {
    ctx.body = "欢迎访问首页";
})

module.exports = router;