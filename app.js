import koa from 'koa';
import router from 'koa-simple-router';
import convert from 'koa-convert';
import path from 'path';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';
import bodyparser from 'koa-bodyparser';
import CONFIG from './config/config';
import initController from './controler/initController';

const app = new koa();
initController.init(app, router);
//const updateModel = require('./src/updateModel')

app.context.render = co.wrap(render({
    root: CONFIG.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));

app.use(bodyparser())



app.use(convert(serve(CONFIG.get('staticDir'))));


module.exports = app.listen(CONFIG.get('port'), () => {
    console.log('server started!');
})