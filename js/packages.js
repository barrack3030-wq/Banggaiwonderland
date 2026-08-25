// ================================
// ADD / REMOVE TRIP PACKAGES HERE
// ================================

const PACKAGES = [
    {
        id: "luwuk-stopover",
        image: SITE_IMAGES.packages.luwukStopover,
        title: { en: "Luwuk Stopover", id: "Luwuk Stopover", es: "Luwuk Stopover", zh: "卢武克短暂停留", fr: "Luwuk Stopover" },
        durationDays: 1,
        durationNights: 0,
        recommended: false,
        itinerary: [
            {
                time: "11:30",
                activity: { en: "Arrival at Luwuk Airport", id: "Tiba di Bandara Luwuk", es: "Llegada al Aeropuerto de Luwuk", zh: "抵达卢武克机场", fr: "Arrivée à l'aéroport de Luwuk" }
            },
            {
                time: "12:00",
                activity: { en: "Airport pickup", id: "Penjemputan bandara", es: "Recogida en el aeropuerto", zh: "机场接机", fr: "Prise en charge à l'aéroport" }
            },
            {
                time: "13:30",
                activity: { en: "Piala Waterfall", id: "Air Terjun Piala", es: "Cascada Piala", zh: "Piala 瀑布", fr: "Cascade Piala" }
            },
            {
                time: "15:30",
                activity: { en: "Kilo 5 / coastal area", id: "Kilo 5 / area pesisir", es: "Kilo 5 / zona costera", zh: "Kilo 5 / 沿海地区", fr: "Kilo 5 / zone côtière" }
            },
            {
                time: "18:30",
                activity: { en: "Hotel / airport transfer", id: "Transfer hotel / bandara", es: "Traslado hotel / aeropuerto", zh: "酒店 / 机场接送", fr: "Transfert hôtel / aéroport" }
            }
        ]
    },
    {
        id: "luwuk-salakan",
        image: SITE_IMAGES.packages.luwukSalakan,
        title: { en: "Luwuk & Salakan Escape", id: "Luwuk & Salakan Escape", es: "Luwuk & Salakan Escape", zh: "卢武克与萨拉坎之旅", fr: "Luwuk & Salakan Escape" },
        durationDays: 3,
        durationNights: 2,
        recommended: false,
        itinerary: [
            {
                day: 1,
                activities: [
                    { en: "Arrival at Luwuk Airport", id: "Tiba di Bandara Luwuk" },
                    { en: "Port transfer", id: "Transfer ke pelabuhan" },
                    { en: "Ferry to Salakan", id: "Ferry ke Salakan" },
                    { en: "Hotel check-in & rest", id: "Check-in hotel & istirahat" }
                ]
            },
            {
                day: 2,
                activities: [
                    { en: "Paisupok Lake", id: "Danau Paisupok" },
                    { en: "Paisubatango Lake", id: "Danau Paisubatango" },
                    { en: "Poganda & Mandel Beach", id: "Pantai Poganda & Mandel" },
                    { en: "Local village experience", id: "Pengalaman desa lokal" }
                ]
            },
            {
                day: 3,
                activities: [
                    { en: "Long Beach & Oyama Beach", id: "Pantai Panjang & Pantai Oyama" },
                    { en: "Bontolan Beach", id: "Pantai Bontolan" },
                    { en: "Snorkeling", id: "Snorkeling" },
                    { en: "Return / departure", id: "Kembali / Keberangkatan" }
                ]
            }
        ]
    },
    {
        id: "banggai-wonderland",
        image: SITE_IMAGES.packages.banggaiWonderland,
        title: { en: "Banggai Wonderland", id: "Banggai Wonderland", es: "Banggai Wonderland", zh: "邦盖仙境之旅", fr: "Banggai Wonderland" },
        durationDays: 4,
        durationNights: 3,
        recommended: true,
        itinerary: [
            {
                day: 1,
                activities: [
                    { en: "Arrival & Airport pickup", id: "Tiba & Penjemputan bandara" },
                    { en: "Port transfer", id: "Transfer pelabuhan" },
                    { en: "Ferry to Salakan", id: "Ferry ke Salakan" },
                    { en: "Hotel check-in & rest", id: "Check-in hotel & istirahat" }
                ]
            },
            {
                day: 2,
                activities: [
                    { en: "Paisupok Lake", id: "Danau Paisupok" },
                    { en: "Paisubatango Lake", id: "Danau Paisubatango" },
                    { en: "Poganda Beach", id: "Pantai Poganda" },
                    { en: "Mandel Beach", id: "Pantai Mandel" }
                ]
            },
            {
                day: 3,
                activities: [
                    { en: "Long Beach", id: "Pantai Panjang" },
                    { en: "Oyama Beach", id: "Pantai Oyama" },
                    { en: "Bontolan Beach & Tanjung Gundul", id: "Pantai Bontolan & Tanjung Gundul" },
                    { en: "Snorkeling", id: "Snorkeling" }
                ]
            },
            {
                day: 4,
                activities: [
                    { en: "Salakan to Luwuk", id: "Salakan ke Luwuk" },
                    { en: "Piala Waterfall", id: "Air Terjun Piala" },
                    { en: "Kilo 5", id: "Kilo 5" },
                    { en: "Airport / hotel", id: "Bandara / hotel" }
                ]
            }
        ]
    },
    {
        id: "ultimate-banggai",
        image: SITE_IMAGES.packages.ultimateBanggai,
        title: { en: "Ultimate Banggai", id: "Ultimate Banggai", es: "Ultimate Banggai", zh: "终极邦盖之旅", fr: "Ultimate Banggai" },
        durationDays: 5,
        durationNights: 4,
        recommended: false,
        itinerary: [
             {
                day: 1,
                activities: [
                    { en: "Luwuk to Salakan", id: "Luwuk ke Salakan" }
                ]
            },
            {
                day: 2,
                activities: [
                    { en: "Paisupok & Paisubatango", id: "Paisupok & Paisubatango" },
                    { en: "Poganda & Mandel Beach", id: "Pantai Poganda & Mandel" }
                ]
            },
            {
                day: 3,
                activities: [
                    { en: "Long, Oyama, Bontolan Beach", id: "Pantai Panjang, Oyama, Bontolan" },
                    { en: "Tanjung Gundul & Snorkeling", id: "Tanjung Gundul & Snorkeling" }
                ]
            },
            {
                day: 4,
                activities: [
                    { en: "Mbuang-Mbuang", id: "Mbuang-Mbuang" },
                    { en: "Jellyfish experience", id: "Pengalaman ubur-ubur" },
                    { en: "Island exploration", id: "Eksplorasi pulau" }
                ]
            },
            {
                day: 5,
                activities: [
                    { en: "Salakan to Luwuk", id: "Salakan ke Luwuk" },
                    { en: "Piala Waterfall", id: "Air Terjun Piala" },
                    { en: "Airport", id: "Bandara" }
                ]
            }
        ]
    }
];
