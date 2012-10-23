$(document).ready(function() {
	$("#getappName").click(function(){
		  $.ajax( {
				type : "POST",
				url : "appName",
				dataType : "text/html",
				success : function(html) {
					$("#appName").html(html);
				}
			});
	});
});