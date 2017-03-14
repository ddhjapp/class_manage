var TeacherInfo = {
	syllabus: function() {
		mui.getJSON('json/teacher/syllabus.json', {}, function(result) {
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
						html += '<p>班级：' + obj.class_name + '</p>';
						html += '<span>备注:' + obj.remark + '</span>';
						html += '<span class="vertical-date">开始时间<small>' + obj.start_time + '</small></span>';
						html += '</div>';
						html += '</div>';
					}
				}
				$("#vertical-timeline").html(html);
			}
		});
	},
	courseReviews: function() {
		mui.getJSON('json/teacher/course_reviews.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
				if(result.data) {
					for(var key in result.data) {
						var obj = result.data[key];
						html += '<li class="mui-table-view-cell">';
						html += '<a href="#course-students" onclick="getCourseStudents();">'
						html += '<div class="mui-table-cell mui-col-xs-10">';
						html += '<h4 class="mui-ellipsis-2">' + obj.name + '</h4>';
						html += '<h5>班级：' + obj.class_name + '</h5>';
						html += '<p class="mui-h6 mui-ellipsis">' + obj.start_time + '</p>';
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
				$("#course-reviews-content").html(html);
			}
			html += "</ul>";
			$("#course-reviews-content").html(html);
		});
	},
	courseStudents: function() {
		mui.getJSON('json/teacher/course_student.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
				if(result.data) {
					for(var key in result.data) {
						var obj = result.data[key];
						html += '<li class="mui-table-view-cell">';
						html += '<div class="mui-table-cell mui-col-xs-10">';
						html += '<h4 class="mui-ellipsis-2">' + obj.name + '</h4>';
						html += '<h5>签到时间：' + obj.sign_time + '</h5>';
						html += '<p class="mui-h6 mui-ellipsis">提问次数：' + obj.aq_sum + '</p>';
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
			}
			html += "</ul>";
			$("#course-students-content").html(html);
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

function getCourseStudents(classCode) {
	var courseStudentsContent = document.getElementById("course-students-content");
	if(courseStudentsContent.querySelector('.mui-loading')) {
		setTimeout(function() {
			TeacherInfo.courseStudents();
		}, 500);
	}
}