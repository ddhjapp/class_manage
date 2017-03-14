var StudentStudy={
	/**
	 * 课程表
	 */
	syllabus:function(){
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
