//JavaScriptファイル
function inputNo(n){
	var nowNo = $("#no").val();
	var newNo = nowNo + n;
	$("#no").val(newNo);
}

function noClear(){
	$("#no").val('');
}