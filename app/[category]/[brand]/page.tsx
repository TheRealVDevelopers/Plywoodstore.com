import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteData } from '@/data/siteData';
import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import VideoModal from '@/components/VideoModal';

interface BrandPageProps {
  params: Promise<{ category: string; brand: string }>;
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { category, brand } = await params;
  const categoryData = siteData[category];
  const brandData = categoryData?.brands[brand];
  if (!brandData) return { title: 'Brand Not Found' };
  return { title: brandData.title, description: brandData.description };
}

export async function generateStaticParams() {
  return Object.entries(siteData).flatMap(([cat, data]) =>
    Object.keys(data.brands).map((brand) => ({ category: cat, brand }))
  );
}

function getLayoutIndex(categoryKey: string, brandKey: string): number {
  const cats = Object.keys(siteData);
  const catIdx = cats.indexOf(categoryKey);
  const brandIdx = Object.keys(siteData[categoryKey]?.brands || {}).indexOf(brandKey);
  return ((catIdx * 10 + brandIdx) % 4);
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { category: categoryKey, brand: brandKey } = await params;
  const categoryData = siteData[categoryKey];
  const brand = categoryData?.brands[brandKey];

  if (!brand || !categoryData) notFound();

  const layoutIndex = getLayoutIndex(categoryKey, brandKey);

  const HeroBlock = () => (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden -mt-[100px] pt-[100px]">
      <Image src={brand.heroImage} alt={brand.name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#081F44]/75" />
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <p className="text-[#A4161A] font-bold text-lg uppercase tracking-widest mb-4">{brand.tagline}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{brand.name}</h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">{brand.description.slice(0, 180)}...</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );

  const HeroVideoBg = () => brand.videos?.[0] ? (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden -mt-[100px] pt-[100px]">
      <iframe
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${brand.videos[0]}?autoplay=1&mute=1&loop=1&playlist=${brand.videos[0]}&controls=0&showinfo=0`}
        title={brand.name}
        allow="autoplay; encrypted-media"
      />
      <div className="absolute inset-0 bg-[#081F44]/70 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{brand.name}</h1>
          <Link href="/contact" className="inline-block px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  ) : <HeroBlock />;

  const Breadcrumb = () => (
    <div className="bg-white py-4 border-b border-[#E5E7EB]">
      <div className="container text-base text-[#64748B] flex items-center gap-2">
        <Link href="/" className="hover:text-[#A4161A] transition-colors font-semibold">Home</Link>
        <span>/</span>
        <Link href={`/${categoryKey}`} className="hover:text-[#A4161A] transition-colors font-semibold capitalize">{categoryData.title}</Link>
        <span>/</span>
        <span className="text-[#081F44] font-bold">{brand.name}</span>
      </div>
    </div>
  );

  const AboutBlock = () => (
    <section className="py-24 bg-white">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#A4161A] font-bold text-lg uppercase tracking-widest">About the Brand</span>
          <h2 className="text-4xl font-bold text-[#081F44] mt-2 mb-6">
            World Class Quality from <span className="text-[#A4161A]">{brand.name}</span>
          </h2>
          <p className="text-lg text-[#3B4A6B] leading-relaxed mb-6">{brand.description}</p>
          <ul className="space-y-4">
            {['100% Genuine Products', 'Manufacturer Warranty', 'Expert Support', 'Best Market Rates'].map((item, i) => (
              <li key={i} className="flex items-center text-[#081F44] font-semibold text-lg">
                <CheckCircle className="text-[#A4161A] mr-3 w-6 h-6 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {brand.gallery.slice(0, 4).map((img, i) => (
            <div key={i} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProductsBlock = () => (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container">
        <h2 className="text-4xl font-bold text-[#081F44] text-center mb-4">Product Range</h2>
        <p className="text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-12">Discover the diverse collection of high-performance surfaces and materials.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {brand.products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all group">
              <div className="relative h-64 bg-[#E5E7EB]">
                {product.image ? (
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[#64748B] font-bold text-xl">{product.name}</div>
                )}
              </div>
              <div className="p-8 border-t-4 border-transparent group-hover:border-[#A4161A] transition-colors">
                <h3 className="text-2xl font-bold text-[#081F44] mb-3">{product.name}</h3>
                <p className="text-[#3B4A6B] text-lg leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const VideoBlock = () => brand.videos?.length ? (
    <section className="py-24 bg-[#081F44] text-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Watch {brand.name} in Action</h2>
        <VideoModal videos={brand.videos} />
      </div>
    </section>
  ) : null;

  const CTABlock = () => (
    <section className="py-24 bg-[#A4161A] text-white text-center">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your space?</h2>
        <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">Get the best quote for {brand.name} products today. Bulk orders available for contractors and architects.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-10 py-4 bg-white text-[#A4161A] font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors">
            Request Quote
          </Link>
          <a href="tel:+919876543210" className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors">
            Call Sales
          </a>
        </div>
      </div>
    </section>
  );

  // Layout A: Hero → About → Products → Gallery → Video → CTA
  if (layoutIndex === 0) {
    return (
      <div className="min-h-screen">
        <HeroBlock />
        <Breadcrumb />
        <AboutBlock />
        <ProductsBlock />
        {brand.gallery.slice(0, 5).length > 0 && (
          <section className="py-24 bg-white">
            <div className="container">
              <h2 className="text-4xl font-bold text-[#081F44] mb-12">Application Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brand.gallery.slice(0, 5).map((img, i) => (
                  <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 min-h-[300px]' : 'h-48'}`}>
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {VideoBlock()}
        <CTABlock />
      </div>
    );
  }

  // Layout B: Hero → Video → About → Products → Application Grid → CTA
  if (layoutIndex === 1) {
    return (
      <div className="min-h-screen">
        <HeroBlock />
        <Breadcrumb />
        {VideoBlock()}
        <AboutBlock />
        <ProductsBlock />
        {brand.gallery.length > 0 && (
          <section className="py-24 bg-[#F8FAFC]">
            <div className="container">
              <h2 className="text-4xl font-bold text-[#081F44] mb-12">Applications That Define Spaces</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {brand.gallery.slice(0, 5).map((img, i) => (
                  <div key={i} className="relative h-48 rounded-xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all">
                    <Image src={img} alt={`App ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <CTABlock />
      </div>
    );
  }

  // Layout C: Hero Split → Stats → Product Grid → Brand Gallery → Video → CTA
  if (layoutIndex === 2) {
    return (
      <div className="min-h-screen">
        <section className="relative min-h-[85vh] flex items-center -mt-[100px] pt-[100px]">
          <div className="absolute inset-0 bg-[#081F44]" />
          <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{brand.name}</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">{brand.description.slice(0, 200)}...</p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">
                Get Quote
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src={brand.heroImage} alt={brand.name} fill className="object-cover" />
            </div>
          </div>
        </section>
        <Breadcrumb />
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { num: '25+', label: 'Brands' },
                { num: '5000+', label: 'Projects' },
                { num: '100%', label: 'Genuine' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-[#A4161A]">{s.num}</div>
                  <div className="text-2xl font-semibold text-[#081F44]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProductsBlock />
        {brand.gallery.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container">
              <h2 className="text-4xl font-bold text-[#081F44] mb-12">Brand Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brand.gallery.slice(0, 4).map((img, i) => (
                  <div key={i} className="relative h-56 rounded-xl overflow-hidden">
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {VideoBlock()}
        <CTABlock />
      </div>
    );
  }

  // Layout D: Hero Video Background → Product Highlight Strip → About → Gallery → CTA
  return (
    <div className="min-h-screen">
      <HeroVideoBg />
      <Breadcrumb />
      <section className="py-16 bg-[#F8FAFC] overflow-x-auto">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#081F44] mb-8">Product Highlights</h2>
          <div className="flex gap-6">
            {brand.products.map((product, idx) => (
              <div key={idx} className="min-w-[280px] bg-white rounded-xl p-6 border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all">
                <h3 className="text-xl font-bold text-[#081F44] mb-2">{product.name}</h3>
                <p className="text-[#3B4A6B] text-base">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AboutBlock />
      {brand.gallery.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-[#081F44] mb-12">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {brand.gallery.slice(0, 6).map((img, i) => (
                <div key={i} className="relative h-64 rounded-xl overflow-hidden">
                  <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <CTABlock />
    </div>
  );
}
