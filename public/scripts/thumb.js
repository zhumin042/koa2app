import _ from './myUnderscore';
import axios from 'axios';

//父类
class PraseButton{
	//构造方法
	constructor(dom, num){
		this.dom = dom;
		this.num = num;
	}

	addAction(){
		this.dom.addEventListener('click',
			_._.throttle(
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

export default{
	Thumb
}