'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var indexModle = function () {
    function indexModle(ctx) {
        _classCallCheck(this, indexModle);

        //console.log(ctx);
        this.ctx = ctx;
    }

    _createClass(indexModle, [{
        key: 'updataNum',
        value: function updataNum() {
            //console.log(this.ctx.request);
            var options = {
                uri: _config2.default.get('phpUrl'),
                //method: 'GET'
                method: 'post',
                form: {
                    'count': 10
                },
                headers: {},
                json: true
            };
            return new Promise(function (resolve, reject) {
                (0, _requestPromise2.default)(options).then(function (result) {
                    console.log(result);
                    //const info = JSON.parse(result);
                    var info = result;
                    if (info) {
                        resolve({ data: info });
                    } else {
                        reject({});
                    }
                });
            });
        }
    }]);

    return indexModle;
}();

exports.default = indexModle;