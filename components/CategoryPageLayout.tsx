import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORY_DATA } from '@/data/categories';
import BrandCard from './BrandCard';
import { ChevronRight } from 'lucide-react';

interface CategoryPageLayoutProps {
    categoryKey: string;
}

export default function CategoryPageLayout({ categoryKey }: CategoryPageLayoutProps) {
    const data = CATEGORY_DATA[categoryKey];

    if (!data) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
                <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
            </div>
        );
    }

    return (
        <>
            {/* Section 1: Banner */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={data.bannerImage}
                    alt={data.title}
                    fill
                    className="object-cover z-0"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="container relative z-20 text-center">
                    <nav className="flex justify-center items-center text-sm md:text-base text-gray-300 mb-4 gap-2">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-white font-semibold">{data.title}</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{data.description}</p>
                </div>
            </section>

            {/* Section 2: Brand Grid */}
            <section className="section-padding bg-light-grey">
                <div className="container">
                    <h2 className="text-3xl font-bold text-dark-blue mb-12 text-center">Our Trusted Brands</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.brands.map((brand) => (
                            <BrandCard
                                key={brand.name}
                                name={brand.name}
                                description={brand.description}
                                link={brand.link}
                                logoUrl={brand.logo}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
