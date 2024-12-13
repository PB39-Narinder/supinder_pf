document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.family-grid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const slidesCount = dots.length;
    
    function updateSlider() {
        // Calculate the translation based on current slide
        const translation = currentSlide * -20;
        slider.style.transform = `translateX(${translation}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update button states
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide === slidesCount - 1 ? '0.5' : '1';
    }
    
    function nextSlide() {
        if (currentSlide < slidesCount - 1) {
            currentSlide++;
            updateSlider();
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }
    
    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Auto slide (optional)
    const autoSlideInterval = 5000; // 5 seconds
    let autoSlideTimer = setInterval(nextSlide, autoSlideInterval);
    
    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.family-slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideTimer);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        autoSlideTimer = setInterval(nextSlide, autoSlideInterval);
    });
    
    // Initial setup
    updateSlider();
}); 