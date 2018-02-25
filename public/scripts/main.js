import $ from 'jquery';
import xtag from '../libs/x-tag/x-tag-core';
import thumb from './thumb';
import '../styles/main.css';

xtag.register('x-praise', {
    lifecycle: {
        created: function () {
            this.innerHTML = "<div class='hand' style='right:300px;'>"
                + "<div class='finger first'></div>"
                + "<div class='finger two'></div>"
                + "<div class='finger third'></div>"
                + "<div class='finger four'></div>"
                + "<div class='finger five'></div>"
                + "</div>";
        }
    },
    accessors: {

    },
    methods: {

    },
    events: {

    }
});

//创建Jquery插件
function creatJqueryPugin(func) {
    $.fn.extend({
        "jqThumb": function (options) {
            return this.each(function () {//这里return返回的是 jQuery对象，为了支持链式调用
                var curThis = $(this);
                var thumb = new func(curThis[0], 0);
                thumb.addAction();
            });
        }
    });
}

//创建Jquery插件
creatJqueryPugin(thumb.Thumb);
$('.hand').jqThumb();


