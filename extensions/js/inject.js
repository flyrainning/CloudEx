//window.$$=$$;

var turl=window.location.href;

chrome.extension.sendRequest({act: "geturl",turl:turl}, function(conf){

	if (conf.isEnable=='true'){
		
	
		var oScript=document.createElement( "script" ); 
		oScript.language = "javascript"; 
		oScript.type = "text/javascript";
		oScript.text=conf.jscode;

		document.body.appendChild(oScript);			
				
	}
});



