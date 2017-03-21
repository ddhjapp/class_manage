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
		var res = sendAjax('post', purl.url0019, data);
		var result = JSON.parse(res);
		if(result.status) {
			var html = "<ul class=\"mui-table-view\">";
			if(result.data) {
				for(var key in result.data) {
					var obj = result.data[key];
					html += '<li class="mui-table-view-cell">';
					html += '<div class="mui-input-row mui-checkbox mui-left">';
					html += '<input style="margin-top:15px;" name="studentCodes" value="' + obj.code + '" type="checkbox">';
					html += '<label>';
					html += '<h4 class="mui-ellipsis-2">' + obj.name + '</h4>';
					html += '<h5>签到时间：' + obj.signTime + '</h5>';
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
		var studentCodes = new Array();
		$('input[name=studentCodes]:checked').each(function() {
			studentCodes.push($(this).val());
		});
		if(studentCodes.length > 0) {
			var rollcall_verify_code = $("#rollcall_verify_code").val();
			if(rollcall_verify_code) {
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
				mui.alert("请填写点名验证码");
			}
		} else {
			mui.alert("请选择点名学生");
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