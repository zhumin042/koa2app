'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _initController = require('./controler/initController');

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
_initController2.default.init(app, _koaSimpleRouter2.default);
//const updateModel = require('./src/updateModel')

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));

app.use((0, _koaBodyparser2.default)());

app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_config2.default.get('staticDir'))));

module.exports = app.listen(_config2.default.get('port'), function () {
    console.log('server started!');
});