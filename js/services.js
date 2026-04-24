// ========================================
// SERVICES DATA COMPLETA - SPA BARBERIA
// EACH SERVICE IS INDIVIDUAL (NO GROUPING)
// ALL IN ENGLISH
// ========================================

const servicesData = [

    // ==================== 👨 MEN - MODERN HAIRCUTS ====================
    {
        id: 1,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Low Fade',
        description: 'Clean and subtle fade that starts low near the sideburns. Perfect for a professional look.',
        image: '../img/lowfade.jpg',
        duration: 35,
        price: '$35'
    },
    {
        id: 2,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Mid Fade',
        description: 'Versatile fade that starts mid-way on the head. Balanced and modern style.',
        image: '../img/midfade.png',
        duration: 35,
        price: '$35'
    },
    {
        id: 3,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'High Fade',
        description: 'Bold fade that starts high near the top. Contemporary and edgy look.',
        image: '../img/highfade3.jpeg',
        duration: 38,
        price: '$38'
    },
    {
        id: 4,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Skin Fade',
        description: 'Fade that goes down to the skin with smooth transition. Sharp and clean finish.',
        image: 'img/SkinFade.png',
        duration: 40,
        price: '$40'
    },
    {
        id: 5,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Drop Fade',
        description: 'Fade that curves behind the ear creating a dramatic and elegant effect.',
        image: '../img/dropfade.jpeg',
        duration: 40,
        price: '$40'
    },
    {
        id: 6,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Burst Fade',
        description: 'Fade that bursts out around the ear creating a unique circular effect.',
        image: '../img/burstfade.jpeg',
        duration: 40,
        price: '$42'
    },
    {
        id: 7,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Taper Fade',
        description: 'Traditional fade that gradually tapers down. Clean and timeless.',
        image: '../img/taperfade.jpg',
        duration: 35,
        price: '$35'
    },
    {
        id: 8,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'modern',
        title: 'Modern Mullet',
        description: 'Contemporary mullet with modern texture and clean fade. Business in front, party in back.',
        image: '../img/modernmullet.jpeg',
        duration: 45,
        price: '$45'
    },
    {
        id: 9,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'modern',
        title: 'Mini Mullet',
        description: 'Shorter and more subtle version of the mullet. Modern look without being too extreme.',
        image: 'img/minimullet.jpg',
        duration: 40,
        price: '$42'
    },
    {
        id: 10,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'modern',
        title: 'Wolf Cut',
        description: 'Wolf cut with voluminous layers and messy texture. Very trendy style.',
        image: '../img/wolfcupmen.jpg',
        duration: 45,
        price: '$45'
    },
    {
        id: 11,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'modern',
        title: 'Flow',
        description: 'Natural hair flow with movement and volume. Effortless surfer style.',
        image: 'img/flow.jpg',
        duration: 40,
        price: '$40'
    },
    {
        id: 12,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'modern',
        title: 'Bro Flow',
        description: 'Flowing hair style with natural movement. Casual and confident look.',
        image: '../img/broflow.jpeg',
        duration: 40,
        price: '$40'
    },
    {
        id: 13,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'modern',
        title: 'Textured Flow Fade',
        description: 'Natural flow with texture and faded sides. Perfect balance of style.',
        image: 'img/TextureFade.png',
        duration: 45,
        price: '$45'
    },
    {
        id: 14,
        audience: 'men',
        category: 'haircuts',
        subcategory: 'design',
        title: 'Artist Design',
        description: 'Creative patterns, hair tattoos, and personalized freestyle designs.',
        image: 'img/Artistdesign.jpg',
        duration: 60,
        price: '$55+'
    },

    // ==================== 👨 MEN - PERMS ====================
    {
        id: 15,
        audience: 'men',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Body Perm',
        description: 'Perm that adds soft body and volume to your hair.',
        image: '../img/bodyperm.jpg',
        duration: 90,
        price: '$70+'
    },
    {
        id: 16,
        audience: 'men',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Korean Perm',
        description: 'Modern Korean-style waves and texture. Natural and elegant look.',
        image: 'img/koreanperm.jpg',
        duration: 90,
        price: '$75+'
    },
    {
        id: 17,
        audience: 'men',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Loose Wave Perm',
        description: 'Loose and beachy waves for a relaxed and stylish look.',
        image: '../img/loosewaveperm.png',
        duration: 85,
        price: '$70+'
    },
    {
        id: 18,
        audience: 'men',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Curly Top + Skin Fade',
        description: 'Curly volume on top with clean skin fade on the sides. Best of both worlds.',
        image: '../img/curlytop.jpeg',
        duration: 90,
        price: '$75+'
    },
    {
        id: 19,
        audience: 'men',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Rose Curl Perm',
        description: 'Defined rose-shaped curls. Romantic and stylish look.',
        image: '../img/rosecurl.jpeg',
        duration: 90,
        price: '$80+'
    },

    // ==================== 👨 MEN - PREMIUM BEARD ====================
    {
        id: 20,
        audience: 'men',
        category: 'beard',
        subcategory: 'trim',
        title: 'Premium Beard Trim',
        description: 'Precision beard shaping and detailing. Clean and defined look.',
        image: '../img/BeardTrim.png',
        duration: 25,
        price: '$25'
    },
    {
        id: 21,
        audience: 'men',
        category: 'beard',
        subcategory: 'trim',
        title: 'Short Boxed Beard',
        description: 'Short beard with boxed square shape. Modern and defined style.',
        image: '../img/shortbeard.jpg',
        duration: 25,
        price: '$28'
    },
    {
        id: 22,
        audience: 'men',
        category: 'beard',
        subcategory: 'fade',
        title: 'Beard Fade',
        description: 'Fade in the beard with smooth and defined transitions.',
        image: '../img/beardfade.jpeg',
        duration: 30,
        price: '$30'
    },
    {
        id: 23,
        audience: 'men',
        category: 'beard',
        subcategory: 'fade',
        title: 'Shadow Fade Beard',
        description: 'Shadow effect in the beard. Subtle and elegant look.',
        image: '../img/showfadebeard.jpg',
        duration: 30,
        price: '$30'
    },
    {
        id: 24,
        audience: 'men',
        category: 'beard',
        subcategory: 'fade',
        title: 'Low Taper Beard',
        description: 'Beard with low taper. Clean and professional style.',
        image: 'img/lowtaperbeard.jpg',
        duration: 25,
        price: '$28'
    },
    {
        id: 25,
        audience: 'men',
        category: 'beard',
        subcategory: 'trim',
        title: 'Sculptured Full Beard',
        description: 'Full beard sculpted with defined and precise shapes.',
        image: '../img/fullbeard.jpg',
        duration: 35,
        price: '$32'
    },
    {
        id: 26,
        audience: 'men',
        category: 'beard',
        subcategory: 'trim',
        title: 'Beardstache',
        description: 'Combination of thick mustache with light beard. Vintage modern look.',
        image: '../img/beardstache.jpeg',
        duration: 25,
        price: '$28'
    },
    {
        id: 27,
        audience: 'men',
        category: 'beard',
        subcategory: 'trim',
        title: 'Modern Goatee',
        description: 'Modern goatee that contours the mouth. Sophisticated look.',
        image: '../img/ModernGoatee.jpeg',
        duration: 25,
        price: '$25'
    },
    {
        id: 28,
        audience: 'men',
        category: 'beard',
        subcategory: 'trim',
        title: 'Circle Beard',
        description: 'Circle beard that frames the mouth. Clean and defined style.',
        image: '../img/circlebeard.jpg',
        duration: 25,
        price: '$25'
    },

    // ==================== 👩 WOMEN - MODERN HAIRCUTS ====================
    {
        id: 29,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Butterfly Cut',
        description: 'Layered cut with soft movement inspired by butterfly wings.',
        image: '../img/butterflycut.jpeg',
        duration: 50,
        price: '$50+'
    },
    {
        id: 30,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Layered Blowout Cut',
        description: 'Layered cut perfect for volume and movement when blow-drying.',
        image: '../img/LayeredBlowoutCut.jpg',
        duration: 45,
        price: '$45+'
    },
    {
        id: 31,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'U Cut',
        description: 'Classic U-shaped cut. Elegant and timeless style.',
        image: 'img/ucut.jpg',
        duration: 40,
        price: '$40+'
    },
    {
        id: 32,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'V Cut',
        description: 'Dramatic V-shaped cut. Stylish and eye-catching look.',
        image: 'img/vcut.jpg',
        duration: 40,
        price: '$40+'
    },
    {
        id: 33,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Long Layers + Curtain Bangs',
        description: 'Long layers combined with curtain bangs. Romantic and soft look.',
        image: '../img/LongLayersCurtainBangs.jpg',
        duration: 50,
        price: '$50+'
    },
    {
        id: 34,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Blunt Bob',
        description: 'Straight and defined bob cut. Modern and elegant style.',
        image: 'img/bluntbob.jpg',
        duration: 45,
        price: '$45+'
    },
    {
        id: 35,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Lob Bob',
        description: 'Long bob. Versatile and easy to manage.',
        image: 'img/lobbob.jpg',
        duration: 45,
        price: '$45+'
    },
    {
        id: 36,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Pixie Cut',
        description: 'Bold pixie cut. Modern, daring, and low maintenance.',
        image: '../img/PixieCut.jpeg',
        duration: 40,
        price: '$40+'
    },
    {
        id: 37,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Wolf Cut',
        description: 'Female wolf cut with layers and messy texture. Rocker style.',
        image: '../img/wolfcupwomen.jpg',
        duration: 50,
        price: '$50+'
    },
    {
        id: 38,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Shag Cut',
        description: 'Shag cut with disconnected layers. Attitude and style.',
        image: 'img/shagcut.jpg',
        duration: 50,
        price: '$50+'
    },
    {
        id: 39,
        audience: 'women',
        category: 'haircuts',
        subcategory: 'cut',
        title: 'Curtain Bangs',
        description: 'Curtain bangs only. Frames the face perfectly.',
        image: '../img/curtainbangs.jpg',
        duration: 25,
        price: '$25'
    },

    // ==================== 👩 WOMEN - COLOR ====================
    {
        id: 40,
        audience: 'women',
        category: 'color',
        subcategory: 'balayage',
        title: 'Balayage',
        description: 'French hand-painted coloring technique. Natural sun-kissed effect.',
        image: '../img/Caramelbalayage.jpg',
        duration: 90,
        price: '$85+'
    },
    {
        id: 41,
        audience: 'women',
        category: 'color',
        subcategory: 'balayage',
        title: 'Foilage',
        description: 'Combination of balayage with foil for extra brightness.',
        image: 'img/foilage.jpg',
        duration: 90,
        price: '$85+'
    },
    {
        id: 42,
        audience: 'women',
        category: 'color',
        subcategory: 'highlights',
        title: 'Money Piece Highlights',
        description: 'Face-framing highlights that brighten and enhance your features.',
        image: '../img/Moneypiecebalayage.jpg',
        duration: 75,
        price: '$75+'
    },
    {
        id: 43,
        audience: 'women',
        category: 'color',
        subcategory: 'color',
        title: 'Root Melt',
        description: 'Root blending for natural grown-out look without harsh lines.',
        image: '../img/rootmelt.jpg',
        duration: 60,
        price: '$60+'
    },
    {
        id: 44,
        audience: 'women',
        category: 'color',
        subcategory: 'color',
        title: 'Shadow Root',
        description: 'Darker root that softly melts into lighter ends. Low maintenance.',
        image: '../img/shadowroot.jpg',
        duration: 60,
        price: '$60+'
    },
    {
        id: 45,
        audience: 'women',
        category: 'color',
        subcategory: 'highlights',
        title: 'Highlights',
        description: 'Classic highlights that add dimension and light to your hair.',
        image: '../img/highlights.jpg',
        duration: 75,
        price: '$70+'
    },
    {
        id: 46,
        audience: 'women',
        category: 'color',
        subcategory: 'highlights',
        title: 'Babylights',
        description: 'Very subtle baby-like highlights. Natural and sophisticated look.',
        image: '../img/babylights.jpg',
        duration: 90,
        price: '$90+'
    },

    // ==================== 👩 WOMEN - PERMS ====================
    {
        id: 47,
        audience: 'women',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Body Perm',
        description: 'Perm that adds soft body and volume to your hair.',
        image: '../img/bodypermwomen.jpg',
        duration: 90,
        price: '$70+'
    },
    {
        id: 48,
        audience: 'women',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Korean Perm',
        description: 'Modern Korean-style waves. Natural and elegant texture.',
        image: '../img/koreanpermwomen.jpg',
        duration: 90,
        price: '$80+'
    },
    {
        id: 49,
        audience: 'women',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Loose Wave Perm',
        description: 'Loose and beachy waves. Relaxed and full of movement.',
        image: '../img/loosewaveperm.jpg',
        duration: 85,
        price: '$75+'
    },
    {
        id: 50,
        audience: 'women',
        category: 'treatment',
        subcategory: 'perm',
        title: 'Rose Curl Perm',
        description: 'Defined rose-shaped curls. Romantic and dreamy look.',
        image: '../img/rosecurlperm.jpg',
        duration: 90,
        price: '$85+'
    },

    // ==================== 👩 WOMEN - FACIAL AESTHETICS ====================
    {
        id: 51,
        audience: 'women',
        category: 'facial',
        subcategory: 'skincare',
        title: 'Deep Cleansing Facial',
        description: 'Deep facial cleansing. Removes impurities and toxins.',
        image: '../img/deepcleansingpacial.jpg',
        duration: 50,
        price: '$45'
    },
    {
        id: 52,
        audience: 'women',
        category: 'facial',
        subcategory: 'skincare',
        title: 'Hydrating Glow Facial',
        description: 'Hydrating treatment that restores natural glow to your skin.',
        image: '../img/hydratingglowfacial .jpeg',
        duration: 50,
        price: '$50'
    },
    {
        id: 53,
        audience: 'women',
        category: 'facial',
        subcategory: 'brows',
        title: 'Eyebrow Shaping',
        description: 'Eyebrow shaping with wax or tweezers. Perfect definition.',
        image: '../img/EyebrowShaping.jpg',
        duration: 20,
        price: '$15'
    },
    {
        id: 54,
        audience: 'women',
        category: 'facial',
        subcategory: 'brows',
        title: 'Brow Lamination',
        description: 'Eyebrow lamination. Perfect fixing and voluminous look.',
        image: '../img/BrowLamination.jpeg',
        duration: 40,
        price: '$35'
    },
    {
        id: 55,
        audience: 'women',
        category: 'facial',
        subcategory: 'brows',
        title: 'Eyebrow Tinting',
        description: 'Eyebrow tinting. Long-lasting color and natural definition.',
        image: '../img/EyebrowTinting.jpg',
        duration: 25,
        price: '$20'
    },
    {
        id: 56,
        audience: 'women',
        category: 'facial',
        subcategory: 'lashes',
        title: 'Lash Lift & Tint',
        description: 'Lash lifting and tinting. Awake and natural-looking eyes.',
        image: '../img/Lashliftandtint.jpg',
        duration: 50,
        price: '$45'
    },

    // ==================== 👩 WOMEN - MAKEUP ====================
    {
        id: 57,
        audience: 'women',
        category: 'makeup',
        subcategory: 'natural',
        title: 'Soft Natural Glow',
        description: 'Soft makeup with natural and luminous finish. Effortless look.',
        image: '../img/SoftNaturalGlow.jpg',
        duration: 45,
        price: '$40'
    },
    {
        id: 58,
        audience: 'women',
        category: 'makeup',
        subcategory: 'natural',
        title: 'Everyday Makeup',
        description: 'Perfect day look for daily wear. Fresh and natural.',
        image: '../img/EverydayMakeup.png',
        duration: 45,
        price: '$40'
    },
    {
        id: 59,
        audience: 'women',
        category: 'makeup',
        subcategory: 'bridal',
        title: 'Bridal Trial Makeup',
        description: 'Bridal makeup trial session. Perfect your wedding day look.',
        image: '../img/BridalTrialMakeup.png',
        duration: 90,
        price: '$80'
    },
    {
        id: 60,
        audience: 'women',
        category: 'makeup',
        subcategory: 'glam',
        title: 'Soft Glam',
        description: 'Elegant makeup for special events. Soft and glamorous.',
        image: '../img/SoftGlam.jpg',
        duration: 60,
        price: '$60'
    },
    {
        id: 61,
        audience: 'women',
        category: 'makeup',
        subcategory: 'glam',
        title: 'Photoshoot Makeup',
        description: 'Camera-ready makeup for photoshoots. Flawless finish.',
        image: '../img/PhotoshootMakeup.jpg',
        duration: 75,
        price: '$70'
    },
    {
        id: 62,
        audience: 'women',
        category: 'makeup',
        subcategory: 'glam',
        title: 'Prom Makeup',
        description: 'Stunning makeup for prom night. Memorable and beautiful.',
        image: '../img/PromMakeup.jpg',
        duration: 60,
        price: '$60'
    },
    {
        id: 63,
        audience: 'women',
        category: 'makeup',
        subcategory: 'glam',
        title: 'Graduation Makeup',
        description: 'Special makeup for graduation day. Photogenic and elegant.',
        image: '../img/GraduationMakeup.jpg',
        duration: 60,
        price: '$60'
    },

    // ==================== 👩 WOMEN - ARTISTIC MAKEUP ====================
    {
        id: 64,
        audience: 'women',
        category: 'makeup',
        subcategory: 'artistic',
        title: 'Halloween Makeup',
        description: 'Creative Halloween makeup designs. Spooky and fun.',
        image: '../img/HalloweenMakeup.jpg',
        duration: 90,
        price: '$70+'
    },
    {
        id: 65,
        audience: 'women',
        category: 'makeup',
        subcategory: 'artistic',
        title: 'Scary / Special FX Look',
        description: 'Special effects makeup for scary and dramatic looks.',
        image: '../img/specailfx.jpg',
        duration: 90,
        price: '$80+'
    },
    {
        id: 66,
        audience: 'women',
        category: 'makeup',
        subcategory: 'artistic',
        title: 'Catrinas Makeup',
        description: 'Traditional Day of the Dead Catrina makeup. Beautiful and cultural.',
        image: '../img/CatrinasMakeup.jpg',
        duration: 90,
        price: '$75+'
    },

    // ==================== 👦 KIDS - HAIRCUTS ====================
    {
        id: 67,
        audience: 'kids',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Taper Fade',
        description: 'Clean taper fade for kids. Age-appropriate and stylish.',
        image: '../img/taperfadechild.jpg',
        duration: 25,
        price: '$22'
    },
    {
        id: 68,
        audience: 'kids',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Low Fade',
        description: 'Subtle low fade for kids. Modern and clean look.',
        image: '../img/lowfadechild.jpg',
        duration: 25,
        price: '$22'
    },
    {
        id: 69,
        audience: 'kids',
        category: 'haircuts',
        subcategory: 'fade',
        title: 'Mid Fade',
        description: 'Versatile mid fade for kids. Balanced and trendy.',
        image: '../img/midfadechild.jpg',
        duration: 25,
        price: '$22'
    },
    {
        id: 70,
        audience: 'kids',
        category: 'haircuts',
        subcategory: 'design',
        title: 'Hair Designs',
        description: 'Creative lines and freestyle designs. Fun and personalized.',
        image: '../img/desingchild.jpeg',
        duration: 30,
        price: '$25'
    },
    {
        id: 71,
        audience: 'kids',
        category: 'haircuts',
        subcategory: 'classic',
        title: 'Classic Cut',
        description: 'Traditional classic haircut for kids. Clean and timeless.',
        image: '../img/ClassicCutchild.jpg',
        duration: 20,
        price: '$20'
    },
    {
        id: 72,
        audience: 'kids',
        category: 'haircuts',
        subcategory: 'modern',
        title: 'Modern Cut',
        description: 'Trendy modern haircut for kids. Age-appropriate contemporary style.',
        image: '../img/moderncutchild.jpg',
        duration: 25,
        price: '$22'
    }
];

