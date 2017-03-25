var StudentStudy = {
	detail: function(codeVal) {
		var data = { code: codeVal };
		var res = sendAjax('post', purl.url0028, data);
		var result = JSON.parse(res);
		if(result.status) {
			var obj = result.data;
			$("#realname").html(obj.name);
			$("#username").html(obj.userName);
			$("#account-realname").html(obj.name);
			$("#account-username").html(obj.userName);
			if(obj.headPic) {
				$("#head-img").attr("src", obj.headPic);
				$("#account-head-img").attr("src", obj.headPic);
			}
		} else {
			mui.alert(result.msg);
		}
	},
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
					var intro = "";
					if(obj.lessonIntro) {
						if(obj.lessonIntro.length > 50) {
							intro = obj.lessonIntro.substring(0, 50) + "...";
						}
					}
					html += '<p style="font-size:13px;">介绍:' + intro + '</p>';
					html += '<span class="vertical-date">开始时间<small>' + obj.lessonStartTime + '</small></span>';
					html += '</div>';
					html += '</div>';
				}
			}
			$("#vertical-timeline").html(html);
		} else {
			mui.alert(result.msg);
		}
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
					html += '<a href="javascript:void(0)" onclick="getFAQAnswer(\'' + obj.code + '\');">';
					html += '<div class="mui-table-cell mui-col-xs-10">';
					html += '<h4 class="mui-ellipsis-2">' + obj.content + '</h4>';
					html += '<p class="mui-h6 mui-ellipsis">课程名称：' + obj.lessonName;
					html += '<span style="float:right;">' + obj.createTime + '</span>'
					html += '</p>';
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
			console.log(html);
			$("#faq-content").html(html);
		} else {
			mui.alert(result.msg);
		}

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
	}

};

/**
 * 获取课程列表
 */
function getSyllabus() {
	//	var syllabus = document.getElementById("vertical-timeline");
	//	mui.alert();
	//	if(syllabus.querySelector('.mui-loading')) {
	//		setTimeout(function() {
	//			StudentStudy.syllabus();
	//		}, 500);
	//	}
	mui.openWindow({
		url: '/htm/student/syllabus.html',
		id: 'student_syllabus'
	});
}

function getFAQ() {
	//	var aqContent = document.getElementById("faq-content");
	//	if(aqContent.querySelector('.mui-loading')) {
	//		setTimeout(function() {
	//			StudentStudy.faq();
	//		}, 500);
	//	}
	mui.openWindow({
		url: '/htm/student/faq.html',
		id: 'student_faq'
	});
}

function getFAQAnswer(faqIdVal) {
	mui.openWindow({
		url: '/htm/student/faq_answer.html',
		id: 'student_faq_answer',
		extras: {
			faqId: faqIdVal
		}
	});
}