'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/', function (ctx, next) {
                ctx.body = 'hello koa2';
            });

            _.get('/index', _indexController2.default.index());

            //讲PHP点赞接口封装并暴露给路由－－／addCount
            _.post('/addCount', _indexController2.default.update());
        }));
    }
};

exports.default = controllerInit;