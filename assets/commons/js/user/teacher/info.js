var TeacherInfo = {
	detail: function(codeVal) {
		var data = { code: codeVal };
		var res = sendAjax('post', purl.url0029, data);
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
		var userInfo = JSON.parse(localStorage.getItem(session_.user_info));
		var teacherCode = userInfo.data.code;
		var data = { code: teacherCode };
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
					html += '<p style="font-size:13px;">备注:' + intro + '</p>';
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
		var data = { code: teacherCode };
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
						html += '<p style="margin:10px;"><a id="' + obj.scheduleCode + '" href="javascript:void(0)" onclick="getCourseStudents(\'' + obj.scheduleCode + '\');" class="mui-btn mui-btn-primary mui-btn-outlined">' + c.className + "</a></p>";
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
					if(obj.flagEvaluate == 1) {
						html += '<button href="javascript:void(0)" onclick="openStudentEvaluateDetail(\''+obj.evaluateId+'\');" class="mui-btn mui-btn-default">查看</button>';
					} else {
						html += '<a href="javascript:void(0)" onclick="openCourseStudentValuate(\'' + scheduleCodeVal + '\',\'' + obj.code + '\')" class="mui-btn mui-btn-primary">去评价</a>';
					}
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
	},
	/**
	 * 学生点评
	 */
	studentEvaluate: function() {
		var data = {
			studentCode: $("#studentCode").val(),
			scheduleCode: $("#scheduleCode").val(),
			score: $("#score").val(),
			intro: $("#intro").val(),
			createUser: teacherCode
		};
		var res = sendAjax('post', purl.url0020, data);
		var result = JSON.parse(res);
		if(result.status) {
			mui.alert("评价成功", "学生评价", "确定", function() {
				mui.openWindow({
					url: '/htm/teacher/course_student.html',
					id: "course-student",
					extras: {
						scheduleCode: $("#scheduleCode").val()
					}
				});
			});
		} else {
			mui.alert(result.msg);
		}
	},
	/**
	 * 查看评价
	 * @param {Object} idVal
	 */
	openStudentEvaluateDetail: function(idVal) {
		mui.openWindow({
			url: '/htm/teacher/student_valuate.html',
			id: "student-evaluate-detail",
			extras: {
				id: idVal
			}
		});
	},
	studentEvaluateDetail: function(idVal) {
		var data = {
			id: idVal
		};
		var res = sendAjax('post', purl.url0032, data);
		var result = JSON.parse(res);
		if(result.status) {
			var obj = result.data;
			$('#evaluateRating').barrating({
				initialRating: obj.score,
				wrapperClass: 'br-wrapper-f',
				showSelectedRating: false,
				readonly: true
			});
			$("#intro").val(obj.intro);
			$("#intro").attr("readonly","readonly");
		} else {
			mui.alert(result.msg);
		}
	}
	/**
	 * 教师答疑列表
	 */
	faq: function() {
		var data = { code: teacherCode };
		var res = sendAjax('post', purl.url0024, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.status) {
				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
				if(result.data) {
					for(var key in result.data) {
						var obj = result.data[key];
						html += '<li class="mui-table-view-cell">';
						html += '<div class="mui-table-cell mui-col-xs-10">';
						html += '<h4 class="mui-ellipsis-2">' + obj.content + '</h4>';
						html += '<p class="mui-h6 mui-ellipsis">学生：' + obj.studentName;
						html += '<span style="float:right;">班级：' + obj.className + '</span>'
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
		} else {
			mui.alert(result.msg);
		}
	}
};
/**
 * 获取课程表
 */
function getSyllabus() {
	mui.openWindow({
		url: '/htm/teacher/syllabus.html',
		id: 'teacher_syllabus'
	});
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
	mui.openWindow({
		url: '/htm/teacher/course_student.html',
		id: "course-students",
		extras: {
			scheduleCode: schedule_code
		}
	});
}

function openCourseStudentValuate(scheduleCodeVal, studentCodeVal) {
	mui.openWindow({
		url: 'course_student_valuate.html',
		id: "course-students-valuate",
		extras: {
			scheduleCode: scheduleCodeVal,
			studentCode: studentCodeVal
		}
	});
}