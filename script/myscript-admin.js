var contextPath="https://69txog4rl8.execute-api.ap-south-1.amazonaws.com/dev/rthsv/"
function uploadStudentData(obj){
	
	$('#lodaingModal').modal('show');
	var str = "";
	$.each($('#jsonDataUpload').val().split(/\n/), function(i, line){
		   if(line && line.length){
			  str = str + line.trim();
		   }
		});	
	var jsonStr = '{"classtoUpload":"'+$("#upladClass").val()+'","jsonDataUpload":'+str+'}';
	$.ajax({
	  type: 'POST',
	  data: jsonStr,
	  url: contextPath +"uploadStudentDetails",
	  success: function (response1) { 
			alert(response1)
		}
});	
	return false;
	
}