import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteData } from '@/data/siteData';
import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
// We'll create this component next
import VideoModal from '@/components/VideoModal';

interface BrandPageProps {
    params: Promise<{
        category: string;
        brand: string;
    }>;
}

// SEO Metadata
export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const categoryData = siteData[resolvedParams.category];
    const brandData = categoryData?.brands[resolvedParams.brand];

    if (!brandData) {
        return {
            title: 'Brand Not Found',
        };
    }

    return {
        title: brandData.title,
        description: brandData.description,
    };
}

// Static Params Generation
export async function generateStaticParams() {
    const paths = [];

    for (const category of Object.keys(siteData)) {
        const brandKeys = Object.keys(siteData[category].brands);
        for (const brand of brandKeys) {
            paths.push({
                category,
                brand,
            });
        }
    }

    return paths;
}

export default async function BrandPage({ params }: BrandPageProps) {
    const resolvedParams = await params;
    const categoryKey = resolvedParams.category;
    const brandKey = resolvedParams.brand;
    const categoryData = siteData[categoryKey];
    const brand = categoryData?.brands[brandKey];

    if (!brand) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* SECTION 1: Brand Hero */}
            <section className="relative h-[80vh] min-h-[500px] flex items-center text-white bg-dark-blue">
                <Image
                    src={brand.heroImage}
                    alt={brand.name}
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-3 py-1 bg-red-accent text-white text-sm font-bold tracking-wider mb-4 rounded-sm uppercase">Authorized Dealer</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg leading-tight">{brand.name}</h1>
                        <p className="text-2xl md:text-3xl font-light opacity-90 mb-8 max-w-lg">{brand.tagline}</p>
                        <Link href="#products" className="btn btn-cta shadow-xl px-8 py-4 text-lg">
                            Explore Products
                        </Link>
                    </div>
                    {/* Logo Placeholder or Brand Graphic */}
                    <div className="hidden md:flex justify-end">
                        <div className="w-64 h-64 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20 flex items-center justify-center p-8 shadow-2xl">
                            <h2 className="text-4xl font-bold text-center leading-none">{brand.name.split(' ')[0]}</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white py-4 border-b border-gray-100">
                <div className="container text-sm text-gray-500">
                    <Link href="/" className="hover:text-primary-blue transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href={`/${categoryKey}`} className="hover:text-primary-blue capitalize transition-colors">{categoryData.title}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-dark-blue font-bold capitalize">{brand.name}</span>
                </div>
            </div>

            {/* SECTION 2: About Split */}
            <section className="section-padding section-white">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm text-red-accent font-bold uppercase tracking-widest mb-2">About The Brand</h2>
                        <h3 className="text-4xl font-bold text-dark-blue mb-6">World Class Quality from <span className="text-primary-blue">{brand.name}</span></h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {brand.description}
                        </p>
                        <ul className="space-y-4">
                            {[
                                '100% Genuine Products',
                                'Manufacturer Warranty',
                                'Expert Installation Support',
                                'Best Market Rates'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-dark-blue font-medium">
                                    <CheckCircle className="text-red-accent mr-3 w-5 h-5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                <Image src={brand.gallery[0] || 'https://via.placeholder.com/400'} alt="Gallery 1" fill className="object-cover" />
                            </div>
                            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                                <Image src={brand.gallery[1] || 'https://via.placeholder.com/400'} alt="Gallery 2" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                                <Image src={brand.gallery[2] || 'https://via.placeholder.com/400'} alt="Gallery 3" fill className="object-cover" />
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                <Image src={brand.gallery[3] || 'https://via.placeholder.com/400'} alt="Gallery 4" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Product Grid */}
            <section id="products" className="section-padding section-light">
                <div className="container">
                    <h2 className="text-4xl font-bold text-center text-dark-blue mb-4">Product Range</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Discover the diverse collection of high-performance surfaces and materials.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {brand.products.map((product, idx) => (
                            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-card group hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-64 bg-gray-200 overflow-hidden">
                                    {product.image ? (
                                        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 font-bold text-xl">
                                            {product.name}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-8 border-b-4 border-transparent group-hover:border-red-accent transition-colors">
                                    <h3 className="text-2xl font-bold text-dark-blue mb-3">{product.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Application Gallery */}
            <section className="section-padding section-white">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-dark-blue mb-2">Applications</h2>
                            <p className="text-gray-600">See how {brand.name} transforms spaces.</p>
                        </div>
                        <Link href="/contact" className="hidden md:inline-flex text-primary-blue font-bold hover:text-red-accent transition-colors items-center">
                            Get Quote for Project &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                        {brand.gallery.slice(0, 5).map((img, idx) => (
                            <div key={idx} className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${idx === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}>
                                <Image src={img} alt={`Application ${idx}`} fill className="object-cover hover:scale-110 transition-transform duration-700" />
                                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                                    <span className="text-white font-medium text-sm">Interior Design</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Videos */}
            <section className="section-padding section-navy relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2 blur-3xl" />

                <div className="container relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center border-b border-white/10 pb-6 inline-block w-full">Video Showcase</h2>
                    <VideoModal videoIds={brand.videos} />
                </div>
            </section>

            {/* SECTION 6: Strong CTA */}
            <section className="py-24 bg-red-accent text-white text-center">
                <div className="container">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your space?</h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto">Get the best quote for {brand.name} products today. Bulk orders available for contractors and architects.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-10 py-4 bg-white text-red-accent font-bold text-xl rounded shadow-lg hover:bg-gray-100 transition-colors uppercase tracking-wide">
                            Request Quote
                        </Link>
                        <a href="tel:+919876543210" className="px-10 py-4 border-2 border-white text-white font-bold text-xl rounded hover:bg-white/10 transition-colors uppercase tracking-wide flex items-center justify-center gap-2">
                            Call Sales
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
