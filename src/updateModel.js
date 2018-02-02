const rp = require('request-promise');
const conf = require('../config/conf');

class updateModel{
	construtor(){

	}

	updateCount(data){
		const options = {
			method: 'post',
			uri:conf.addCountUri,
			form:{
				'count':data.count
			},
			headers:{

			},
			json:true
		};
		return new Promise((resolve, reject)=>{
			rp(options).then(
				function(parsedBody){
					resolve(parsedBody);
				})
			.catch(function(err){
				console.error(err);
				reject(err);
			});
		})

		
	}
}

module.exports = updateModel;