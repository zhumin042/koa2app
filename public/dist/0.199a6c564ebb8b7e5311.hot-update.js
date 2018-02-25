webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _ */
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

// export var _ = (function(){
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
  // return _;
// })();

console.log(_);


// export default {
//  _._
// }

/***/ })

})