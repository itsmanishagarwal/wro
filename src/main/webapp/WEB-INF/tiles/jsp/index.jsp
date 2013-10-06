<!DOCTYPE HTML>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"%>

<html>
<head>
<meta charset="utf-8">
<title>My Sample App</title>
</head>
<body>

	<link rel="stylesheet"
		href="/<c:out value="${appName}"/>/css/bootstrap.css" type="text/css" />

	<div class="container">
		<h1>
			<a href="#">Bootstrap Test Site</a>
		</h1>
		<div class="navbar">
			<div class="navbar-inner">
				<div class="container">
					<ul class="nav">
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#">Projects</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Downloads</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="hero-unit">
			<h1>Marketing stuff!</h1>

			<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.
				Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
				nibh, ut fermentum massa justo sit amet risus.</p>

			<a href="#" class="btn btn-large btn-success">Get Started</a>
		</div>
		<div class="row">
			<div class="span4">
				<ul class="nav nav-list">
					<li class="nav-header">What we are?</li>
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#">Our Clients</a></li>
					<li><a href="#">Our Services</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">Contact Us</a></li>
					<li class="nav-header">Our Friend</li>
					<li><a href="#">Google</a></li>
					<li><a href="#">Yahoo!</a></li>
					<li><a href="#">Bing</a></li>
					<li><a href="#">Microsoft</a></li>
					<li><a href="#">Gadgetic World</a></li>
				</ul>
			</div>
			<div class="span8">
				<h3>How we started ?</h3>

				<p>Donec id elit non mi porta gravida at eget metus. Fusce
					dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
					ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
					magna mollis euismod. Donec sed odio dui.</p>

				<p>Donec id elit non mi porta gravida at eget metus. Fusce
					dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
					ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
					magna mollis euismod. Donec sed odio dui.</p>

				<h3>How do we market?</h3>

				<p>Donec id elit non mi porta gravida at eget metus. Fusce
					dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
					ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
					magna mollis euismod. Donec sed odio dui.</p>

				<p>Donec id elit non mi porta gravida at eget metus. Fusce
					dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
					ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
					magna mollis euismod. Donec sed odio dui.</p>
			</div>
		</div>
		<div class="row">
			<div class="span4">
				<h4 class="muted text-center">Meet Our Clients</h4>
				<p>Donec id elit non mi porta gravida at eget metus. Fusce
					dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
					ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
					magna mollis euismod. Donec sed odio dui.</p>
				<a href="#" class="btn"><i class="icon-user"></i> Our Clients</a>
			</div>
			<div class="span4">
				<h4 class="muted text-center">Know Our Employees</h4>
				<p>Donec id elit non mi porta gravida at eget metus. Fusce
					dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
					ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
					magna mollis euismod. Donec sed odio dui.</p>
				<a href="#" class="btn btn-success"><i
					class="icon-star icon-white"></i> Our Employees</a>
			</div>
			<div class="span4">
				<h4 class="muted text-center">Reach Us</h4>
				<p>Donec id elit non mi porta gravida at eget metus. Fusce
					dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
					ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
					magna mollis euismod. Donec sed odio dui.</p>
				<a href="#" class="btn btn-info">Contact Us</a>
			</div>
		</div>
		<hr>
		<div class="footer">
			<p>&copy; 2013</p>
		</div>



	</div>





	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script type="text/javascript"
		src="/<c:out value="${appName}"/>/js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript"
		src="/<c:out value="${appName}"/>/js/wro.js"></script>
	<script src="/<c:out value="${appName}"/>/js/bootstrap.js"></script>
</body>
</html>