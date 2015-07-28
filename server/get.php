<?php
define('CloudEx',true);

function set_file_conf($name, $value='') {
	$filename=$name.'_conf.php';
	file_exists($filename) or touch($filename);
	file_put_contents($filename, '<?php return '.var_export($value, TRUE).'; ?>');
}

function get_file_conf($name,$v=''){
	$filename=$name.'_conf.php';
	return file_exists($filename)? require($filename):$v;

}

function getp($k){
	return isset($_POST[$k])?$_POST[$k]:'';
}

function htmltojs($val,$htmls){
	$htmls=str_replace("'", "\'", $htmls);
	$order = array("\r\n", "\n", "\r");   
	$replace = "'; $val+='";
	$htmls=str_replace($order, $replace, $htmls);
	$htmls="; var $val; $val='".$htmls."';";
	return $htmls;
}


$user=getp('user');
$pwd=getp('pwd');
$sn=getp('sn');
$url=getp('url');


//登录或者sn验证，修改为你需要的验证方式

$chked=false;
$users=get_file_conf('user',array());
if (isset($users[$user]) &&($users[$user]==$pwd)) $chked=true;

if (!$chked) die();

//验证结束

//处理网址
$purl = parse_url($url);
$bhost=base64_encode($purl['host']);
$bpath=base64_encode($purl['path']);

$bfile='storage/'.$bhost.'/'.$bpath;

if (file_exists($bfile)) {
	require $bfile;

}



?>
