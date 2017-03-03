/**
 * 底部菜单相关操作
 */
var base = "http://127.0.0.1:8020/ath_app/";
var Nav = {
	openIndex: function() {
		window.location.href = base + "htm/index/index.html";
		//		mui.openWindow("htm/index/index.html");
	},
	openFollow: function() {
		window.location.href = base + "htm/user/follow.html";
		//		mui.openWindow("htm/user/follow.html");
	},
	openCart: function() {
		window.location.href = base + "htm/order/cart.html";
		//		mui.openWindow("htm/order/cart.html");
	},
	openUserInfo: function() {
		window.location.href = base + "htm/user/info.html";
		//		mui.openWindow("htm/user/info.html");
	}
};