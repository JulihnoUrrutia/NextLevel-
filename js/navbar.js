// ========================================
// NAVBAR FUNCTIONALITY - Separado del HTML
// ========================================

(function() {
    'use strict';

    // DOM Elements
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Create overlay if not exists
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    // ========================================
    // FUNCIÓN: Cerrar menú
    // ========================================
    function closeMenu() {
        if (menuToggle) {
            menuToggle.classList.remove('active');
            // Change icon back to bars
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (overlay) {
            overlay.classList.remove('active');
        }
        body.classList.remove('menu-open');
    }

    // ========================================
    // FUNCIÓN: Abrir menú
    // ========================================
    function openMenu() {
        if (menuToggle) {
            menuToggle.classList.add('active');
            // Change icon to times (X)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        }
        if (navMenu) {
            navMenu.classList.add('active');
        }
        if (overlay) {
            overlay.classList.add('active');
        }
        body.classList.add('menu-open');
    }

    // ========================================
    // FUNCIÓN: Toggle menú
    // ========================================
    function toggleMenu() {
        if (navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // ========================================
    // FUNCIÓN: Handle scroll (efecto navbar)
    // ========================================
    function handleScroll() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // ========================================
    // FUNCIÓN: Detectar página activa
    // ========================================
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            // Remove active class from all links
            link.classList.remove('active');
            // Add active class to matching link
            if (linkHref === currentPage) {
                link.classList.add('active');
            }
            // Special case for index.html
            if (currentPage === 'index.html' && linkHref === 'index.html') {
                link.classList.add('active');
            }
            // If no current page (root), highlight index
            if (currentPage === '' && linkHref === 'index.html') {
                link.classList.add('active');
            }
        });
    }

    // ========================================
    // FUNCIÓN: Smooth scroll para enlaces internos
    // ========================================
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    closeMenu();
                }
            });
        });
    }

    // ========================================
    // FUNCIÓN: Prevenir scroll cuando menú está abierto
    // ========================================
    function preventBodyScroll() {
        if (navMenu) {
            navMenu.addEventListener('touchmove', (e) => {
                if (navMenu.classList.contains('active')) {
                    e.stopPropagation();
                }
            });
        }
    }

    // ========================================
    // FUNCIÓN: Cerrar menú al hacer resize (escritorio)
    // ========================================
    function handleResize() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    }

    // ========================================
    // FUNCIÓN: Cerrar menú al hacer click fuera
    // ========================================
    function handleClickOutside(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenu();
            }
        }
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================
    
    // Scroll event
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar
    
    // Toggle menu on hamburger click
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
    
    // Close menu when clicking on overlay
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Handle resize
    window.addEventListener('resize', handleResize);
    
    // Handle click outside
    document.addEventListener('click', handleClickOutside);
    
    // Prevent body scroll
    preventBodyScroll();
    
    // Set active nav link based on current page
    setActiveNavLink();
    
    // Initialize smooth scroll for anchor links
    initSmoothScroll();
    
    // ========================================
    // FUNCIÓN: Cambiar navbar al hacer scroll hacia arriba/abajo
    // ========================================
    let lastScrollTop = 0;
    let scrollTimeout;
    
    function handleNavbarVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Clear timeout
        clearTimeout(scrollTimeout);
        
        // Auto-hide navbar after 2 seconds of no scrolling (only on mobile)
        if (window.innerWidth <= 768) {
            scrollTimeout = setTimeout(() => {
                if (scrollTop > 100 && !navMenu.classList.contains('active')) {
                    navbar.style.transform = 'translateY(-100%)';
                }
            }, 2000);
            
            // Show navbar when scrolling
            if (scrollTop < lastScrollTop || scrollTop < 100) {
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Optional: Auto-hide navbar on scroll (uncomment if desired)
    // window.addEventListener('scroll', handleNavbarVisibility);
    
    // ========================================
    // FUNCIÓN: Agregar clase al body para estilos específicos
    // ========================================
    function addBodyClass() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageName = currentPage.replace('.html', '');
        body.classList.add(`page-${pageName}`);
    }
    
    addBodyClass();
    
    // ========================================
    // LOG: Confirmar que el script cargó
    // ========================================
    console.log('✅ Navbar initialized successfully');
    
})();