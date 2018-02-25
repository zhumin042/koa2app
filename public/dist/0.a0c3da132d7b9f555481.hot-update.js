webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myUnderscore__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myUnderscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__myUnderscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


console.log(__WEBPACK_IMPORTED_MODULE_0__myUnderscore___default.a);
//父类
class PraseButton{
	//构造方法
	constructor(dom, num){
		this.dom = dom;
		this.num = num;
	}

	addAction(){
		this.dom.addEventListener('click',
			__WEBPACK_IMPORTED_MODULE_0__myUnderscore___default.a._.throttle(
				()=>{
					this.num++;
					let childDom = null;
					if(this.num>10){
						this.num = 0;
						this.dom.style.background = "#E3DBCF";
						for(childDom of this.dom.children){
							childDom.style.background = "#E3DBCF";
						}
					}
					if(this.num == 1){
						this.dom.style.background = "#FFE4B5";
						for(childDom of this.dom.children){
							childDom.style.background = "#FFE4B5";
						}
					}
					console.log(this.num);
					__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/addCount', {
					    count: this.num
					  })
					  .then(function (response) {
					    console.log(response);
					  })
					  .catch(function (error) {
					    console.log(error);
					  });
				}, 500
			)

		);
	}


}

//子类
class Thumb extends PraseButton{
	constructor(dom, num){
		super(dom, num);
	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	Thumb
});

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__) {

"use strict";
/**
*事件稀释，防止在一段时间内频繁调用
*@param action {function} 需要调用的函数
*@param idle    {number}  空闲时间，（单位：毫秒）
*@return {function}   
*/
// window.debounce = function(action,idle){
//   var last
//   return function(){
//     var ctx = this, args = arguments
//     clearTimeout(last)
//     last = setTimeout(function(){
//         action.apply(ctx, args)
//     }, idle)
//   }
// };
	
/**
*函数节流，对于非常频繁触发的事件，设置一段时间的缓冲，在一段时间内只执行一次
*@param action {function} 需要调用的函数
*@param idle    {number}  节流时间，（单位：毫秒）
*@return {function}   
*/	 
// window.throttle = function(action, delay){
//   var last = 0;
//   return function(){
//     var curr = +new Date()
//     if (curr - last > delay){
//       action.apply(this, arguments)
//       last = curr 
//     }
//   }
// };

var _ = (function(){
  var _ = function(){};
  _.throttle = function(action, delay){
    console.log('myUnderscore');
    var last = 0;
    return function(){
      var curr = +new Date()
      if (curr - last > delay){
        action.apply(this, arguments)
        last = curr 
      }
    }
  };
  return _;
})();

console.log(_);

// export {_};
// export default {
//   _
// }

/***/ })

})