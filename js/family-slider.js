document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.family-track');
    const cards = document.querySelectorAll('.family-card:not(.clone)');
    
    // Calculate total width for animation
    function updateTrackAnimation() {
        const cardWidth = cards[0].offsetWidth;
        const totalWidth = cardWidth * cards.length;
        track.style.setProperty('--slide-width', `-${totalWidth}px`);
    }
    
    // Clone cards for infinite loop
    function setupInfiniteLoop() {
        // Clone all cards and add them to the end
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.classList.add('clone');
            track.appendChild(clone);
        });
    }
    
    setupInfiniteLoop();
    updateTrackAnimation();
    
    // Reset position when animation ends
    track.addEventListener('animationend', () => {
        track.style.animation = 'none';
        track.offsetHeight; // Trigger reflow
        track.style.animation = 'slideTrack 60s linear infinite';
    });
    
    // Update animation on window resize
    window.addEventListener('resize', updateTrackAnimation);
}); 