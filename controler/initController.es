import index from './indexController'

const controllerInit = {
    init(app, router){
        app.use(router(_=>{
            _.get('/',(ctx,next)=>{
                ctx.body = 'hello koa2';
            })

            _.get('/index',index.index())

            //讲PHP点赞接口封装并暴露给路由－－／addCount
            _.post('/addCount',index.update())

        }))
    }
}

export default controllerInit