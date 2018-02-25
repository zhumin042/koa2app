webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myUnderscore__ = __webpack_require__(9);

console.log(__WEBPACK_IMPORTED_MODULE_0__myUnderscore__["a" /* default */]);
//父类
class PraseButton{
	//构造方法
	constructor(dom, num){
		this.dom = dom;
		this.num = num;
	}

	addAction(){
		this.dom.addEventListener('click',
			__WEBPACK_IMPORTED_MODULE_0__myUnderscore__["a" /* default */].throttle(
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
					axios.post('/addCount', {
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

/***/ })

})