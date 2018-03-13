import rp from 'request-promise';
import CONFIG from '../config/config';

class indexModle{
    constructor(ctx){
        //console.log(ctx);
        this.ctx = ctx;
    }
    updataNum(){
        //console.log(this.ctx.request);
        const options = {
            uri: CONFIG.get('phpUrl'),
            //method: 'GET'
            method: 'post',
			form:{
				'count':10
			},
			headers:{

			},
			json:true
        }
        return new Promise(
            (resolve, reject)=>{
                rp(options).then(result=>{
                    console.log(result);
                    //const info = JSON.parse(result);
                    const info = result;
                    if(info){
                        resolve({data:info});
                    }else{
                        reject({});
                    }
                })
            }
        );
    }
}
export default indexModle