var path = 'http://127.0.0.1:8080/matrix-admin/';
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
	url0003: path + 'edu/student_sign.do' ,    
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
	 * 题库列表页面 
	 */
	url0009: path + 'edu/question_list.do',
	
	url0010: path + 'edu/exam_paper_insert.do', 
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
function sendAjax(type_, url_ , data_){
    var msg_ = null;
    $.ajax({
    	async: false,
        dataType : "text",
        type :type_,
        url : url_,
        data : data_,
        success : function(msg) {
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
var session_ ={
	/**
	 * 保存用户登录信息  
	 */
	user_info: 'user_info' ,  
	
	/**
	 * 保存教师开课的相关生成二维码的必要信息
	 */
	qr_code:'qrcode',
	
	/**
	 * t_lesson code
	 */
	lesson_code:'lesson_code',
	
	/**
	 * lesson_list 页面的 课程名称
	 */
	lesson_class_info : 'lesson_class_info',
	
	/**
	 * 查看学生签到页面，用到的 schedule_code
	 */
	sign_schedule_code:'sign_schedule_code',
	
	/**
	 * 查看课程题库页面，用到的 schedule_code
	 */
	sign_question_code:'sign_question_code',
}
