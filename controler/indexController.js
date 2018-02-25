'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModel = require('../models/indexModel');

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
    index: function index() {
        return async function (ctx, next) {
            ctx.body = await ctx.render('index.html', {
                title: "大拇指点赞"
            });
        };
    },
    update: function update(ctx) {
        return async function (ctx, next) {
            var index_model = new _indexModel2.default(ctx);
            ctx.body = await index_model.updataNum();
        };
    }
};

exports.default = indexController;