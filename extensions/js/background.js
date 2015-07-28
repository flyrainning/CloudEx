chrome.extension.onRequest.addListener(function(request, sender, sendResponse){

	if (request.act == "geturl"){

		var isEnable=localStorage['isEnable']?localStorage['isEnable']:'false';
		jscode='';
		if (isEnable){
		
			sn=get('sn');
			user=get('user');
			pwd=get('pwd');
			
			p={user:user,pwd:pwd,sn:sn,url:request.turl}
			//pt=JSON.stringify(p);
			
			
			
			$.ajax({
				url: CE_conf.server_url,
				type: 'POST',
				data:p,
				dataType: 'text',
			}).then(function(jscode){
				// 将正确信息返回content_script
				sendResponse({isEnable:isEnable,jscode:jscode});
			}, function(){
				// 将错误信息返回content_script
				sendResponse({isEnable:isEnable,jscode:''});
			});
    
		}else{
			sendResponse({isEnable:isEnable,jscode:jscode});
		}
		


	

       
	}else if (request.act == "isEnable"){
		var isEnable=localStorage['isEnable']?localStorage['isEnable']:'false';
	
		sendResponse({isEnable:isEnable});
		
		//localStorage.cango ='';
		//localStorage.par_p ='';
	
		//sendResponse({status:true});
	}else {
		sendResponse({}); 
	}     // snub them.
});


if (!localStorage['sn']) localStorage['sn']=randomString(16);
