// 测试服务
const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

router.get('/test', (ctx) => {
  ctx.body="我是测试一下";
})
app.use(router.routes());

app.listen(3000);