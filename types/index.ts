export interface Brand {
    id: string;
    name: string;
    slug: string;
    logo?: string; // URL or path
    description: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    brandId: string;
    imageUrl?: string;
    features?: string[];
}

export interface NavItem {
    label: string;
    href: string;
    subItems?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Plywood',
        href: '/plywood',
        subItems: [
            { label: 'Century Ply', href: '/plywood/century' },
            { label: 'Greenply', href: '/plywood/greenply' },
            { label: 'Mikasa Ply', href: '/plywood/mikasa' },
            { label: 'Archid Ply', href: '/plywood/archid' },
            { label: 'More Brands', href: '/plywood' },
        ]
    },
    {
        label: 'Laminates',
        href: '/laminates',
        subItems: [
            { label: 'Merino', href: '/laminates/merino' },
            { label: 'Century Laminates', href: '/laminates/century' },
            { label: 'Greenlam', href: '/laminates/greenlam' },
            { label: 'Mikasa Laminates', href: '/laminates/mikasa' },
            { label: 'AICA', href: '/laminates/aica' },
            { label: 'Stylam', href: '/laminates/stylam' },
            { label: 'Royal Touch', href: '/laminates/royal-touch' },
            { label: 'Virgo', href: '/laminates/virgo' },
            { label: 'Advance Lam', href: '/laminates/advance' },
            { label: 'More Brands', href: '/laminates' },
        ]
    },
    {
        label: 'MDF / HDHMR',
        href: '/mdf',
        subItems: [
            { label: 'Century MDF', href: '/mdf/century' },
            { label: 'Green Panel', href: '/mdf/greenpanel' },
            { label: 'Green Ply MDF', href: '/mdf/greenply' },
            { label: 'Archid MDF', href: '/mdf/archid' },
            { label: 'More Brands', href: '/mdf' },
        ]
    },
    {
        label: 'Particle Boards',
        href: '/particle-boards',
        subItems: [
            { label: 'Merino', href: '/particle-boards/merino' },
            { label: 'Century', href: '/particle-boards/century' },
            { label: 'Greenlam', href: '/particle-boards/greenlam' },
            { label: 'Unbranded', href: '/particle-boards/unbranded' },
            { label: 'More', href: '/particle-boards' },
        ]
    },
    {
        label: 'Hardware',
        href: '/hardware',
        subItems: [
            { label: 'ABCO', href: '/hardware/abco' },
            { label: 'Hettich', href: '/hardware/hettich' },
            { label: 'Ozone', href: '/hardware/ozone' },
            { label: 'Europa', href: '/hardware/europa' },
            { label: 'More', href: '/hardware' },
        ]
    },
    {
        label: 'Fevicol',
        href: '/fevicol',
        subItems: [
            { label: 'SH', href: '/fevicol/sh' },
            { label: 'Marine', href: '/fevicol/marine' },
            { label: 'Hiper', href: '/fevicol/hiper' },
            { label: 'HeatX', href: '/fevicol/heatx' },
            { label: 'Probond', href: '/fevicol/probond' },
        ]
    },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
];
