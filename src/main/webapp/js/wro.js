$(document).ready(function() {

	$.ajaxSetup({
		beforeSend : function(jqXHR, settings){
			url = settings.url;
			if (url.match(/app/g)){
				settings.type="POST";
				this.type = "POST";
			}
			return true;
		},
		complete : function(xhr, status) {
			if (xhr.status == 401) {
				window.location = "/portal/login?timeout";
			}
		}
	});
	$("#getappName").click(function() {
		$.ajax({url: "http://myhost:8080/wro/wro/appNameNew",
				dataType: 'jsonp',
				jsonp : "jsoncallback", 
				success: function(data) {
				      $("<span>").text(data.manish).appendTo("#images");
				}
		});
		/*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
				  {
				    tags: "mount rainier",
				    tagmode: "any",
				    format: "json"
				  },
				  function(data) {
				    $.each(data.items, function(i,item){
				      $("<img/>").attr("src", item.media.m).appendTo("#images");
				      if ( i == 3 ) return false;
				    });
				  });*/		
	});
	
});

