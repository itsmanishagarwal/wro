<html>
<head>
<title>Sample App for Wro4j</title>

</head>
<body>
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script type="text/javascript" src="/wro/js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/wro/js/wro.js"></script>
<c:choose>
	<c:when test="${!empty name && name != ''}">
		Your name: <c:out value="${name} "/>
		<br>
		<br>

Not <c:out value="${name} "/>
<br>
Provide your name
	</c:when>
	<c:otherwise>
		I dont know you!
		<br>
		<br>

What is your name?
	</c:otherwise>
</c:choose>

<form action="submitName">
	<input name="name" value=""/>
	<button type="submit" value="">Submit</button>
</form>
<button id="getappName">Get App Name</button>
<button id="abort">Abort</button>
<div id="appName"></div>

<body>
  <div id="images">

</div>
<!--   script>
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
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
  });</script -->

</body>
</html>