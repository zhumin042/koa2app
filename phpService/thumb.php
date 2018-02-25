<?php
	class Thumb{
		private $userid;
		private $num;
		//构造函数
		function __construct($userid, $num){
			$this->userid = $userid;
			$this->num = $num;
		}

		public function setUserid($userid){
			$this->userid = $userid;
		}

		public function getUserid(){
			return $this->userid;
		}

		public function setNum($num){
			$this->$num = num;
		}

		public function getNum(){
			return $this->num;
		}
	}
?>
