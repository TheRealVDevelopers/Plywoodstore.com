import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Plywood Stores | Our History & Mission',
    description: 'Learn about Plywood Stores, your trusted supplier for premium plywood and interior materials since 1995.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white bg-dark-blue">
                <Image
                    src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80"
                    alt="About Plywood Stores"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="container relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl max-w-2xl mx-auto">Building Trust with Quality Interiors Since 1995</p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-padding bg-white">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-dark-blue mb-6">Who We Are</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Plywood Stores is a premier supplier of high-quality interior materials, catering to architects, interior designers, contractors, and homeowners. We pride ourselves on offering a comprehensive range of products including Plywood, Laminates, MDF, Hardware, Adhesives, and more.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            With decades of experience in the industry, we have established strong partnerships with leading brands like Century, Greenply, Merino, and Hettich to bring you only the best.
                        </p>
                    </div>
                    <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
                            alt="Our Showroom"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding bg-light-grey">
                <div className="container grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-blue">
                        <h3 className="text-2xl font-bold text-dark-blue mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To be the most trusted and preferred partner for interior infrastructure solutions, known for quality, integrity, and customer satisfaction.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-accent">
                        <h3 className="text-2xl font-bold text-dark-blue mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To provide a diverse range of premium products at competitive prices, ensuring timely delivery and exceptional service to help our clients build their dream spaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brands We Deal With */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-dark-blue mb-12">Brands We Deal With</h2>
                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
                        {['Century Ply', 'Greenply', 'Merino', 'Hettich', 'Greenlam', 'Stylam', 'Ozone', 'Fevicol'].map(brand => (
                            <div key={brand} className="text-xl font-bold px-6 py-3 border border-gray-200 rounded hover:border-primary-blue hover:text-primary-blue transition cursor-default">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Store Gallery */}
            <section className="section-padding bg-dark-blue text-white">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Visit Our Store</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="relative h-[250px] bg-gray-800 rounded overflow-hidden">
                                {/* Placeholder for gallery images */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    Gallery Image {i}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/contact" className="btn btn-cta px-8 py-3 text-lg">
                            Get Directions
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
