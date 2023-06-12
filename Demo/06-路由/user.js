const Router = require('@koa/router');
const router = new Router();

router.prefix('/user');


router.get("/get", (ctx, next) => {
    ctx.body = "欢迎访问个人页";
})

router.post("/add", (ctx, next) => {
    ctx.body = "欢迎添加个人页";
})

router.get("/delete", (ctx, next) => {
    ctx.body = "欢迎删除个人页";
})

// get的两种传参方式 
// localhost:3000/delete/1
router.get("/delete/:id", (ctx, next) => {
    console.log(ctx.params.id);
    ctx.body = "欢迎删除个人页";
})
// localhost:3000/delete?id=1
router.get("/delete", (ctx, next) => {
    console.log(ctx.query.id);
    ctx.body = "欢迎删除个人页";
})
// post传参 - 需要采用post进行测试
router.post("/add", (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = "欢迎添加个人页";
})
module.exports = router;