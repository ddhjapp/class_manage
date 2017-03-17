var path = 'http://127.0.0.1:8080/matrix-admin/';
//var path = 'http://192.168.83.1:8080/matrix-admin/';
//var path = 'http://stockwyz.xicp.net/matrix-admin/';
var purl = {
	/**
	 * 教师开课接口
	 */
	url0001: path + 'edu/start_lesson.do',
	/**
	 * 已签到学生列表接口
	 */
	url0002: path + 'edu/sign_list.do',
	/**
	 * 学生签到接口
	 */
	url0003: path + 'edu/student_sign.do',
	/**
	 * 用户登陆接口
	 */
	url0004: path + 'edu/login.do',
	/**
	 * 用户注册接口
	 */
	url0005: path + 'edu/register.do',

	/**
	 * 生成二维码时所需的课程列表
	 */
	url0006: path + 'edu/lesson_list.do',

	/**
	 * 查看签到时所需的课程列表
	 */
	url0007: path + 'edu/sign_lesson_list.do',

	/**
	 * 我的排课列表 
	 */
	url0008: path + 'edu/lesson_schedule_list.do',

	/**
	 * 题库列表页面 - 学生
	 */
	url0009: path + 'edu/question_list.do',

	url0010: path + 'edu/exam_paper_insert.do',

	/**
	 * 学生的排课列表  
	 */
	url0011: path + 'edu/student_schedule_list.do',

	/**
	 * 学生在某一节课的试卷列表，一节课可以包含多个课堂测验试卷 
	 */
	url0012: path + 'edu/student_paper_list.do',

	/**
	 * htm/student/paper_list.html 传值
	 */
	url0013: path + 'edu/exam_paper_msg.do',

	/**
	 * htm/student/question_list.html 页面向数据库插入数据 
	 * t_exam_answer 
	 */
	url0014: path + 'edu/student_insert_answer.do',

	/**
	 * 题库列表页面 - 教师 
	 */
	url0015: path + 'edu/question_list_teacher.do',

	/**
	 * htm/inspection/list.html 查看测验时的班级学生列表 
	 */
	url0016: path + 'edu/class_student_list.do',

	/**
	 * 个人中心-教师-课程表
	 */
	url0017: path + 'edu/info/teacher_syllabus.do',
	/**
	 * 个人中心-教师-课程点评
	 */
	url0018: path + 'edu/info/teacher_lessons.do',
	/**
	 * 个人中心-教师-课程点评-学生列表
	 */
	url0019: path + 'edu/info/teacher_classstudents.do'
}

/**
 * @descriptions 封装 非跨域ajax请求
 *
 * @param type_  必填post or get，一般默认填写post
 * @param url_ 所请求的后台路径  var url_ =  "login/login.do";
 * @param data_ 请求参数  {name:name_ , password:'0001'}  or $("#the-form-id").serializeArray()，一般选择form序列化的数组
 * @returns json 后台向页面返回的json字符串
 *
 * @date 2016年5月23日上午10:34:27
 * @author Yangcl
 * @version 1.0.1
 */
function sendAjax(type_, url_, data_) {
	var msg_ = null;
	$.ajax({
		async: false,
		dataType: "text",
		type: type_,
		url: url_,
		data: data_,
		success: function(msg) {
			msg_ = msg;
		},
		error: function(msg) {
			msg_ = msg;
		}
	});
	return msg_;
}

/**
 * 封装所有的sessionStorage设置时所用的key
 * 如：localStorage.setItem("user_info" , obj.data); 
 */
var session_ = {
	/**
	 * 保存用户登录信息  
	 */
	user_info: 'user_info',

	/**
	 * 保存教师开课的相关生成二维码的必要信息 
	 */
	qr_code: 'qrcode',

	/**
	 * t_lesson code
	 */
	lesson_code: 'lesson_code',

	/**
	 * lesson_list 页面的 课程名称
	 */
	lesson_class_info: 'lesson_class_info',

	/**
	 * 查看学生签到页面，用到的 schedule_code
	 */
	sign_schedule_code: 'sign_schedule_code',

	/**
	 * 查看课程题库页面，用到的 schedule_code
	 */
	sign_question_code: 'sign_question_code',

	/**
	 * htm/student/schedule_list.html 页面向下一个页面传递的schedule_code，作为查询课堂测试题目的依据
	 */
	student_paper_schedule_code: 'student_paper_schedule_code',

	/**
	 * 查看答题 保存排课列表中的班级列表 
	 */
	inspection_class_codes: 'inspection_class_codes',
}