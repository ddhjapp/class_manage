/**
 * 底部菜单点击事件
 */
/**
 * 底部菜单-首页
 */
document.getElementById("nav-index").addEventListener("tap", function() {
	var sessionUser = localStorage.getItem(session_.user_info);
	if(sessionUser != null) {
		mui.openWindow({
			url: '/index.html',
			id: 'w_app_home'
		});
	} else {
		mui.openWindow({ // 登录
			url: '/htm/reg/login.html',
			id: 'w_login'
		});
	}
});

/**
 * 底部菜单-课程表
 */
document.getElementById("nav-course").addEventListener("tap", function() {
	var sessionUser = localStorage.getItem(session_.user_info);
	if(sessionUser != null) {
		var userInfo = JSON.parse(sessionUser);
		if(userInfo.data.type == 'T0001') {
			mui.openWindow({
				url: '/htm/teacher/syllabus.html',
				id: 'teacher_syllabus'
			});
		} else {
			mui.openWindow({
				url: '/htm/student/syllabus.html',
				id: 'student_syllabus'
			});
		}
	} else {
		mui.openWindow({ // 登录
			url: '/htm/reg/login.html',
			id: 'w_login'
		});
	}
});
/**
 * 底部菜单-答疑
 */
document.getElementById("nav-faq").addEventListener("tap", function() {
	var sessionUser = localStorage.getItem(session_.user_info);
	if(sessionUser != null) {
		var userInfo = JSON.parse(sessionUser);
		if(userInfo.data.type == 'T0001') {
			mui.openWindow({
				url: '/htm/teacher/faq.html',
				id: 'teacher_faq'
			});
		} else {
			mui.openWindow({
				url: '/htm/student/faq.html',
				id: 'student_faq'
			});
		}
	} else {
		mui.openWindow({ // 登录
			url: '/htm/reg/login.html',
			id: 'w_login'
		});
	}
});
/**
 * 底部菜单-个人中心
 */
document.getElementById("nav-userCenter").addEventListener("tap", function() {
	var sessionUser = localStorage.getItem(session_.user_info);
	if(sessionUser != null) {
		var userInfo = JSON.parse(sessionUser);
		if(userInfo.data.type == 'T0001') {
			mui.openWindow({
				url: '/htm/teacher/info.html',
				id: 'teacher_center'
			});
		} else {
			mui.openWindow({
				url: '/htm/student/info.html',
				id: 'student_center'
			});
		}
	} else {
		mui.openWindow({ // 登录
			url: '/htm/reg/login.html',
			id: 'w_login'
		});
	}
});