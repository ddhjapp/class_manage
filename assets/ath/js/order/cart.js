/**
 * 购物车相关js
 */
var data = [{
	id: 1001,
	name: "店铺1",
	goods: [{
		id: 1001001,
		name: "店铺1测试商品1",
		href: "javascript:void(0)",
		img: "assets/ath/images/goods/1.jpg",
		classify: "颜色分类：红色",
		num: 10,
		price: 100
	}, {
		id: 1001002,
		name: "店铺1测试商品2",
		href: "javascript:void(0)",
		img: "assets/ath/images/goods/2.jpg",
		classify: "颜色分类：绿色",
		num: 3,
		price: 391
	}]
}, {
	id: 1002,
	name: "店铺2",
	goods: [{
		id: 1002001,
		name: "店铺2测试商品1",
		href: "javascript:void(0)",
		img: "assets/ath/images/goods/3.jpg",
		classify: "颜色分类：红色",
		num: 6,
		price: 10
	}, {
		id: 1002002,
		name: "店铺2测试商品2",
		href: "javascript:void(0)",
		img: "assets/ath/images/goods/4.jpg",
		classify: "颜色分类：绿色",
		num: 2,
		price: 191
	}]
}, {
	id: 1003,
	name: "店铺3",
	goods: [{
		id: 1003001,
		name: "店铺3测试商品1",
		href: "javascript:void(0)",
		img: "assets/ath/images/goods/5.jpg",
		classify: "颜色分类：黑色",
		num: 9,
		price: 8.9
	}, {
		id: 1003002,
		name: "店铺3测试商品2",
		href: "javascript:void(0)",
		img: "assets/ath/images/goods/6.jpg",
		classify: "颜色分类：绿色",
		num: 2,
		price: 98
	}]
}];
var Cart = {
	init: function() {
		this.initStoreProduct();
	},
	initStoreProduct: function() {
		var html = "<ul class=\"mui-table-view\">";
		for(var i = 0; i < data.length; i++) {
			var store = data[i];
			html += "<li class=\"mui-table-view-cell mui-media\">";
			html += "<div class=\"cart-store mui-card\" style=\"margin: 0px;\">";
			html += "<div style=\"padding: 10px 0px;\" class=\"mui-card-header\">";
			html += "<ul class=\"mui-table-view\">";
			html += "<li class=\"mui-table-view-cell\">";
			html += "<label style=\"padding-left:45px;\">";
			html +="<i class=\"mui-icon iconfont icon-taoxiaopu\"></i><span>"+store.name+"</span>";
			html += "</label>";
			html += "<input style=\"top:12px;\" name=\"checkbox\" value=\"storeCode\" type=\"checkbox\">";
			html +="</li>";
			html +="</ul>";
			html +="</div>";
			html += "<div class=\"mui-card-content\">";
			html += "<ul class=\"mui-table-view\">";
			for(var j = 0; j < store.goods.length; j++) {
				var g = store.goods[j];
				html += "<li style=\"padding: 11px 0px;\" class=\"mui-table-view-cell\">";
				html += "<div class=\"mui-slider-right mui-disabled\">";
				html += "<a class=\"mui-btn mui-btn-red\">删除</a>";
				html += "</div>";
				html += "<div class=\"mui-slider-handle\">";
				html += "<div class=\"mui-input-row\">";
				html +="<label style=\"padding-left:51px;\">";
				html += "<a href=\"javascript:;\">";
				html += "<img class=\"mui-media-object mui-pull-left\" src=\"" + g.img + "\">";
				html += "<div class=\"mui-media-body cart-store-font\">" + g.name;
				html += "<p class=\"mui-ellipsis cart-store-font\">" + g.classify + "</p>";
				html += "<p style=\"margin-top:15px;\" class=\"mui-ellipsis cart-store-font\">";
				html += "<span style=\"color:red;\">￥" + g.price + "</span>";
				html += "<span style=\"float: right;padding-right:5px\">x" + g.num + "</span>";
				html += "</p>";
				html += "</div>";
				html += "</a>";
				html +="</label>";
				html +="<input style=\"top:24px;\" name=\"checkbox1\" type=\"checkbox\">";
				html += "</div>";
				html += "</div>";
				html += "</li>";
			}
			html += "</ul>";
			html += "</div>";
			html += "</div>";
			html += "</li>";
		}
		html += "</ul>";
		html += "<div style=\"height: 100px;\"></div>";
		$("#cart").html(html);
	}
}
$(document).ready(function() {
	Cart.init();
	mui.init();
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