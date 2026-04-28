// ========================================
// ABOUT PAGE FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 About page initializing...');
    
    // ========================================
    // VIDEO PLAY BUTTON (Optional modal)
    // ========================================
    const playButton = document.querySelector('.video-story__icon');
    const videoContainer = document.querySelector('.video-story');
    
    if (playButton && videoContainer) {
        playButton.addEventListener('click', () => {
            // You can implement a modal video player here
            console.log('Play video clicked - Add modal video player');
            // Example: window.open('https://youtu.be/your-video-id', '_blank');
        });
    }
    
    // ========================================
    // PARALLAX EFFECT FOR HERO (Desktop only)
    // ========================================
    const hero = document.querySelector('.about-hero');
    if (hero && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const video = hero.querySelector('.about-hero__video');
            if (video) {
                video.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.1}px))`;
            }
        });
    }
    
    // ========================================
    // ANIMATE ELEMENTS ON SCROLL
    // ========================================
    const animateElements = document.querySelectorAll('.welcome-content, .welcome-image, .philosophy-content, .philosophy-image, .social-card');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                elementObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        elementObserver.observe(el);
    });
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('✅ About page initialized successfully');
});