import indexModel from '../models/indexModel'

const indexController = {
    index(){
        return async(ctx,next)=>{
            ctx.body = await ctx.render('index.html',{
                title:"大拇指点赞"
            })
        }
    },
    update(ctx){
        return async(ctx, next)=>{
            const index_model = new indexModel(ctx);
            ctx.body = await index_model.updataNum();
        }
    }
}

export default indexController