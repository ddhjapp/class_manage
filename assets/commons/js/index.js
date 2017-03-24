var Index = {
	grid: function(userType) {
		var url = "json/student/index.json";
		if(userType == 'T0001') {
			url = "json/teacher/index.json";
		}
		mui.getJSON(url, {}, function(result) {
			var html = '';
			for(var key in result) {
				var obj = result[key];
				html += '<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">';
				html += '<a id="' + obj.id + '" href="javascript:void(0)">';
				html += '<span class="mui-icon ' + obj.icon + '"></span>';
				html += '<div class="mui-media-body">' + obj.name + '</div>';
				html += '</a>';
				html += '</li>';
			}
			$("#gridMenus").html(html);
		});
	}
};