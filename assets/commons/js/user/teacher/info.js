var TeacherInfo = {
	/**
	 * 课程表
	 */
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
		//		var data = { code: teacherCode };
		//		var res = sendAjax('post', purl.url0017, data);
		//		var result = JSON.parse(res);
		//		if(result.status) {
		//			var html = "";
		//			if(result.data) {
		//				for(var key in result.data) {
		//					var obj = result.data[key];
		//					html += '<div class="vertical-timeline-block">';
		//					html += '<div class="vertical-timeline-icon blue-bg">';
		//					html += '<i class="fa fa-book"></i>';
		//					html += '</div>';
		//					html += '<div class="vertical-timeline-content">';
		//					html += '<h2>科目：' + obj.lessonName + '</h2>';
		//					html += '<p>班级：' + obj.classesName + '</p>';
		//					var intro = obj.intro;
		//					if(intro.length > 50) {
		//						intro = intro.substring(0, 50) + "...";
		//					}
		//					html += '<p style="font-size:13px;">备注:' + obj.intro + '</p>';
		//					html += '<span class="vertical-date">开始时间<small>' + obj.startTime + '</small></span>';
		//					html += '</div>';
		//					html += '</div>';
		//				}
		//			} else {
		//				html += '<div class="vertical-timeline-block">';
		//				html += '<div class="vertical-timeline-content">';
		//				html += '暂无数据';
		//				html += "</div>";
		//				html += "</div>";
		//			}
		//			$("#vertical-timeline").html(html);
		//		} else {
		//			mui.alert(result.msg);
		//		}
	},
	/**
	 * 课程点评
	 */
	courseReviews: function() {
		mui.getJSON('json/teacher/course_reviews.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
				if(result.data) {
					for(var key in result.data) {
						var obj = result.data[key];
						html += '<li class="mui-table-view-cell">';
						html += '<a href="javascript:void(0)" onclick="getCourseStudents();">'
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
			}
			html += "</ul>";
			$("#course-reviews-content").html(html);
		});
		//		var data = { code: teacherCode };
		//		var res = sendAjax('post', purl.url0018, data);
		//		var result = JSON.parse(res);
		//		if(result.status) {
		//			var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
		//			if(result.data) {
		//				for(var key in result.data) {
		//					var obj = result.data[key];
		//					html += '<li class="mui-table-view-cell">';
		//					html += '<div class="mui-table-cell mui-col-xs-10">';
		//					html += '<h4 class="mui-ellipsis-2">' + obj.lessonName + '</h4>';
		//					var classes = JSON.parse(obj.classesName);
		//					html += '<h5>班级';
		//					for(var key in classes) {
		//						var c = classes[key];
		//						html += '<p style="margin:10px;"><a id="' + obj.scheduleCode + '" href="#course-students" onclick="getCourseStudents(\'' + obj.scheduleCode + '\');" class="mui-btn mui-btn-primary mui-btn-outlined">' + c.className + "</a></p>";
		//					}
		//					html += '</h5>';
		//					html += '<p class="mui-h6 mui-ellipsis">开课时间：' + obj.startTime + '</p>';
		//					html += '</div>';
		//					html += '</div>';
		//					html += '</li>';
		//				}
		//			} else {
		//				html += "<li class=\"mui-table-view-cell\">";
		//				html += "暂无数据";
		//				html += "</li>";
		//			}
		//			html += '</ul>';
		//			$("#course-reviews-content").html(html);
		//		} else {
		//			mui.alert(result.msg);
		//		}
	},
	/**
	 * 学生列表
	 */
	courseStudents: function(scheduleCodeVal) {
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
						html += '<a href="javascript:void(0)" onclick="openCourseStudentValuate();" class="mui-btn mui-btn-primary">去评价</a>';
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
			$("#course-students-content").html(html);
		});
		//		var data = { scheduleCode: scheduleCodeVal };
		//		var res = sendAjax('post', purl.url0019, data);
		//		var result = JSON.parse(res);
		//		if(result.status) {
		//			var html = "<ul class=\"mui-table-view\">";
		//			if(result.data) {
		//				for(var key in result.data) {
		//					var obj = result.data[key];
		//					html += '<li class="mui-table-view-cell">';
		//					html += '<div class="mui-table-cell mui-col-xs-10">';
		//					html += '<h4 class="mui-ellipsis-2">' + obj.name + '</h4>';
		//					html += '<h5>签到时间：' + obj.signTime + '</h5>';
		//					html += '</div>';
		//					if(obj.flagEvaluate == 1){
		//						html += '<button disabled="disabled" href="javascript:void(0)" class="mui-btn mui-btn-default">已评价</button>';	
		//					}else{
		//						html += '<a href="#student-evaluate" class="mui-btn mui-btn-primary">去评价</a>';
		//					}
		//					html += '</li>';
		//				}
		//			} else {
		//				html += "<li class=\"mui-table-view-cell\">";
		//				html += "暂无数据";
		//				html += "</li>";
		//			}
		//			html += "</ul>";
		//			$("#course-students-content").html(html);
		//		} else {
		//			mui.alert(result.msg);
		//		}
	},
	studentEvaluate: function() {
		//		var data = {
		//			studentCode: "111",
		//			scheduleCode: "2222",
		//			score: "4",
		//			createUser: "admin",
		//			intro: "测试"
		//		};
		//		var res = sendAjax('post', purl.url0020, data);
		//		var result = JSON.parse(res);
		//		if(result.status) {
		//			mui.toast('提交成功');
		//			mui.openWindow('htm/teacher/course_student.html','course-reviews',{});
		//		} else {
		//			mui.alert(result.msg);
		//		}
		mui.alert("评价成功", "学生评价", "确定", function() {
			mui.openWindow('htm/teacher/course_student.html', 'course-reviews', {});
		});
	},
	faq:function(){
		mui.getJSON('json/teacher/faq.json', {}, function(result) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.code == 0) {
				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
				if(result.data) {
					for(var key in result.data) {
						var obj = result.data[key];
						html += '<li class="mui-table-view-cell">';
						html += '<div class="mui-table-cell mui-col-xs-10">';
						html += '<h4 class="mui-ellipsis-2">' + obj.question + '</h4>';
						html += '<p class="mui-h6 mui-ellipsis">课程名称：' + obj.lesson_name;
						html += '<span style="float:right;">' + obj.create_time + '</span>'
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
			}
			html += "</ul>";
			$("#faq-content").html(html);
		});
	}
};
/**
 * 获取课程表
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
 * 获取课程列表
 * @param {Object} codeVal
 */
function getCourseReviews() {
	var courseReviewsContent = document.getElementById("course-reviews-content");
	if(courseReviewsContent.querySelector('.mui-loading')) {
		setTimeout(function() {
			TeacherInfo.courseReviews();
		}, 500);
	}
}

/**
 * 获取课程学生列表
 * @param {Object} schedule_code
 */
function getCourseStudents(schedule_code) {
	mui.openWindow('htm/teacher/course_student.html', 'course-reviews', {});
}

function openCourseStudentValuate() {
	mui.openWindow('htm/teacher/course_student_valuate.html', 'course-reviews', {});
}