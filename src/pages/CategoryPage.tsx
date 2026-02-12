import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, Play, Shield, CheckCircle, Star } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Image from '@/components/Image';

export default function CategoryPage() {
  const { category: categoryKey } = useParams<{ category: string }>();

  if (!categoryKey || !siteData[categoryKey]) {
    return <Navigate to="/" replace />;
  }

  const data = siteData[categoryKey];
  const brands = Object.entries(data.brands);

  return (
    <div className="min-h-screen -mt-[60px]">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[55vh] flex items-center justify-center text-white bg-[#081F44] overflow-hidden pt-[60px]">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081F44]/70 via-[#081F44]/50 to-[#081F44]/90" />
        <div className="container relative z-10 text-center py-16">
          <nav className="flex justify-center items-center text-sm text-gray-400 mb-4 gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-semibold">{data.title}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{data.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{data.description}</p>
          <div className="w-20 h-1 bg-[#A4161A] mx-auto mt-8 rounded-full" />
          <p className="text-lg text-gray-400 mt-6">
            <span className="text-white font-bold">{brands.length}</span> Premium Brands &bull; Authorized Dealer
          </p>
        </div>
      </section>

      {/* ═══ BREADCRUMB BAR ═══ */}
      <div className="bg-[#F8FAFC] py-3 border-b border-[#E5E7EB]">
        <div className="container text-sm text-[#64748B] flex items-center gap-2">
          <Link to="/" className="hover:text-[#A4161A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#081F44] font-semibold capitalize">{data.title}</span>
        </div>
      </div>

      {/* ═══ SECTION HEADER ═══ */}
      <section className="py-16 bg-white border-b border-[#E5E7EB]">
        <div className="container text-center">
          <span className="inline-block px-4 py-1.5 bg-[#A4161A]/10 text-[#A4161A] font-bold text-sm uppercase tracking-widest rounded-full mb-4">
            Our Brands
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44]">
            Premium Brands Under {data.title}
          </h2>
          <p className="text-xl text-[#64748B] mt-4 max-w-3xl mx-auto">
            Explore each brand in detail — authorized products, brand videos, and expert guidance for your projects.
          </p>
        </div>
      </section>

      {/* ═══ BRAND SECTIONS — each brand gets a big, full-width showcase ═══ */}
      {brands.map(([key, brand], index) => {
        const isEven = index % 2 === 0;
        const productCount = brand.products?.length || 0;
        const hasVideo = brand.videos && brand.videos.length > 0;

        return (
          <section
            key={key}
            className={`py-20 md:py-28 ${isEven ? 'bg-white' : 'bg-[#F8FAFC]'}`}
          >
            <div className="container">
              {/* Brand number badge */}
              <div className="flex items-center gap-4 mb-10">
                <span className="flex items-center justify-center w-12 h-12 bg-[#081F44] text-white text-lg font-extrabold rounded-full">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px flex-1 bg-[#E5E7EB]" />
              </div>

              {/* Main content — logo left, info right (alternating) */}
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
                {/* Logo + Image Column */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  {/* Large Brand Logo */}
                  <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] p-8 md:p-12 flex items-center justify-center mb-8 min-h-[180px] shadow-sm">
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-[120px] max-w-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('span');
                            fallback.className = 'text-4xl md:text-5xl font-extrabold text-[#081F44] tracking-tight';
                            fallback.textContent = brand.name;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <span className="text-4xl md:text-5xl font-extrabold text-[#081F44] tracking-tight text-center">
                        {brand.name}
                      </span>
                    )}
                  </div>

                  {/* Hero Image with Video Badge */}
                  <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[360px] shadow-xl group">
                    <Image
                      src={brand.heroImage || brand.gallery?.[0] || 'https://via.placeholder.com/800x400'}
                      alt={brand.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {hasVideo && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-4 py-2 bg-[#A4161A] rounded-full text-white text-sm font-bold shadow-lg">
                        <Play size={14} fill="currentColor" />
                        Brand Videos
                      </div>
                    )}
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white/80 text-lg font-semibold italic">&ldquo;{brand.tagline}&rdquo;</p>
                    </div>
                  </div>
                </div>

                {/* Info Column */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#A4161A] text-white text-xs font-bold uppercase tracking-wider rounded">
                      Authorized Dealer
                    </span>
                    {hasVideo && (
                      <span className="px-3 py-1 bg-[#081F44] text-white text-xs font-bold uppercase tracking-wider rounded">
                        Videos Available
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#081F44] mb-6 leading-tight">
                    {brand.name}
                  </h3>

                  <p className="text-lg text-[#3B4A6B] leading-relaxed mb-8">
                    {brand.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 text-center shadow-sm">
                      <div className="text-2xl font-extrabold text-[#A4161A]">{productCount}+</div>
                      <div className="text-sm text-[#64748B] font-medium mt-1">Products</div>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 text-center shadow-sm">
                      <div className="text-2xl font-extrabold text-[#A4161A]">
                        <Shield className="w-7 h-7 mx-auto text-[#A4161A]" />
                      </div>
                      <div className="text-sm text-[#64748B] font-medium mt-1">Genuine</div>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 text-center shadow-sm">
                      <div className="text-2xl font-extrabold text-[#A4161A]">
                        <Star className="w-7 h-7 mx-auto text-[#A4161A]" />
                      </div>
                      <div className="text-sm text-[#64748B] font-medium mt-1">Premium</div>
                    </div>
                  </div>

                  {/* Product List Preview */}
                  {brand.products && brand.products.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-[#081F44] uppercase tracking-wider mb-3">Key Products</h4>
                      <div className="space-y-2">
                        {brand.products.slice(0, 4).map((product, pi) => (
                          <div key={pi} className="flex items-center gap-2 text-[#3B4A6B]">
                            <CheckCircle className="w-4 h-4 text-[#A4161A] flex-shrink-0" />
                            <span className="font-semibold">{product.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    to={`/${categoryKey}/${brand.slug}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#081F44] text-white font-bold text-lg rounded-xl hover:bg-[#0A2A5C] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    Explore {brand.name}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Product Cards Row */}
              {brand.products && brand.products.length > 0 && (
                <div className="mt-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {brand.products.slice(0, 3).map((product, pi) => (
                      <div
                        key={pi}
                        className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="relative h-[200px] bg-[#F8FAFC]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="p-5">
                          <h5 className="text-lg font-bold text-[#081F44] mb-2">{product.name}</h5>
                          <p className="text-sm text-[#64748B] line-clamp-3">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider between brands */}
            {index < brands.length - 1 && (
              <div className="container mt-20">
                <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
              </div>
            )}
          </section>
        );
      })}

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-24 bg-[#081F44] text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Need Expert Advice?</h2>
          <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
            Our consultants can help you choose the right {data.title.toLowerCase()} for your specific project needs.
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Bulk pricing available for contractors, architects and builders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all shadow-lg"
            >
              Get a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919832169125"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
