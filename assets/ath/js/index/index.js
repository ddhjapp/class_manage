/**
 * 首页相关js
 * version 1.0.0
 */
var menus = [{
	icon: "iconfont icon-hua",
	name: "今日特惠"
}, {
	icon: "iconfont icon-ju",
	name: "聚名品"
}, {
	icon: "iconfont icon-goods",
	name: "美妆汇"
}, {
	icon: "iconfont icon-clothes",
	name: "男人装"
}, {
	icon: "iconfont icon-group",
	name: "家庭购"
}, {
	icon: "iconfont icon-baby",
	name: "亲子间"
}, {
	icon: "iconfont icon-ticket",
	name: "优惠券"
}, {
	icon: "iconfont icon-more",
	name: "全部"
}];
var sliders = [
	"assets/ath/images/carousel/1.jpg",
	"assets/ath/images/carousel/2.jpg",
	"assets/ath/images/carousel/3.jpg",
	"assets/ath/images/carousel/4.jpg",
	"assets/ath/images/carousel/5.jpg",
];
var stores = [{
	img: "assets/ath/images/store/1.jpg",
	title: "店铺推荐1"
}, {
	img: "assets/ath/images/store/2.jpg",
	title: "店铺推荐2"
}, {
	img: "assets/ath/images/store/3.jpg",
	title: "店铺推荐3"
}, {
	img: "assets/ath/images/store/4.jpg",
	title: "店铺推荐4"
}];
var products = [{
	img: "assets/ath/images/goods/1.jpg",
	href:"htm/product/detail.html",
	title: "商品推荐1",
	price:100.3
}, {
	img: "assets/ath/images/goods/2.jpg",
	href:"htm/product/detail.html",
	title: "商品推荐2",
	price:2000
}, {
	img: "assets/ath/images/goods/3.jpg",
	href:"htm/product/detail.html",
	title: "商品推荐3",
	price:19.3
}, {
	img: "assets/ath/images/goods/4.jpg",
	href:"htm/product/detail.html",
	title: "商品推荐4",
	price:400
}];
var Index = {
	//首页初始化
	init: function() {
		this.menu();
		this.slider();
		this.store();
		this.product();
	},
	//菜单加载
	menu: function() {
		var html = "";
		for(var i = 0; i < menus.length; i++) {
			var obj = menus[i];
			html += "<li class=\"mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3\">";
			html += "<a href=\"javascript:void(0)\">";
			html += "<span class=\"mui-icon " + obj.icon + "\"></span>";
			html += "<div class=\"mui-media-body\">" + obj.name + "</div>";
			html += "</a>";
			html += "</li>";
		}
		$("#menu").html(html);
	},
	//轮播图加载
	slider: function() {
		var slider_html = "";
		var slider_indicator_html = "";
		if(sliders.length > 0) {
			slider_html += "<div class=\"mui-slider-item mui-slider-item-duplicate\">";
			slider_html += "<a href=\"javascript:void(0)\">";
			slider_html += "<img src=\"" + sliders[sliders.length - 1] + "\">";
			slider_html += "</a>";
			slider_html += "</div>";
			for(var i = 0; i < sliders.length; i++) {
				var obj = sliders[i];
				slider_html += "<div class=\"mui-slider-item\">";
				slider_html += "<a href=\"javascript:void(0)\">";
				slider_html += "<img src=\"" + sliders[i] + "\">";
				slider_html += "</a>";
				slider_html += "</div>";
				if(i == 0) {
					slider_indicator_html += "<div class=\"mui-indicator mui-active\"></div>";
				} else {
					slider_indicator_html += "<div class=\"mui-indicator\"></div>";
				}
			}
			slider_html += "<div class=\"mui-slider-item mui-slider-item-duplicate\">";
			slider_html += "<a href=\"javascript:void(0)\">";
			slider_html += "<img src=\"" + sliders[0] + "\">";
			slider_html += "</a>";
			slider_html += "</div>";
		}
		$("#slider-group").html(slider_html);
		$("#slider-indicator").html(slider_indicator_html);
	},
	//店铺推荐加载
	store: function() {
		var html = "<ul class=\"mui-table-view mui-grid-view\">";
		for(var i = 0; i < stores.length; i++) {
			var obj = stores[i];
			html += "<li class=\"mui-table-view-cell mui-media mui-col-xs-6\">";
			html += "<a href=\"javascript:void(0)\">";
			html += "<img class=\"mui-media-object\" src=\"" + obj.img + "\">";
			html += "<div class=\"mui-media-body\">" + obj.title + "</div>";
			html += "</a>";
			html += "</li>";
		}
		html += "</ul>";
		$("#store-recommend").html(html);
	},
	//商品推荐
	product: function() {
		var html = "<ul class=\"mui-table-view mui-grid-view\">";
		for(var i = 0; i < products.length; i++) {
			var obj = products[i];
			html += "<li class=\"mui-table-view-cell mui-media mui-col-xs-6\">";
			html += "<a onclick=\"Product.openDetail();\" href=\"javascript:void(0)\">";
			html += "<img class=\"mui-media-object\" src=\"" + obj.img + "\">";
			html += "<div class=\"mui-media-body\">" + obj.title + "</div>";
			html += "<div class=\"mui-media-body\">";
			html +="<span style=\"margin-right:10px;\">￥"+obj.price+"</span>";
			html +="<span style=\"margin-left:10px;\">10人付款</span>";
			html += "</div>";
			html += "</a>";
			html += "</li>";
		}
		html += "</ul>";
		$("#product-recommend").html(html);
	}
};
$(document).ready(function() {
	Index.init();
	mui.init();
	//轮播图
	mui('.mui-slider').slider({
		interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
	});
	//滚动条
	mui('.mui-scroll-wrapper').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});
});