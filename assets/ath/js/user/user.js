/**
 * 用户相关js
 */
var base = "http://127.0.0.1:8020/ath_app/";
var User = {
	openInfo: function() {
		window.location.href=base+"htm/user/info.html";
		//mui.openWindow("htm/user/info.html");
	},
	openRegister: function() {
		window.location.href=base+"htm/user/register.html";
		//mui.openWindow("htm/user/register.html");
	},
	openLogin: function() {
		window.location.href=base+"htm/user/login.html";
		//mui.openWindow("htm/user/login.html");
	},
	openSetting: function() {
		window.location.href=base+"htm/user/setting.html";
		//mui.openWindow("htm/user/setting.html");
	},
	openForgetPassword: function() {
		window.location.href=base+"htm/user/forget_password.html";
		//mui.openWindow("htm/user/forget_password.html");
	},
	openFollow: function() {
		window.location.href=base+"htm/user/follow.html";
		//mui.openWindow("htm/user/follow.html");
	}
};