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
			<div class="row">
				<div class="col-12 col-md-6 col-lg-6 welcome-section-content mb-4 mb-lg-0">
					<div class="welcome-section-text-wrapper p-4">
						<h1 class="welcome-section-title mb-3">Welcome to <span class="highlight">Demo Traders</span>
						</h1>
						<h3 class="welcome-section-subtitle mb-4">Light Up Your Celebrations</h3>
						<p class="welcome-section-description mb-4">Experience the magic of premium fireworks for all
							your special occasions. From dazzling sparklers to spectacular aerial displays, we offer the
							finest selection for both retail customers and wholesale partners.</p>
						<div class="welcome-section-buttons mb-lg-5">
							<a href="products.php" class="welcome-section-btn welcome-section-btn-primary mr-3">Explore
								Products</a>
							<a href="contact.php" class="welcome-section-btn welcome-section-btn-secondary">Wholesale
								Inquiry</a>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-6">
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
	<!-- index parallax -->
	<section class="parallax-section position-relative overflow-hidden">
		<div class="parallax-wrapper">
			<img class="parallax-img img-fluid" src="images/parallax.webp" alt="Parallax Demo">
			<div class="overlay"></div>
			<div class="text-content d-flex flex-column align-items-center justify-content-center">
				<h1 class="gradient-text"><span>Your Trusted Firecracker Partner</span>
					<span>Bringing Light to Every Celebration</span>
				</h1>
			</div>
			<a class="parallax-section-btn" href="about.php">Learn More</a>
		</div>
	</section>
	<!-- products section swiper  -->
	<!-- Products Section -->
	<section class="products-section py-5">
		<div class="container-fluid px-5">
			<div class="row mb-4">
				<div class="col-12">
					<div class="products-section-header text-center">
						<h2 class="products-section-title">Featured <span class="highlight">Products</span></h2>
						<p class="products-section-subtitle">Discover our premium selection of fireworks for your
							celebrations</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<!-- Swiper container -->
					<div class="products-section-swiper-container">
						<div class="swiper-wrapper">
							<!-- Slide 1 -->
							<div class="swiper-slide">
								<div class="products-section-card">
									<div class="products-section-card-badge">Popular</div>
									<div class="products-section-card-image">
										<img src="images/product-1.webp" alt="Stellar Burst Firework" class="img-fluid">
									</div>
									<div class="products-section-card-content">
										<h4 class="products-section-card-title">Bombs</h4>
										<div class="products-section-card-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-half"></i>
											<span>(128)</span>
										</div>
										<p class="products-section-card-desc">Bright green comet tail launch
											with a purple burst finale.</p>
										<div class="products-section-card-footer">
											<a href="products.php" target="_blank">
												<button class="products-section-card-btn">
													<i class="bi bi-arrow-right-circle-fill"></i> Buy Now
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 2 -->
							<div class="swiper-slide">
								<div class="products-section-card">
									<div class="products-section-card-badge products-section-card-badge-new">New</div>
									<div class="products-section-card-image">
										<img src="images/product-2.webp" alt="Golden Comet Firework" class="img-fluid">
									</div>
									<div class="products-section-card-content">
										<h4 class="products-section-card-title">Ground Chakkar</h4>
										<div class="products-section-card-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star"></i>
											<span>(87)</span>
										</div>
										<p class="products-section-card-desc">Whirls on the ground with
											a ring of vibrant rainbow sparks.</p>
										<div class="products-section-card-footer">
											<a href="products.php" target="_blank">
												<button class="products-section-card-btn">
													<i class="bi bi-arrow-right-circle-fill"></i> Buy Now
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 3 -->
							<div class="swiper-slide">
								<div class="products-section-card">
									<div class="products-section-card-badge products-section-card-badge-sale">Sale</div>
									<div class="products-section-card-image">
										<img src="images/product-3.webp" alt="Thunder King Firework" class="img-fluid">
									</div>
									<div class="products-section-card-content">
										<h4 class="products-section-card-title">Flower Pots</h4>
										<div class="products-section-card-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<span>(206)</span>
										</div>
										<p class="products-section-card-desc">Shoots a fountain of silver sparks
											rising high."</p>
										<div class="products-section-card-footer text-left">
											<a href="products.php" target="_blank">
												<button class="products-section-card-btn">
													<i class="bi bi-arrow-right-circle-fill"></i> Buy Now
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 4 -->
							<div class="swiper-slide">
								<div class="products-section-card">
									<div class="products-section-card-image">
										<img src="images/product-4.webp" alt="Rainbow Fountain Firework"
											class="img-fluid">
									</div>
									<div class="products-section-card-content">
										<h4 class="products-section-card-title">Sizzling Sparklers</h4>
										<div class="products-section-card-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-half"></i>
											<i class="bi bi-star"></i>
											<span>(93)</span>
										</div>
										<p class="products-section-card-desc">Glows with golden fire trails for joyful
											hand-held sparkle.</p>
										<div class="products-section-card-footer">
											<a href="products.php" target="_blank">
												<button class="products-section-card-btn">
													<i class="bi bi-arrow-right-circle-fill"></i> Buy Now
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 5 -->
							<div class="swiper-slide">
								<div class="products-section-card">
									<div class="products-section-card-badge products-section-card-badge-limited">Limited
									</div>
									<div class="products-section-card-image">
										<img src="images/product-5.webp" alt="Phoenix Rising Firework"
											class="img-fluid">
									</div>
									<div class="products-section-card-content">
										<h4 class="products-section-card-title">Roaring Rockets</h4>
										<div class="products-section-card-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-half"></i>
											<span>(152)</span>
										</div>
										<p class="products-section-card-desc">Launches with a sharp whistle
											and bursts into aerial stars</p>
										<div class="products-section-card-footer">
											<a href="products.php" target="_blank">
												<button class="products-section-card-btn">
													<i class="bi bi-arrow-right-circle-fill"></i> Buy Now
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 6 -->
							<div class="swiper-slide">
								<div class="products-section-card">
									<div class="products-section-card-badge products-section-card-badge-wholesale">
										Wholesale</div>
									<div class="products-section-card-image">
										<img src="images/product-6.webp" alt="Silver Storm Firework Pack"
											class="img-fluid">
									</div>
									<div class="products-section-card-content">
										<h4 class="products-section-card-title">Kids Cap Guns</h4>
										<div class="products-section-card-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star"></i>
											<span>(76)</span>
										</div>
										<p class="products-section-card-desc">Snap-fit plastic rings
											that deliver loud, single-shot bangs.</p>
										<div class="products-section-card-footer">
											<a href="products.php" target="_blank">
												<button class="products-section-card-btn">
													<i class="bi bi-arrow-right-circle-fill"></i> Buy Now
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row mt-4">
				<div class="col-12 text-center">
					<a href="products.php" class="theme-btn mt-lg-3">
						View All Products <i class="bi bi-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>
	</section>
	<!-- achievements section -->
	<!-- Achievements Section -->
	<section class="achievements-section py-5">
		<div class="achievements-overlay"></div>
		<div class="container">
			<div class="row">
				<!-- Left Content Column -->
				<div class="col-12 col-md-5 col-lg-5 achievements-content">
					<h2 class="achievements-heading">Our Achievements</h2>
					<p class="achievements-description">
						With over two decades of experience in the fireworks industry, we've become the trusted supplier
						for celebrations nationwide. Our commitment to quality, safety, and spectacular displays has
						earned us recognition as industry leaders.
					</p>
					<a href="#contact" class="achievements-cta btn">Partner With Us <i
							class="bi bi-arrow-right"></i></a>
				</div>

				<!-- Right Counter Column -->
				<div class="col-12 col-md-7 col-lg-7">
					<div class="row achievements-counters">
						<!-- Counter 1 -->
						<div class="col-6 col-md-6 col-lg-6 mb-4">
							<div class="achievements-counter-wrapper shape-1">
								<div class="achievements-counter-content">
									<span class="achievements-counter-number" data-count="20">0</span><span
										class="achievements-counter-plus">+</span>
									<h4 class="achievements-counter-title">Years Experience</h4>
								</div>
							</div>
						</div>

						<!-- Counter 2 -->
						<div class="col-6 col-md-6 col-lg-6 mb-4">
							<div class="achievements-counter-wrapper shape-2">
								<div class="achievements-counter-content">
									<span class="achievements-counter-number text-dark" data-count="5000">0</span><span
										class="achievements-counter-plus text-dark">+</span>
									<h4 class="achievements-counter-title text-dark">Happy Customers</h4>
								</div>
							</div>
						</div>

						<!-- Counter 3 -->
						<div class="col-6 col-md-6 col-lg-6">
							<div class="achievements-counter-wrapper shape-3">
								<div class="achievements-counter-content">
									<span class="achievements-counter-number text-dark" data-count="250">0</span><span
										class="achievements-counter-plus text-dark">+</span>
									<h4 class="achievements-counter-title text-dark">Firework Varieties</h4>
								</div>
							</div>
						</div>

						<!-- Counter 4 -->
						<div class="col-6 col-md-6 col-lg-6">
							<div class="achievements-counter-wrapper shape-4">
								<div class="achievements-counter-content">
									<span class="achievements-counter-number" data-count="75">0</span><span
										class="achievements-counter-plus">%</span>
									<h4 class="achievements-counter-title">Repeat Business</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- wholesale & Retail Section -->
	<section class="section-wholesale-retail py-5 position-relative">
		<div class="container">
			<div class="heading-area text-center mb-5">
				<h2 class="title">Retail & Wholesale Fireworks</h2>
				<p class="subtitle">
					Direct from manufacturers – shop bulk fireworks or festive personal packs at best prices.
				</p>
			</div>
			<div class="row align-items-stretch">
				<!-- Retail Card -->
				<div class="col-lg-6 col-md-6 col-12 mb-4">
					<div class="card-box h-100 d-flex flex-column bg-white shadow rounded p-4">
						<div class="card-img mb-3">
							<img src="images/index-retail.webp" alt="Retail Fireworks" class="img-fluid">
						</div>
						<div class="card-body flex-grow-1">
							<h4 class="card-title text-uppercase">Retail</h4>
							<p class="card-text">
								Festive packs for families & individuals with our most popular items.
							</p>
						</div>
						<div class="text-center mt-3">
							<a href="products.php" class="btn btn-outline-dark rounded-pill">
								<i class="bi bi-cart3 mr-1"></i> Buy Now
							</a>
						</div>
					</div>
				</div>

				<!-- Wholesale Card -->
				<div class="col-lg-6 col-md-6 col-12 mb-4">
					<div class="card-box h-100 d-flex flex-column bg-white shadow rounded p-4">
						<div class="card-img mb-3">
							<img src="images/wholesale.webp" alt="Wholesale Fireworks" class="img-fluid rounded">
						</div>
						<div class="card-body flex-grow-1">
							<h4 class="card-title text-uppercase">Wholesale</h4>
							<p class="card-text">
								Large quantity crates, cartons, and variety packs for dealers & vendors.
							</p>
						</div>
						<div class="text-center mt-3">
							<a href="products.php" class="btn btn-outline-dark rounded-pill">
								<i class="bi bi-box-seam mr-1"></i> Buy Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- safety section -->
	<!-- Safety Section -->
	<section class="safety-section py-5">
		<div class="container">
			<div class="row align-items-center">
				<!-- Left Column with Image -->
				<div class="col-12 col-md-6 col-lg-5 mb-4 mb-lg-0">
					<div class="safety-image-container">
						<div class="safety-image-wrapper">
							<img src="images/safety-index.webp" alt="Fireworks Safety Standards"
								class="img-fluid safety-image">
							<div class="safety-badge">
								<i class="bi bi-shield-check"></i>
								<span>Certified</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Column with Content -->
				<div class="col-12 col-md-6 col-lg-7">
					<div class="safety-content">
						<span class="safety-tagline">Your Safety Is Our Priority</span>
						<h2 class="safety-heading">Safety Guaranteed <span class="safety-highlight">Fireworks</span>
						</h2>

						<div class="safety-features">
							<div class="safety-feature-item">
								<div class="safety-feature-icon">
									<i class="bi bi-check-circle"></i>
								</div>
								<div class="safety-feature-text">
									<h4>Government Certified</h4>
									<p>All our products meet and exceed government safety regulations and are thoroughly
										tested before distribution.</p>
								</div>
							</div>

							<div class="safety-feature-item">
								<div class="safety-feature-icon">
									<i class="bi bi-award"></i>
								</div>
								<div class="safety-feature-text">
									<h4>Quality Assurance</h4>
									<p>Each firework undergoes rigorous quality control checks to ensure consistent
										performance and maximum safety.</p>
								</div>
							</div>

							<div class="safety-feature-item">
								<div class="safety-feature-icon">
									<i class="bi bi-info-circle"></i>
								</div>
								<div class="safety-feature-text">
									<h4>Clear Instructions</h4>
									<p>Every product comes with detailed usage instructions and safety precautions in
										multiple languages.</p>
								</div>
							</div>
						</div>

						<p class="safety-description">
							At Demo Traders, we prioritize your safety above everything else. Our fireworks are
							manufactured with the highest quality materials and undergo extensive testing to ensure they
							meet all safety standards. We believe that celebrations should be both spectacular and
							secure.
						</p>

						<a href="safetytips.php" class="safety-cta">
							<span class="safety-cta-text">View Safety Tips</span>
							<span class="safety-cta-icon"><i class="bi bi-arrow-right"></i></span>
							<span class="safety-cta-bg"></span>
						</a>
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
	<script src="js/simpleParallax.js"></script>
	<script src="js/script.js"></script>
</body>

</html>