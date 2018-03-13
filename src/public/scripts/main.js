import xtag from '../libs/x-tag/x-tag-core';

import PraiseButton from "./thumb";
const f = new PraiseButton();

xtag.register('x-praise', {
    lifecycle: {
        created: function () {
            this.innerHTML = "<div class='hand' id='thumb' style='right:300px;'>"
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
        praise:function(){
            let _this = this;
            f.addAction();
            //css样式变化
        }
    },
    events: {
        click:function(e){
            let _this = this;
            if(e.targe.id == 'thumb'){
                _this.praise();
            }
        }
    }
});

//创建Jquery插件
// function creatJqueryPugin(func) {
//     $.fn.extend({
//         "jqThumb": function (options) {
//             return this.each(function () {//这里return返回的是 jQuery对象，为了支持链式调用
//                 var curThis = $(this);
//                 var thumb = new func(curThis[0], 0);
//                 thumb.addAction();
//             });
//         }
//     });
// }

// //创建Jquery插件
// creatJqueryPugin(thumb.Thumb);
// $('.hand').jqThumb();


