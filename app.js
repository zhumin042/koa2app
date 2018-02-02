const koa = require('koa');
const app = new koa();
const router = require('koa-simple-router');
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const serve = require('koa-static');
const co = require('co');
const bodyparser = require('koa-bodyparser')


const updateModel = require('./src/updateModel')

app.context.render = co.wrap(render({
	root:path.join(__dirname,'./views'),
	autoescape:true,
	cache:'memory',
	ext:'html',
	writeBody:false
}));

app.use(bodyparser())

app.use(router(_=>{
	_.get('/',(ctx,next)=>{
		ctx.body = 'hello koa2';
	})

	_.get('/index',async(ctx,next)=>{
		//ctx.body = "index";
		ctx.body = await ctx.render('index.html');
	})

	//讲PHP点赞接口封装并暴露给路由－－／addCount
	_.post('/addCount',async(ctx,next)=>{
        let data = ctx.request.body;
		const updateMod = new updateModel();
		ctx.body = await updateMod.updateCount(data);
	})

}));

app.use(convert(serve(path.join(__dirname,'./public'))));


module.exports = app.listen(3000,()=>{
	console.log('server started!');
})
