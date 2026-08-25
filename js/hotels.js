// ================================
// ADD / REMOVE HOTEL HERE
// ================================

const HOTELS = [
    {
        id: "swiss-belinn",
        image: SITE_IMAGES.hotels.swissBelinn,
        name: "Swiss-Belinn Luwuk",
        location: "Luwuk",
        type: { en: "Hotel", id: "Hotel", es: "Hotel", zh: "酒店", fr: "Hôtel" },
        description: {
            en: "Premium accommodation with ocean views.",
            id: "Akomodasi premium dengan pemandangan laut.",
            es: "Alojamiento premium con vistas al océano.",
            zh: "海景高级住宿",
            fr: "Hébergement premium avec vue sur l'océan."
        }
    },
    {
        id: "sidapore",
        image: SITE_IMAGES.hotels.sidapore,
        name: "Sidapore Hotel",
        location: "Luwuk",
        type: { en: "Boutique Hotel", id: "Hotel Butik", es: "Hotel Boutique", zh: "精品酒店", fr: "Hôtel Boutique" },
        description: {
            en: "Comfortable and strategic location in the city center.",
            id: "Nyaman dan strategis di pusat kota.",
            es: "Ubicación cómoda y estratégica en el centro.",
            zh: "位于市中心的舒适战略位置",
            fr: "Emplacement confortable et stratégique au centre-ville."
        }
    },
    {
        id: "homestay",
        image: SITE_IMAGES.hotels.homestay,
        name: "Local Homestay",
        location: "Salakan / Banggai Islands",
        type: { en: "Homestay", id: "Penginapan Lokal", es: "Alojamiento Local", zh: "当地民宿", fr: "Chez l'habitant" },
        description: {
            en: "Authentic local experience near the main attractions.",
            id: "Pengalaman lokal otentik dekat destinasi utama.",
            es: "Auténtica experiencia local cerca de las atracciones.",
            zh: "靠近主要景点的地道当地体验",
            fr: "Expérience locale authentique près des attractions principales."
        }
    }
];
