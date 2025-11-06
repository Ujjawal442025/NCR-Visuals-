
const cameraTransition = document.getElementById('cameraTransition');
        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const navMenu = document.getElementById('navMenu');
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });


/*Menu Close*/
        document.addEventListener('click', (event) => {
            // Check if the clicked element is NOT the menu itself (navMenu) AND
            // NOT the menu button (menuBtn) AND
            // the menu is currently active
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnButton = menuBtn.contains(event.target);
            const isMenuOpen = navMenu.classList.contains('active');

            if (isMenuOpen && !isClickInsideMenu && !isClickOnButton) {
                navMenu.classList.remove('active');
                
                // Also reset the menu button icon
                const icon = menuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
        // 🔚 End of new code 🔚

        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });

        // Scroll Animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Counter animation for stats
            if (entry.target.classList.contains('stat-box')) {
                const counter = entry.target.querySelector('.stat-number');
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 30);
            }
        }
    });
}, observerOptions);

        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.section-header, .portfolio-item,.form-fiel,.contact-form-wrapper,.form-fiel input,.form-fiel textarea, .about-image,.form-field textarea,.booking-wrapper .text-right,.booking-wrapper .text-left,.form-field input, .about-content, .booking-wrapper, .testimonial-card, .contact-info,.contact-box,.contact-box1, .contact-form-wrapper,.stat-box');
            elements.forEach(el => observer.observe(el));
        });

        // Portfolio Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                portfolioItems.forEach((item, index) => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    } else {
                        item.classList.remove('visible');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 400);
                    }
                });
            });
        });

        // Booking Form
        const bookingForm = document.getElementById('bookingForm');
        const bookingSuccess = document.getElementById('bookingSuccess');

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            bookingSuccess.classList.add('show');
            bookingForm.reset();
            setTimeout(() => {
                bookingSuccess.classList.remove('show');
            }, 5000);
        });

        // Contact Form
        const contactForm = document.getElementById('contactForm');
        const contactSuccess = document.getElementById('contactSuccess');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactSuccess.classList.add('show');
            contactForm.reset();
            setTimeout(() => {
                contactSuccess.classList.remove('show');
            }, 5000);
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Parallax Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
                heroContent.style.opacity = 1 - (scrolled / 700);
            }
        });

        // Staggered Portfolio Animation
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 150);
                }
            });
        }, { threshold: 0.1 });

        portfolioItems.forEach(item => {
            portfolioObserver.observe(item);
        });
        
        
    


/* ============================================
   CHANGE #3: ENHANCED LOADER JAVASCRIPT
   Location: Replace the loader logic at the bottom of your script.js
   ============================================ */

// Enhanced loader with zoom explosion effect
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loaderImg = document.querySelector('.loaderimg');
    const loaderLogo = document.querySelector('.loader-logo');
    
    const logoAnimationDuration = 1800; // 1.8 seconds (matches CSS animation)
    
    // Step 1: Wait for progress bar to complete (2000ms)
    setTimeout(() => {
        
        // Step 2: Trigger logo zoom explosion animation
        if (loaderImg) {
            loaderImg.classList.add('logo-animate');
        }
        
        // Optional: Fade out the text during logo explosion
        if (loaderLogo) {
            loaderLogo.style.transition = 'opacity 0.5s ease';
            loaderLogo.style.opacity = '0';
        }
        
        // Step 3: Wait for logo animation to complete
        setTimeout(() => {
            if (loader) {
                // Step 4: Fade out entire loader
                loader.classList.add('fade-out');
                
                // Optional: Remove loader from DOM after fade
                setTimeout(() => {
                    loader.style.display = 'none';
                    cameraTransition.classList.add('show');
                // Step 5: Remove camera after animation (3.5s)
                setTimeout(() => {
                    cameraTransition.style.display = 'none';
                    
                }, 3500);
                    
            }, 1000);
            }
        }, logoAnimationDuration);

    }, 2000);
});

/* ============================================
   SUMMARY OF TIMING:
   - 0ms: Page loads, progress bar starts
   - 2000ms: Progress bar completes
   - 2000ms: Logo zoom animation starts
   - 3800ms: Logo zoom completes
   - 3800ms: Loader fade-out starts
   - 4600ms: Loader completely hidden
   - 4000ms+: Hero content starts appearing
   ============================================ */
   
   
   
   
/* ============================================
   REPLACE PREVIOUS CAROUSEL JS WITH THIS
   3D BLOCK CAROUSEL - SHOWS CENTER + SIDES
   ============================================ */

