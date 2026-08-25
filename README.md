# Banggai Wonderland

A premium static travel website for Luwuk and Banggai Islands, fully compatible with GitHub Pages. Built with HTML5, CSS3, and Vanilla JavaScript.

## 🚀 Easy Content Editing

You can update this website without knowing how to code! All images, packages, destinations, and translations are controlled by simple Javascript files in the `js` folder.

### 1. How to change the Logo and Hero Image
- Replace `images/logo/logo.png` with your own logo.
- Replace `images/hero/hero-main.webp` with your own hero background image.
- You can also update the exact file names inside `js/images.js` if you prefer to upload images with different names.

### 2. How to manage Destinations
Open `js/destinations.js`. You will find an array of destinations. You can safely add, remove, or edit destinations. Make sure to place your destination images in the correct `images/destinations/` folder.

### 3. How to manage Trip Packages
Open `js/packages.js`. Here you can edit the package names, durations, and day-by-day itinerary. Place new package images in `images/packages/`.

### 4. How to manage Hotels & Stay
Open `js/hotels.js`. Edit the hotel names, locations, descriptions, and update their images.

### 5. How to manage the Gallery
Open `js/gallery.js`. Add or remove images from the grid. Place your high-quality images in `images/gallery/`.

### 6. How to change WhatsApp Booking Number
Open `js/booking.js`. At the very top, you will see `WA_NUMBER_1` and `WA_NUMBER_2`. Replace these with your own numbers (remember to use the country code without the `+` sign).

### 7. How to edit Translations / Languages
Open `js/translations.js`. You will find the translations for English (`en`), Indonesian (`id`), Spanish (`es`), Chinese (`zh`), and French (`fr`). Edit the text inside the quotes to update any label on the website.

## 🌐 Deploying to GitHub Pages
1. Push this entire folder to a new GitHub repository.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` or `master` branch and click **Save**.
5. Wait 1-2 minutes, and your website will be live!
