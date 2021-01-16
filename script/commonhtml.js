var adminLeftPanel = '<div class="wm-student-dashboard-nav">'+
						'<div class="wm-student-nav">'+
							'<div class="wm-student-nav-text">'+
								'<a href="#" style="cursor: context-menu;">'+
									'<i class="wmicon-three" style="font-size:18px">&nbsp;Admin Settings</i>'+
								'</a>'+
							'</div>'+
							'<ul id="leftPanelUL">'+
								'<li>'+
									'<a href="#" data-page="admin-Info.html" onClick=openAdminPage(this)>'+
										'<i class="wmicon-avatar"></i>'+
										'Student Information'+
									'</a>'+
								'</li>'+
								'<li>'+
									'<a href="#" data-page="admin-uploaddata.html" onClick=openAdminPage(this)>'+
										'<i class="wmicon-book"></i>'+
										'Upload Student Info'+
									'</a>'+
								'</li>'+
								'<li>'+
									'<a href="#" data-page="admin-sendNotification.html" onClick=openAdminPage(this)>'+
										'<i class="wmicon-favorite"></i>'+
										'Send Notification'+
									'</a>'+
								'</li>'+
								'<li>'+
									'<a href="#" data-page="admin-uploadNotices.html" onClick=openAdminPage(this)>'+
										'<i class="wmicon-paper"></i>'+
										'Upload Notices'+
									'</a>'+
								'</li>'+
								'<li>'+
									'<a href="#" data-page="admin-changepassword.html" onClick=openAdminPage(this)>'+
										'<i class="wmicon-three"></i>'+
										'Change Password'+
									'</a>'+
								'</li>'+
								'<li>'+
									'<a href="admin-login.html">'+
										'<i class="wmicon-arrow"></i>'+
										'Logout'+
									'</a>'+
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>';
$("#adminLeftPanel").html(adminLeftPanel);	
$("#leftPanelUL > li").find('[data-page="'+localStorage.getItem('act')+'"]').parent().addClass("active")
function openAdminPage(obj){
	if($("#adminLeftPanel").length != 0){
		localStorage.setItem('act',$(obj).attr('data-page'));
		location.href=$(obj).attr('data-page');	
	}
}	