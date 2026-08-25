// ================================
// ADD / REMOVE DESTINATIONS HERE
// ================================

const DESTINATIONS = [
    // WATERFALLS
    {
        id: "piala-waterfall",
        category: "waterfalls",
        image: SITE_IMAGES.destinations.waterfalls.piala,
        title: { en: "Piala Waterfall", id: "Air Terjun Piala", es: "Cascada Piala", zh: "Piala 瀑布", fr: "Cascade Piala" },
        description: {
            en: "Stunning tiered waterfall with green natural pools.",
            id: "Air terjun bertingkat yang menakjubkan dengan kolam alami berwarna hijau.",
            es: "Impresionante cascada escalonada con piscinas naturales verdes.",
            zh: "令人惊叹的阶梯瀑布和绿色天然水池。",
            fr: "Superbe cascade en gradins avec piscines naturelles vertes."
        }
    },
    {
        id: "kamumu-waterfall",
        category: "waterfalls",
        image: SITE_IMAGES.destinations.waterfalls.kamumu,
        title: { en: "Kamumu Waterfall", id: "Air Terjun Kamumu", es: "Cascada Kamumu", zh: "Kamumu 瀑布", fr: "Cascade Kamumu" },
        description: {
            en: "A beautiful hidden cascade surrounded by lush forest.",
            id: "Air terjun tersembunyi yang indah dikelilingi hutan rimbun.",
            es: "Una hermosa cascada oculta rodeada de exuberante bosque.",
            zh: "被茂密森林环绕的美丽隐秘瀑布。",
            fr: "Une belle cascade cachée entourée d'une forêt luxuriante."
        }
    },
    {
        id: "salodik-waterfall",
        category: "waterfalls",
        image: SITE_IMAGES.destinations.waterfalls.salodik,
        title: { en: "Salodik Waterfall", id: "Air Terjun Salodik", es: "Cascada Salodik", zh: "Salodik 瀑布", fr: "Cascade Salodik" },
        description: {
            en: "Famous for its crystal clear water and pine tree surroundings.",
            id: "Terkenal dengan air sebening kristal dan lingkungan pohon pinus.",
            es: "Famosa por sus aguas cristalinas y su entorno de pinos.",
            zh: "以清澈见底的泉水和周围的松树闻名。",
            fr: "Célèbre pour ses eaux cristallines et ses pins environnants."
        }
    },

    // BEACHES
    {
        id: "bontolan-beach",
        category: "beaches",
        image: SITE_IMAGES.destinations.beaches.bontolan,
        title: { en: "Bontolan Beach", id: "Pantai Bontolan", es: "Playa Bontolan", zh: "Bontolan 海滩", fr: "Plage Bontolan" },
        description: {
            en: "Pristine white sand beach with crystal clear waters.",
            id: "Pantai pasir putih alami dengan air sebening kristal.",
            es: "Playa de arena blanca prístina con aguas cristalinas.",
            zh: "原始白沙滩与清澈见底的海水。",
            fr: "Plage de sable blanc immaculée aux eaux cristallines."
        }
    },
    {
        id: "long-beach",
        category: "beaches",
        image: SITE_IMAGES.destinations.beaches.longBeach,
        title: { en: "Long Beach", id: "Pantai Panjang", es: "Playa Larga", zh: "长滩", fr: "Plage Longue" },
        description: {
            en: "An expansive tropical coastline perfect for relaxation.",
            id: "Garis pantai tropis yang luas dan sempurna untuk bersantai.",
            es: "Una extensa costa tropical perfecta para relajarse.",
            zh: "绵长的热带海岸线，非常适合放松。",
            fr: "Un vaste littoral tropical parfait pour la détente."
        }
    },
    {
        id: "oyama-beach",
        category: "beaches",
        image: SITE_IMAGES.destinations.beaches.oyama,
        title: { en: "Oyama Beach", id: "Pantai Oyama", es: "Playa Oyama", zh: "Oyama 海滩", fr: "Plage Oyama" },
        description: {
            en: "A secluded beach paradise with calm waves.",
            id: "Surga pantai terpencil dengan ombak yang tenang.",
            es: "Una playa paradisíaca aislada con olas tranquilas.",
            zh: "隐蔽的海滩天堂，海浪平静。",
            fr: "Une plage paradisiaque isolée avec des vagues calmes."
        }
    },

    // LAKES
    {
        id: "paisupok-lake",
        category: "lakes",
        image: SITE_IMAGES.destinations.lakes.paisupok,
        title: { en: "Paisupok Lake", id: "Danau Paisupok", es: "Lago Paisupok", zh: "Paisupok 湖", fr: "Lac Paisupok" },
        description: {
            en: "The mirror lake famous for its incredibly clear dark-blue water.",
            id: "Danau cermin yang terkenal dengan air biru gelapnya yang sangat jernih.",
            es: "El lago espejo famoso por sus increíbles aguas cristalinas de color azul oscuro.",
            zh: "镜面湖，以其令人难以置信的清澈深蓝湖水闻名。",
            fr: "Le lac miroir célèbre pour ses eaux bleu foncé incroyablement claires."
        }
    },
    {
        id: "paisubatango-lake",
        category: "lakes",
        image: SITE_IMAGES.destinations.lakes.paisubatango,
        title: { en: "Paisubatango Lake", id: "Danau Paisubatango", es: "Lago Paisubatango", zh: "Paisubatango 湖", fr: "Lac Paisubatango" },
        description: {
            en: "A gorgeous hidden natural spring surrounded by forest.",
            id: "Mata air alami tersembunyi yang indah dikelilingi oleh hutan.",
            es: "Un hermoso manantial natural escondido rodeado de bosque.",
            zh: "被森林环绕的美丽隐秘天然泉水。",
            fr: "Une magnifique source naturelle cachée entourée de forêt."
        }
    },

    // ISLANDS
    {
        id: "pulo-dua",
        category: "islands",
        image: SITE_IMAGES.destinations.islands.puloDua,
        title: { en: "Pulo Dua", id: "Pulo Dua", es: "Pulo Dua", zh: "Pulo Dua", fr: "Pulo Dua" },
        description: {
            en: "A stunning viewpoint island with dramatic hills.",
            id: "Pulau dengan titik pandang menakjubkan dan perbukitan dramatis.",
            es: "Una impresionante isla mirador con colinas espectaculares.",
            zh: "拥有壮丽山丘景色的惊艳观景岛屿。",
            fr: "Une île point de vue magnifique avec des collines spectaculaires."
        }
    },
    {
        id: "mbuang-mbuang",
        category: "islands",
        image: SITE_IMAGES.destinations.islands.mbuang,
        title: { en: "Mbuang-Mbuang", id: "Mbuang-Mbuang", es: "Mbuang-Mbuang", zh: "Mbuang-Mbuang", fr: "Mbuang-Mbuang" },
        description: {
            en: "Remote island village and stingless jellyfish habitat.",
            id: "Desa pulau terpencil dan habitat ubur-ubur tidak menyengat.",
            es: "Remota aldea isleña y hábitat de medusas sin aguijón.",
            zh: "偏远的海岛村落及无毒水母栖息地。",
            fr: "Village insulaire isolé et habitat de méduses inoffensives."
        }
    }
];
