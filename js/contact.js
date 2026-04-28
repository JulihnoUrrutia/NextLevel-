// ========================================
// CONTACT.JS - CON EMAILJS INTEGRADO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Contact page initializing...');

    // ========================================
    // CONFIGURACIÓN DE EMAILJS
    // ⚠️ REEMPLAZA ESTOS VALORES CON LOS TUYOS ⚠️
    // ========================================
    const EMAILJS_SERVICE_ID = 'service_qgr7qnp';   // Tu Service ID de EmailJS
    const EMAILJS_TEMPLATE_ID = 'template_x8ik623'; // Tu Template ID de EmailJS
    const EMAILJS_PUBLIC_KEY = 'jIJzAUfeCym6xKYWi';    // Tu Public Key de EmailJS

    // ========================================
    // CONTACT FORM SUBMISSION CON EMAILJS
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const phone = document.getElementById('phone')?.value.trim();
            const service = document.getElementById('service')?.value;
            const message = document.getElementById('message')?.value.trim();
            
            // Validate required fields
            if (!name) {
                showNotification('Please enter your name', 'error');
                highlightField('name');
                return;
            }
            
            if (!email) {
                showNotification('Please enter your email address', 'error');
                highlightField('email');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address (e.g., name@example.com)', 'error');
                highlightField('email');
                return;
            }
            
            if (!message) {
                showNotification('Please enter your message', 'error');
                highlightField('message');
                return;
            }
            
            // Get service label
            const serviceMap = {
                'haircut': '✂ Haircut',
                'beard': '🧔 Beard Grooming',
                'color': '🎨 Color Service',
                'facial': '💆 Facial Treatment',
                'makeup': '💄 Makeup',
                'kids': '👦 Kids Cut'
            };
            const serviceLabel = serviceMap[service] || 'Not specified';
            
            // Show loading state
            const submitBtn = document.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                // Prepare template parameters for EmailJS
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    phone: phone || 'Not provided',
                    service: serviceLabel,
                    message: message,
                    to_email: 'nextlevelbarbersalon045@gmail.com',
                    reply_to: email
                };
                
                console.log('Sending email with params:', templateParams);
                
                // Send email using EmailJS
                const response = await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    templateParams,
                    EMAILJS_PUBLIC_KEY
                );
                
                console.log('Email sent successfully!', response);
                
                // Show success message
                showNotification('Thank you for your message! We will get back to you within 24 hours.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset border colors
                document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
                    field.style.borderColor = '#e8e8e8';
                    field.style.backgroundColor = '';
                });
                
            } catch (error) {
                console.error('Error sending email:', error);
                showNotification('There was an error sending your message. Please try again later or call us directly.', 'error');
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // ========================================
    // HIGHLIGHT FIELD FUNCTION
    // ========================================
    function highlightField(fieldId) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '#e74c3c';
            field.style.backgroundColor = '#fff5f5';
            field.addEventListener('focus', () => {
                field.style.borderColor = '';
                field.style.backgroundColor = '';
            }, { once: true });
        }
    }
    
    // ========================================
    // NOTIFICATION FUNCTION MEJORADA
    // ========================================
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.contact-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `contact-notification contact-notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <div class="notification-text">
                    <strong>${type === 'success' ? 'Success!' : 'Oops!'}</strong>
                    <span>${message}</span>
                </div>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 10000;
            background: ${type === 'success' ? 'linear-gradient(135deg, #2ecc71, #27ae60)' : 'linear-gradient(135deg, #e74c3c, #c0392b)'};
            color: white;
            padding: 16px 24px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            min-width: 320px;
            max-width: 450px;
            animation: slideInRight 0.3s ease;
            font-family: 'Poppins', sans-serif;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        `;
        
        const notificationContent = notification.querySelector('.notification-content');
        notificationContent.style.cssText = `
            display: flex;
            align-items: center;
            gap: 15px;
        `;
        
        const icon = notification.querySelector('.notification-content i');
        icon.style.cssText = `
            font-size: 1.5rem;
        `;
        
        const notificationText = notification.querySelector('.notification-text');
        notificationText.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 4px;
        `;
        
        const strong = notification.querySelector('.notification-text strong');
        strong.style.cssText = `
            font-size: 0.9rem;
            font-weight: 700;
        `;
        
        const span = notification.querySelector('.notification-text span');
        span.style.cssText = `
            font-size: 0.8rem;
            opacity: 0.9;
        `;
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            cursor: pointer;
            font-size: 0.9rem;
            padding: 8px;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        `;
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = 'rgba(255,255,255,0.3)';
            closeBtn.style.transform = 'scale(1.05)';
        });
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = 'rgba(255,255,255,0.2)';
            closeBtn.style.transform = 'scale(1)';
        });
        closeBtn.addEventListener('click', () => notification.remove());
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification && notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // ========================================
    // INPUT VALIDATION (Real-time)
    // ========================================
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.value.trim().length < 2 && this.value.length > 0) {
                this.style.borderColor = '#e74c3c';
            } else if (this.value.trim().length >= 2) {
                this.style.borderColor = '#2ecc71';
            } else {
                this.style.borderColor = '#e8e8e8';
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value.length > 0 && !emailRegex.test(this.value)) {
                this.style.borderColor = '#e74c3c';
            } else if (emailRegex.test(this.value)) {
                this.style.borderColor = '#2ecc71';
            } else {
                this.style.borderColor = '#e8e8e8';
            }
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            if (this.value.trim().length < 10 && this.value.length > 0) {
                this.style.borderColor = '#e74c3c';
            } else if (this.value.trim().length >= 10) {
                this.style.borderColor = '#2ecc71';
            } else {
                this.style.borderColor = '#e8e8e8';
            }
        });
    }
    
    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    const hero = document.querySelector('.contact-hero');
    if (hero && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.4 + 'px';
        });
    }
    
    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    const animateElements = document.querySelectorAll('.info-card, .contact-form-wrapper, .map-container, .social-card');
    
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animateObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px' });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        animateObserver.observe(el);
    });
    
    // ========================================
    // ADD ANIMATION STYLES
    // ========================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
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
    
    console.log('✅ Contact page initialized successfully with EmailJS');
});