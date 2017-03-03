//类型：1上新，2买家秀，3卖家秀，4新闻，5活动
var dynamic = [{
	title: "店铺动态1",
	type: 1,
	content: ""
}];
var goods = [{}];
var show = [{}];
var Follow = {
	init: function() {
		this.initDynamic();
		this.initGoodsNew();
		this.initTalentShow();
	},
	initDynamic: function() {
		var html = "<ul class=\"mui-table-view\">";
		for(var i = 0; i < dynamic.length; i++) {
			html += "<li class=\"mui-table-view-cell\">";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html +="";
			html += "</li>";
		}
		html += "</ul>";
		$("#dynamic-scroll").html(html);
	},
	initGoodsNew: function() {
		var html = "<ul class=\"mui-table-view\">";
		for(var i = 0; i < dynamic.length; i++) {
			html += "<li class=\"mui-table-view-cell\">";

			html += "</li>";
		}
		html += "</ul>";

		$("#goods-scroll").html(html);
	},
	initTalentShow: function() {
		var html = "<ul class=\"mui-table-view\">";
		for(var i = 0; i < dynamic.length; i++) {
			html += "<li class=\"mui-table-view-cell\">";

			html += "</li>";
		}
		html += "</ul>";

		$("#show-scroll").html(html);
	}
};

$(document).ready(function() {
	//Follow.init();
	mui.init({
		swipeBack: false
	});
	(function($) {
		$('.mui-scroll-wrapper').scroll({
			indicators: true //是否显示滚动条
		});

		$('.mui-input-group').on('change', 'input', function() {
			if(this.checked) {
				sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
			}
		});
	})(mui);
});