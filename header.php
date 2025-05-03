<!-- Marquee Topbar -->
<div id="headerTop" class="sparkle-header-topbar py-2 text-center marquee-left">
    <i class="bi bi-stars"></i>Diwali sale is open now. Buy early for the best discounts! Happy Diwali...!!!!
    &nbsp; <i class="bi bi-whatsapp text-success"></i> +91 9999999999
    &nbsp; <i class="bi bi-telephone text-primary"></i> +91 8888888888, +91 7777777777
</div>

<!-- Main Header -->
<header class="sparkle-header">
    <!-- Top Info Bar -->
    <div class="sparkle-top-info py-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="">
                        <div class="info-item">
                            <i class="bi bi-geo-alt-fill"></i>
                            <span>1234 Fireworks Street, Chennai</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="info-item">
                        <i class="bi bi-clock-fill"></i>
                        <span>Mon-Sat: 9am - 8pm</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="info-item">
                        <i class="bi bi-envelope-fill"></i>
                        <a href="mailto:support@example.com">support@example.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Header Section -->
    <div class="sparkle-main-header-wrapper">
        <div class="container-fluid p-0">
            <div class="sparkle-main-header overflow-hidden py-3">
                <div class="row align-items-center">
                    <!-- Logo Area with Background Shape -->
                    <div class="col-lg-3 col-md-6 col-8">
                        <div class="sparkle-logo-area">
                            <div class="sparkle-logo">
                                <a href="index.php">
                                    <img src="images/logo.webp" alt="Fireworks Shop Logo" class="img-fluid"
                                        title="Sparkle Fireworks">
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Main Navigation (Visible on lg+ screens) -->
                    <div class="col-lg-6 d-none d-lg-block">
                        <nav class="sparkle-navigation">
                            <ul class="nav justify-content-center">
                                <li class="nav-item px-2">
                                    <a class="nav-link <?php if ($page == 'home')
                                        echo 'active'; ?>" href="index.php">Home</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link <?php if ($page == 'about')
                                        echo 'active'; ?>" href="about.php">About</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link <?php if ($page == 'products')
                                        echo 'active'; ?>" href="products.php">Products</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link <?php if ($page == 'safetytips')
                                        echo 'active'; ?>" href="safetytips.php">Safety Tips</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link <?php if ($page == 'contact')
                                        echo 'active'; ?>" href="contact.php">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!-- Header Actions & Mobile Menu Toggle -->
                    <div class="col-lg-3 col-md-6 col-4">
                        <div class="sparkle-header-actions text-right">
                            <button class="mobile-menu-toggle d-lg-none" type="button" data-toggle="modal"
                                data-target="#offcanvasMenu">
                                <i class="bi bi-list"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Offcanvas Menu for Mobile & Tablet -->
<div class="modal fade sparkle-offcanvas-menu" id="offcanvasMenu" tabindex="-1" role="dialog"
    aria-labelledby="offcanvasMenuLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-slideout" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">
                    <img src="images/logo.webp" alt="Fireworks Shop Logo" class="img-fluid">
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <nav class="offcanvas-navigation">
                    <ul class="nav flex-column">
                        <li class="nav-item px-2">
                            <a class="nav-link <?php if ($page == 'home')
                                echo 'active'; ?>" href="index.php">Home</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link <?php if ($page == 'about')
                                echo 'active'; ?>" href="about.php">About</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link <?php if ($page == 'products')
                                echo 'active'; ?>" href="products.php">Products</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link <?php if ($page == 'safetytips')
                                echo 'active'; ?>" href="safetytips.php">Safety Tips</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link <?php if ($page == 'contact')
                                echo 'active'; ?>" href="contact.php">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div class="offcanvas-contact-info mt-4">
                    <h5>Contact Information</h5>
                    <div class="info-item"><i class="bi bi-geo-alt-fill"></i> 1234 Fireworks Street, Chennai</div>
                    <div class="info-item"><i class="bi bi-clock-fill"></i> Mon-Sat: 9am - 8pm</div>
                    <div class="info-item">
                        <a href="mailto:support@example.com"><i class="bi bi-envelope-fill"></i> support@example.com</a>
                    </div>
                    <div class="info-item">
                        <a href="tel:+911234567890"><i class="bi bi-telephone-fill"></i> +91 12345 67890</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





<script src="js/marquee.js"></script>
<script>
    $('.marquee-left').marquee({
        duration: 16000,
        gap: 150,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: false,
        pauseOnHover: true
    });
</script>