var StudentStudy = {
	/**
	 * 课程表
	 */
	syllabus: function() {
		var data = { code: studentCode };
		var res = sendAjax('post', purl.url0023, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = "";
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<div class="vertical-timeline-block">';
					html += '<div class="vertical-timeline-icon blue-bg">';
					html += '<i class="fa fa-book"></i>';
					html += '</div>';
					html += '<div class="vertical-timeline-content">';
					html += '<h2>科目：' + obj.lessonName + '</h2>';
					html += '<p>教师：' + obj.teacherName + '</p>';
					html += '<p style="font-size:13px;">介绍:' + obj.lessonIntro + '</p>';
					html += '<span class="vertical-date">开始时间<small>' + obj.lessonStartTime + '</small></span>';
					html += '</div>';
					html += '</div>';
				}
			}
			$("#vertical-timeline").html(html);
		} else {
			mui.alert(result.msg);
		}
		//		mui.getJSON('json/student/syllabus.json', {}, function(result) {
		//			if(result.code) {
		//				var html = "";
		//				if(result.data) {
		//					for(var key in result.data) {
		//						var obj = result.data[key];
		//						html += '<div class="vertical-timeline-block">';
		//						html += '<div class="vertical-timeline-icon blue-bg">';
		//						html += '<i class="fa fa-book"></i>';
		//						html += '</div>';
		//						html += '<div class="vertical-timeline-content">';
		//						html += '<h2>科目：' + obj.lesson_name + '</h2>';
		//						html += '<p>教师：' + obj.teacher_name + '</p>';
		//						html += '<p style="font-size:13px;">介绍:' + obj.intro + '</p>';
		//						html += '<span class="vertical-date">开始时间<small>' + obj.start_time + '</small></span>';
		//						html += '</div>';
		//						html += '</div>';
		//					}
		//				}
		//				$("#vertical-timeline").html(html);
		//			}
		//		});
	},
	faq: function() {
		var data = { code: studentCode };
		var res = sendAjax('post', purl.url0022, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<li class="mui-table-view-cell">';
					html += '<a href="#faq-answer" onclick="getFAQAnswer(\''+obj.code+'\');">'
					html += '<div class="mui-table-cell mui-col-xs-10">';
					html += '<h4 class="mui-ellipsis-2">' + obj.content + '</h4>';
					html += '<p class="mui-h6 mui-ellipsis">课程名称：' + obj.lessonName;
					html += '<span style="float:right;">' + obj.createTime + '</span>'
					html += '</p>';
					html += '</div>';
					html += '</div>';
					html += '</a>';
					html += '</li>';
				}
			} else {
				html += "<li class=\"mui-table-view-cell\">";
				html += "暂无数据";
				html += "</li>";
			}
			html += '</ul>';
			$("#faq-content").html(html);
		} else {
			mui.alert(result.msg);
		}

		//		mui.getJSON('json/student/faq.json', {}, function(result) {
		//			var html = "<ul class=\"mui-table-view\">";
		//			if(result.code == 0) {
		//				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
		//				if(result.data) {
		//					for(var key in result.data) {
		//						var obj = result.data[key];
		//						html += '<li class="mui-table-view-cell">';
		//						html += '<a href="#faq-answer" onclick="getFAQAnswer();">'
		//						html += '<div class="mui-table-cell mui-col-xs-10">';
		//						html += '<h4 class="mui-ellipsis-2">' + obj.question + '</h4>';
		//						html += '<p class="mui-h6 mui-ellipsis">课程名称：' + obj.lesson_name;
		//						html += '<span style="float:right;">' + obj.create_time + '</span>'
		//						html += '</p>';
		//						html += '</div>';
		//						html += '</div>';
		//						html += '</a>';
		//						html += '</li>';
		//					}
		//				} else {
		//					html += "<li class=\"mui-table-view-cell\">";
		//					html += "暂无数据";
		//					html += "</li>";
		//				}
		//				html += '</ul>';
		//			}
		//			html += "</ul>";
		//			$("#faq-content").html(html);
		//		});
	},
	/**
	 * 答疑回答列表
	 */
	faqAnswer: function(faqId) {
		var data = { code: faqId };
		var res = sendAjax('post', purl.url0025, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<li class="mui-table-view-cell">';
					html += '<div class="mui-table-cell mui-col-xs-10">';
					html += '<h4 class="mui-ellipsis-2">' + obj.content + '</h4>';
					html += '<p class="mui-h6 mui-ellipsis">' + obj.teacherName;
					html += '<span style="float:right;">' + obj.createTime + '</span>'
					html += '</p>';
					html += '</div>';
					html += '</div>';
					html += '</li>';
				}
			} else {
				html += "<li class=\"mui-table-view-cell\">";
				html += "暂无数据";
				html += "</li>";
			}
			html += '</ul>';
			$("#faq-answer-content").html(html);
		} else {
			mui.alert(result.msg);
		}
		//		mui.getJSON('json/student/faq.answer.json', {}, function(result) {
		//			var html = "<ul class=\"mui-table-view\">";
		//			if(result.code == 0) {
		//				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
		//				if(result.data) {
		//					for(var key in result.data) {
		//						var obj = result.data[key];
		//						html += '<li class="mui-table-view-cell">';
		//						html += '<div class="mui-table-cell mui-col-xs-10">';
		//						html += '<h4 class="mui-ellipsis-2">' + obj.answer + '</h4>';
		//						html += '<p class="mui-h6 mui-ellipsis">' + obj.answer_name;
		//						html += '<span style="float:right;">' + obj.create_time + '</span>'
		//						html += '</p>';
		//						html += '</div>';
		//						html += '</div>';
		//						html += '</li>';
		//					}
		//				} else {
		//					html += "<li class=\"mui-table-view-cell\">";
		//					html += "暂无数据";
		//					html += "</li>";
		//				}
		//				html += '</ul>';
		//			}
		//			html += "</ul>";
		//			$("#faq-answer-content").html(html);
		//		});
	}

};

/**
 * 获取课程列表
 */
function getSyllabus() {
	var syllabus = document.getElementById("vertical-timeline");
	if(syllabus.querySelector('.mui-loading')) {
		setTimeout(function() {
			StudentStudy.syllabus();
		}, 500);
	}
}

function getFAQ() {
	var aqContent = document.getElementById("faq-content");
	if(aqContent.querySelector('.mui-loading')) {
		setTimeout(function() {
			StudentStudy.faq();
		}, 500);
	}
}

function getFAQAnswer(faqId) {
	var aqContent = document.getElementById("faq-answer-content");
	if(aqContent.querySelector('.mui-loading')) {
		setTimeout(function() {
			StudentStudy.faqAnswer(faqId);
		}, 500);
	}
}