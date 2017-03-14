var StudentStudy = {
	/**
	 * 课程表
	 */
	syllabus: function() {
		mui.getJSON('json/student/syllabus.json', {}, function(result) {
			if(result.code) {
				var html = "";
				if(result.data) {
					for(var key in result.data) {
						var obj = result.data[key];
						html += '<div class="vertical-timeline-block">';
						html += '<div class="vertical-timeline-icon blue-bg">';
						html += '<i class="fa fa-book"></i>';
						html += '</div>';
						html += '<div class="vertical-timeline-content">';
						html += '<h2>科目：' + obj.lesson_name + '</h2>';
						html += '<p>教师：' + obj.teacher_name + '</p>';
						html += '<span>介绍:' + obj.intro + '</span>';
						html += '<span class="vertical-date">开始时间<small>' + obj.start_time + '</small></span>';
						html += '</div>';
						html += '</div>';
					}
				}
				$("#vertical-timeline").html(html);
			}
		});
	},
	aq: function() {
		mui.getJSON('json/student/aq.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
				if(result.data) {
					for(var key in result.data) {
						var obj = result.data[key];
						html += '<li class="mui-table-view-cell">';
						html += '<a href="#course-students" onclick="getCourseStudents();">'
						html += '<div class="mui-table-cell mui-col-xs-10">';
						html += '<h4 class="mui-ellipsis-2">' + obj.question + '</h4>';
						html += '<p class="mui-h6 mui-ellipsis">课程名称：' + obj.lesson_name;
						html +='<span style="float:right;">'+obj.create_time+'</span>'
						html +='</p>';
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
			}
			html += "</ul>";
			$("#aq-content").html(html);
		});
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

function getAQ() {
	var aqContent = document.getElementById("aq-content");
	if(aqContent.querySelector('.mui-loading')) {
		setTimeout(function() {
			StudentStudy.aq();
		}, 500);
	}
}