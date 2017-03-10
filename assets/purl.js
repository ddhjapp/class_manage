var path = 'http://localhost:8080/matrix-admin/';
//var path = 'http://stockwyz.xicp.net/matrix-admin/';
var purl = { 
	
	url0001: path + 'edu/start_lesson.do',  // 教师开课接口
	url0002: path + 'edu/sign_list.do',   // 已签到学生列表接口
	url0003: path + 'edu/student_sign.do' ,   // 学生签到接口
	url0004: path + 'edu/login.do',    // 用户登陆接口
	url0005: path + 'edu/registe.do'  // 用户注册接口 
	
}

function sendAjax(type_, url_ , data_){
    var msg_ = null;
    $.ajax({
        dataType : "text",
        type :type_,
        url : url_,
        data : data_,
        async : false,
        success : function(msg) {
            msg_ = msg;
        },
        error: function(msg) {
            msg_ = msg;
        }
    });
    return msg_;
}