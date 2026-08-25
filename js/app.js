// ================================
// APPLICATION LOGIC
// ================================

let currentLanguage = localStorage.getItem('lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    updateImages();
    setupLanguageSelector();
    applyLanguage(currentLanguage);
    renderDestinations();
    renderPackages();
    renderHotels();
    renderGallery();
    setupSmoothScroll();
    setupMobileMenu();
}

// Ensure all HTML image tags with [data-img] get paths from config
function updateImages() {
    document.querySelectorAll('[data-img]').forEach(img => {
        const key = img.getAttribute('data-img');
        if (key === 'logo') img.src = SITE_IMAGES.logo;
        if (key === 'favicon') document.getElementById('favicon').href = SITE_IMAGES.favicon;
        if (key === 'hero') img.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${SITE_IMAGES.hero}')`;
    });
}

function setupLanguageSelector() {
    const langSelect = document.getElementById('lang-select');
    if(langSelect) {
        langSelect.value = currentLanguage;
        langSelect.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            localStorage.setItem('lang', currentLanguage);
            applyLanguage(currentLanguage);
            renderDestinations();
            renderPackages();
            renderHotels();
            populateBookingOptions();
        });
    }
}

function applyLanguage(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerText = t[key];
            }
        }
    });
}

function renderDestinations() {
    const container = document.getElementById('destinations-grid');
    if(!container) return;
    container.innerHTML = '';
    
    DESTINATIONS.forEach(dest => {
        const title = dest.title[currentLanguage] || dest.title['en'];
        const desc = dest.description[currentLanguage] || dest.description['en'];
        
        const card = document.createElement('div');
        card.className = `dest-card`;
        card.setAttribute('data-category', dest.category);
        
        card.innerHTML = `
            <div class="dest-img-wrap">
                <img src="${dest.image}" alt="${title}" loading="lazy">
                <div class="dest-badge">${dest.category.toUpperCase()}</div>
            </div>
            <div class="dest-content">
                <h3>${title}</h3>
                <p>${desc}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderPackages() {
    const container = document.getElementById('packages-grid');
    if(!container) return;
    container.innerHTML = '';
    
    const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS['en'];

    PACKAGES.forEach(pkg => {
        const title = pkg.title[currentLanguage] || pkg.title['en'];
        const duration = pkg.durationNights === 0 
            ? `${pkg.durationDays} ${t.packageDays}`
            : `${pkg.durationDays} ${t.packageDays} ${pkg.durationNights} ${t.packageNights}`;
        
        const badgeHTML = pkg.recommended ? `<div class="badge-recommended">${t.badgeRecommended}</div>` : '';
        
        let itineraryHTML = '';
        pkg.itinerary.forEach(it => {
            if(it.day) {
                const acts = it.activities.map(a => `<li>${a[currentLanguage] || a['en']}</li>`).join('');
                itineraryHTML += `
                    <div class="itin-day">
                        <strong>${t.packageDay} ${it.day}</strong>
                        <ul>${acts}</ul>
                    </div>
                `;
            } else {
                const actText = it.activity[currentLanguage] || it.activity['en'];
                itineraryHTML += `
                    <div class="itin-item">
                        <span class="itin-time">${it.time}</span>
                        <span class="itin-act">${actText}</span>
                    </div>
                `;
            }
        });

        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <div class="pkg-img-wrap">
                <img src="${pkg.image}" alt="${title}" loading="lazy">
                ${badgeHTML}
            </div>
            <div class="pkg-content">
                <h3>${title}</h3>
                <div class="pkg-duration">${duration}</div>
                <div class="pkg-itinerary">
                    ${itineraryHTML}
                </div>
                <button class="btn-book" onclick="scrollToBooking('${pkg.id}')">${t.navBook}</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderHotels() {
    const container = document.getElementById('hotels-grid');
    if(!container) return;
    container.innerHTML = '';
    
    HOTELS.forEach(hotel => {
        const type = hotel.type[currentLanguage] || hotel.type['en'];
        const desc = hotel.description[currentLanguage] || hotel.description['en'];
        
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
            <div class="hotel-content">
                <div class="hotel-type">${type} - ${hotel.location}</div>
                <h3>${hotel.name}</h3>
                <p>${desc}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderGallery() {
    const container = document.getElementById('gallery-grid');
    if(!container) return;
    container.innerHTML = '';
    
    GALLERY.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
        container.appendChild(item);
    });
}

// DESTINATION FILTERING
window.filterDestinations = function(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    document.querySelectorAll('.dest-card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// UTILS
function scrollToBooking(packageId = '') {
    const form = document.getElementById('booking');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
    
    if (packageId) {
        const pkgSelect = document.getElementById('book-package');
        if (pkgSelect) pkgSelect.value = packageId;
    }
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
            
            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
        });
    });
}

function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('nav-menu');
    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}

// FAQ Accordion
window.toggleFAQ = function(element) {
    element.parentElement.classList.toggle('active');
}
