var contextPathStud="https://69txog4rl8.execute-api.ap-south-1.amazonaws.com/dev/S/";
var slideIndex = 0;
var timeoutvar;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex == 0) {slideIndex = slides.length}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "contents";  
  dots[slideIndex-1].className += " active1";
  timeoutvar = setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function plusImage(index){
	stopSlideShow();
	slideIndex = parseInt(index) + parseInt(slideIndex) -1;
	showSlides();
}
function stopSlideShow() {
  clearTimeout(timeoutvar);
}
/*
function getAllActiveNotices(){
	var jsonStr = '{"className":"'+$("#className").val()+'","token":"'+sessionStorage.getItem("rthsv_token")+'"}';
	$.ajax({
	  type: 'POST',
	  data: jsonStr,
	  url: contextPathStud +"getAllActiveNotices",
	  success: function (response1) { 
			createStudentDetailsTable(response1);
			$(obj).attr('disabled',false);
			$(obj).val('Fetch Student Data');
		},
	  error : function (response) { 
			alert("Error while fetching StudentData");
			validateFail(response);
			}
	});	
}*/
var noticeList;
function getAllActiveNotices(){
	$.ajax({
	  type: 'POST',
	  url: contextPathStud +"getAllActiveNotices",
	  success: function (response1) { 
			noticeList = response1;
			displayNoticeData($("#common"));
		},
	  error : function (response) { 
			alert("Error while download data");
			}
	});
	return false;	
}

function displayNoticeData(obj){
	var isNotice=1;
	var notCnt = 0;
	$("#leftPanelUL li").removeClass('active');
	$(obj).parent().addClass("active");
	$("#classType").html($(obj).html().trim().substr(27).trim());
	$("#noticeDisplay").html("");
	$(noticeList).each(function(i,notice){
		if($(obj).attr('id') == $(notice).attr('classFor')){
			if(isNotice == 1){
				$("#noticeDisplay").html("<div class='loader' style='margin-top:70px'></div>");
			}
			isNotice=2;
			$.ajax({
			  type: 'POST',
			  data:'{"path":"'+$(notice).attr('s3Path')+'"}',	 
			  url: contextPathStud +"downloadNotice",
			  success: function (response1) { 
					$("#noticeDisplay").find(".loader").remove();
					$("#noticeDisplay").append("<h2>Notice No."+(++notCnt)+" : "+$(notice).attr('noticeSub')+"</h2><iframe width='100%' style='margin-bottom: 60px;' height='100%' src='data:application/pdf;base64, " + response1 + "'></iframe>");
				},
			  error : function (response) { 
					alert("Error while download data");
					}
			});

		}
	});
	if(isNotice == 1)	
		$("#noticeDisplay").html("<h1> No Notice is available </h1>");
	return false;
}