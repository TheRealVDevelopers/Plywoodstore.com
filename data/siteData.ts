export interface Product {
    name: string;
    image: string;
    description: string;
}

export interface Brand {
    name: string;
    slug: string;
    tagline: string;
    description: string;
    heroImage: string;
    title: string; // SEO Title
    logo: string;
    gallery: string[]; // Application images
    products: Product[];
    videos: string[]; // YouTube IDs
}

export interface Category {
    title: string;
    description: string;
    heroImage: string;
    brands: Record<string, Brand>;
}

export const siteData: Record<string, Category> = {
    plywood: {
        title: "Plywood",
        description: "Premium grade plywood for furniture, construction, and marine applications.",
        heroImage: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&q=80",
        brands: {
            century: {
                name: "Century Ply",
                slug: "century",
                tagline: "Sab Sahe Mast Rahe",
                description: "Century Ply is India's leading manufacturer of plywood and decorative veneers. Known for its high-quality, borer and termite proof products, Century Ply sets the benchmark in the industry.",
                heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
                title: "Century Ply Authorized Dealer | Marine & Commercial Plywood",
                logo: "",
                gallery: [
                    "/images/playwood/century/gallery-1.jpg.jpg",
                    "/images/playwood/century/gallery-2.jpg.jpg",
                    "/images/playwood/century/gallery-3.jpg.jpg",
                    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Club Prime", image: "", description: "Premium quality waterproof plywood with lifetime warranty." },
                    { name: "Sainik 710", image: "", description: "Economical waterproof plywood for budget-friendly interiors." },
                    { name: "Bond 710", image: "", description: "Borer and termite proof plywood for general carpentry." }
                ],
                videos: ["dQw4w9WgXcQ", "M7lc1UVf-VE"]
            },
            greenply: {
                name: "Greenply",
                slug: "greenply",
                tagline: "Plywood for every need",
                description: "Greenply is a market leader in the plywood industry, offering a wide range of interior infrastructure products. Their commitment to sustainability and quality makes them a preferred choice.",
                heroImage: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&q=80",
                title: "Greenply Authorized Dealer | Eco-friendly Plywood Solutions",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486029423-aaa4775f591b?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Green Gold", image: "", description: "Superior strength plywood for heavy furniture." },
                    { name: "Green Club Plus", image: "", description: "High-density structural plywood." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            mikasa: {
                name: "Mikasa Ply",
                slug: "mikasa",
                tagline: "The perfectionist's choice",
                description: "Mikasa offers premium engineered wood floors and plywood solutions that redefine luxury. Their products are designed for modern homes that demand elegance and durability.",
                heroImage: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80",
                title: "Mikasa Plywood & Flooring | Authorized Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1595558013260-530475b73188?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1585128719715-46776b563d77?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Mikasa Pristine", image: "", description: "Flawless finish plywood for visible areas." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            archid: {
                name: "Archidply",
                slug: "archid",
                tagline: "Total Interior Solutions",
                description: "Archidply Industries Ltd involves in the manufacturing of plywood, particle board, decorative laminates and decorative veneers.",
                heroImage: "https://images.unsplash.com/photo-1620626012053-93f2bc857863?auto=format&fit=crop&q=80",
                title: "Archidply Plywood and Laminates",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Archid Gold", image: "", description: "Premium marine grade plywood." }
                ],
                videos: ["dQw4w9WgXcQ"]
            }
        }
    },
    laminates: {
        title: "Laminates",
        description: "Transform your surfaces with our exquisite collection of laminates.",
        heroImage: "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?auto=format&fit=crop&q=80",
        brands: {
            merino: {
                name: "Merino Laminates",
                slug: "merino",
                tagline: "Economy, Excellence, Ethics",
                description: "Merino is versatile and vibrant. Known for their vast range of colors and textures, Merino laminates are perfect for kitchens, wardrobes, and office furniture.",
                heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
                title: "Merino Laminates Authorized Dealer | High Pressure Laminates",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "High Gloss", image: "", description: "Mirror-like finish for modern kitchens." },
                    { name: "Matte Finish", image: "", description: "Subtle and sophisticated surfaces." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            century: {
                name: "Century Laminates",
                slug: "century",
                tagline: "Lookbook for your home",
                description: "CenturyLaminates offers a range of decorative laminates with innovative technologies like ViroKill to keep your surfaces safe and beautiful.",
                heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
                title: "Century Laminates | Decorative Surface Solutions",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Starline", image: "", description: "Durable laminates for everyday use." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            greenlam: {
                name: "Greenlam",
                slug: "greenlam",
                tagline: "Beautifying Spaces",
                description: "Greenlam Industries is among the world's top 3 laminate manufacturers. They offer a vast portfolio of sustainable and stylish surfacing solutions.",
                heroImage: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80",
                title: "Greenlam Laminates | World Class Surface Solutions",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1502005229766-52838abd8173?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1512918760513-95f69295d40c?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Anti-Bacterial", image: "", description: "Hygienic surfaces for health-conscious homes." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            mikasa: {
                name: "Mikasa Laminates",
                slug: "mikasa",
                tagline: "Premium Surfaces",
                description: "Mikasa laminates bring a touch of class to your interiors with their wood-inspired designs and premium textures.",
                heroImage: "https://images.unsplash.com/photo-1594040226829-7f251ab23d7a?auto=format&fit=crop&q=80",
                title: "Mikasa Laminates | Premium Wood Finishes",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1622372738977-1453a3dc18af?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1622372739115-38dc1572c842?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1622372738985-0552b75249f3?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1622372738997-c8a773297371?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Wood Grain", image: "", description: "Natural wood look laminates." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            aica: {
                name: "Aica Laminates",
                slug: "aica",
                tagline: "The Japanese Art of Surfaces",
                description: "Aica brings Japanese technology and aesthetics to laminates, offering unique designs and high-performance surfaces.",
                heroImage: "https://images.unsplash.com/photo-1532323544230-7191fd510c53?auto=format&fit=crop&q=80",
                title: "Aica Laminates | Japanese Quality Surfaces",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Sunmica", image: "", description: "Known for quality and variety." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            stylam: {
                name: "Stylam Laminates",
                slug: "stylam",
                tagline: "Style your world",
                description: "Stylam produces high-quality decorative laminates for both residential and commercial applications, known for their durability and design.",
                heroImage: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80",
                title: "Stylam Laminates Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1522771753033-6a586857f291?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1595428774783-05b630dc5a54?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Post Forming", image: "", description: "Flexible laminates for curved surfaces." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            "royal-touch": {
                name: "Royal Touch",
                slug: "royal-touch",
                tagline: "Luxury Laminates",
                description: "Royal Touch implies luxury and exclusivity. Their premium laminates are designed to make a statement.",
                heroImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
                title: "Royal Touch Luxury Laminates",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1617325247661-675e8b375052?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1615875388242-36577888ad25?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "1mm Laminates", image: "", description: "Standard thickness for premium finish." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            virgo: {
                name: "Virgo Laminates",
                slug: "virgo",
                tagline: "The perfect finish",
                description: "Virgo Group is a leading manufacturer of laminates, plywood, and aluminum composites.",
                heroImage: "https://images.unsplash.com/photo-1540932296774-7097e3d69b28?auto=format&fit=crop&q=80",
                title: "Virgo Laminates Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1618221633519-74d752dd86f1?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1618221762141-89745771542f?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1618221941440-6d4355554737?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1618221868350-13f8373b7545?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "General Purpose", image: "", description: "Versatile laminates for all needs." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            "advance-lam": {
                name: "Advance Laminates",
                slug: "advance-lam",
                tagline: "Advanced Solutions",
                description: "Advance Laminates offers contemporary designs and textures that cater to current market trends.",
                heroImage: "https://images.unsplash.com/photo-1599696848652-f00ca16b1102?auto=format&fit=crop&q=80",
                title: "Advance Laminates Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Decorative", image: "", description: "Stylish designs for interiors." }
                ],
                videos: ["dQw4w9WgXcQ"]
            }
        }
    },
    mdf: {
        title: "MDF/HDHMR",
        description: "Consistency and smoothness defined. MDF boards for precise machining and painting.",
        heroImage: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80",
        brands: {
            century: {
                name: "Century MDF",
                slug: "century",
                tagline: "Solid Strength",
                description: "Century Prowud MDF is versatile and durable, widely used for furniture, partitions, and paneling.",
                heroImage: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80",
                title: "Century MDF Boards Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1505693416383-d2a65d702330?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1583847668183-c68ecb8ed202?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Prowud", image: "", description: "Premium MDF for routed designs." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            "green-panel": {
                name: "Greenpanel",
                slug: "green-panel",
                tagline: "India's largest wood panel manufacturer",
                description: "Greenpanel offers medium density fibreboards (MDF) that are consistent in density and reliable for various applications.",
                heroImage: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80",
                title: "Greenpanel MDF Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Exterior Grade MDF", image: "", description: "Weather-resistant MDF." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            greenply: {
                name: "Greenply MDF",
                slug: "greenply",
                tagline: "Engineered for excellence",
                description: "Greenply's MDF range compliments their plywood offerings with high quality fibreboards.",
                heroImage: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80",
                title: "Greenply MDF Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1530626779435-081977d6b384?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Max MDF", image: "", description: "Maximum strength MDF." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            archid: {
                name: "Archidply MDF",
                slug: "archid",
                tagline: "Quality to the core",
                description: "Archidply MDF is manufactured using superior quality fibre and resins.",
                heroImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80",
                title: "Archidply MDF Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1583847668183-c68ecb8ed202?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1505693416383-d2a65d702330?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Plain MDF", image: "", description: "For lamination and painting." }
                ],
                videos: ["dQw4w9WgXcQ"]
            }
        }
    },
    "particle-boards": {
        title: "Particle Boards",
        description: "Economical and lightweight solutions for modern furniture.",
        heroImage: "https://images.unsplash.com/photo-1532324398188-4f80072d62be?auto=format&fit=crop&q=80",
        brands: {
            merino: {
                name: "Merino Particle Board",
                slug: "merino",
                tagline: "Smart Furniture Choice",
                description: "Merino Pre-laminated Particle Boards are available in a wide range of designs and textures.",
                heroImage: "https://images.unsplash.com/photo-1506307127907-ad09562723c3?auto=format&fit=crop&q=80",
                title: "Merino Particle Board Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Prelam", image: "", description: "Ready to use boards." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            century: {
                name: "Century Particle Board",
                slug: "century",
                tagline: "Smart Choice",
                description: "Century's particle boards are engineered for uniformity and strength.",
                heroImage: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80",
                title: "Century Particle Board Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486029423-aaa4775f591b?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Plain Particle Board", image: "", description: "For lamination applications." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            greenlam: {
                name: "Greenlam Particle Board",
                slug: "greenlam",
                tagline: "Eco friendly boards",
                description: "Sustainable particle board solutions from Greenlam.",
                heroImage: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80",
                title: "Greenlam Particle Board Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1502005229766-52838abd8173?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1512918760513-95f69295d40c?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Melamine Faced", image: "", description: "Decorative boards." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            unbranded: {
                name: "Unbranded",
                slug: "unbranded",
                tagline: "Economical solutions",
                description: "Quality unbranded particle boards for cost-effective furniture and interior applications.",
                heroImage: "https://images.unsplash.com/photo-1532324398188-4f80072d62be?auto=format&fit=crop&q=80",
                title: "Unbranded Particle Board Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Plain Particle Board", image: "", description: "For lamination and painting." }
                ],
                videos: []
            }
        }
    },
    hardware: {
        title: "Hardware",
        description: "Smooth movement and robust mechanisms for your cabinets and drawers.",
        heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
        brands: {
            hettich: {
                name: "Hettich",
                slug: "hettich",
                tagline: "Technik fur Mobel",
                description: "Hettich is one of the world's largest manufacturers of furniture fittings, synonymous with German engineering and quality.",
                heroImage: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80",
                title: "Hettich Authorized Dealer | German Quality Hardware",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Sensys Hinges", image: "", description: "Silent system hinges." },
                    { name: "Quadro Runners", image: "", description: "Precision drawer runners." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            abco: {
                name: "Abco Hardware",
                slug: "abco",
                tagline: "Durable Fittings",
                description: "Reliable hardware solutions for residential and commercial furniture.",
                heroImage: "https://images.unsplash.com/photo-1532323544230-7191fd510c53?auto=format&fit=crop&q=80",
                title: "Abco Hardware Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1560185127-6a6a9781e436?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1585694247293-2780bf70d306?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Cabinet Hinges", image: "", description: "Standard hinges." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            ozone: {
                name: "Ozone Hardware",
                slug: "ozone",
                tagline: "Safer World",
                description: "Ozone offers a comprehensive range of architectural hardware and security solutions.",
                heroImage: "https://images.unsplash.com/photo-1558002038-1091eb894fa3?auto=format&fit=crop&q=80",
                title: "Ozone Hardware Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1560185127-6a6a9781e436?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Digital Locks", image: "", description: "Smart security solutions." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            europa: {
                name: "Europa Locks",
                slug: "europa",
                tagline: "Anti-Theft Engineering",
                description: "Europa is a renowned brand for high-security locks and locking systems.",
                heroImage: "https://images.unsplash.com/photo-1558002038-1091eb894fa3?auto=format&fit=crop&q=80",
                title: "Europa Locks Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1560185127-6a6a9781e436?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Main Door Locks", image: "", description: "Tri-bolt locks." }
                ],
                videos: ["dQw4w9WgXcQ"]
            }
        }
    },
    fevicol: {
        title: "Fevicol",
        description: "The ultimate bonding solution for woodworking.",
        heroImage: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
        brands: {
            sh: {
                name: "Fevicol SH",
                slug: "sh",
                tagline: "The Ultimate Adhesive",
                description: "Fevicol SH is a synthetic resin adhesive intended for wood working and various materials where one of the surfaces to be bonded is porous.",
                heroImage: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                title: "Fevicol SH Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Fevicol SH", image: "", description: "Classic white adhesive." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            marine: {
                name: "Fevicol Marine",
                slug: "marine",
                tagline: "Waterproof Adhesive",
                description: "Fevicol Marine is a specialized waterproof adhesive for marine applications.",
                heroImage: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80",
                title: "Fevicol Marine Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Marine Adhesive", image: "", description: "Water resistant bond." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            hiper: {
                name: "Fevicol Hi-Per",
                slug: "hiper",
                tagline: "High Performance",
                description: "Fevicol Hi-Per offers superior bonding strength and faster setting time.",
                heroImage: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80",
                title: "Fevicol Hi-Per Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Hi-Per", image: "", description: "Anti-bubble formula." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            heatx: {
                name: "Fevicol HeatX",
                slug: "heatx",
                tagline: "Heat Resistant",
                description: "Fevicol HeatX is designed to withstand high temperatures up to 170 degrees Celsius.",
                heroImage: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                title: "Fevicol HeatX Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "HeatX", image: "", description: "Heat resistant adhesive." }
                ],
                videos: ["dQw4w9WgXcQ"]
            },
            probond: {
                name: "Fevicol Probond",
                slug: "probond",
                tagline: "Professional Bonding",
                description: "Fevicol Probond is a specialized adhesive for bonding PVC to wood.",
                heroImage: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                title: "Fevicol Probond Dealer",
                logo: "",
                gallery: [
                    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&q=80"
                ],
                products: [
                    { name: "Probond", image: "", description: "PVC to wood adhesive." }
                ],
                videos: ["dQw4w9WgXcQ"]
            }
        }
    }
};

