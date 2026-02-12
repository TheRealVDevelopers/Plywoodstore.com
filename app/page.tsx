import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Shield, Truck, Clock } from 'lucide-react';
import { siteData } from '@/data/siteData';

// Helper to get featured brands across all categories
const featuredBrands = [
  siteData.plywood.brands.century,
  siteData.plywood.brands.greenply,
  siteData.laminates.brands.merino,
  siteData.hardware.brands.hettich,
  siteData.fevicol.brands.sh
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION (Premium Upgrade) */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-dark-blue text-white overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Luxury Interior Warehouse"
            fill
            className="object-cover opacity-40 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue via-dark-blue/80 to-transparent" />
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-bold tracking-wide uppercase">Authorized Dealers Since 2005</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build Your Dream <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Interiors
                <div className="absolute bottom-2 left-0 w-full h-2 bg-red-accent transform -skew-x-12 -z-10 origin-left animate-expand-width"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed">
              India's most trusted supplier of premium Plywood, Laminates, and Hardware.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/plywood" className="btn btn-cta shadow-xl shadow-red-900/20 text-lg px-8 py-4">
                Explore Collections
              </Link>
              <Link href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                Get a Quote
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm text-gray-400 font-medium">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-blue bg-gray-700 overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg">2000+</p>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMAGE STRIP (Visual Density) */}
      <section className="w-full h-32 md:h-48 grid grid-cols-2 md:grid-cols-5 overflow-hidden border-b border-t border-white/10 relative z-20 -mt-10 md:-mt-0 bg-dark-blue">
        {[
          { img: 'https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&q=80', label: 'Plywood' },
          { img: 'https://images.unsplash.com/photo-1505691938895-1758d7bab58d?auto=format&fit=crop&q=80', label: 'Laminates' },
          { img: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80', label: 'MDF' },
          { img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80', label: 'Hardware' },
          { img: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80', label: 'Adhesives' }
        ].map((item, i) => (
          <div key={i} className="relative group h-full w-full overflow-hidden">
            <Image src={item.img} alt={item.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white font-bold uppercase tracking-widest text-sm md:text-lg border-2 border-white/30 px-4 py-2 backdrop-blur-sm group-hover:bg-white group-hover:text-dark-blue transition-all">{item.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 3. PRODUCT CATEGORIES (3D Cards) */}
      <section className="section-padding bg-light-grey">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-dark-blue">Premium Materials</h2>
            <div className="w-24 h-1 bg-red-accent mx-auto rounded"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Browse our comprehensive range of interior infrastructure products sourced from the world's best brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(siteData).map(([key, category]) => (
              <Link key={key} href={`/${key}`} className="group relative h-[400px] w-full perspective-1000 block">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-card transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl border border-white">
                  <Image src={category.heroImage} alt={category.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-300 mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{category.description}</p>
                    <span className="inline-flex items-center gap-2 text-red-accent font-bold uppercase tracking-wide text-sm group-hover:gap-4 transition-all">
                      View Collection <ArrowRight size={16} />
                    </span>
                  </div>

                  {/* Hover Red Border Effect */}
                  <div className="absolute inset-0 border-4 border-red-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED BRANDS STORY */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1595558013260-530475b73188?auto=format&fit=crop&q=80"
                alt="Branded Plywood Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark-blue/20"></div>

              {/* Floating Brand Logos */}
              <div className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-2 animate-float">
                <span className="font-bold text-xs text-center">CenturyPly</span>
              </div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-2 animate-float-delay">
                <span className="font-bold text-sm text-center">Greenply</span>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-sm font-bold text-red-accent uppercase tracking-widest">Our Partners</h2>
              <h3 className="text-5xl font-bold text-dark-blue leading-tight">We Partner With The Giants of Industry.</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Quality is not just a promise; it's our inventory. We are authorized distributors for India's most reputed brands, ensuring you get genuine, warranty-backed products for your projects.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Genuine Products',
                  'Bulk Order Support',
                  'Direct Factory Warranty',
                  'Priority Delivery'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border hover:border-primary-blue hover:shadow-md transition-all">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="font-bold text-dark-blue">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/contact" className="btn btn-primary text-lg px-8">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Trust Signals) */}
      <section className="section-padding bg-dark-blue text-white relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={40} className="text-red-accent" />, title: "100% Authentic", desc: "Direct from manufacturer sourcing." },
              { icon: <Truck size={40} className="text-red-accent" />, title: "Fast Delivery", desc: "Same-day dispatch in Delhi NCR." },
              { icon: <Star size={40} className="text-red-accent" />, title: "Expert Support", desc: "Technical guidance for your projects." },
              { icon: <Clock size={40} className="text-red-accent" />, title: "20 Years Exp.", desc: "Serving the industry since 2005." }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-center group">
                <div className="mb-6 inline-flex bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-red-accent to-red-800 text-white text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Building a Project? Let's Talk.</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">Get expert advice and the best market rates for your bulk requirements.</p>
          <Link href="/contact" className="bg-white text-red-accent font-bold text-xl px-12 py-4 rounded shadow-2xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 inline-block">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
