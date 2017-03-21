/**
 * 点名相关函数
 */
var Rollcall = {
	courses: function() {
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
	courseStudent: function(scheduleCodeVal) {
		//		mui.getJSON('json/teacher/course_student.json', {}, function(result) {
		//			var html = "<ul class=\"mui-table-view\">";
		//			if(result.code == 0) {
		//				var html = '<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">';
		//				if(result.data) {
		//					for(var key in result.data) {
		//						var obj = result.data[key];
		//						html += '<li class="mui-table-view-cell">';
		//						html += '<div class="mui-input-row mui-checkbox mui-left">';
		//						html += '<input style="margin-top:15px;" name="studentCodes" value="1" type="checkbox">';
		//						html += '<label>';
		//						html += '<h4 class="mui-ellipsis-2">' + obj.name + '</h4>';
		//						html += '<h5>签到时间：' + obj.sign_time + '</h5>';
		//						html += '</label>';
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
		//			$("#course-students-content").html(html);
		//		});
		var data = { scheduleCode: scheduleCodeVal };
		var res = sendAjax('post', purl.url0026, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<li class="mui-table-view-cell">';
					html += '<div class="mui-input-row mui-checkbox mui-left">';
					html += '<input style="margin-top:15px;" name="studentCodes" value="' + obj.code + '" ';
					if(obj.rollcallSuccess >= 0) {
						html += ' disabled ';
					}
					html += ' type="checkbox"> ';
					html += '<label>';
					html += '<h4 class="mui-ellipsis-2">' + obj.name + '</h4>';
					html += '<h5>签到时间：' + obj.signTime + '</h5>';
					if(obj.rollcallSuccess >= 0) {
						var val = "已发送";
						if(obj.rollcallSuccess == 1) {
							val = "点名成功";
						}
						html += '<div class="mui-table-cell mui-col-xs-2 mui-text-right">';
						html += '<span class="mui-h5">' + val + '</span>';
						html += '</div>';
					}
					html += '</label>';
					html += '</div>';
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
	rollCall: function() {
		var studentCodesArray = new Array();
		$('input[name=studentCodes]:checked').each(function() {
			studentCodesArray.push($(this).val());
		});
		if(studentCodesArray.length > 0) {
			var rollcall_verify_code = $("#rollcall_verify_code").val();
			if(rollcall_verify_code) {
				var data = {
					studentCodes: studentCodesArray.join(","),
					teacherCode: code,
					verifyCode: $("#rollcall_verify_code").val(),
					scheduleCode: $("#scheduleCode").val()
				}
				var res = sendAjax('post', purl.url0027, data);
				mui.alert(JSON.stringify(res));
				var result = JSON.parse(res);
				if(result.status) {
					mui.alert("发送成功", "提示", "确定", function() {
						mui.openWindow({
							url: 'class_list.html',
							id: "rollcall-course",
							extras: {
								scheduleCode: $("#scheduleCode").val()
							}
						});
					})
				} else {
					mui.alert(result.msg);
				}
			} else {
				mui.alert("请填写点名验证码");
			}
		} else {
			mui.alert("请选择点名学生");
		}
	},
	/**
	 * 学生端-查看点名课程列表
	 */
	studentRollcallCourses: function(studentCodeVal) {
		var data = { code: studentCodeVal };
		var res = sendAjax('post', purl.url0030, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<li class="mui-table-view-cell">';
					html += '<div class="mui-table-cell mui-col-xs-10">';
					html += '<h4 class="mui-ellipsis-2">' + obj.lessonName + '</h4>';
					html += '<h5>教师名称：' + obj.teacherName + '</h5>';
					html += '<h5>开课时间：' + obj.lessonStartTime + '</h5>';
					html += '</div>';
					html += '<a href="javascript:void(0)" onclick="Rollcall.studentRollcall(\'' + obj.code + '\',\'' + studentCodeVal + '\')" class="mui-btn mui-btn-primary">确认</a>';
					html += '</li>';
				}
			} else {
				html += "<li class=\"mui-table-view-cell\">";
				html += "暂无数据";
				html += "</li>";
			}
			html += "</ul>";
			$("#rollcall-course-content").html(html);
		} else {
			mui.alert(result.msg);
		}
	},
	/**
	 * 学生端-点名确认
	 * @param {Object} codeVal
	 */
	studentRollcall: function(codeVal,studentCodeVal) {
		var data = { code: codeVal, studentCode: studentCodeVal };
		var res = sendAjax('post', purl.url0031, data);
		var result = JSON.parse(res);
		if(result.status) {
			mui.toast("确认点名成功");
			mui.openWindow('/htm/student/index.html', 'w_app_home');
		} else {
			mui.alert(result.msg);
		}
	}
};
/**
 * 获取课程学生列表
 * @param {Object} schedule_code
 */
function getCourseStudents(schedule_code) {
	mui.openWindow({
		url: 'rollcall_course_student.html',
		id: "course-students",
		extras: {
			scheduleCode: schedule_code
		}
	});
}