// Testimonial 3D Block Carousel
(function() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (!testimonialsGrid || testimonialCards.length === 0) return;
    
    // Add carousel mode class
    testimonialsGrid.classList.add('carousel-mode');
    
    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'testimonials-carousel-wrapper';
    testimonialsGrid.parentNode.insertBefore(wrapper, testimonialsGrid);
    wrapper.appendChild(testimonialsGrid);
    
    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    wrapper.appendChild(dotsContainer);
    
    // Create arrow buttons
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-arrow prev';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.setAttribute('aria-label', 'Previous testimonial');
    prevBtn.addEventListener('click', prevSlide);
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-arrow next';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.setAttribute('aria-label', 'Next testimonial');
    nextBtn.addEventListener('click', nextSlide);
    
    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);
    
    // Create progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.className = 'carousel-progress';
    const progressBar = document.createElement('div');
    progressBar.className = 'carousel-progress-bar';
    progressContainer.appendChild(progressBar);
    wrapper.appendChild(progressContainer);
    
    // Create pause indicator
    const pauseIndicator = document.createElement('div');
    pauseIndicator.className = 'carousel-pause-indicator';
    pauseIndicator.innerHTML = '<i class="fas fa-pause"></i> Auto-play Paused';
    wrapper.appendChild(pauseIndicator);
    
    // Create counter
    const counter = document.createElement('div');
    counter.className = 'carousel-counter';
    counter.textContent = `1 / ${testimonialCards.length}`;
    wrapper.appendChild(counter);
    
    // Carousel state
    let currentSlide = 0;
    let autoPlayInterval;
    let progressInterval;
    let isPaused = false;
    const autoPlayDelay = 2000; // 2 seconds
    const progressSteps = 20;
    const progressIncrement = 100 / progressSteps;
    const progressSpeed = autoPlayDelay / progressSteps;
    
    // Update card states based on position (NOW SHOWS 5 CARDS: CENTER + 2 LEFT + 2 RIGHT)
    function updateCardStates() {
        testimonialCards.forEach((card, index) => {
            // Remove all state classes
            card.classList.remove('active', 'adjacent-1', 'adjacent-2', 'far');
            
            // Calculate distance from current slide
            const distance = Math.abs(index - currentSlide);
            
            if (index === currentSlide) {
                // Center active card (position 0)
                card.classList.add('active');
            } else if (distance === 1) {
                // First adjacent cards (position -1 and +1)
                card.classList.add('adjacent-1');
            } else if (distance === 2) {
                // Second adjacent cards (position -2 and +2)
                card.classList.add('adjacent-2');
            } else {
                // Far cards (position -3, +3, etc)
                card.classList.add('far');
            }
        });
    }
    
    // Update carousel position (FIXED: Always centers the active card)
    function updateCarousel() {
        // Calculate proper centering
        const wrapper = document.querySelector('.testimonials-carousel-wrapper');
        const wrapperWidth = wrapper.offsetWidth;
        const cardWidth = testimonialCards[0].offsetWidth;
        const gap = 32; // 2rem gap between cards
        
        // Calculate the center position of the wrapper
        const wrapperCenter = wrapperWidth / 2;
        
        // Calculate the center position of the active card
        const cardCenter = cardWidth / 2;
        
        // Calculate how far the active card is from the start
        const cardsBeforeActive = currentSlide * (cardWidth + gap);
        
        // Calculate the offset needed to center the active card
        const offset = wrapperCenter - cardCenter - cardsBeforeActive;
        
        testimonialsGrid.style.transform = `translateX(${offset}px)`;
        
        // Update card states
        updateCardStates();
        
        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update counter
        counter.textContent = `${currentSlide + 1} / ${testimonialCards.length}`;
        
        // Reset progress
        resetProgress();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
        resetAutoPlay();
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = currentSlide === 0 ? testimonialCards.length - 1 : currentSlide - 1;
        updateCarousel();
        resetAutoPlay();
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = currentSlide === testimonialCards.length - 1 ? 0 : currentSlide + 1;
        updateCarousel();
        resetAutoPlay();
    }
    
    // Progress bar animation
    function animateProgress() {
        let progress = 0;
        clearInterval(progressInterval);
        progressBar.style.width = '0%';
        
        progressInterval = setInterval(() => {
            if (isPaused) return;
            
            progress += progressIncrement;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, progressSpeed);
    }
    
    // Reset progress
    function resetProgress() {
        clearInterval(progressInterval);
        progressBar.style.width = '0%';
        if (!isPaused) {
            animateProgress();
        }
    }
    
    // Start auto-play
    function startAutoPlay() {
        stopAutoPlay();
        animateProgress();
        autoPlayInterval = setInterval(() => {
            if (!isPaused) {
                nextSlide();
            }
        }, autoPlayDelay);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
        clearInterval(progressInterval);
    }
    
    // Reset auto-play
    function resetAutoPlay() {
        stopAutoPlay();
        if (!isPaused) {
            startAutoPlay();
        }
    }
    
    // Pause on hover
    wrapper.addEventListener('mouseenter', () => {
        isPaused = true;
        pauseIndicator.style.opacity = '1';
    });
    
    wrapper.addEventListener('mouseleave', () => {
        isPaused = false;
        pauseIndicator.style.opacity = '0';
        resetAutoPlay();
    });
    
    // Pause on touch (mobile)
    let touchTimeout;
    wrapper.addEventListener('touchstart', () => {
        isPaused = true;
        clearTimeout(touchTimeout);
    });
    
    wrapper.addEventListener('touchend', () => {
        touchTimeout = setTimeout(() => {
            isPaused = false;
            resetAutoPlay();
        }, 3000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Pause when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay();
        } else if (!isPaused) {
            startAutoPlay();
        }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarousel();
        }, 250);
    });
    
    // Initialize
    updateCarousel();
    startAutoPlay();
    
    // Stop on page unload
    window.addEventListener('beforeunload', stopAutoPlay);
    
})();

/* ============================================
   3D BLOCK CAROUSEL FEATURES:
   - Center card is large and focused
   - Previous/Next cards visible on sides (scaled down)
   - Auto-rotates every 2 seconds
   - Smooth 3D transformations
   - Progress bar with shimmer effect
   - Counter showing current position
   - Pauses on hover/touch
   - Keyboard navigation
   - Responsive on all devices
   ============================================ */