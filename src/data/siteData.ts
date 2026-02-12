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
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80",
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
    title: "Decorative Laminates",
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
      }
    }
  },
  mdf: {
    title: "MDF Boards",
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
      }
    }
  },
  hardware: {
    title: "Kitchen & Wardrobe Hardware",
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
      }
    }
  },
  fevicol: {
    title: "Adhesives",
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
      }
    }
  }
};