// ========================================
// FILTERS CONFIGURATION BY AUDIENCE
// ========================================

const filtersByAudience = {
    men: [
        { id: 'all', label: 'All Men Services' },
        { id: 'haircuts', label: '✂ Haircuts' },
        { id: 'treatment', label: '🌀 Perms' },
        { id: 'beard', label: '🧔 Beard' }
    ],
    women: [
        { id: 'all', label: 'All Women Services' },
        { id: 'haircuts', label: '✂ Haircuts' },
        { id: 'color', label: '🎨 Color' },
        { id: 'treatment', label: '🌀 Perms' },
        { id: 'facial', label: '💆 Facial' },
        { id: 'makeup', label: '💄 Makeup' }
    ],
    kids: [
        { id: 'all', label: 'All Kids Services' },
        { id: 'haircuts', label: '✂ Haircuts' }
    ],
    all: [
        { id: 'all', label: 'All Services' },
        { id: 'haircuts', label: '✂ Haircuts' },
        { id: 'beard', label: '🧔 Beard' },
        { id: 'color', label: '🎨 Color' },
        { id: 'treatment', label: '🌀 Perms' },
        { id: 'facial', label: '💆 Facial' },
        { id: 'makeup', label: '💄 Makeup' }
    ]
};

// ========================================
// STATE MANAGEMENT
// ========================================

