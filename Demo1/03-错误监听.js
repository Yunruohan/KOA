const Koa = require('koa');
const app = new Koa();
// app.use(async (ctx, next) => {
//     throw new Error('error');
// })
// app.on('error', err => {
//     console.log("全局错误处理");
// })
app.use(async (ctx, next) => {
    try {
        await console.log('2');
    } catch (error) {
        throw new Error('error');
    }
})
app.listen(3000);