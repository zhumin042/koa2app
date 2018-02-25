const request = require('supertest');
const app = require('../../app.js');

describe('koa2测试', function(){
	it('首页返回值测试', function(done){
			//todo:想测试title 是否 正确
			request(app)
				.get('/index')
				.expect('Content-Type', /text\/html; charset=utf-8/)
				.expect(200)
				.end(function(err,res){
					if(err) throw done(err);
					done();
				});
	});

	it('点赞接口测试', function(done){
			request(app)
				.post('/addCount')
				.type('form')
				.send('count=100')
				.expect('Content-Type', /application\/json; charset=utf-8/)
				.expect(200)
				.end(function(err,res){
					if(err) throw done(err);
					done();
				});
	});
	
});