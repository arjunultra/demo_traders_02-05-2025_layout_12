// nav menu open/close
$('.hamburger-menu, .link').click(function () {
  $('body').toggleClass('menu-open');

  // toggle visual style only when menu is closed
  if ($('body').hasClass('menu-open')) {
    $('.hamburger-menu').removeClass('menu-closed');
  } else {
    $('.hamburger-menu').addClass('menu-closed');
  }
});


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
// index counter
  // Initialize Odometer
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      console.log('Element position:', rect);
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
      );
    }
  
    function handleCounterAnimation() {
      const counterSection = document.querySelector('.index-counter');
      const counterSectionTwo = document.querySelector('.index-counter');
      const counters = document.querySelectorAll('.index-counter .odometer');
      const counters2 = document.querySelectorAll('.about-intro .odometer');
  
      if (!counterSection || !counterSectionTwo) {
        // console.error('Counter section not found');
        return;
      }
  
      // console.log('Checking if section is in viewport...');
  
      if (isElementInViewport(counterSection) && !counterSection.classList.contains('counted')) {
        console.log('Section in viewport, starting counter animations');
  
        counters.forEach((counter, index) => {
          const finalValue = counter.getAttribute('data-count');
          // console.log(Counter ${index + 1}: setting value to, finalValue);
          
          counter.innerHTML = finalValue; // Odometer should pick this change
        });
  
        counterSection.classList.add('counted');
        console.log('Counter section marked as counted');
      }
    }
  
    handleCounterAnimation();
    window.addEventListener('scroll', handleCounterAnimation);
  
    // Hover effect
    const counterItems = document.querySelectorAll('.index-counter-item');
    counterItems.forEach((item, index) => {
      item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.index-counter-icon');
        if (icon) {
          // console.log(Hovering over counter item ${index + 1});
          icon.style.transform = 'scale(1.2) rotate(10deg)';
          icon.style.transition = 'transform 0.3s ease';
        }
      });
  
      item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.index-counter-icon');
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0deg)';
        }
      });
    });
  });
  // about odometer function
  // about-intro odometer observer
  document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.about-intro .odometer');
  
    if (counters.length === 0) return;
  
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const finalValue = counter.getAttribute('data-count');
          console.log('Triggering counter:', finalValue);
          counter.innerHTML = finalValue;
  
          // Stop observing once triggered
          observerInstance.unobserve(counter);
        }
      });
    }, {
      threshold: 0.5, // Increase threshold for more precise viewability
    });
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  

  // index brands
  // Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
  const brandSwiper = new Swiper('.brandSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.index-brands-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.index-brands-button-next',
      prevEl: '.index-brands-button-prev',
    },
    breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 5,
        spaceBetween: 50
      }
    },
    on: {
      init: function() {
        // Add animation class to all slides
        document.querySelectorAll('.index-brands-slide').forEach((slide, index) => {
          slide.style.transitionDelay = `${index * 0.1}s`;
          slide.classList.add('animate-slide');
        });
      }
    }
  });
  
  // Add hover effect for active slide
  brandSwiper.on('slideChange', () => {
    setTimeout(() => {
      document.querySelectorAll('.index-brands-slide').forEach(slide => {
        slide.classList.remove('active-slide');
      });
      
      const activeSlides = document.querySelectorAll('.swiper-slide-active, .swiper-slide-next, .swiper-slide-next + .swiper-slide');
      activeSlides.forEach(slide => {
        slide.classList.add('active-slide');
      });
    }, 100);
  });
  
  // Trigger initial slide change to set active slides
  brandSwiper.emit('slideChange');
});
  

