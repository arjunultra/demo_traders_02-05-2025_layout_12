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
  // Select elements for days, hours, and seconds
  const daysElement = document.querySelector('.welcome-section-days');
  const hoursElement = document.querySelector('.welcome-section-hours');
  const secsElement = document.querySelector('.welcome-section-secs');
  const countdownEl = document.querySelector('.welcome-section-countdown');

  if (daysElement && hoursElement && secsElement) {
    // Initialize Odometer instances
    const daysOdometer = new Odometer({
      el: daysElement,
      value: 0,
      format: 'd',
      duration: 1000
    });

    const hoursOdometer = new Odometer({
      el: hoursElement,
      value: 0,
      format: 'd',
      duration: 1000
    });

    const secsOdometer = new Odometer({
      el: secsElement,
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

    // Calculate end date (10 days, 8 hours, 30 seconds from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);
    endDate.setHours(endDate.getHours() + 8);
    endDate.setSeconds(endDate.getSeconds() + 30);

    // Update countdown every second
    function updateCountdown() {
      const now = new Date();
      const timeDiff = endDate - now;

      if (timeDiff <= 0) {
        // Countdown has ended
        daysOdometer.update(0);
        hoursOdometer.update(0);
        secsOdometer.update(0);
        clearInterval(countdownInterval);
        return;
      }

      // Calculate remaining days, hours, and seconds
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Update odometer values
      daysOdometer.update(days);
      hoursOdometer.update(hours);
      secsOdometer.update(seconds);
    }

    // Initial update
    updateCountdown();

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Add visual pulse effect to the countdown when hovered
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
    scale: 1.5,
    delay: 5.0,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'up'
  });
});
// theme button effects
function applyThemeButtonEffects(selector) {
  const btn = document.querySelector(selector);
  if (!btn) return;

  btn.addEventListener('mouseenter', () => {
    btn.animate(
      [
        { transform: 'scale(1)', boxShadow: '0 0 15px var(--red)' },
        { transform: 'scale(1.1)', boxShadow: '0 0 40px var(--yellow)' }
      ],
      {
        duration: 500,
        fill: 'forwards',
        easing: 'ease-out'
      }
    );
  });

  btn.addEventListener('mouseleave', () => {
    btn.animate(
      [
        { transform: 'scale(1.1)', boxShadow: '0 0 40px var(--yellow)' },
        { transform: 'scale(1)', boxShadow: '0 0 15px var(--red)' }
      ],
      {
        duration: 400,
        fill: 'forwards',
        easing: 'ease-in'
      }
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyThemeButtonEffects('.theme-button');
});
// index counter
document.addEventListener('DOMContentLoaded', function() {
  // Function to animate counters
  function animateCounters() {
    const counters = document.querySelectorAll('.achievements-counter-number');
    counters.forEach(counter => {
      const countTo = parseInt(counter.getAttribute('data-count'), 10);
      
      // Only animate if not already animated
      if (!counter.classList.contains('counted')) {
        let countNum = 0;
        const duration = 2000;
        const increment = countTo / (duration / 16.67); // Assuming 60 FPS

        function updateCounter() {
          countNum += increment;
          if (countNum < countTo) {
            counter.textContent = Math.floor(countNum);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = countTo;
            counter.classList.add('counted');
          }
        }

        updateCounter();
      }
    });
  }

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Check on scroll and page load
  function checkVisibility() {
    const achievementsSection = document.querySelector('.achievements-section');
    if (achievementsSection && isInViewport(achievementsSection)) {
      animateCounters();
      window.removeEventListener('scroll', checkVisibility);
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', checkVisibility);

  // Check on page load
  checkVisibility();

  // Add hover effect on counter wrappers
  const counterWrappers = document.querySelectorAll('.achievements-counter-wrapper');
  counterWrappers.forEach(wrapper => {
    const counterContent = wrapper.querySelector('.achievements-counter-content');
    if (counterContent) {
      wrapper.addEventListener('mouseenter', function() {
        counterContent.style.transform = 'scale(1.05)';
      });
      wrapper.addEventListener('mouseleave', function() {
        counterContent.style.transform = 'scale(1)';
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Animate elements when they come into view
  function animateSafetySection() {
    const safetySection = document.querySelector('.safety-section');
    if (!safetySection) return;

    const sectionPosition = safetySection.getBoundingClientRect().top + window.scrollY;
    const screenPosition = window.scrollY + window.innerHeight * 0.8;

    if (sectionPosition < screenPosition) {
      // Animate image with delay
      setTimeout(() => {
        document.querySelector('.safety-image-wrapper').classList.add('animated');
      }, 200);

      // Animate content elements with staggered delays
      setTimeout(() => {
        document.querySelector('.safety-tagline').classList.add('animated');
      }, 400);

      setTimeout(() => {
        document.querySelector('.safety-heading').classList.add('animated');
      }, 600);

      // Animate feature items one by one
      document.querySelectorAll('.safety-feature-item').forEach((item, index) => {
        const delay = 800 + (index * 200);
        setTimeout(() => {
          item.classList.add('animated');
        }, delay);
      });

      setTimeout(() => {
        document.querySelector('.safety-description').classList.add('animated');
      }, 1400);

      setTimeout(() => {
        document.querySelector('.safety-cta').classList.add('animated');
      }, 1600);

      // Remove scroll event after animation is triggered
      window.removeEventListener('scroll', animateSafetySection);
    }
  }

  // Add scroll event
  window.addEventListener('scroll', animateSafetySection);

  // Check on page load
  animateSafetySection();

  // Badge rotation effect
  document.querySelectorAll('.safety-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      badge.style.animation = 'none';
    });
    badge.addEventListener('mouseleave', function() {
      badge.style.animation = 'pulse-badge 2s infinite';
    });
  });

  // Add parallax effect to image on mouse move
  document.querySelectorAll('.safety-image-container').forEach(container => {
    const image = container.querySelector('.safety-image');

    container.addEventListener('mousemove', function(e) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const mouseX = e.pageX - container.offsetLeft;
      const mouseY = e.pageY - container.offsetTop;

      const moveX = ((mouseX / containerWidth) - 0.5) * 10;
      const moveY = ((mouseY / containerHeight) - 0.5) * 10;

      image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });

    container.addEventListener('mouseleave', function() {
      image.style.transform = 'translate(0, 0)';
    });
  });
});


// about page brands swiper
// About Page - Brands Swiper Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Custom swiper for brands section
  const aboutBrandsSwiper = new Swiper('.about-brands-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
    },
    on: {
      slideChangeTransitionStart() {
        document.querySelectorAll('.about-brands-item.animated')
          .forEach(item => item.classList.remove('animated'));
      },
      slideChangeTransitionEnd() {
        document.querySelectorAll('.swiper-slide-active .about-brands-item')
          .forEach(item => item.classList.add('animated'));
      }
    }
  });  
});
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM fully loaded");

//   try {
//     gsap.registerPlugin(SplitText);
//     console.log("SplitText registered");

//     let headings = document.querySelectorAll("h1");
//     console.log(`Found ${headings.length} <h1> elements`);

//     if (headings.length === 0) {
//       console.warn("No <h1> tags found on the page.");
//       return;
//     }

//     let allWords = [];

//     headings.forEach((heading, index) => {
//       console.log(`Processing <h1> #${index + 1}:`, heading.textContent);

//       let split = new SplitText(heading, { type: "words" });
//       console.log(`Split into ${split.words.length} words`);

//       allWords.push(...split.words);
//     });

//     // Animate all words together
//     gsap.from(allWords, {
//       y: 100,
//       autoAlpha: 0,
//       stagger: 0.05,
//       duration: 0.8,
//       ease: "power3.out"
//     });

//     console.log("Animation started");
//   } catch (err) {
//     console.error("GSAP or SplitText error:", err);
//   }
// });
// gsap animation 
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  // Select one h1 and all h2 elements
  let mainHeading = document.querySelector("h1");
  let subHeadings = document.querySelectorAll("h2");

  // Function to determine start position based on viewport width
  function getStartPosition() {
    return window.innerWidth < 768 ? "top 96%" : "top 80%"; // Adjust the start position for smaller screens
  }

  // Animate the main h1 heading
  if (mainHeading) {
    let splitMain = new SplitText(mainHeading, { type: "words" });

    gsap.from(splitMain.words, {
      scrollTrigger: {
        trigger: mainHeading,
        start: getStartPosition(),
        toggleActions: "play reverse play reverse",
      },
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out"
    });
  }

  // Animate all h2 headings
  subHeadings.forEach((subHeading) => {
    let splitSub = new SplitText(subHeading, { type: "chars,words" });

    gsap.from(splitSub.chars, {
      scrollTrigger: {
        trigger: subHeading,
        start: getStartPosition(),
        toggleActions: "play reverse play reverse",
      },
      y: gsap.utils.random([-100, 100]),
      rotation: gsap.utils.random([-45, 45]),
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      duration: 0.8,
      ease: "back.out"
    });
  });
});



