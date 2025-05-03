<?php $page = "home"; ?>
<!DOCTYPE html>
<html lang="en">

<head itemscope itemtype="http://www.schema.org/website">
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta property="og:title" content="">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="">
	<meta property="og:url" content="https://.com">
	<meta property="og:image" content="https://.com/images/android-icon-192x192.png">
	<meta name="keywords" content="">
	<meta property="og:description" name="description" content="">
	<meta name="robots" content="all">
	<meta name="revisit-after" content="10 Days">
	<meta name="copyright" content="">
	<meta name="language" content="English">
	<meta name="distribution" content="Global">
	<meta name="web_author" content="srisoftwarez.com">
	<meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
	<link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
	<link rel="icon" sizes="192x192" href="images/android-icon-192x192.png">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/hover-min.css">
	<link rel="stylesheet" href="css/swiper.css">
	<link rel="stylesheet" href="css/odometer-theme.css">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</head>

<body itemscope itemtype="http://schema.org/WebPage">
	<?php include_once "header.php"; ?>
	<!--index carousel -->
	<section class="home-carousel">
		<div class="swiper home-carousel-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="images/slide-1.webp" class="img-fluid" alt="Fireworks Slide 1">
				</div>
				<div class="swiper-slide">
					<img src="images/slide-2.webp" class="img-fluid" alt="Fireworks Slide 2">
				</div>
			</div>
		</div>
	</section>
	<!-- welcome section index -->
	<section class="welcome-section py-5">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-6 welcome-section-content mb-4 mb-lg-0">
					<div class="welcome-section-text-wrapper p-4">
						<h1 class="welcome-section-title mb-3">Welcome to <span class="highlight">Demo Traders</span>
						</h1>
						<h3 class="welcome-section-subtitle mb-4">Light Up Your Celebrations</h3>
						<p class="welcome-section-description mb-4">Experience the magic of premium fireworks for all
							your special occasions. From dazzling sparklers to spectacular aerial displays, we offer the
							finest selection for both retail customers and wholesale partners.</p>
						<div class="welcome-section-buttons">
							<a href="products.php" class="welcome-section-btn welcome-section-btn-primary mr-3">Explore
								Products</a>
							<a href="contact.php" class="welcome-section-btn welcome-section-btn-secondary">Wholesale
								Inquiry</a>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-6">
					<div class="welcome-section-visual">
						<div class="welcome-section-card">
							<div class="welcome-section-badge">
								<span>NEW</span>
							</div>
							<h4 class="welcome-section-card-title">Festival Special Collection</h4>
							<p class="welcome-section-card-text">Limited time offer on our premium fireworks packages.
								Perfect for upcoming celebrations!</p>
							<div class="welcome-section-countdown" id="special-offer-countdown">
								<div class="welcome-section-timer">
									<span class="welcome-section-days odometer">0</span>
									<small>Days</small>
								</div>
								<div class="welcome-section-timer">
									<span class="welcome-section-hours odometer">0</span>
									<small>Hours</small>
								</div>
								<div class="welcome-section-timer">
									<span class="welcome-section-secs odometer">0</span>
									<small>Secs</small>
								</div>
							</div>
							<a href="products.php" class="welcome-section-card-btn">View Special Offers</a>
						</div>
						<div class="welcome-section-features">
							<div class="welcome-section-feature">
								<i class="bi bi-truck-front-fill welcome-section-icon"></i>
								<span>Fast Delivery</span>
							</div>
							<div class="welcome-section-feature">
								<i class="bi bi-shield-fill-check welcome-section-icon"></i>
								<span>Safety Certified</span>
							</div>
							<div class="welcome-section-feature">
								<i class="bi bi-stars welcome-section-icon"></i>
								<span>Premium Quality</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<?php include_once "footer.php"; ?>
	<div class="fixed point w0">
		<a href="https://api.whatsapp.com/send?phone=919999999999">
			<img src="images/whatsappicon.png" class="priceicn float-left" alt="whatsapp contact" title="demo traders">
		</a>
	</div>
	<div class="fixed point1 w0 d-none d-lg-block">
		<span class="time-of-year">
			<img src="images/callicon.png" class="priceicn float-left" alt="phone contact" title="Demo Traders">
			<div class="tooltip text-white carter text-center"> For More Details Call <br>
				<i class="fa fa-phone text-white"></i> +91 99999 99999
			</div>
		</span>
	</div>
	<div class="fixed point1 w0 d-lg-none">
		<a href="tel:+919999999999">
			<img src="images/callicon.png" class="priceicn float-left" alt="" title="Demo Traders">
		</a>
	</div>
	<div class="fixed point2">
		<a href="products.php">
			<img src="images/quickpurchase.png" class="priceicn2 float-right blink" alt="" title="">
		</a>
	</div>
	<script src="js/wow.js"></script>
	<script>
		new WOW().init();
	</script>
	<script src="js/odometer.min.js"></script>
	<script src="js/swiper-bundle.min.js"></script>
	<script src="js/script.js"></script>
</body>

</html>