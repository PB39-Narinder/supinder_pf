// Timeline animations
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const options = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                timelineObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}); 