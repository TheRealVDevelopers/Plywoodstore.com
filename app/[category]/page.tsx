import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteData } from '@/data/siteData';
import { Metadata } from 'next';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

// SEO Metadata
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const categoryData = siteData[resolvedParams.category];

    if (!categoryData) {
        return {
            title: 'Page Not Found',
        };
    }

    return {
        title: `${categoryData.title} | Premium Plywood Stores`,
        description: categoryData.description,
    };
}

// Static Params Generation
export async function generateStaticParams() {
    return Object.keys(siteData).map((category) => ({
        category,
    }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const categoryKey = resolvedParams.category;
    const data = siteData[categoryKey];

    if (!data) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white bg-dark-blue">
                <Image
                    src={data.heroImage}
                    alt={data.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="container relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">{data.title}</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">{data.description}</p>
                    <div className="w-24 h-1 bg-red-accent mx-auto mt-6 rounded-full"></div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3 border-b border-gray-200">
                <div className="container text-sm text-gray-500">
                    <Link href="/" className="hover:text-primary-blue">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-primary-blue font-semibold capitalize">{data.title}</span>
                </div>
            </div>

            {/* Brands Grid */}
            <section className="section-padding bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold text-dark-blue mb-12 text-center">Our Premium Brands</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(data.brands).map(([key, brand]) => (
                            <div key={key} className="group bg-white rounded-lg overflow-hidden shadow-card border border-gray-100 hover:border-primary-blue transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative h-[250px] overflow-hidden">
                                    <Image
                                        src={brand.heroImage || brand.gallery[0] || 'https://via.placeholder.com/400'}
                                        alt={brand.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                        <h3 className="text-2xl font-bold mb-1">{brand.name}</h3>
                                        <p className="text-sm opacity-90">{brand.tagline}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6 line-clamp-2 min-h-[48px]">{brand.description}</p>
                                    <Link
                                        href={`/${categoryKey}/${brand.slug}`}
                                        className="inline-block w-full text-center py-3 border-2 border-primary-blue text-primary-blue font-bold rounded hover:bg-primary-blue hover:text-white transition-colors uppercase tracking-wide"
                                    >
                                        View Collection
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="section-padding section-navy text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Need Expert Advice?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Our consultants can help you choose the right material for your specific project needs.</p>
                    <Link href="/contact" className="btn btn-cta px-10 py-4 text-lg shadow-lg">
                        Get a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
