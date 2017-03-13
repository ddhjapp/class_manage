var Teach = {
	id: "",
	/**
	 * 获取教师课程记录
	 */
	initLessons: function(obj) {
		mui.getJSON('json/teacher/lessons.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				if(result.data) {
					var data = result.data;
					for(var key in data) {
						var lesson = data[key];
						html += "<li class=\"mui-table-view-cell\">";
						html += "<div class=\"mui-table\">";
						html += "<div class=\"mui-table-cell mui-col-xs-10\">";
						html += "<h4 class=\"mui-ellipsis\">" + lesson.name + "</h4>";
						html += "<h5>教师：" + lesson.teacher + "</h5>";
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
	initAQs: function(obj) {
		mui.getJSON('json/teacher/aq.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				if(result.data) {
					var data = result.data;
					for(var key in data) {
						var aq = data[key];
						html += "<li class=\"mui-table-view-cell\">";
						html += "<div class=\"mui-table\">";
						html += "<div class=\"mui-table-cell mui-col-xs-10\">";
						html += "<h4 class=\"mui-ellipsis\">" + aq.name + "</h4>";
						html += "<h5>类型：" + aq.type + "</h5>";
						html += "<p class=\"mui-h6 mui-ellipsis\">正确：" + aq.correct + "；错误：" + aq.fault + "</p>";
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