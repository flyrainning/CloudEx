
$(function(){

	if (get('isEnable')=='true'){
		
		$("#refopen").prop('checked',true);
	
	}else{
		$("#refclose").prop('checked',true);
	}


	
	
	$('#user').val(get('user'));
	$('#pwd').val(get('pwd'));
	
	$("#btn_set").click(function(){
		set('user',$('#user').val());
		set('pwd',$('#pwd').val());
		
		ise=false;
		if ($("#refopen").prop('checked')) ise=true;
		set('isEnable',ise);
		
		showmessage('设置成功');
	
	});
	
	
	

	
});
function showmessage(msg){
	$("#msgdtl").html(msg);
	$("#showmessages").show("blind");
	// $( "#showmessages" ).toggle( "highlight" );

}

