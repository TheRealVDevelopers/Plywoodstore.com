export const CATEGORY_DATA: Record<string, {
    title: string;
    description: string;
    bannerImage: string;
    brands: {
        name: string;
        description: string;
        link: string;
        logo?: string;
    }[];
}> = {
    plywood: {
        title: 'Premium Plywood',
        description: 'Explore our wide range of high-quality plywood from top brands.',
        bannerImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
        brands: [
            {
                name: 'Century Ply',
                description: 'India\'s leading manufacturer of plywood and decorative veneers. Known for quality and durability.',
                link: '/plywood/century',
            },
            {
                name: 'Greenply',
                description: 'One of India\'s largest interior infrastructure companies. Offers eco-friendly and high-quality plywood.',
                link: '/plywood/greenply',
            },
            {
                name: 'Mikasa Ply',
                description: 'Premium engineered wood flooring and plywood solutions for modern interiors.',
                link: '/plywood/mikasa',
            },
            {
                name: 'Archid Ply',
                description: 'Innovative and sustainable plywood solutions for diverse applications.',
                link: '/plywood/archid',
            }
        ]
    },
    laminates: {
        title: 'Decorative Laminates',
        description: 'Transform your spaces with our exquisite collection of laminates.',
        bannerImage: 'https://images.unsplash.com/photo-1628108428236-a5170f3f20d0?auto=format&fit=crop&q=80',
        brands: [
            {
                name: 'Merino',
                description: 'Global leader in laminates and surface solutions. Extensive range of designs and textures.',
                link: '/laminates/merino',
            },
            {
                name: 'Century Laminates',
                description: 'Premium decorative laminates from the house of Century Ply. Durable and stylish.',
                link: '/laminates/century',
            },
            {
                name: 'Greenlam',
                description: 'Among the world\'s top 3 laminate manufacturers. Innovative and sustainable surfacing solutions.',
                link: '/laminates/greenlam',
            },
            {
                name: 'Royale Touché',
                description: 'Luxury laminates that redefine elegance and style for your interiors.',
                link: '/laminates/royale-touche',
            }
        ]
    },
    mdf: {
        title: 'MDF & HDHMR Boards',
        description: 'Versatile and durable boards for furniture and interior applications.',
        bannerImage: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80',
        brands: [
            {
                name: 'Century MDF',
                description: 'High-quality MDF boards with superior density and smooth finish.',
                link: '/mdf/century',
            },
            {
                name: 'Greenpanel',
                description: 'India\'s largest manufacturer of wood panels. Known for Medium Density Fibreboard (MDF).',
                link: '/mdf/greenpanel',
            },
            {
                name: 'Action TESA',
                description: 'Pioneers in manufacturing HDHMR and MDF boards in India.',
                link: '/mdf/action-tesa',
            }
        ]
    },
    hardware: {
        title: 'Architectural Hardware',
        description: 'Premium hardware solutions for kitchen, wardrobe, and furniture.',
        bannerImage: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80',
        brands: [
            {
                name: 'Hettich',
                description: 'German quality hardware for furniture. Hinges, drawer systems, and sliding systems.',
                link: '/hardware/hettich',
            },
            {
                name: 'Ozone',
                description: 'Leading provider of architectural hardware and security solutions.',
                link: '/hardware/ozone',
            },
            {
                name: 'Ebco',
                description: 'Simplifying lives with innovative furniture fittings and accessories.',
                link: '/hardware/ebco',
            }
        ]
    }
};
