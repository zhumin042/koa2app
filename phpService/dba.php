<?php
	class dba{
		//构造函数
		function __construct($host = '', $name = '', $pwd = '', $database = ''){
			$this->host = $host;
			$this->name = $name;
			$this->pwd = $pwd;
			$this->database = $database;
		}

		private $host = "";//服务器地址
		private $name = "";//数据库用户名
		private $pwd = "";//密码
		private $database = "";//数据库名称
		private $con = null;

		//获取数据库链接
		function getCon(){
			if($this->con == null){
				$this->con = mysql_connect($this->host, $this->name, $this->pwd);
				if(!$this->con){
					die('could not connect db!');
				}
			}
			return $this->con;
		}

		//执行SQL语句,返回结果集
		public function query($sql){
			mysql_select_db($this->database, $this->getCon());
			$result = mysql_query($sql);
			return $result;
		}

		//关闭数据库连接
		function closeCon(){
			mysql_close($this->con);
			$this->con = null;
		}


	} 
?>