export interface BrandData {
    id: string;
    name: string;
    tagline: string;
    description: string; // "About the brand" - history, reputation, etc.
    heroImage: string;
    logo: string;

    // Section 3: Product Types Offered
    productTypes: {
        title: string;
        image: string;
        description: string;
        application?: string;
    }[];

    // Section 4: Applications
    applications: {
        name: string;
        icon: string; // Emoji or Lucide icon name fallback
    }[];

    // Section 5: Brand Videos
    videos: {
        title: string;
        videoId: string; // YouTube ID
    }[];
}

export const BRAND_DATA: Record<string, BrandData> = {
    'century-ply': {
        id: 'century-ply',
        name: 'Century Ply',
        tagline: 'Sab Sahe Mast Rahe',
        description: 'Century Plyboards (India) Ltd. is a leading manufacturer of plywood and decorative laminates. With a rich history of innovation and quality, Century Ply is synonymous with trust and durability in the Indian market. Their products are known for their resistance to borers and termites, and come with a reliable warranty.',
        heroImage: 'https://images.unsplash.com/photo-1620626012053-1d166398b218?auto=format&fit=crop&q=80', // Interior shot
        logo: '', // Placeholder
        productTypes: [
            {
                title: 'Marine Plywood',
                image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
                description: 'Waterproof plywood ideal for kitchen and bathroom applications.',
                application: 'Kitchen, Bathroom, Exterior',
            },
            {
                title: 'Commercial Plywood',
                image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
                description: 'MR Grade plywood for furniture and interior partitions.',
                application: 'Bedroom Furniture, Partitions',
            },
            {
                title: 'Fire Retardant Ply',
                image: 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&q=80',
                description: 'Chemically treated plywood that delays the spread of fire.',
                application: 'Public Spaces, Kitchens',
            },
            {
                title: 'BWP Grade',
                image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80',
                description: 'Boiling Water Proof plywood for extreme durability.',
                application: 'Marine, Exterior',
            }
        ],
        applications: [
            { name: 'Kitchen', icon: '🍳' },
            { name: 'Office', icon: '💼' },
            { name: 'Residential', icon: '🏠' },
            { name: 'Furniture', icon: '🪑' },
            { name: 'Commercial', icon: '🏢' },
        ],
        videos: [
            { title: 'Century Ply Corporate Video', videoId: 'dQw4w9WgXcQ' }, // Placeholder ID
            { title: 'Firewall Technology', videoId: 'dQw4w9WgXcQ' },
        ]
    },
    'greenply': {
        id: 'greenply',
        name: 'Greenply',
        tagline: 'Plywood for Every Need',
        description: 'Greenply Industries Limited is an interior infrastructure company. It manufactures a wide range of interior infrastructure products including Plywood, Block Board, and Decorative Veneers.',
        heroImage: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80',
        logo: '',
        productTypes: [
            {
                title: 'Green Club Plus',
                image: '',
                description: 'Zero emission plywood for safe interiors.',
            },
            {
                title: 'Marine Ply',
                image: '',
                description: '710 Grade BWP Plywood.',
            }
        ],
        applications: [
            { name: 'Home', icon: '🏠' },
            { name: 'Office', icon: '💼' }
        ],
        videos: []
    }
};
