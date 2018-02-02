<?php
 include 'dba.php';
 include 'thumb.php';

 $host = 'localhost';
 $name = 'root';
 $pwd = '';
 $database = 'test';

 $db = new dba($host, $name, $pwd, $database);

 //todo:get请求作处理
 $count = $_POST['count'];
 $sql = "UPDATE userinfo SET count='$count' WHERE userid = 1";
 $result = $db->query($sql);

 $db->closeCon();
 if($result == 1){
 	$v = array('success'=>true, 'msg'=>'点赞成功!');
 	$json = json_encode($v);
 	header("content-type:application/json");
 	echo $json;
 }else{
 	$v = array('success'=>false, 'msg'=>'点赞失败!');
 	$json = json_encode($v);
 	header("content-type:application/json");
 	echo $json;
 }



?>