function anticc_checkon(val)
{
	var data = 'status=' + val;
	functoin_checkon('?c=anticc&a=anticcCheckOn',data);
}

function anticc_add()
{
	var mode = $("#mode").val();
	var request = $("#request").val();
	if (request == "") {
		return layer.alert("请求次数不能为空",{icon:'error'});
	}
	var second = $("#second").val();
	if (second == "") {
		return layer.alert("请求时间不能为空",{icon:'error'});
	}
	var wl;
	if ($("#wl").attr('checked') =='checked') {
		wl = 1; 
	}else{
		wl = 0;
	}
	$.ajax({
		   type: "POST",
		   url: '?c=anticc&a=anticcAdd',
		   data: "mode=" + mode + "&request=" + request + "&second=" + second + "&wl=" + wl,
		   success: function(msg){
		   		if(msg != "成功") { 
		     		return layer.alert(msg,{icon:'success'});
		   		}
		   },
		   complete: function(msg){
			   
				show_sync();
				window.location.reload();
		}
	});
	
}
function anticc_del(id)
{
	if (confirm("确定要删除?") != true) {
		return;
	}
	$.ajax({
		type:'POST',
		url:'?c=anticc&a=anticcDel',
		data:'id=' + id,
		success:function(msg) {
			if (msg != "成功") {
				return layer.alert(msg,{icon:'success'});
			}
			window.location.reload();
		},
		complete: function(msg){
			show_sync();
		}
	});
}