let currentAudience = 'all';
let currentSubFilter = 'all';
let currentSearchTerm = '';

// ========================================
// RENDER SECONDARY FILTERS
// ========================================

function renderSecondaryFilters() {
    const secondaryFiltersContainer = document.getElementById('secondaryFilters');
    if (!secondaryFiltersContainer) return;
    
    const filters = filtersByAudience[currentAudience];
    
    if (!filters) return;
    
    const filtersHTML = filters.map(filter => `
        <button class="secondary-filter ${currentSubFilter === filter.id ? 'secondary-filter--active' : ''}" 
                data-subfilter="${filter.id}">
            ${filter.label}
        </button>
    `).join('');
    
    secondaryFiltersContainer.innerHTML = filtersHTML;
    
    document.querySelectorAll('.secondary-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.secondary-filter').forEach(b => 
                b.classList.remove('secondary-filter--active')
            );
            btn.classList.add('secondary-filter--active');
            currentSubFilter = btn.getAttribute('data-subfilter');
            filterServices();
        });
    });
}

// ========================================
// FILTER SERVICES
// ========================================

function filterServices() {
    let filtered = [...servicesData];
    
    if (currentAudience !== 'all') {
        filtered = filtered.filter(service => service.audience === currentAudience);
    }
    
    if (currentSubFilter !== 'all') {
        filtered = filtered.filter(service => service.category === currentSubFilter);
    }
    
    if (currentSearchTerm) {
        filtered = filtered.filter(service => 
            service.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }
    
    renderServices(filtered);
    
    const searchResultsDiv = document.getElementById('searchResults');
    const resultCount = filtered.length;
    
    if (currentSearchTerm) {
        searchResultsDiv.style.display = 'block';
        searchResultsDiv.innerHTML = `<p><strong>${resultCount}</strong> service${resultCount !== 1 ? 's' : ''} found for "<strong>${currentSearchTerm}</strong>"</p>`;
    } else if (currentAudience !== 'all' || currentSubFilter !== 'all') {
        searchResultsDiv.style.display = 'block';
        searchResultsDiv.innerHTML = `<p><strong>${resultCount}</strong> service${resultCount !== 1 ? 's' : ''} available</p>`;
    } else {
        searchResultsDiv.style.display = 'none';
    }
}

// ========================================
// RENDER SERVICES CARDS
// ========================================

function renderServices(services) {
    const servicesGrid = document.getElementById('servicesGrid');
    const noResultsDiv = document.getElementById('noResults');
    
    if (!servicesGrid) return;
    
    if (services.length === 0) {
        noResultsDiv.style.display = 'block';
        servicesGrid.style.display = 'none';
        return;
    }
    
    noResultsDiv.style.display = 'none';
    servicesGrid.style.display = 'grid';
    
    const getAudienceBadge = (audience) => {
        switch(audience) {
            case 'men': return '<i class="fas fa-mars"></i> Men';
            case 'women': return '<i class="fas fa-venus"></i> Women';
            case 'kids': return '<i class="fas fa-child"></i> Kids';
            default: return '';
        }
    };
    
    const servicesHTML = services.map(service => `
        <div class="service-card" data-category="${service.category}" data-audience="${service.audience}">
            <div class="service-card__image">
                <img src="${service.image}" alt="${service.title}" class="service-card__img" loading="lazy">
                <div class="service-card__overlay">
                    <span class="service-card__duration">
                        <i class="far fa-clock"></i> ${service.duration} min
                    </span>
                </div>
            </div>
            <div class="service-card__info">
                <div class="service-card__badge">
                    ${getAudienceBadge(service.audience)}
                </div>
                <h3 class="service-card__title">${service.title}</h3>
                <p class="service-card__description">${service.description}</p>
                <div class="service-card__meta">
                    <span class="service-card__price">${service.price}</span>
                    <a href="https://www.vagaro.com/angelysbeautyandbarbersalon/book-now" class="service-card__btn" target="_blank" rel="noopener noreferrer">
                        Book Now <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    servicesGrid.innerHTML = servicesHTML;
}

// ========================================
// RESET FILTERS
// ========================================

function resetFilters() {
    currentAudience = 'all';
    currentSubFilter = 'all';
    currentSearchTerm = '';
    
    const searchInput = document.getElementById('serviceSearch');
    const clearSearchBtn = document.getElementById('clearSearch');
    if (searchInput) {
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
    }
    
    document.querySelectorAll('.primary-filter').forEach(btn => {
        if (btn.getAttribute('data-audience') === 'all') {
            btn.classList.add('primary-filter--active');
        } else {
            btn.classList.remove('primary-filter--active');
        }
    });
    
    renderSecondaryFilters();
    filterServices();
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Services page initializing...');
    
    renderSecondaryFilters();
    renderServices(servicesData);
    
    const primaryFilters = document.querySelectorAll('.primary-filter');
    primaryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            primaryFilters.forEach(b => b.classList.remove('primary-filter--active'));
            btn.classList.add('primary-filter--active');
            
            currentAudience = btn.getAttribute('data-audience');
            currentSubFilter = 'all';
            
            renderSecondaryFilters();
            filterServices();
        });
    });
    
    const searchInput = document.getElementById('serviceSearch');
    const clearSearchBtn = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.trim();
            
            if (currentSearchTerm) {
                clearSearchBtn.style.display = 'flex';
            } else {
                clearSearchBtn.style.display = 'none';
            }
            
            filterServices();
        });
    }
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchTerm = '';
            clearSearchBtn.style.display = 'none';
            filterServices();
            searchInput.focus();
        });
    }
    
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
    
    console.log(`✅ Services page initialized with ${servicesData.length} services`);
});