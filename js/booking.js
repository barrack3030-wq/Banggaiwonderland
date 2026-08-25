// ================================
// BOOKING & WHATSAPP LOGIC
// ================================
// CHANGE WHATSAPP NUMBER HERE
const WA_NUMBER_1 = "6285714046285"; // Note: Use country code without +
const WA_NUMBER_2 = "6282216325030";

document.addEventListener('DOMContentLoaded', () => {
    populateBookingOptions();
    
    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', handleBookingSubmit);
    }
});

function populateBookingOptions() {
    const pkgSelect = document.getElementById('book-package');
    const hotelSelect = document.getElementById('book-hotel');
    
    if (pkgSelect) {
        const currentVal = pkgSelect.value;
        pkgSelect.innerHTML = '<option value="">-- Select Package --</option>';
        PACKAGES.forEach(pkg => {
            const title = pkg.title[currentLanguage] || pkg.title['en'];
            pkgSelect.innerHTML += `<option value="${pkg.id}">${title}</option>`;
        });
        pkgSelect.value = currentVal;
    }
    
    if (hotelSelect) {
        const currentVal = hotelSelect.value;
        hotelSelect.innerHTML = '<option value="">-- Select Hotel --</option>';
        HOTELS.forEach(hotel => {
            hotelSelect.innerHTML += `<option value="${hotel.name}">${hotel.name}</option>`;
        });
        hotelSelect.value = currentVal;
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    // Basic validation
    const name = document.getElementById('book-name').value.trim();
    const wa = document.getElementById('book-wa').value.trim();
    const travelers = document.getElementById('book-travelers').value.trim();
    const arrival = document.getElementById('book-arrival').value.trim();
    const pkg = document.getElementById('book-package').value;
    const waChoice = document.getElementById('book-wa-target').value;
    
    const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS['en'];
    
    if (!name || !wa || !travelers || !arrival || !pkg) {
        alert(t.reqName + " / " + t.reqWhatsApp + " / " + t.reqTravelers + " / " + t.reqArrival + " / " + t.reqPackage);
        return;
    }
    
    // Get full package title
    const pkgObj = PACKAGES.find(p => p.id === pkg);
    const pkgTitle = pkgObj ? (pkgObj.title[currentLanguage] || pkgObj.title['en']) : pkg;
    
    const country = document.getElementById('book-country').value.trim();
    const departure = document.getElementById('book-departure').value.trim();
    const arrivalTime = document.getElementById('book-arrival-time').value.trim();
    const ferry = document.getElementById('book-ferry').value;
    const hotel = document.getElementById('book-hotel').value;
    const activities = document.getElementById('book-activities').value.trim();
    const special = document.getElementById('book-special').value.trim();
    
    const targetWA = waChoice === '1' ? WA_NUMBER_1 : WA_NUMBER_2;
    
    let message = `Hello Banggai Wonderland, I would like to request a trip.\n\n`;
    message += `Name: ${name}\n`;
    if(country) message += `Country: ${country}\n`;
    message += `WhatsApp: ${wa}\n`;
    message += `Travelers: ${travelers}\n`;
    message += `Arrival Date: ${arrival}\n`;
    if(arrivalTime) message += `Arrival Time: ${arrivalTime}\n`;
    if(departure) message += `Departure Date: ${departure}\n`;
    message += `Package: ${pkgTitle}\n`;
    if(ferry) message += `Preferred Ferry: ${ferry}\n`;
    if(hotel) message += `Hotel: ${hotel}\n`;
    if(activities) message += `Activities: ${activities}\n`;
    if(special) message += `Special Request: ${special}\n`;
    message += `Language: ${currentLanguage.toUpperCase()}`;
    
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${targetWA}?text=${encodedMessage}`;
    
    alert(t.bookingReady);
    window.open(waUrl, '_blank');
}
