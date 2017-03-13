var Study = {
	id: "",
	/**
	 * 获取教师课程记录
	 */
	initSigns: function(obj) {
		mui.getJSON('json/student/sign.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				if(result.data) {
					var data = result.data;
					for(var key in data) {
						var sign = data[key];
						html += "<li class=\"mui-table-view-cell\">";
						html += "<div class=\"mui-table\">";
						html += "<div class=\"mui-table-cell mui-col-xs-10\">";
						html += "<h4 class=\"mui-ellipsis\">" + sign.name + "</h4>";
						html += "<h5>教师：" + sign.teacher + "</h5>";
						html += "</div>";
						html +="<div class=\"mui-table-cell mui-col-xs-2 mui-text-right\">";
						html +="<span class=\"mui-h5\">"+sign.time+"</span>";
						html += "</div>";
						html += "</div>";
						html += "</li>";
					}
				} else {
					html += "<li class=\"mui-table-view-cell\">";
					html += "暂无数据";
					html += "</li>";
				}
			}
			html += "</ul>";
			$(obj).html(html);
		});
	},
	/**
	 * 获取课程答题记录
	 */
	initAnswers: function(obj) {
		mui.getJSON('json/teacher/aq.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				if(result.data) {
					var data = result.data;
					for(var key in data) {
						var answer = data[key];
						html += "<li class=\"mui-table-view-cell\">";
						html += "<div class=\"mui-table\">";
						html += "<div class=\"mui-table-cell mui-col-xs-10\">";
						html += "<h4 class=\"mui-ellipsis\">" + answer.name + "</h4>";
						html += "<h5>类型：" + answer.type + "</h5>";
						html += "</div>";
						html += "</div>";
						html += "</li>";
					}
				} else {
					html += "<li class=\"mui-table-view-cell\">";
					html += "暂无数据";
					html += "</li>";
				}
			}
			html += "</ul>";
			$(obj).html(html);
		});
	}
};