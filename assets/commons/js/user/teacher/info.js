var TeacherInfo = {
	/**
	 * 课程表
	 */
	syllabus: function() {
		var data = { code: localStorage.getItem("code") };
		var res = sendAjax('post', purl.url0017, data);
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
					html += '<p>班级：' + obj.classesName + '</p>';
					var intro = obj.intro;
					if(intro.length > 50) {
						intro = intro.substring(0, 50) + "...";
					}
					html += '<p style="font-size:13px;">备注:' + obj.intro + '</p>';
					html += '<span class="vertical-date">开始时间<small>' + obj.startTime + '</small></span>';
					html += '</div>';
					html += '</div>';
				}
			} else {
				html += '<div class="vertical-timeline-block">';
				html += '<div class="vertical-timeline-content">';
				html += '暂无数据';
				html += "</div>";
				html += "</div>";
			}
			$("#vertical-timeline").html(html);
		} else {
			mui.alert(result.msg);
		}
	},
	/**
	 * 课程点评
	 */
	courseReviews: function() {
		//var data = { code: localStorage.getItem("code") };
		var data = { code: 'T1489071763988' };
		var res = sendAjax('post', purl.url0018, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<li class="mui-table-view-cell">';
					html += '<div class="mui-table-cell mui-col-xs-10">';
					html += '<h4 class="mui-ellipsis-2">' + obj.lessonName + '</h4>';
					var classes = JSON.parse(obj.classesName);
					html += '<h5>班级';
					for(var key in classes) {
						var c = classes[key];
						html += '<p style="margin:10px;"><a href="#course-students" onclick="getCourseStudents(\'' + obj.scheduleCode + '\');" class="mui-btn mui-btn-primary mui-btn-outlined">' + c.className + "</a></p>";
					}
					html += '</h5>';
					html += '<p class="mui-h6 mui-ellipsis">开课时间：' + obj.startTime + '</p>';
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
			$("#course-reviews-content").html(html);
		} else {
			mui.alert(result.msg);
		}
	},
	/**
	 * 学生列表
	 */
	courseStudents: function(scheduleCodeVal) {
		var data = { scheduleCode: scheduleCodeVal };
		var res = sendAjax('post', purl.url0019, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<li class="mui-table-view-cell">';
					html += '<div class="mui-table-cell mui-col-xs-10">';
					html += '<h4 class="mui-ellipsis-2">' + obj.name + '</h4>';
					html += '<h5>签到时间：' + obj.signTime + '</h5>';
					html += '</div>';
					html += '<a href="#student-evaluate" class="mui-btn mui-btn-primary">去评价</a>';
					html += '</li>';
				}
			} else {
				html += "<li class=\"mui-table-view-cell\">";
				html += "暂无数据";
				html += "</li>";
			}
			html += "</ul>";
			$("#course-students-content").html(html);
		} else {
			mui.alert(result.msg);
		}

	}
};
/**
 * 获取课程列表
 */
function getSyllabus() {
	var syllabus = document.getElementById("vertical-timeline");
	if(syllabus.querySelector('.mui-loading')) {
		setTimeout(function() {
			TeacherInfo.syllabus();
		}, 500);
	}
}
/**
 * 获取课程点评中的
 */
function getCourseReviews() {
	var courseReviewsContent = document.getElementById("course-reviews-content");
	if(courseReviewsContent.querySelector('.mui-loading')) {
		setTimeout(function() {
			TeacherInfo.courseReviews();
		}, 500);
	}
}

function getCourseStudents(schedule_code) {
	var courseStudentsContent = document.getElementById("course-students-content");
	if(courseStudentsContent.querySelector('.mui-loading')) {
		setTimeout(function() {
			TeacherInfo.courseStudents(schedule_code);
		}, 500);
	}
}