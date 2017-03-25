var Index = {
	grid: function(userType) {
		var url = "json/student/index.json";
		if(userType == 'T0001') {
			url = "json/teacher/index.json";
		}
		mui.getJSON(url, {}, function(result) {
			var html = '';
			for(var key in result) {
				var obj = result[key];
				html += '<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">';
				html += '<a id="' + obj.id + '" href="javascript:void(0)">';
				html += '<span class="mui-icon ' + obj.icon + '"></span>';
				html += '<div class="mui-media-body">' + obj.name + '</div>';
				html += '</a>';
				html += '</li>';
			}
			$("#gridMenus").html(html);
			
			if(userType == 'T0001'){
				// tap为mui封装的单击事件
				document.getElementById("teacher-class").addEventListener('tap', function() {
					//var sessionUser = sessionStorage.getItem(session_.user_info);
					var sessionUser = localStorage.getItem(session_.user_info);
					console.log('teacher open class:' + sessionUser);
					if(sessionUser != null) {
						mui.openWindow({ // 教师课程列表
							url: 'htm/teacher/lesson_list.html',
							id: 'w_class_list'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/login_teacher.html',
							id: 'w_login'
						});
					}
				})
		
				// 签到查看 
				document.getElementById("sign").addEventListener('tap', function() {
					var sessionUser = localStorage.getItem(session_.user_info);
					if(sessionUser != null) {
						mui.openWindow({
							url: 'htm/sign/lesson_list.html',
							id: 'w_sign_lesson_list'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/login_teacher.html',
							id: 'w_login'
						});
					}
				})
		
				// 随机点人 
				document.getElementById("attendance").addEventListener('tap', function() {
					//			localStorage.setItem("lcode" , "l1");
					var sessionUser = localStorage.getItem(session_.user_info);
					if(sessionUser != null) {
						mui.openWindow({
							url: 'htm/rollcall/class_list.html',
							id: 'w_question_lesson_list'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/login_teacher.html',
							id: 'w_login'
						});
					}
				})
		
				// 出题
				document.getElementById("examination").addEventListener('tap', function() {
					var sessionUser = localStorage.getItem(session_.user_info);
					if(sessionUser != null) {
						mui.openWindow({
							url: 'htm/question/lesson_list.html',
							id: 'w_question_lesson_list'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/login_teacher.html',
							id: 'w_login'
						});
					}
				})
		
				// 查看答题
				document.getElementById("answer").addEventListener('tap', function() {
					var sessionUser = localStorage.getItem(session_.user_info);
					if(sessionUser != null) {
						mui.openWindow({
							url: 'htm/inspection/lesson_list.html',
							id: 'w_inspection_lesson_list'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/login_teacher.html',
							id: 'w_login'
						});
					}
				})
				// 查看提问
				document.getElementById("question").addEventListener('tap', function() {
					var sessionUser = localStorage.getItem(session_.user_info);
					if(sessionUser != null) {
						mui.openWindow({
							url: '/htm/teacher/faq.html',
							id: 'w_inspection_lesson_list'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/login_teacher.html',
							id: 'w_login'
						});
					}
				})
			}else{
				// 学生签到 
				document.getElementById("student-sign").addEventListener('tap', function() {
					var sessionUser = localStorage.getItem(session_.user_info);
					if(sessionUser != null) {
						mui.openWindow({
							url: 'htm/student/sign.html',
							id: 'w_student_sign'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/regist_student.html',
							id: 'w_login'
						});
					}
				})
				// 学生答题 
				document.getElementById("student-question-answer").addEventListener('tap', function() {
					var sessionUser = localStorage.getItem(session_.user_info);
					if(sessionUser != null) {
						mui.openWindow({
							url: 'htm/student/schedule_list.html',
							id: 'w_student_schedule_list'
						});
					} else {
						mui.openWindow({ // 登录
							url: 'htm/reg/regist_student.html',  
							id: 'w_login'
						});
					}
				})
			}
			
			
			
			
			
		});
	}
};