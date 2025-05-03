// index carousel swiper
document.addEventListener("DOMContentLoaded", () => {
    const homeCarouselSwiper = new Swiper(".home-carousel-swiper", {
      loop: true,
      speed: 600,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-20%", 0, -1],
          opacity: 0.5,
          scale: 0.8,
        },
        next: {
          translate: ["20%", 0, -1],
          opacity: 0.5,
          scale: 0.8,
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // No pagination
      // No navigation
    });
  });
  // index page welcome section countdown meter using odometer.js
// Welcome Section Countdown Animation with Odometer
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Odometer instances for days, hours, and seconds
  const daysOdometer = new Odometer({
    el: document.querySelector('.welcome-section-days'),
    value: 0,
    format: 'd',
    duration: 1000
  });
  
  const hoursOdometer = new Odometer({
    el: document.querySelector('.welcome-section-hours'),
    value: 0,
    format: 'd',
    duration: 1000
  });
  
  const secsOdometer = new Odometer({
    el: document.querySelector('.welcome-section-secs'),
    value: 0,
    format: 'd',
    duration: 1000
  });
  
  // Set initial values with a slight delay for visual effect
  setTimeout(function() {
    daysOdometer.update(10); // Initial days value
    hoursOdometer.update(8);  // Initial hours value
    secsOdometer.update(30); // Initial seconds value
  }, 500);
  
  // Calculate end date (10 days, 8 hours from now)
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 10);
  endDate.setHours(endDate.getHours() + 8);
  endDate.setSeconds(endDate.getSeconds() + 30);
  
  // Update countdown every second (for seconds display)
  function updateCountdown() {
    const now = new Date();
    const timeDiff = endDate - now;
    
    if (timeDiff <= 0) {
      // Countdown has ended
      daysOdometer.update(0);
      hoursOdometer.update(0);
      secsOdometer.update(0);
      clearInterval(countdownInterval); // Stop the interval when countdown ends
      return;
    }
    
    // Calculate remaining days, hours, seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    // Update odometer values with smooth animation
    daysOdometer.update(days);
    hoursOdometer.update(hours);
    secsOdometer.update(seconds);
  }
  
  // Initial update
  updateCountdown();
  
  // Update countdown every second (for accurate seconds display)
  const countdownInterval = setInterval(updateCountdown, 1000);
  
  // Add visual pulse effect to the countdown when hovered
  const countdownEl = document.querySelector('.welcome-section-countdown');
  if (countdownEl) {
    countdownEl.addEventListener('mouseenter', function() {
      document.querySelectorAll('.welcome-section-timer').forEach(timer => {
        timer.classList.add('welcome-section-timer-pulse');
      });
    });
    
    countdownEl.addEventListener('mouseleave', function() {
      document.querySelectorAll('.welcome-section-timer').forEach(timer => {
        timer.classList.remove('welcome-section-timer-pulse');
      });
    });
  }
});
// products swiper index section
// Products Section Swiper Initialization with Custom Animation
document.addEventListener('DOMContentLoaded', function() {
  // Initialize product swiper with custom smooth animations
  const productsSwiper = new Swiper('.products-section-swiper-container', {
    // Enable smooth transitions
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    preloadImages: true,
    lazy: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Enable hardware acceleration for smoother animations
    watchSlidesProgress: true,
    virtualTranslate: false,
    // Custom slide effects
    effect: 'slide',
    // Prevent blinking/flickering with improved image handling
    updateOnImagesReady: true,
    // Enable touch swiping on mobile with improved response
    touchRatio: 1,
    touchAngle: 45,
    // Optimize rendering performance
    renderSlide: function (index, slide) {
      return slide;
    },
    // Smooth transition between slides with easing
    slideToClickedSlide: true,
    // Responsive breakpoints
    breakpoints: {
      // Mobile devices (up to 767px)
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // Tablets (768px and up)
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // Desktops (992px and up)
      992: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      // Large desktops (1200px and up)
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    // Custom navigation
    navigation: {
      nextEl: '.products-section-swiper-next',
      prevEl: '.products-section-swiper-prev',
    },
    // Custom transition effects to reduce flickering
    on: {
      beforeInit: function() {
        // Prepare slides before initialization
        const swiperContainer = document.querySelector('.products-section-swiper-container');
        if (swiperContainer) {
          swiperContainer.classList.add('swiper-initialized');
        }
      },
      init: function() {
        // Apply initial visual state with smooth fade in
        this.slides.forEach(function(slide) {
          slide.style.opacity = '1';
          slide.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
      },
      slideChangeTransitionStart: function() {
        // Custom animation for slide change
        const activeSlide = this.slides[this.activeIndex];
        const prevSlide = this.slides[this.previousIndex];
        
        if (activeSlide) {
          activeSlide.style.transition = 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.8s ease';
          activeSlide.style.transform = 'scale(1)';
          activeSlide.style.opacity = '1';
          
          // Add subtle "pop" effect to active slide
          setTimeout(() => {
            activeSlide.style.transform = 'scale(1.02)';
            setTimeout(() => {
              activeSlide.style.transform = 'scale(1)';
            }, 150);
          }, 300);
        }
        
        if (prevSlide) {
          prevSlide.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
          prevSlide.style.opacity = '0.7';
        }
      },
      slideChangeTransitionEnd: function() {
        // Ensure all non-active slides are properly styled after transition
        this.slides.forEach((slide, index) => {
          if (index !== this.activeIndex) {
            slide.style.opacity = '1';
          }
        });
      },
      touchStart: function() {
        // Optimize touch start behavior
        document.documentElement.style.setProperty('--swiper-theme-transition', 'transform 0.3s ease');
      },
      touchEnd: function() {
        // Restore transitions after touch end
        document.documentElement.style.setProperty('--swiper-theme-transition', 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)');
      }
    }
  });
  
  // Additional hover effects for product cards
  const productCards = document.querySelectorAll('.products-section-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const image = this.querySelector('.products-section-card-image img');
      if (image) {
        image.style.transition = 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
      }
    });
  });
  
  // Improve button hover animations
  const cardButtons = document.querySelectorAll('.products-section-card-btn');
  cardButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  });
});

// // index parallax
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.parallax-img');
  new SimpleParallax(images, {
    scale: 1.3,
    delay: 0.5,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'up'
  });
});

