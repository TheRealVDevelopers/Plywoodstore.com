'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Shield, Truck, Award } from 'lucide-react';
import { siteData } from '@/data/siteData';

const HERO_VIDEO_ID = 'dQw4w9WgXcQ';
const allBrandNames = Object.values(siteData).flatMap((cat) => Object.values(cat.brands).map((b) => b.name));

const productStrengths = [
  { title: 'Plywood', image: 'https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&q=80', desc: 'Premium grade marine & commercial plywood for furniture and construction.' },
  { title: 'Laminates', image: 'https://images.unsplash.com/photo-1505691938895-1758d7bab58d?auto=format&fit=crop&q=80', desc: 'Decorative laminates that transform kitchens, wardrobes and offices.' },
  { title: 'MDF & HDHMR', image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80', desc: 'Engineered boards for precision machining and smooth finishes.' },
  { title: 'Particle Boards', image: 'https://images.unsplash.com/photo-1532324398188-4f80072d62be?auto=format&fit=crop&q=80', desc: 'Economical and reliable boards for modern furniture.' },
  { title: 'Hardware', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80', desc: 'Hettich, Ozone, Europa—premium hinges and fittings.' },
  { title: 'Adhesives', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80', desc: 'Fevicol range for woodworking and professional bonding.' },
];

const applications = [
  { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
  { name: 'Residential', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80' },
  { name: 'Commercial', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80' },
  { name: 'Retail', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80' },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden -mt-[100px]">
      {/* 1. HERO - 80-90vh, light plywood showroom, left-aligned */}
      <section className="relative min-h-[85vh] flex items-center pt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Plywood showroom"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/40" />
        </div>

        <div className="container relative z-10 py-16">
          <div className="max-w-2xl">
            <h1 className="text-[64px] font-bold leading-[1.05] tracking-tight text-[#081F44] mb-6">
              Premium Plywood & Interiors for Every Space
            </h1>
            <p className="text-xl text-[#3B4A6B] leading-relaxed mb-8">
              India&apos;s trusted supplier of plywood, laminates, MDF and hardware. Authorized dealers for Century, Greenply, Merino, Hettich and more.
            </p>
            <ul className="space-y-2 text-lg text-[#3B4A6B] mb-10">
              <li className="flex items-center gap-2">• 20+ years experience</li>
              <li className="flex items-center gap-2">• Authorized dealers for top brands</li>
              <li className="flex items-center gap-2">• Bulk supply for contractors & builders</li>
              <li className="flex items-center gap-2">• Trusted by architects across the region</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/plywood"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#081F44] text-white font-bold text-lg rounded-lg hover:bg-[#0A2A5C] transition-all shadow-lg"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-SCREEN AUTO-PLAY VIDEO */}
      <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0`}
          title="Plywood Stores"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Quality That Builds Trust
          </h2>
        </div>
      </section>

      {/* 3. BRAND LOGO MARQUEE - White bg, grayscale, hover color */}
      <section className="py-16 bg-white overflow-hidden border-y border-[#E5E7EB]">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {[...allBrandNames, ...allBrandNames].map((name, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-[#94A3B8] hover:text-[#081F44] transition-colors px-6"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* 4. ABOUT OUR STORE - Split layout */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                alt="Plywood warehouse"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#081F44] mb-6">About Our Store</h2>
              <p className="text-lg text-[#3B4A6B] leading-relaxed mb-6">
                Plywood Stores is a leading supplier of premium plywood, laminates, MDF boards, hardware fittings and adhesives. Serving contractors, architects and interior professionals across North India, we focus on quality, durability and long-term trust.
              </p>
              <p className="text-lg text-[#3B4A6B] leading-relaxed mb-6">
                With partnerships across top brands like Century, Greenply, Merino and Hettich, we ensure genuine products and competitive pricing. Bulk orders for projects, dealer support, and expert advice—all under one roof.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#081F44] text-white font-bold rounded-lg hover:bg-[#0A2A5C] transition-all"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PRODUCT STRENGTH - 6 large cards */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#081F44] text-center mb-4">Our Product Strength</h2>
          <p className="text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-16">Premium materials for every need—from furniture to construction.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productStrengths.map((item, i) => (
              <Link
                key={i}
                href={item.title === 'Plywood' ? '/plywood' : item.title === 'Laminates' ? '/laminates' : item.title === 'MDF & HDHMR' ? '/mdf' : item.title === 'Particle Boards' ? '/particle-boards' : item.title === 'Hardware' ? '/hardware' : '/fevicol'}
                className="group relative h-[320px] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all"
              >
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-base line-clamp-2">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPLICATION SHOWCASE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#081F44] text-center mb-4">Applications That Define Spaces</h2>
          <p className="text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-16">From kitchens to commercial—we supply for every application.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {applications.map((app, i) => (
              <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all">
                <Image src={app.image} alt={app.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold text-lg">{app.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTRACTOR TRUST BLOCK */}
      <section className="py-24 bg-[#081F44] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Contractors, Architects & Builders Across the Region
          </h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-16">
            <div>
              <div className="text-5xl font-bold text-[#A4161A]">5000+</div>
              <div className="text-xl font-semibold mt-1">Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#A4161A]">100+</div>
              <div className="text-xl font-semibold mt-1">Dealers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#A4161A]">25+</div>
              <div className="text-xl font-semibold mt-1">Brands</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-16">
            {[Shield, Truck, Award].map((Icon, i) => (
              <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg">
                <Icon className="w-6 h-6 text-[#A4161A]" />
                <span className="font-semibold">{['100% Genuine', 'Fast Delivery', 'Expert Support'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CATEGORY GRID */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#081F44] text-center mb-4">Explore by Category</h2>
          <p className="text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-16">Premium plywood, laminates, MDF, hardware & more—from India&apos;s most trusted brands.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(siteData).map(([key, category]) => (
              <Link
                key={key}
                href={`/${key}`}
                className="group relative h-[280px] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all"
              >
                <Image src={category.heroImage} alt={category.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90 text-base line-clamp-2">{category.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#A4161A] font-bold mt-2 group-hover:gap-3 transition-all">
                    View brands
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-24 bg-gradient-to-r from-[#A4161A] to-[#C41E3A] text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Building a Project?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">Get expert advice and best market rates for your bulk requirements.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-12 py-4 bg-white text-[#A4161A] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
