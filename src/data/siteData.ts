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
  title: string;
  logo: string;
  gallery: string[];
  products: Product[];
  videos: string[];
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
    description: "Premium grade plywood for furniture, construction, and marine applications from India's most trusted manufacturers.",
    heroImage: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?auto=format&fit=crop&w=1200&q=80",
    brands: {
      century: {
        name: "Century Ply",
        slug: "century",
        tagline: "Raho Befikar — India's No.1 Plywood Brand",
        description: "CenturyPly is India's largest and most trusted plywood manufacturer, established in 1986. Their products feature revolutionary Virokill Technology that eliminates 99.9% of viruses on surfaces, and Firewall Technology that enhances fire resistance, delaying fire spread for up to 50 minutes. Century Ply's products are 65% stronger in Glue Shear Strength compared to ordinary plywood, and all products are treated with Glue Line Protection (GLP) for borer and termite resistance. With IS 710 certification and a nationwide dealer network, CenturyPly is the benchmark in India's plywood industry.",
        heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
        title: "Century Ply Authorized Dealer | Marine & Commercial Plywood",
        logo: "https://centuryply.com/img/logo-new.png",
        gallery: [
          "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1700973408133-b45276ec8feb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1588607866562-cad0d77b254a?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1566373924413-3efde9d6eb67?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1761656630581-69a58e4e1c09?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Architect Ply", image: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1200&auto=format&fit=crop", description: "CenturyPly's flagship luxury BWP marine-grade plywood with Lifetime Warranty. Features advanced Firewall (fire-retardant) and ViroKill (antiviral) technology. 100% borer & termite-proof with GLP. Gurjan face, Phenol Formaldehyde resin bonding. Water absorption <5%, Glue Shear Strength >1450N. Available in 4mm to 25mm thickness." },
          { name: "Club Prime 710", image: "https://images.unsplash.com/photo-1439668462223-e88f0ad95063?w=1200&auto=format&fit=crop", description: "CenturyPly's premium BWP marine-grade plywood with 30-year warranty. Features Virokill Technology (99.9% virus elimination), Firewall Technology (fire resistance up to 50 min), and 65% stronger glue shear strength. IS:710 certified. Available in 4mm to 25mm thickness." },
          { name: "Sainik 710", image: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1200&auto=format&fit=crop", description: "Affordable waterproof plywood with IS:710 certification. Offers enhanced bending resistance, less than 5% water absorption, and chemical treatment for borer & termite protection. Comes with an 8-year warranty and uniform pricing across India." },
          { name: "Classic Marine", image: "https://images.unsplash.com/photo-1686023858216-4f54c853acf2?w=1200&auto=format&fit=crop", description: "Innovative waterproof plywood in the premium economy segment. Features patented GLP technology for superior termite & borer defence. Quadrapress technology ensures performance tolerance. Virus & fungus proof. Specific Gravity >0.68, Water absorption <5%. 25-year warranty. Available in 4mm to 25mm." },
          { name: "Win MR", image: "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop", description: "Premium quality and durability at an affordable cost. Eco-friendly plywood made from seasoned wood with extra ply layers for added strength. Water resistant MR grade. Screw holding >165 Kg, Nail holding >75 Kg. IS 303 MR certified with 5-year warranty. Available in 4mm to 18mm." },
          { name: "Sainik MR", image: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop", description: "The only water resistant plywood in its price range. Bend-resistant, weather-resistant, dimensionally stable, and swell-proof. Borer & termite proof. Screw holding >165 Kg, Water absorption <5%. IS 303 MR certified with 5-year warranty. Available in 4mm to 18mm." },
          { name: "Bond 710", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop", description: "Special BWP marine-grade plywood featuring Quadra Press Technology for high strength. Built with more plies for increased structural integrity, borer & termite proof with GLP formula. 15-year warranty and IS:710 compliant." }
        ],
        videos: ["lIl5xx7tP3w", "ATOwSep_B0k"]
      },
      greenply: {
        name: "Greenply",
        slug: "greenply",
        tagline: "India's Leading Interior Infrastructure Brand",
        description: "Greenply Industries is one of India's largest interior infrastructure companies and a market leader in the plywood segment. Known for their commitment to sustainability and eco-friendly manufacturing, Greenply offers a wide range of plywood products with properties like water-proofing, fire-retardancy, zero emissions, and termite protection. Their products feature Virashield anti-viral & anti-bacterial technology, 4 Press Technology for superior strength, and E0 certified zero formaldehyde emission. With IS 710 and IS 303 certifications, CARB compliance, and warranties up to lifetime — Greenply is the benchmark for healthy, safe interiors.",
        heroImage: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1600&auto=format&fit=crop",
        title: "Greenply Authorized Dealer | Eco-friendly Plywood Solutions",
        logo: "https://www.greenply.com/assets/images/logo.svg",
        gallery: [
          "https://images.unsplash.com/photo-1700973408133-b45276ec8feb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1690768162439-7ca7a1813038?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1566373924413-3efde9d6eb67?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1629976828074-c248d94c82ea?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1588607866562-cad0d77b254a?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1617873229215-11589e502703?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Greenply Gold", image: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1200&auto=format&fit=crop", description: "Premium BWP (Boiling Water Proof) marine-grade plywood with IS 710 certification. Features Virashield anti-viral & anti-bacterial technology, zero formaldehyde emission (E0 CARB Certified), and 4 Press Technology for superior strength. Calibrated thickness with 100% composed hardwood core. Borer-fungus proof & anti-termite guaranteed. Available in 4mm to 25mm thickness, 8x4 ft sheets. 30-year warranty. Ideal for luxury modular kitchens, premium wardrobes, and moisture-prone areas." },
          { name: "Greenply Gold 2.0", image: "https://images.unsplash.com/photo-1439668462223-e88f0ad95063?w=1200&auto=format&fit=crop", description: "Next-gen premium BWP/Marine grade plywood with IS 710 certification. Engineered with 100% composed core & panel precisely stitched with hot melt glue. Ultimate waterproof & fire safe, zero formaldehyde emission (CARB Certified), Virashield anti-viral & anti-bacterial, 4 Press Technology, calibrated. Borer-fungus proof & anti-termite guaranteed (IS 5539 treated). Available in 9mm & 19mm, 8x4 ft sheets. 30-year warranty." },
          { name: "Greenply Club 700", image: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1200&auto=format&fit=crop", description: "Premium BWP plywood with 17-layer construction for enhanced durability. Structural Grade IS 10701 Certified. 2X Fire Retardant and 2X Waterproof with acoustic properties. Zero formaldehyde emission (CARB Certified), Virashield anti-viral & anti-bacterial. Borer-fungus-termite proof. Available in 4mm to 25mm thickness, 8x4 ft sheets. Lifetime warranty." },
          { name: "Greenply Club 500", image: "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop", description: "BWP grade plywood with excellent strength and load-bearing capacity. Structural Grade IS 10701 Certified, fire safe. Zero formaldehyde emission (CARB Certified), Virashield anti-viral & anti-bacterial. Smooth finish ideal for lamination and polishing. Borer-fungus-termite proof. Available in 6mm to 25mm, 8x4 ft sheets. Lifetime warranty." },
          { name: "Greenply Platinum", image: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop", description: "High-performance BWP plywood with IS 710 marine-grade certification. 100% composed core with selected hardwood species, 4 Press Technology for precision and tensile strength. E0 & E1 certified zero emission, Virashield anti-viral & anti-bacterial. Borer-proof, termite-resistant, fungus-resistant. Available in 6mm to 19mm, 8x4 ft sheets. 25-year warranty." },
          { name: "Greenply 710 Marine", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop", description: "Specialized BWP marine-grade plywood certified to IS 710 standard. 100% composed core with selected hardwood species, 4 Press Technology. Virashield anti-viral & anti-bacterial, E0 zero formaldehyde emission certified. Borer-fungus proof with anti-termite guarantee. Available in 6mm to 19mm, 8x4 ft sheets. 25-year warranty. Purpose-built for kitchen cabinets, bathroom vanities, and exterior-exposed furniture." },
          { name: "Ecotec Platinum", image: "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop", description: "Eco-friendly low formaldehyde emission plywood at value-for-money pricing. BWP Grade (72 hrs boiling water proof), IS 303 Certified with 10-point quality check. Calibrated thickness, Virashield anti-viral & anti-bacterial. Borer-fungus proof & anti-termite guaranteed. Available in 6mm to 25mm, 8x4 ft sheets. 15-year warranty." }
        ],
        videos: ["hqIxw19wvWw", "B7EvtzB0V9k"]
      },
      mikasa: {
        name: "Mikasa Ply",
        slug: "mikasa",
        tagline: "No Nonsense Ply — Premium Engineered Wood",
        description: "Mikasa Ply, from the House of Greenlam Industries, offers premium plywood solutions manufactured in India's most advanced plywood facility in Tindivanam, Tamil Nadu, spanning 17 acres with 18.9 million sq.m annual capacity. All products feature proprietary Deca Edge Technology for unparalleled strength, resilience, and longevity. ISI Certified with E0/E1 emission norms, Vacuum Pressure Chemical Treatment (VPCT), anti-termite & anti-borer protection, anti-fungal & anti-bacterial properties, and Precision Calibration Technology for uniform thickness. From the flagship lifetime-warranty Sapphire to the fire-retardant Fire Guardian, Mikasa is the no-nonsense choice for residential, commercial, and industrial applications.",
        heroImage: "https://images.unsplash.com/photo-1700973408133-b45276ec8feb?w=1600&auto=format&fit=crop",
        title: "Mikasa Plywood Authorized Dealer | Sapphire, Marine Blue, BWP+, MR+, Fire Guardian",
        logo: "https://www.mikasaply.com/images/logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1700973408133-b45276ec8feb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1508948414348-13a52d2ec394?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1690768162439-7ca7a1813038?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1566373924413-3efde9d6eb67?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1629976828074-c248d94c82ea?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611072337226-1140ab367200?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Sapphire", image: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1200&auto=format&fit=crop", description: "The pinnacle of premium-grade structural plywood. Crafted from superior hardwood with 0.9mm double-layer face veneer using an additional glue line on both sides. 100% composed veneer, 6X Press technology. E0 emission norms (lowest formaldehyde). Inherent fire-retardant (IS 5509:2021). ISI Certified. Density: 775 kg/CBM. Screw holding: 275 kg. Phenolic adhesive. Available in 4mm–25mm. Lifetime Warranty." },
          { name: "Marine Blue", image: "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop", description: "The next level of solid plywood. Crafted with tropical wood blend, 0.3mm face veneer on each side. E0 emission norms. Fire retardant (IS 5509:2021). 100% composed veneer, Quad Core Press (4X pressed). Density: 700 kg/CBM. Screw holding: 250 kg. Phenolic adhesive. Ideal for entertainment rooms, kitchens, and outdoor applications. Available in 4mm–25mm. 30-Year Warranty." },
          { name: "Marine", image: "https://images.unsplash.com/photo-1686023858216-4f54c853acf2?w=1200&auto=format&fit=crop", description: "Premium BWP plywood for moisture-prone environments. Tropical wood with 0.30mm face veneer, Quad-Core Press Tech compression prevents deformation under high pressure. E1 emission norms. Fire retardant (IS 5509:2021). Density: 660 kg/CBM. Screw holding: 220 kg. Phenolic adhesive. Ideal for kitchens, bedrooms, and bathrooms. Available in 4mm–25mm. 25-Year Warranty." },
          { name: "BWP+", image: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1200&auto=format&fit=crop", description: "Premium boiling water proof plywood engineered for high moisture and demanding conditions. High-quality tropical wood, 0.30mm face veneer. E1 emission norms. Quad Core Press (4X pressed). 100% composed veneer. Density: 640 kg/CBM. Screw holding: 200 kg. Phenolic adhesive. Advanced anti-termite and anti-borer protection. 100% calibrated. Available in 4mm–25mm. 20-Year Warranty." },
          { name: "MR+", image: "https://images.unsplash.com/photo-1631889993877-71e193bf79b8?w=1200&auto=format&fit=crop", description: "The ultimate moisture-resistant plywood. Premium tropical wood, 0.30mm face veneer. E1 emission norms with eco-friendly amino adhesive. Quad Core Press (4X pressed). 100% composed veneer. Density: 600 kg/CBM. Screw holding: 200 kg. High humidity and moisture resistance. Ideal for bedrooms, living rooms, and offices. Available in 4mm–25mm. 15-Year Warranty." },
          { name: "Fire Guardian", image: "https://images.unsplash.com/photo-1439668462223-e88f0ad95063?w=1200&auto=format&fit=crop", description: "The ultimate fire-retardant plywood for domestic and commercial settings. Engineered with exceptional fire-retardant characteristics (IS 5509:2021). 0.3mm face veneer, E1 emission norms. Quad Core Press (4X pressed). 100% composed veneer. Density: 700 kg/CBM. Screw holding: 250 kg. Phenolic adhesive. Ideal for offices, dining areas, and commercial spaces. Available in 4mm–25mm. 30-Year Warranty." }
        ],
        videos: ["qM-a-jivEEU"]
      },
      archid: {
        name: "Archidply",
        slug: "archid",
        tagline: "46 Years of Total Interior Solutions",
        description: "Archidply Industries Ltd is one of India's oldest and most respected manufacturers of interior infrastructure products with a 46-year legacy. The company offers a comprehensive range including Platinum Prime (lifetime warranty), Marine BWP, Fire Retardant, MR Grade, BWR Gold, and Shuttering plywood. Their products feature Toxin Check Technology (India's first eco-friendly low-formaldehyde plywood), German Glue Line Technology for 100% borer-proof bonding, and extreme density construction. Publicly listed on BSE & NSE with manufacturing facilities in Uttarakhand and Assam, Archidply has executed prestigious projects including Nita Mukesh Ambani Cultural Centre, Central Vista Delhi, AIIMS Bhatinda, and Bharat Mandapam.",
        heroImage: "https://images.unsplash.com/photo-1588607866562-cad0d77b254a?w=1600&auto=format&fit=crop",
        title: "Archidply Plywood Authorized Dealer | Platinum Prime, Marine, Fire Retardant",
        logo: "https://www.archidply.com/wp-content/uploads/2023/01/archidply-logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1588607866562-cad0d77b254a?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1617873229215-11589e502703?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1604916932991-eeb07b40bdcf?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1584950967742-2d5ddfa3c840?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1588939349575-7ab15c8bd1ef?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1612733459416-890db27bf3a7?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Platinum Prime", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop", description: "Archidply's flagship premium plywood. BWR grade, boiling water proof with auto-composed core and extreme density. Fungus and termite resistant. Conforms to IS:710 with E-0 formaldehyde emission rating. Recommended by architects, interior designers, and boat manufacturers. Available in 4–19mm thickness, sizes up to 8x4 ft. Lifetime Warranty." },
          { name: "Marine Plywood (Gold)", image: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop", description: "BWP Grade marine plywood with Toxin Check Technology — India's first eco-friendly plywood. 100% hardwood timber bonded with Phenol Formaldehyde resin. German Glue Line Technology makes it 100% borer-proof. Chemically impregnated, survives 72 hours of boiling. E-Zero formaldehyde emission. Extreme density, calibrated. Available in 4–19mm, sizes up to 8x4 ft. 30-Year Warranty." },
          { name: "Fire Retardant Plywood", image: "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop", description: "Chemical treated for fire resistance, meets IS 5509-2000 standards. Flame penetration >=15 min per 6mm thickness. Rate of burning >=20 min to lose 30% weight. Flammability >=30 min to second ignition. Bend resistant with intense screw holding. Eliminates toxic smoke and delays temperature rise. Available in 4–19mm, sizes up to 8x3 ft. 30-Year Warranty." },
          { name: "MR Grade Plywood Gold", image: "https://images.unsplash.com/photo-1665507279638-5b48073c637b?w=1200&auto=format&fit=crop", description: "High-quality hardwood with Melamine Formaldehyde Resin bonding. Extra strong, termite and borer resistant. Moisture resistant grade conforming to IS:303. German Glue technology, Toxin-free. Ideal for bank furniture, hospital furniture, and commercial complexes. Available in 6–18mm, sizes up to 8x4 ft. 7-Year Warranty." },
          { name: "BWR Plywood Gold", image: "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop", description: "Boiling Water Resistant plywood bonded with Phenol Formaldehyde Resin (superior to urea formaldehyde). 100% hardwood timber with German Glue Line Technology. Conforms to IS:303. Toxin-free, eco-friendly. Ideal for furniture, partitions, racks, shelves, kitchen cabinets, and bathrooms. Available in 19–25mm, sizes up to 8x4 ft. 7-Year Warranty." },
          { name: "Shuttering Plywood", image: "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=1200&auto=format&fit=crop", description: "BWP (Boiling Water Proof) grade with preservative treatment. Manufactured with select hardwood, ~9 layers of veneers pressed at very high temperatures. Withstands load, force, and vibrations during concrete pouring. Moisture and extreme weather resistant. Conforms to Indian Navy W/I standards and IS 4990. Available in 4–19mm, sizes up to 8x3 ft." }
        ],
        videos: ["avGQRB-C3rQ"]
      }
    }
  },
  laminates: {
    title: "Laminates",
    description: "Transform your surfaces with premium decorative laminates from India's top brands — HPL, glossy, matte, textured and more.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop",
    brands: {
      century: {
        name: "Century Laminates",
        slug: "century",
        tagline: "Lookbook for Your Home — ViroKill Protected",
        description: "Century Laminates offers a range of decorative laminates with innovative ViroKill Technology that keeps surfaces safe by eliminating viruses and bacteria. Part of the CenturyPly family, these laminates combine aesthetics with advanced protection. Available in hundreds of designs including wood grains, solid colors, stone finishes, and abstract patterns. Century Laminates are perfect for kitchen countertops, wardrobe shutters, office furniture, and wall paneling with high abrasion resistance and easy maintenance.",
        heroImage: "https://images.unsplash.com/photo-1678794792916-e5cb1217bed1?w=1600&auto=format&fit=crop",
        title: "Century Laminates | Decorative Surface Solutions",
        logo: "https://centuryply.com/img/logo-new.png",
        gallery: [
          "https://images.unsplash.com/photo-1678794792916-e5cb1217bed1?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "ViroKill HPL", image: "https://images.unsplash.com/photo-1694378061050-a2546ec7e837?w=1200&auto=format&fit=crop", description: "Virus-killing laminate surface using CenturyPly's patented ViroKill Technology. Eliminates 99.9% of viruses on contact. Available in 1mm HPL and 0.8mm thickness with hundreds of designs — wood grains, solid colors, and abstract patterns. Ideal for hospitals, schools, and homes." },
          { name: "Starline Decorative", image: "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop", description: "Durable decorative laminates available in wood, stone, and abstract designs. 0.8mm thickness in standard sheet sizes. High abrasion resistance with easy clean surfaces for everyday use in kitchens, offices, and wardrobes." },
          { name: "Post-Forming Laminates", image: "https://images.unsplash.com/photo-1677272292473-babd917423d0?w=1200&auto=format&fit=crop", description: "Flexible laminates that can be bent and shaped for curved edges on countertops, reception desks, and designer furniture pieces. Available in select designs with tight bending radius capabilities." }
        ],
        videos: []
      },
      merino: {
        name: "Merino Laminates",
        slug: "merino",
        tagline: "Economy, Excellence, Ethics — India's Favourite Laminates",
        description: "Merino Laminates is one of India's most iconic laminate brands, known for an extensive range of colors, textures, and finishes. From high-gloss to matte, wood grain to stone finish, Merino offers laminates for every application. Their flagship products include Merino Armour External Wall Cladding with Superclad Technology, Shaurya Internal Wall Cladding, and Standard Compact panels with antibacterial qualities. Merino laminates are resistant to wear, moisture, stains, and UV exposure, making them ideal for kitchens, wardrobes, offices, and commercial spaces.",
        heroImage: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1600&auto=format&fit=crop",
        title: "Merino Laminates Authorized Dealer | High Pressure Laminates",
        logo: "https://explore-merinolam.merinolaminates.com/assets/images/logo.webp",
        gallery: [
          "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1678794792916-e5cb1217bed1?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Tuff Gloss MR+", image: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1200&auto=format&fit=crop", description: "Mirror-like finish laminates with superior scratch and mar resistance. 3-4 times better abrasion resistance than standard glossy laminates. Heat resistant up to 180°C. Available in 1mm thickness with hundreds of color options for modular kitchens, wardrobes, and premium furniture." },
          { name: "Matte Finish HPL", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop", description: "Subtle and sophisticated matte surfaces for contemporary interiors. Anti-fingerprint properties make them ideal for wardrobes and office furniture. Smooth silk-touch feel with excellent durability. Available in wood grains, solid colors, and abstract patterns." },
          { name: "Armour External Cladding", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop", description: "Premium external wall cladding with Merino Superclad Technology. Resistant to extreme weather, UV exposure, corrosion, graffiti, and impact damage. Ideal for building facades, balconies, and outdoor architectural applications." }
        ],
        videos: []
      },
      greenlam: {
        name: "Greenlam Laminates",
        slug: "greenlam",
        tagline: "World's Top 3 Laminate Manufacturer — 120+ Countries",
        description: "Greenlam Industries is among the world's top 3 laminate manufacturers, operating in over 120 countries with one of the widest product portfolios in the global laminate industry. Their product range includes HPL with anti-bacterial protection, HD Gloss with twice the abrasion resistance, UNICORE solid-colour laminates, and specialty ranges like Chalk Grade and DIGI Junior. Greenlam also offers compact laminates for interior and exterior cladding, restroom cubicles, and locker solutions. A pioneer in sustainable surfacing solutions.",
        heroImage: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1600&auto=format&fit=crop",
        title: "Greenlam Laminates | World Class Surface Solutions",
        logo: "https://www.greenlam.co.in/skin/frontend/ves_blue/default/images/greenlam-logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1694378061050-a2546ec7e837?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677272292473-babd917423d0?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "HD Gloss Laminates", image: "https://images.unsplash.com/photo-1678794792916-e5cb1217bed1?w=1200&auto=format&fit=crop", description: "High-shine decorative surfaces with twice the abrasion resistance of standard glossy laminates. Mirror-like finish that maintains its sheen even with regular cleaning. Perfect for modular kitchens, premium wardrobes, and designer furniture." },
          { name: "Anti-Bacterial HPL", image: "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1200&auto=format&fit=crop", description: "Hygienic surface solutions with built-in anti-bacterial protection that eliminates 99.9% of harmful bacteria. Ideal for hospitals, restaurants, schools, and health-conscious residential spaces. Available in hundreds of designs." },
          { name: "UNICORE Solid Surface", image: "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop", description: "Solid colour throughout the laminate thickness — no brown edges visible on cuts. Revolutionary for visible edges and designer furniture applications. Available in a curated palette of contemporary colors." }
        ],
        videos: []
      },
      mikasa: {
        name: "Mikasa Laminates",
        slug: "mikasa",
        tagline: "400+ Designs, 20 Textures — Bold & Creative",
        description: "Mikasa Laminates is a bold new range from the House of Greenlam designed for creative, imaginative customers. With over 400 designs and 20 textures, Mikasa offers decorative laminates with bold colors and eclectic textures. Backed by 7,000+ retail partners across 500+ cities and 4 lakh+ happy customers, Mikasa also offers FX Exterior Panels for exterior surface cladding. Whether it's a contemporary kitchen or a statement wall, Mikasa laminates bring personality to every surface.",
        heroImage: "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1600&auto=format&fit=crop",
        title: "Mikasa Laminates | Premium Bold Surfaces",
        logo: "https://www.mikasaply.com/images/logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1678794792916-e5cb1217bed1?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Mikasa Decorative HPL", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop", description: "Bold decorative laminates with 400+ designs and 20 unique textures. From wood grains to abstract patterns — available in 1mm and 0.8mm thickness. Ideal for contemporary homes, modular kitchens, and modern offices." },
          { name: "Mikasa FX Exterior Panels", image: "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop", description: "Weather-resistant exterior cladding panels designed for building facades, balconies, and outdoor applications. UV and rain-proof with long-lasting finish. Self-supporting compact panels requiring no substrate." },
          { name: "Mikasa Textured Series", image: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1200&auto=format&fit=crop", description: "Specialty textured laminates including leather, fabric, stone, and metallic finishes for accent walls, wardrobes, and designer furniture. VRB (Variable Resistance Bonding) technology for unique tactile experience." }
        ],
        videos: []
      },
      aica: {
        name: "AICA Sunmica",
        slug: "aica",
        tagline: "The Japanese Art of Surfaces — 800+ Designs",
        description: "AICA Laminates India Pvt Ltd manufactures premium decorative laminates under the iconic Sunmica brand. With Japanese technology and over 800 design and surface variations, AICA brings world-class aesthetics to Indian interiors. Their product range includes the WONDER Series (digital HPL with natural stone and marble patterns), CELSUS (iF Design Award winning anti-fingerprint HPL with antibacterial properties), CURVICA (postforming grade for curved applications), and Ultra-Shield Exterior HPL for harsh weather conditions.",
        heroImage: "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1600&auto=format&fit=crop",
        title: "AICA Sunmica Laminates | Japanese Quality Surfaces",
        logo: "https://www.aicasunmica.com/themes/custom/aica/images/logos/aica-sunmica-logo.svg",
        gallery: [
          "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1678794792916-e5cb1217bed1?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "WONDER Series", image: "https://images.unsplash.com/photo-1694378061050-a2546ec7e837?w=1200&auto=format&fit=crop", description: "Digital HPL patterns that perfectly mimic natural stone and marble using advanced Japanese technology. Creates luxurious surfaces without the cost and weight of real stone. Available in 1mm and 0.8mm thickness with glossy and matte finishes." },
          { name: "CELSUS Anti-Fingerprint", image: "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1200&auto=format&fit=crop", description: "iF Design Award 2011 winning anti-fingerprint HPL with antibacterial and anti-fungal properties. Silky smooth touch that repels fingerprints. The ultimate surface for high-traffic commercial and residential spaces." },
          { name: "CURVICA Post-Forming", image: "https://images.unsplash.com/photo-1677272292473-babd917423d0?w=1200&auto=format&fit=crop", description: "Postforming grade laminates designed for curved applications — reception desks, rounded countertops, and designer furniture with seamless edges. Tight bending radius with no cracking." }
        ],
        videos: []
      },
      stylam: {
        name: "Stylam Laminates",
        slug: "stylam",
        tagline: "Style Your World — International Quality Surfaces",
        description: "Stylam Industries Limited is one of India's leading manufacturers of decorative laminates, exporting to over 80 countries worldwide. Known for high-quality HPL, compact panels, acrylic surfaces, and exterior cladding, Stylam offers innovative surface solutions for residential, commercial, and industrial applications. Their products feature advanced fire-retardant properties, UV resistance, and antibacterial surfaces.",
        heroImage: "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1600&auto=format&fit=crop",
        title: "Stylam Laminates | International Quality Dealer",
        logo: "https://www.stylam.com/assets/front/img/Stylam-LOGO.png",
        gallery: [
          "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1694378061050-a2546ec7e837?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677272292473-babd917423d0?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Post-Forming Laminates", image: "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop", description: "Flexible laminates for curved surfaces with tight bending radius. Perfect for countertop edges, reception desks, and modern furniture design. Available in woodgrain, marble, solid, and abstract patterns. Exported to 80+ countries." },
          { name: "Cuboid Compact Panel", image: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1200&auto=format&fit=crop", description: "Solid-core HPL panels for washroom cubicles, lockers, tabletops, and exterior cladding. Self-supporting with no substrate required. Water-resistant, fire-retardant, and available in a wide range of decors." },
          { name: "Fascia Exterior Cladding", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop", description: "UV-stable and weather-resistant facade cladding panels. Designed to withstand harsh conditions while maintaining appearance for decades. Available in wood, stone, metallic, and solid finishes." }
        ],
        videos: []
      },
      "royal-touch": {
        name: "Royale Touche",
        slug: "royal-touch",
        tagline: "India's Leading Luxury Laminate Brand",
        description: "Royale Touche is India's premium decorative laminates manufacturer, offering one of the widest collections in the industry with thousands of designs across multiple collections. Their range includes the Classy One collection (350 designs), Exclusive Savahh collection (620 designs), Crystal and Crystal Matty+ lines, High Gloss (181 designs), Fluted Collection (77 designs), and specialty collections like Spirello, Artiz, Silk, and Marbleous.",
        heroImage: "https://images.unsplash.com/photo-1694378061050-a2546ec7e837?w=1600&auto=format&fit=crop",
        title: "Royale Touche Luxury Laminates | Authorized Dealer",
        logo: "https://royaletouchewp.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/23125754/RT-Logo-Text.png",
        gallery: [
          "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1694378061050-a2546ec7e837?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Savahh Collection (620 Designs)", image: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1200&auto=format&fit=crop", description: "Royale Touche's exclusive premium collection featuring 620 curated designs in wood, stone, fabric, and abstract patterns. Available in 1mm and 0.8mm thickness. The gold standard of decorative surfaces for luxury interiors." },
          { name: "High Gloss (181 Designs)", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop", description: "Ultra-glossy mirror-finish laminates available in 181 shades. Perfect for luxury kitchens, modular wardrobes, and designer furniture with a stunning reflective surface. Scratch-resistant with superior abrasion properties." },
          { name: "Fluted Collection (77 Designs)", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop", description: "Trending fluted panel laminates with 3D ribbed surface texture. Available in 77 designs for accent walls, wardrobe shutters, and contemporary interiors. Creates stunning depth and shadow play." }
        ],
        videos: []
      },
      virgo: {
        name: "Virgo Laminates",
        slug: "virgo",
        tagline: "The Perfect Finish for Every Surface",
        description: "Virgo Group is a leading Indian manufacturer of laminates, plywood, and aluminum composites with 32+ years of experience. Virgo Laminates are known for their extensive range of off-white, fabric, and liner laminates that are especially popular for wardrobe interiors. Their 0.80mm and 1mm thickness options offer versatility for different applications. The Virgo brand family includes Virgo Laminates, Croma, Abco, Corby, Digital, Syncro, and Spotless ranges.",
        heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&auto=format&fit=crop",
        title: "Virgo Laminates Dealer | Quality Surface Solutions",
        logo: "https://virgolam.com/wp-content/themes/virgolam/assets/images/logos/virgo-laminates.png",
        gallery: [
          "https://images.unsplash.com/photo-1678794792916-e5cb1217bed1?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Virgo 1mm Decorative HPL", image: "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=1200&auto=format&fit=crop", description: "Premium 1mm thickness decorative laminates available in hundreds of designs — wood grains, solid colors, stone finishes, and abstracts. Ideal for kitchen shutters, office furniture, and wall paneling. High abrasion resistance with easy maintenance." },
          { name: "Virgo 0.8mm Liner Laminates", image: "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop", description: "Off-white and fabric liner laminates perfect for wardrobe interiors. Subtle, elegant shades in grey, beige, and white for a clean finished look. Also available in PVC and digital print variants." },
          { name: "Virgo Exterior Laminates", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop", description: "Weather-resistant exterior grade laminates for building facades, balcony cladding, and outdoor furniture applications. UV-stable, water-resistant, and fire-retardant properties." }
        ],
        videos: []
      },
      "advance-lam": {
        name: "Advance Laminates",
        slug: "advance-lam",
        tagline: "India's Leading Decorative Laminates Exporter",
        description: "Advance Decorative Laminates Private Limited is an ISO-certified manufacturer based in Hapur, Uttar Pradesh, known for producing high-grade decorative laminates with a luxurious look. Their product range includes HPL, PVC Laminates for modular kitchens, Exterior Laminates for outdoor surfaces, Door Skin Laminates, and ceiling & wall panels. Certified with ISO 14001, ISO 45001, CE, and FSC certifications.",
        heroImage: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1600&auto=format&fit=crop",
        title: "Advance Laminates Dealer | Decorative Surfaces",
        logo: "https://advancelam.com/wp-content/uploads/2023/11/adv-logo-2.png",
        gallery: [
          "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1694378061050-a2546ec7e837?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Decorative HPL", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&auto=format&fit=crop", description: "High-grade decorative laminates in wood, stone, solid, floral, geometric, and abstract patterns. Available in 0.8mm, 1mm, and 1.25mm thicknesses. ISO certified manufacturing with FSC certified raw materials." },
          { name: "PVC Laminates", image: "https://images.unsplash.com/photo-1612031736732-082438882d51?w=1200&auto=format&fit=crop", description: "Enhanced PVC surface sheets specifically designed for modular kitchens, wardrobes, and office cabinets. Water-resistant, easy to maintain, and available in high-gloss and matte finishes." },
          { name: "Exterior Grade HPL", image: "https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1200&auto=format&fit=crop", description: "Weather-resistant laminates for outdoor applications — building facades, signage, and exterior furniture. UV-stable, fire-retardant, and CE certified for international quality standards." }
        ],
        videos: []
      }
    }
  },
  mdf: {
    title: "MDF/HDHMR",
    description: "Precision-engineered MDF, HDF, and HDHMR boards for smooth finishes, routed designs, and modular furniture.",
    heroImage: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop",
    brands: {
      century: {
        name: "Century MDF",
        slug: "century",
        tagline: "Prowud — India's Trusted MDF Brand",
        description: "Century Prowud MDF is part of the CenturyPly family, offering versatile and durable medium-density fibreboard widely used for furniture, partitions, paneling, and routed designs. Century MDF boards are manufactured with uniform density distribution for consistent machining results. Available in interior and exterior grades with various thicknesses.",
        heroImage: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1600&auto=format&fit=crop",
        title: "Century Prowud MDF Boards | Authorized Dealer",
        logo: "https://centuryply.com/img/logo-new.png",
        gallery: [
          "https://images.unsplash.com/photo-1686023858216-4f54c853acf2?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1691290692144-c456d4c2751c?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1665507279638-5b48073c637b?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Prowud Interior MDF", image: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop", description: "Premium interior-grade MDF for routed designs, painted finishes, and laminated furniture. Uniform density for precision CNC machining." },
          { name: "Prowud Exterior MDF", image: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1200&auto=format&fit=crop", description: "Moisture-resistant MDF suitable for kitchen cabinets and areas with higher humidity. Enhanced bonding technology for water resistance." },
          { name: "Century Pre-Lam MDF", image: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1200&auto=format&fit=crop", description: "Factory-laminated MDF boards with melamine-faced surfaces ready for direct use. Available in multiple designs — saves time and labor costs." }
        ],
        videos: ["lIl5xx7tP3w"]
      },
      "green-panel": {
        name: "Greenpanel",
        slug: "green-panel",
        tagline: "India's No.1 MDF Company & Largest Wood Panel Manufacturer",
        description: "Greenpanel Industries Limited is India's No.1 MDF company and the country's largest wood panel manufacturer. Spun off from Greenply in 2019, Greenpanel manufactures engineered wood products at facilities in Uttarakhand and Andhra Pradesh. Their HDHMR boards (marketed as MDF 710) feature density of 780–830 kg/m³, E0 and E1 certification for low formaldehyde emissions, and antimicrobial technology.",
        heroImage: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1600&auto=format&fit=crop",
        title: "Greenpanel MDF & HDHMR Boards | Authorized Dealer",
        logo: "https://mysite.greenpanel.com/sites/all/themes/greenpanel/img/gp-logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1665507279638-5b48073c637b?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631889993877-71e193bf79b8?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "MDF 710 HDHMR", image: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=1200&auto=format&fit=crop", description: "High Density High Moisture Resistant boards with 780–830 kg/m³ density. E0 certified with antimicrobial technology. Ideal for modular kitchens and wardrobes." },
          { name: "Exterior Grade MDF", image: "https://images.unsplash.com/photo-1758630737403-1bda34e3f98e?w=1200&auto=format&fit=crop", description: "Weather-resistant MDF boards for wall paneling, mouldings, and applications exposed to humidity. Available in 8×4 ft sheets from 3mm to 25mm thickness." },
          { name: "Pre-Laminated MDF", image: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1200&auto=format&fit=crop", description: "Melamine-faced MDF boards with factory-applied decorative surfaces. Ready for direct installation — saves fabrication time and ensures uniform finish." }
        ],
        videos: []
      },
      greenply: {
        name: "Greenply MDF",
        slug: "greenply",
        tagline: "Engineered for Excellence — Sustainable MDF Solutions",
        description: "Greenply's MDF range complements their plywood offerings with high-quality medium-density fibreboards manufactured using sustainable forestry practices. Greenply MDF boards are known for consistent density, smooth surfaces ideal for painting and lamination, and excellent screw-holding capacity.",
        heroImage: "https://images.unsplash.com/photo-1560185127-1902ccdc5094?w=1600&auto=format&fit=crop",
        title: "Greenply MDF Boards | Authorized Dealer",
        logo: "https://www.greenply.com/assets/images/logo.svg",
        gallery: [
          "https://images.unsplash.com/photo-1686023858216-4f54c853acf2?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1691290692144-c456d4c2751c?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1758630737403-1bda34e3f98e?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Max MDF Interior", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200&auto=format&fit=crop", description: "Premium interior-grade MDF with superior density and smooth finish. Perfect for CNC routing, painting, and high-quality furniture applications." },
          { name: "Max MDF Exterior", image: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=1200&auto=format&fit=crop", description: "Moisture-resistant MDF for kitchen and bathroom furniture applications. Enhanced water resistance with low swelling properties." }
        ],
        videos: ["b2QJVsdPUVs"]
      },
      archid: {
        name: "Archidply MDF",
        slug: "archid",
        tagline: "Quality to the Core — New Generation Panels",
        description: "Archidply MDF is manufactured using superior quality fibre and resins for consistent performance. In 2024, Archidply launched the new Archidpanel brand with state-of-the-art MDF and EDHMR manufacturing facilities, targeting ₹200 Crore in turnover growth.",
        heroImage: "https://images.unsplash.com/photo-1439668462223-e88f0ad95063?w=1600&auto=format&fit=crop",
        title: "Archidply MDF & EDHMR Boards | Dealer",
        logo: "https://www.archidply.com/wp-content/uploads/2023/01/archidply-logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1708397016786-8916880649b8?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1662454419622-a41092ecd245?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Archidpanel MDF", image: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1200&auto=format&fit=crop", description: "Standard MDF boards for interior furniture, wall paneling, and display fixtures. Uniform density for clean routing and painting." },
          { name: "Archidpanel EDHMR", image: "https://images.unsplash.com/photo-1686023858216-4f54c853acf2?w=1200&auto=format&fit=crop", description: "Extreme Density High Moisture Resistant boards — Archidply's 2024 premium product line. Designed for modular kitchens, commercial furniture, and high-humidity environments." }
        ],
        videos: []
      }
    }
  },
  "particle-boards": {
    title: "Particle Boards",
    description: "Economical and lightweight pre-laminated and plain particle boards for modern modular furniture.",
    heroImage: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1200&auto=format&fit=crop",
    brands: {
      merino: {
        name: "Merino Particle Board",
        slug: "merino",
        tagline: "Smart Furniture Choice — Ready-to-Use Boards",
        description: "Merino Pre-laminated Particle Boards are available in a wide range of designs and textures, offering a ready-to-use solution for modular furniture manufacturing. These boards come with factory-applied decorative surfaces that match Merino's popular laminate designs, ensuring consistent color coordination.",
        heroImage: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1600&auto=format&fit=crop",
        title: "Merino Particle Board | Pre-Laminated Boards Dealer",
        logo: "https://explore-merinolam.merinolaminates.com/assets/images/logo.webp",
        gallery: [
          "https://images.unsplash.com/photo-1758630737403-1bda34e3f98e?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1708397016786-8916880649b8?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1662454419622-a41092ecd245?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Pre-Lam Particle Board", image: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1200&auto=format&fit=crop", description: "Factory-laminated boards with melamine-faced decorative surfaces. Available in Merino's popular designs — ready for direct assembly without additional lamination." },
          { name: "Plain Particle Board", image: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop", description: "Unfinished particle boards for custom lamination and painting applications. Available in various thicknesses for different furniture requirements." }
        ],
        videos: []
      },
      century: {
        name: "Century Particle Board",
        slug: "century",
        tagline: "Smart Choice for Modern Furniture",
        description: "Century's particle boards are engineered for uniformity, strength, and cost-effectiveness. Part of the CenturyPly family, these boards offer consistent thickness and smooth surfaces ideal for lamination.",
        heroImage: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1600&auto=format&fit=crop",
        title: "Century Particle Board | Authorized Dealer",
        logo: "https://centuryply.com/img/logo-new.png",
        gallery: [
          "https://images.unsplash.com/photo-1665507279638-5b48073c637b?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631889993877-71e193bf79b8?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1662454419622-a41092ecd245?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Century Plain Particle Board", image: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1200&auto=format&fit=crop", description: "Uniform density particle boards for lamination applications. Consistent thickness and smooth surface for professional results." },
          { name: "Century Pre-Lam Board", image: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1200&auto=format&fit=crop", description: "Ready-to-use particle boards with factory-applied decorative surfaces. Available in popular wood grain and solid color finishes." }
        ],
        videos: ["lIl5xx7tP3w"]
      },
      greenlam: {
        name: "Greenlam Particle Board",
        slug: "greenlam",
        tagline: "Eco-Friendly Boards for Modern Interiors",
        description: "Greenlam Industries offers sustainable pre-laminated particle board solutions through their chipboard range. These boards feature factory-applied Greenlam laminate surfaces for consistent quality and design matching.",
        heroImage: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1600&auto=format&fit=crop",
        title: "Greenlam Particle Board | Eco-Friendly Boards Dealer",
        logo: "https://www.greenlam.co.in/skin/frontend/ves_blue/default/images/greenlam-logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1686023858216-4f54c853acf2?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1691290692144-c456d4c2751c?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Pre-Lam Chipboard", image: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1200&auto=format&fit=crop", description: "Melamine-faced particle boards with Greenlam design surfaces. Ready for direct assembly — ideal for modular kitchens and office furniture." },
          { name: "Plain Chipboard", image: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop", description: "Unfinished particle boards for custom lamination. Consistent density and smooth surface for reliable results." }
        ],
        videos: []
      },
      unbranded: {
        name: "Commercial Grade",
        slug: "unbranded",
        tagline: "Economical Solutions for Budget Projects",
        description: "Quality commercial-grade particle boards for cost-effective furniture and interior applications. These boards offer reliable performance at competitive prices, making them suitable for rental properties, budget renovations, and temporary installations.",
        heroImage: "https://images.unsplash.com/photo-1756364898034-61949e14ba00?w=1600&auto=format&fit=crop",
        title: "Commercial Grade Particle Boards",
        logo: "",
        gallery: [
          "https://images.unsplash.com/photo-1758630737403-1bda34e3f98e?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1662454419622-a41092ecd245?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Plain Particle Board 8×4", image: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=1200&auto=format&fit=crop", description: "Standard particle boards for lamination and painting. Available in 8mm, 12mm, 16mm, 18mm, and 25mm thicknesses." }
        ],
        videos: []
      }
    }
  },
  hardware: {
    title: "Hardware",
    description: "Premium furniture fittings, kitchen accessories, drawer systems, hinges, and security locks from world-class brands.",
    heroImage: "https://images.unsplash.com/photo-1583041398200-09b2205f6cf0?w=1200&auto=format&fit=crop",
    brands: {
      hettich: {
        name: "Hettich",
        slug: "hettich",
        tagline: "Technik für Möbel — German Engineering Since 1888",
        description: "Hettich is one of the world's largest manufacturers of furniture fittings, bringing German engineering precision to Indian interiors since 1888. Their product range includes the award-winning Sensys hinge system with integrated Silent System soft-closing, InnoTech Atira modular drawer systems, Quadro precision drawer runners with various load capacities, sliding door systems, and folding door fittings.",
        heroImage: "https://plus.unsplash.com/premium_photo-1768228106004-912a8dc7b8bf?w=1600&auto=format&fit=crop",
        title: "Hettich Authorized Dealer | German Quality Hardware",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Logo_of_Hettich_%28company%29.svg/512px-Logo_of_Hettich_%28company%29.svg.png",
        gallery: [
          "https://plus.unsplash.com/premium_photo-1723863604510-b975bc0df671?w=1200&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1661962614351-1ce211d9eeb8?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1676976500593-3dfec0b17754?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1678108040468-0cc9addd984d?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Sensys Hinges", image: "https://plus.unsplash.com/premium_photo-1661292184470-5ae807de40f5?w=1200&auto=format&fit=crop", description: "Award-winning cabinet hinges with integrated Silent System soft-closing technology. Tool-free adjustment, 3D positioning, and opening angle options from 95° to 165°." },
          { name: "InnoTech Atira Drawers", image: "https://plus.unsplash.com/premium_photo-1664474995699-29a92f5b553d?w=1200&auto=format&fit=crop", description: "Modular drawer system with smooth-running advanced roller technology. Features adjustable depths, Silent System soft-close, and Push to Open functionality." },
          { name: "Quadro Drawer Runners", image: "https://images.unsplash.com/photo-1676976528790-968650f44264?w=1200&auto=format&fit=crop", description: "Precision drawer runners available in multiple load capacities (25kg to 70kg). Full extension with Silent System soft-closing for smooth, quiet operation." }
        ],
        videos: ["HbMvJ2FRdvs"]
      },
      abco: {
        name: "ABCO",
        slug: "abco",
        tagline: "Durable Fittings for Every Furniture Need",
        description: "ABCO is a reliable hardware solutions brand offering a comprehensive range of furniture fittings for residential and commercial applications. Known for competitive pricing without compromising on quality, ABCO products include cabinet hinges, drawer channels, handles, tower bolts, and various furniture accessories.",
        heroImage: "https://images.unsplash.com/photo-1769326541255-c6612ab334a0?w=1600&auto=format&fit=crop",
        title: "ABCO Hardware Dealer | Furniture Fittings",
        logo: "https://virgolam.com/wp-content/themes/virgolam/assets/images/logos/lam-abco.png",
        gallery: [
          "https://plus.unsplash.com/premium_photo-1663011078369-1613ac0a4758?w=1200&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1676890863093-b944dda91e23?w=1200&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1691030924760-1de72c3b5097?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1759200165738-6366977a73c6?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Cabinet Hinges", image: "https://plus.unsplash.com/premium_photo-1676893374865-77c554400507?w=1200&auto=format&fit=crop", description: "Standard and soft-close cabinet hinges for kitchen and wardrobe doors. Available in multiple overlay options and opening angles." },
          { name: "Drawer Channels", image: "https://images.unsplash.com/photo-1633434986226-503e8fbdc6d2?w=1200&auto=format&fit=crop", description: "Telescopic drawer channels in ball-bearing and roller variants. Available in 250mm to 600mm lengths with various load ratings." },
          { name: "Handles & Knobs", image: "https://plus.unsplash.com/premium_photo-1747575719638-1f1b0e6a81e8?w=1200&auto=format&fit=crop", description: "Wide range of cabinet handles, knobs, and pulls in stainless steel, zinc alloy, and aluminum finishes for all furniture types." }
        ],
        videos: []
      },
      ozone: {
        name: "Ozone",
        slug: "ozone",
        tagline: "Safer World — Smart Hardware & Security Solutions",
        description: "Ozone is India's leading architectural hardware and security solutions brand. Their product range spans glass fittings (railings, shower enclosures, partitions), digital smart locks (fingerprint, PIN, RFID, Wi-Fi enabled), door hardware, kitchen & furniture fittings, and security safes.",
        heroImage: "https://plus.unsplash.com/premium_photo-1729574858839-5a145c914bac?w=1600&auto=format&fit=crop",
        title: "Ozone Hardware & Smart Locks | Authorized Dealer",
        logo: "https://www.ozonehardware.com/assets/img/logo-footer.png",
        gallery: [
          "https://plus.unsplash.com/premium_photo-1729091229423-96b85c74a815?w=1200&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1728848993117-69409fdf7bdd?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1680727518491-bd54a9e702ef?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1637241613318-646f2c2a854a?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Digital Glass Door Lock", image: "https://plus.unsplash.com/premium_photo-1728831287366-54f08f8f9910?w=1200&auto=format&fit=crop", description: "OZ-FGL-LIFE G2W with 4-way access: fingerprint, PIN code, RFID cards, and remote control. Registers 100 fingerprints and 1,000 RFID cards. 30-year warranty." },
          { name: "Wi-Fi Smart Door Locks", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&auto=format&fit=crop", description: "Cleo series Wi-Fi enabled smart locks with 4-way access and remote monitoring via smartphone app. Available for wooden, metal, and glass doors." },
          { name: "Glass Partition Systems", image: "https://plus.unsplash.com/premium_photo-1681487214199-6fae0349ac2b?w=1200&auto=format&fit=crop", description: "Premium glass railing fittings, shower enclosures, and office partition systems. Stainless steel and aluminum options for modern interiors." }
        ],
        videos: ["Pcxp8-BXEHk"]
      },
      europa: {
        name: "Europa",
        slug: "europa",
        tagline: "Anti-Theft Engineering — India's Trusted Lock Brand",
        description: "Europa is one of India's most renowned brands for high-security door locks and locking systems. Their tri-bolt main door locks feature advanced Smart Plus 20-Pin, 6-Axis high-security key systems with anti-drill, anti-bend, and anti-break engineering.",
        heroImage: "https://plus.unsplash.com/premium_photo-1676893374667-976e466c2d2c?w=1600&auto=format&fit=crop",
        title: "Europa Locks | High Security Door Locks Dealer",
        logo: "https://europalocks.com/assets/images/europa-logo.png",
        gallery: [
          "https://images.unsplash.com/photo-1685884626572-aff35bbbefce?w=1200&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1672152802736-8a9d578a8090?w=1200&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1756454522317-87b2c7784706?w=1200&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1676893374865-77c554400507?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "T911AB Tri-Bolt Main Door Lock", image: "https://plus.unsplash.com/premium_photo-1731085142798-2870b2a85c46?w=1200&auto=format&fit=crop", description: "Premium armored tri-bolt lock with 3 heavy brass deadbolts (20mm each). Smart Plus 20-Pin 6-Axis key, antique brass PVD finish, free 9-inch pull handle. 15-year warranty." },
          { name: "T920RG Smart PRO Lock", image: "https://plus.unsplash.com/premium_photo-1679916743678-637a2e244e1f?w=1200&auto=format&fit=crop", description: "3-bolt configuration (2 dead bolts + 1 latch) with Smart Plus key system. Lockable internal knob, rose gold finish, 5x more breaking force resistance." },
          { name: "Mortise Lock Series", image: "https://plus.unsplash.com/premium_photo-1676893374667-976e466c2d2c?w=1200&auto=format&fit=crop", description: "Full range of mortise locks for bedrooms, bathrooms, and passage doors. Available in multiple finishes — satin, antique, and rose gold." }
        ],
        videos: []
      }
    }
  },
  fevicol: {
    title: "Fevicol",
    description: "India's most trusted adhesive brand by Pidilite — specialized bonding solutions for every woodworking need.",
    heroImage: "https://images.unsplash.com/photo-1760378367757-af1a1a7f062e?w=1200&auto=format&fit=crop",
    brands: {
      sh: {
        name: "Fevicol SH",
        slug: "sh",
        tagline: "60 Years of Trusted Bonding — The Original White Adhesive",
        description: "Fevicol SH is Pidilite's flagship synthetic resin adhesive with over 60 years of trusted performance in the woodworking industry. It bonds wood, laminate, MDF, and particleboard with superior strength. Fevicol SH is the most widely used white adhesive by carpenters across India.",
        heroImage: "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?w=1600&auto=format&fit=crop",
        title: "Fevicol SH Adhesive | Authorized Dealer",
        logo: "https://assets.pidilite.com/is/image/pidilite/Fevicol?ts=1712908605218&dpr=off",
        gallery: [
          "https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1645651964715-d200ce0939cc?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1516972810927-80185027ca84?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1590375096341-0c6b35a09d79?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Fevicol SH 50kg", image: "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?w=1200&auto=format&fit=crop", description: "Industrial-size pack for factories and large projects. India's most trusted woodworking adhesive for lamination, joinery, and edge banding." },
          { name: "Fevicol SH 5kg", image: "https://images.unsplash.com/photo-1547609434-b732edfee020?w=1200&auto=format&fit=crop", description: "Workshop-size pack ideal for carpenters and small workshops. Excellent coverage and strong bonding for everyday woodworking." },
          { name: "Fevicol SH 500g", image: "https://images.unsplash.com/photo-1685022515813-c42e8348639b?w=1200&auto=format&fit=crop", description: "Convenient size for home repairs, DIY projects, and small furniture jobs. The classic white adhesive trusted for 60+ years." }
        ],
        videos: []
      },
      marine: {
        name: "Fevicol Marine",
        slug: "marine",
        tagline: "Aqua Repel Technology — Waterproof Adhesive",
        description: "Fevicol Marine is Pidilite's specialized waterproof adhesive featuring proprietary Aqua Repel Technology. It provides extraordinary water resistance — surviving 7 hours of boiling water and 7 days of normal water immersion.",
        heroImage: "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1600&auto=format&fit=crop",
        title: "Fevicol Marine Waterproof Adhesive | Dealer",
        logo: "https://assets.pidilite.com/is/image/pidilite/Fevicol?ts=1712908605218&dpr=off",
        gallery: [
          "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1683181181300-44c0c991a2cf?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1649361811423-a55616f7ab11?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Fevicol Marine 50kg", image: "https://images.unsplash.com/photo-1685022515790-28eddf510f24?w=1200&auto=format&fit=crop", description: "Industrial waterproof adhesive with Aqua Repel Technology. 7 hours boiling water resistance, 7 days normal water resistance." },
          { name: "Fevicol Marine 5kg", image: "https://images.unsplash.com/photo-1580407573078-75c6d2d174eb?w=1200&auto=format&fit=crop", description: "Workshop-size waterproof adhesive for kitchen cabinets, bathroom furniture, and outdoor applications. Fast 4-6 hour setting time." }
        ],
        videos: []
      },
      hiper: {
        name: "Fevicol Hi-Per",
        slug: "hiper",
        tagline: "High Performance — Anti-Bubble Formula",
        description: "Fevicol Hi-Per is a high-performance adhesive designed for professional woodworking applications. It features an advanced anti-bubble formula that prevents air pockets during lamination, ensuring a smooth, bubble-free finish.",
        heroImage: "https://images.unsplash.com/photo-1560846389-956694677531?w=1600&auto=format&fit=crop",
        title: "Fevicol Hi-Per Adhesive | Dealer",
        logo: "https://assets.pidilite.com/is/image/pidilite/Fevicol?ts=1712908605218&dpr=off",
        gallery: [
          "https://images.unsplash.com/photo-1560846389-956694677531?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1506599667882-385dd6673353?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631396326870-da00e37a9fc6?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Fevicol Hi-Per 50kg", image: "https://images.unsplash.com/photo-1560846389-956694677531?w=1200&auto=format&fit=crop", description: "Industrial anti-bubble adhesive for factory lamination. Superior bonding strength, faster setting, and excellent heat resistance." },
          { name: "Fevicol Hi-Per 20kg", image: "https://images.unsplash.com/photo-1506599667882-385dd6673353?w=1200&auto=format&fit=crop", description: "Workshop pack for professional carpenters. Anti-bubble formula prevents air pockets for flawless laminate finish." }
        ],
        videos: []
      },
      heatx: {
        name: "Fevicol HeatX",
        slug: "heatx",
        tagline: "Heat Resistant Up to 170°C — No Masking Tape Needed",
        description: "Fevicol HeatX is Pidilite's specialized heat-resistant adhesive that withstands temperatures up to 170°C. It sets in just 10 minutes and requires no masking tape during application.",
        heroImage: "https://images.unsplash.com/photo-1758548157243-f4ef3e614684?w=1600&auto=format&fit=crop",
        title: "Fevicol HeatX Heat Resistant Adhesive | Dealer",
        logo: "https://assets.pidilite.com/is/image/pidilite/Fevicol?ts=1712908605218&dpr=off",
        gallery: [
          "https://images.unsplash.com/photo-1560185127-1902ccdc5094?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1686023858213-9653d3248fdc?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1665507279644-67d8ed143a84?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1769970502261-541570454bd7?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Fevicol HeatX 1kg", image: "https://images.unsplash.com/photo-1758548157243-f4ef3e614684?w=1200&auto=format&fit=crop", description: "Compact pack for kitchen installations and post-forming work. Withstands 170°C, sets in 10 minutes, no masking tape needed." },
          { name: "Fevicol HeatX 5kg", image: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?w=1200&auto=format&fit=crop", description: "Workshop size for professionals handling kitchen countertops, post-forming laminates, and heat-exposed furniture." }
        ],
        videos: []
      },
      probond: {
        name: "Fevicol Probond",
        slug: "probond",
        tagline: "Professional PVC Edge Banding Adhesive",
        description: "Fevicol Probond is a specialized adhesive designed specifically for bonding PVC edge banding tape to MDF, particleboard, and plywood substrates. It provides a strong, clean bond that resists peeling and edge lifting.",
        heroImage: "https://images.unsplash.com/photo-1607201076154-6f8b247ed4d2?w=1600&auto=format&fit=crop",
        title: "Fevicol Probond PVC Edge Banding Adhesive | Dealer",
        logo: "https://assets.pidilite.com/is/image/pidilite/Fevicol?ts=1712908605218&dpr=off",
        gallery: [
          "https://images.unsplash.com/photo-1605981630067-e30bf8e24c36?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1607201076154-6f8b247ed4d2?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1653087881002-071d4c840f9e?w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1665507279750-ced2d97a9be9?w=1200&auto=format&fit=crop"
        ],
        products: [
          { name: "Fevicol Probond 2kg", image: "https://images.unsplash.com/photo-1607201076154-6f8b247ed4d2?w=1200&auto=format&fit=crop", description: "Specialized PVC-to-wood edge banding adhesive. Strong bond, resists peeling and edge lifting." },
          { name: "Fevicol Probond 5kg", image: "https://images.unsplash.com/photo-1605981630067-e30bf8e24c36?w=1200&auto=format&fit=crop", description: "Workshop-size PVC edge banding adhesive for high-volume production. Quick application with consistent results." }
        ],
        videos: []
      }
    }
  }
};
