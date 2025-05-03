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