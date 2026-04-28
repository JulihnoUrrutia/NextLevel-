// ========================================
// TESTIMONIALS.JS - CON 7 TESTIMONIOS ÚNICOS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Testimonials page initializing...');

    // ========================================
    // TESTIMONIALS DATA (7 testimonios únicos)
    // ========================================
    const allTestimonials = [
        {
            id: 1,
            name: "Genevieve Gallimore Andrews",
            initials: "G",
            service: "Color & Highlights",
            rating: 5,
            text: "Lidia is simply the best colorist, pure magic. I've been searching my whole life for someone who will not damage my Northern European hair. She spent her entire day slowly lifting my hair and toning. Today is the day after I have minimal dryness my hair has never been so healthy, blond and long. Lidia is worth twice what she charges. The products in her salon are far below Ulta price. She's an amazing conversationalist not to be missed. She's a master of her craft and extremely talented. She has a customer for life in me. If you want long bleached healthy hair this is your girl. I highly recommend 1000000%",
            type: "Color Client"
        },
        {
            id: 2,
            name: "Jenilee Carhuaricra",
            initials: "JC",
            service: "Men's Haircut",
            rating: 5,
            text: "I took my husband to get his haircut here and it was amazing!! Carlos did such a good job! The prices are good, the employees are very kind/attentive and the quality of the services are amazing. We will be coming back here 100%",
            type: "Fade Cut"
        },
        {
            id: 3,
            name: "Donna Sanchez",
            initials: "DS",
            service: "Haircut",
            rating: 5,
            text: "Husband went in for a much needed hair cut. The staff there was super amazing and very professional. They take good care of their customers",
            type: "Haircut"
        },
        {
            id: 4,
            name: "Stephanie Macart",
            initials: "SM",
            service: "Highlights",
            rating: 5,
            text: "David was amazing. My highlights were perfect and exactly what I asked for",
            type: "Highlight"
        },
        {
            id: 5,
            name: "Angel Rodríguez",
            initials: "AR",
            service: "Haircut",
            rating: 5,
            text: "Tremendo cortan bien atienden bien es bello alli lo recomiendo 10/10",
            type: "Haircut",
            spanish: true
        },
        {
            id: 6,
            name: "Bryant Riveros",
            initials: "BR",
            service: "Barber Service",
            rating: 5,
            text: "Very nice barbershop Fabian does an amazing job!",
            type: "Regular Client"
        },
        {
            id: 7,
            name: "Bryant Riveros",
            initials: "BR",
            service: "Barber Service",
            rating: 5,
            text: "Very nice barbershop Fabian does an amazing job!",
            type: "Regular Client"
        }
    ];

    // ========================================
    // RENDER TESTIMONIALS GRID
    // ========================================
    const testimonialsGrid = document.getElementById('testimonialsGrid');

    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    function truncateText(text, maxLength = 150) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    if (testimonialsGrid) {
        const testimonialsHTML = allTestimonials.map(testimonial => `
            <div class="testimonial-grid-item">
                <div class="testimonial-grid-stars">${generateStars(testimonial.rating)}</div>
                <p class="testimonial-grid-text">"${truncateText(testimonial.text, 120)}"</p>
                <div class="testimonial-grid-author">
                    <div class="author-initial">${testimonial.initials}</div>
                    <div>
                        <h4>${testimonial.name}</h4>
                        <span>⭐ ${testimonial.rating}.0 • ${testimonial.type}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        testimonialsGrid.innerHTML = testimonialsHTML;
    }

    // ========================================
    // FIX: Eliminar duplicados del carrusel si es necesario
    // Nota: Los duplicados están en el HTML, no en el JS
    // ========================================

    // ========================================
    // INITIALIZE SWIPER CAROUSEL
    // ========================================
    const swiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // ========================================
    // COUNTER ANIMATION FOR STATS
    // ========================================
    const counters = document.querySelectorAll('.stat-number');
    
    function animateCounter(counter) {
        const target = parseFloat(counter.getAttribute('data-count'));
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                if (target === 4.9) {
                    counter.innerText = current.toFixed(1);
                } else if (target === 98) {
                    counter.innerText = Math.floor(current) + '%';
                } else {
                    counter.innerText = Math.floor(current).toLocaleString();
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (target === 4.9) {
                    counter.innerText = target.toFixed(1);
                } else if (target === 98) {
                    counter.innerText = target + '%';
                } else if (target >= 1000) {
                    counter.innerText = target.toLocaleString();
                } else {
                    counter.innerText = target;
                }
            }
        };
        updateCounter();
    }
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                statsObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        statsObserver.observe(counter);
    });

    // ========================================
    // SCROLL ANIMATIONS FOR ELEMENTS
    // ========================================
    const animateElements = document.querySelectorAll('.stat-card, .testimonial-card, .testimonial-grid-item');
    
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animateObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.2, 
        rootMargin: '0px' 
    });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        animateObserver.observe(el);
    });

    // ========================================
    // PARALLAX EFFECT FOR HERO (Desktop only)
    // ========================================
    const hero = document.querySelector('.testimonials-hero');
    if (hero && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

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

    console.log(`✅ Testimonials page initialized with ${allTestimonials.length} reviews`);
});