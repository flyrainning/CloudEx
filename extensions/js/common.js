function log(msg){
	console.log(msg);
}


function trim(a) {
    //return a.replace(/^\s*|\s*$/g, "")
    var v='';
    if (typeof(a)=='string') {
    	v=a.trim();
    }else{
    	v=a;
    }
    return v;
}
function toBool(a) {
    return ("true" === a) ? true : false
}
function id(a) {
    return document.getElementById(a)
};
function set(k,v){
	localStorage[k]=v;
}

function get(k){
	return localStorage[k]?localStorage[k]:'';
}
function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

