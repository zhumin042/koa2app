webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myUnderscore__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myUnderscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__myUnderscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


console.log(__WEBPACK_IMPORTED_MODULE_0__myUnderscore__["default"]);
//父类
class PraseButton{
	//构造方法
	constructor(dom, num){
		this.dom = dom;
		this.num = num;
	}

	addAction(){
		this.dom.addEventListener('click',
			__WEBPACK_IMPORTED_MODULE_0__myUnderscore__["default"]._.throttle(
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
throw new Error("Module parse failed: Unexpected token (51:2)\nYou may need an appropriate loader to handle this file type.\n| console.log(_);\r\n| export default {\r\n|  _._\r\n| }");

/***/ })

})