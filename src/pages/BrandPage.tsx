import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Star, Shield, Truck, Award } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Image from '@/components/Image';
import InlineVideoSection from '@/components/InlineVideoSection';
import BrandVideoHero from '@/components/BrandVideoHero';

const NUM_TEMPLATES = 6;

function getLayoutIndex(categoryKey: string, brandKey: string): number {
  const cats = Object.keys(siteData);
  const catIdx = cats.indexOf(categoryKey);
  const brandIdx = Object.keys(siteData[categoryKey]?.brands || {}).indexOf(brandKey);
  return (catIdx * 10 + brandIdx) % NUM_TEMPLATES;
}

export default function BrandPage() {
  const { category: categoryKey, brand: brandKey } = useParams<{ category: string; brand: string }>();
  const categoryData = categoryKey ? siteData[categoryKey] : undefined;
  const brand = categoryData?.brands[brandKey || ''];

  useEffect(() => {
    if (brand) document.title = `${brand.title} | Plywood Stores`;
  }, [brand]);

  if (!brand || !categoryData) return <Navigate to="/" replace />;

  const layoutIndex = getLayoutIndex(categoryKey!, brandKey!);

  const Breadcrumb = ({ light = false }: { light?: boolean }) => (
    <div className={light ? 'bg-transparent py-4' : 'bg-white py-4 border-b border-[#E5E7EB]'}>
      <div className="container text-base flex items-center gap-2">
        <Link to="/" className={`hover:text-[#A4161A] transition-colors font-bold ${light ? 'text-white/70' : 'text-[#64748B]'}`}>Home</Link>
        <span className={light ? 'text-white/50' : 'text-[#64748B]'}>/</span>
        <Link to={`/${categoryKey}`} className={`hover:text-[#A4161A] transition-colors font-bold capitalize ${light ? 'text-white/70' : 'text-[#64748B]'}`}>{categoryData.title}</Link>
        <span className={light ? 'text-white/50' : 'text-[#64748B]'}>/</span>
        <span className={`font-extrabold ${light ? 'text-white' : 'text-[#081F44]'}`}>{brand.name}</span>
      </div>
    </div>
  );

  const BrandLogo = ({ centered = false, dark = false }: { centered?: boolean; dark?: boolean }) => brand.logo ? (
    <div className={`mb-8 ${centered ? 'flex justify-center' : ''}`}>
      <img src={brand.logo} alt={`${brand.name} logo`} className={`h-16 md:h-20 object-contain ${dark ? 'brightness-0 invert' : ''}`} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </div>
  ) : null;

  const MoreProductsCTA = ({ dark = false }: { dark?: boolean }) => (
    <div className={`mt-16 text-center rounded-2xl p-10 md:p-14 ${dark ? 'bg-white/5 border border-white/10' : 'bg-[#F0F4F8]'}`}>
      <h3 className={`text-2xl md:text-3xl font-extrabold mb-3 ${dark ? 'text-white' : 'text-[#081F44]'}`}>Looking for More Products?</h3>
      <p className={`text-lg mb-8 ${dark ? 'text-gray-400' : 'text-[#64748B]'}`}>We carry the complete {brand.name} catalog with many more options. Contact us for details and pricing.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-8 py-4 bg-[#A4161A] text-white font-bold rounded-lg hover:bg-[#C41E3A] transition-all text-lg">
          <Phone className="w-5 h-5" /> Call for Full Catalog
        </a>
        <Link to="/contact" className={`px-8 py-4 border-2 font-bold rounded-lg transition-all text-lg ${dark ? 'border-white text-white hover:bg-white/10' : 'border-[#081F44] text-[#081F44] hover:bg-[#081F44] hover:text-white'}`}>
          Request Product List
        </Link>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════
  // TEMPLATE 0 — "SHOWROOM" (Light, editorial, Khidki-inspired)
  // ═══════════════════════════════════════════════════════════════
  if (layoutIndex === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero with video background or image */}
        <section className="relative h-[70vh] flex items-end overflow-hidden -mt-[100px]">
          {brand.videos?.[0] ? (
            <iframe
              className="absolute inset-0 w-full h-full scale-[1.3] pointer-events-none"
              src={`https://www.youtube.com/embed/${brand.videos[0]}?autoplay=1&mute=1&loop=1&playlist=${brand.videos[0]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title={brand.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <Image src={brand.heroImage} alt={brand.name} fill className="object-cover" priority />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="container relative z-10 pb-14 pt-[100px]">
            <Breadcrumb light />
            <span className="inline-block px-5 py-2 bg-[#A4161A] text-white text-sm font-bold rounded-full mb-5 uppercase tracking-wider">Authorized Dealer</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">{brand.name}</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-xl">{brand.tagline}</p>
          </div>
        </section>

        {/* Why choose this brand */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container">
            <BrandLogo centered />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] text-center mb-5">Why Choose {brand.name}?</h2>
            <p className="text-lg text-[#3B4A6B] text-center max-w-3xl mx-auto mb-14">{brand.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: '100% Genuine', desc: 'Authorized dealer products' },
                { icon: Truck, label: 'Fast Delivery', desc: 'Quick dispatch for projects' },
                { icon: Award, label: 'Warranty', desc: 'Manufacturer backed' },
                { icon: Star, label: 'Best Rates', desc: 'Competitive market pricing' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all text-center">
                  <item.icon className="w-12 h-12 text-[#A4161A] mx-auto mb-4" />
                  <h4 className="font-extrabold text-[#081F44] text-lg">{item.label}</h4>
                  <p className="text-[#64748B] mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product cards — large, detailed layout */}
        <section className="py-24 bg-white">
          <div className="container">
            <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] mt-2 mb-4">Product Range</h2>
            <p className="text-xl text-[#64748B] mb-14 max-w-3xl">{brand.products.length} products available — all genuine with manufacturer warranty.</p>
            <div className="space-y-12">
              {brand.products.map((product, idx) => (
                <div key={idx} className={`grid md:grid-cols-2 gap-10 items-center bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all ${idx % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative h-[320px] md:h-[380px] bg-[#E5E7EB]">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#64748B] font-extrabold text-3xl">{product.name}</div>
                    )}
                  </div>
                  <div className="p-8 md:p-10">
                    <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest">Product {String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#081F44] mt-2 mb-4">{product.name}</h3>
                    <p className="text-[#3B4A6B] text-lg leading-relaxed mb-6">{product.description}</p>
                    <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-6 py-3 bg-[#081F44] text-white font-bold rounded-lg hover:bg-[#0A2A5C] transition-all text-lg">
                      <Phone className="w-5 h-5" /> Get Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <MoreProductsCTA />
          </div>
        </section>

        {/* Inline autoplaying videos */}
        <InlineVideoSection videos={brand.videos} title={`Watch ${brand.name} in Action`} darkBg columns={2} />

        {/* Gallery strip */}
        {brand.gallery.length > 0 && (
          <section className="py-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {brand.gallery.slice(0, 4).map((img, i) => (
                <div key={i} className="relative h-64 md:h-80">
                  <Image src={img} alt={`${brand.name} ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-[#A4161A] text-white">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Need {brand.name} for your project?</h2>
              <p className="text-white/80 text-lg">Share your requirements and get a quick quote.</p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <a href="tel:+919832169125" className="px-8 py-4 bg-white text-[#A4161A] font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-lg">
                Get Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // TEMPLATE 1 — "DARK LUXURY" (Dark background, premium feel)
  // ═══════════════════════════════════════════════════════════════
  if (layoutIndex === 1) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Full-screen hero with video */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[100px]">
          {brand.videos?.[0] ? (
            <iframe
              className="absolute inset-0 w-full h-full scale-[1.3] pointer-events-none"
              src={`https://www.youtube.com/embed/${brand.videos[0]}?autoplay=1&mute=1&loop=1&playlist=${brand.videos[0]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title={brand.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <Image src={brand.heroImage} alt={brand.name} fill className="object-cover opacity-30" priority />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0A0A0A]" />
          <div className="container relative z-10 text-center pt-[100px]">
            <p className="text-[#A4161A] font-bold text-xl uppercase tracking-[0.3em] mb-6">{brand.tagline}</p>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-none">{brand.name}</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">{brand.description.slice(0, 150)}...</p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact" className="px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">Request Quote</Link>
              <a href="#products" className="px-10 py-4 border border-white/30 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all">View Products</a>
            </div>
          </div>
        </section>

        <Breadcrumb light />

        {/* About on dark bg */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div>
              <BrandLogo dark />
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About {brand.name}</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">{brand.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {['Genuine Products', 'Manufacturer Warranty', 'Expert Support', 'Best Rates'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-5 h-5 text-[#A4161A] flex-shrink-0" />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {brand.gallery.slice(0, 4).map((img, i) => (
                <div key={i} className="relative h-48 rounded-lg overflow-hidden border border-white/10">
                  <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products on dark — full width alternating layout */}
        <section id="products" className="py-24 bg-[#111]">
          <div className="container">
            <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">Product Range</h2>
            <p className="text-xl text-gray-500 mb-16">{brand.products.length} products available — all genuine with manufacturer warranty.</p>
            <div className="space-y-12">
              {brand.products.map((product, idx) => (
                <div key={idx} className={`grid md:grid-cols-2 gap-0 bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#A4161A] transition-all ${idx % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative h-[300px] md:h-[380px]">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-[#222] flex items-center justify-center text-white/30 font-extrabold text-3xl">{product.name}</div>
                    )}
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#A4161A]/20 flex items-center justify-center mb-5">
                      <span className="text-[#A4161A] font-extrabold text-xl">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">{product.name}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">{product.description}</p>
                    <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-6 py-3 bg-[#A4161A] text-white font-bold rounded-lg hover:bg-[#C41E3A] transition-all w-fit text-lg">
                      <Phone className="w-5 h-5" /> Get Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <MoreProductsCTA dark />
          </div>
        </section>

        {/* Inline autoplaying videos */}
        {brand.videos?.length > 0 && (
          <section className="py-24 bg-[#0A0A0A]">
            <div className="container">
              <h2 className="text-4xl font-extrabold text-white text-center mb-14">Brand Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {brand.videos.map((id, index) => (
                  <div key={index} className="video-embed-container shadow-xl border border-white/10">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                      title={`Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#A4161A] to-[#C41E3A] text-white text-center">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Upgrade Your Space</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Premium {brand.name} products at the best rates. Bulk orders welcome.</p>
            <Link to="/contact" className="px-12 py-4 bg-white text-[#A4161A] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2">
              Request Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // TEMPLATE 2 — "SPLIT ZIGZAG" (Alternating left-right sections)
  // ═══════════════════════════════════════════════════════════════
  if (layoutIndex === 2) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero split with video */}
        <section className="relative min-h-[85vh] flex items-center -mt-[100px] pt-[100px] bg-[#081F44] overflow-hidden">
          {brand.videos?.[0] ? (
            <iframe
              className="absolute inset-0 w-full h-full scale-[1.3] pointer-events-none opacity-30"
              src={`https://www.youtube.com/embed/${brand.videos[0]}?autoplay=1&mute=1&loop=1&playlist=${brand.videos[0]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title={brand.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <Image src={brand.heroImage} alt={brand.name} fill className="object-cover opacity-40" priority />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081F44] via-[#081F44]/80 to-transparent" />
          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="py-16">
              <BrandLogo dark />
              <span className="text-[#A4161A] font-bold text-base uppercase tracking-[0.2em]">Authorized Dealer</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-4 mb-6">{brand.name}</h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">{brand.description.slice(0, 180)}...</p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#A4161A] text-white font-bold rounded-lg hover:bg-[#C41E3A] transition-all text-lg">Get Quote</Link>
                <a href="tel:+919832169125" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 text-lg">
                  <Phone className="w-5 h-5" /> Call
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden hidden lg:block">
              <Image src={brand.heroImage} alt={brand.name} fill className="object-cover" priority />
            </div>
          </div>
        </section>
        <Breadcrumb />

        {/* Section header for products */}
        <section className="pt-20 pb-8 bg-white">
          <div className="container">
            <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] mt-2 mb-2">Product Range</h2>
            <p className="text-xl text-[#64748B]">{brand.products.length} products available — all genuine with manufacturer warranty.</p>
          </div>
        </section>

        {/* Zigzag sections for each product */}
        {brand.products.map((product, idx) => (
          <section key={idx} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
            <div className={`container grid md:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative h-[380px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl">
                {product.image ? (
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                ) : brand.gallery[idx] ? (
                  <Image src={brand.gallery[idx]} alt={product.name} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center text-[#64748B] font-extrabold text-3xl">{product.name}</div>
                )}
              </div>
              <div>
                <span className="text-[#A4161A] font-bold text-base uppercase tracking-widest">Product {String(idx + 1).padStart(2, '0')}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#081F44] mt-3 mb-5">{product.name}</h2>
                <p className="text-lg text-[#3B4A6B] leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-3 mb-8">
                  {['Premium Grade', 'Available in All Sizes', 'Best Market Price', 'Manufacturer Warranty'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#081F44] font-bold text-lg">
                      <CheckCircle className="w-5 h-5 text-[#A4161A] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-8 py-4 bg-[#081F44] text-white font-bold rounded-lg hover:bg-[#0A2A5C] transition-all text-lg">
                  <Phone className="w-5 h-5" /> Get Price
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* More Products */}
        <section className="py-16 bg-white">
          <div className="container">
            <MoreProductsCTA />
          </div>
        </section>

        {/* Full-width autoplaying video */}
        {brand.videos?.[0] && (
          <section className="relative w-full h-[70vh] overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${brand.videos[0]}?autoplay=1&mute=1&loop=1&playlist=${brand.videos[0]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title={brand.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </section>
        )}

        {/* More videos inline */}
        {brand.videos?.length > 1 && (
          <InlineVideoSection videos={brand.videos.slice(1)} title="More Videos" />
        )}

        {/* Gallery grid */}
        {brand.gallery.length > 0 && (
          <section className="py-24 bg-[#F8FAFC]">
            <div className="container">
              <h2 className="text-4xl font-extrabold text-[#081F44] mb-12">Applications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {brand.gallery.slice(0, 6).map((img, i) => (
                  <div key={i} className="relative h-72 rounded-xl overflow-hidden group">
                    <Image src={img} alt={`App ${i}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-[#081F44] text-white">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Ready to order {brand.name}?</h2>
            <p className="text-xl text-white/70 mb-10">Best rates for bulk orders. Call now or request a quote.</p>
            <div className="flex gap-4 justify-center">
              <a href="tel:+919832169125" className="px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">Call Now</a>
              <Link to="/contact" className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all">Get Quote</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // TEMPLATE 3 — "VIDEO FIRST" (Video background hero, video-heavy)
  // ═══════════════════════════════════════════════════════════════
  if (layoutIndex === 3) {
    return (
      <div className="min-h-screen bg-white">
        {/* Video hero - autoplaying */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden -mt-[100px] pt-[100px]">
          {brand.videos?.[0] ? (
            <iframe
              className="absolute inset-0 w-full h-full scale-[1.3] pointer-events-none"
              src={`https://www.youtube.com/embed/${brand.videos[0]}?autoplay=1&mute=1&loop=1&playlist=${brand.videos[0]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title={brand.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <Image src={brand.heroImage} alt={brand.name} fill className="object-cover" priority />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-5">{brand.name}</h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-10">{brand.tagline}</p>
            <Link to="/contact" className="px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all inline-flex items-center gap-2">
              Get a Quick Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
        <Breadcrumb />

        {/* Process steps */}
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E5E7EB]">
          <div className="container">
            <h2 className="text-4xl font-extrabold text-[#081F44] text-center mb-14">How to Order {brand.name}</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { step: '01', title: 'Share Requirements', desc: 'Tell us what you need — product, quantity, thickness.' },
                { step: '02', title: 'Get Best Quote', desc: 'We share competitive pricing with delivery timeline.' },
                { step: '03', title: 'Delivery to Site', desc: 'Material delivered to your site. Payment on delivery.' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#A4161A] text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-5">{s.step}</div>
                  <h3 className="text-xl font-extrabold text-[#081F44] mb-3">{s.title}</h3>
                  <p className="text-[#3B4A6B] text-lg">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl text-center">
            <BrandLogo centered />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] mb-8">About {brand.name}</h2>
            <p className="text-lg text-[#3B4A6B] leading-relaxed">{brand.description}</p>
          </div>
        </section>

        {/* Products — large alternating layout */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container">
            <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] mt-2 mb-4">Product Range</h2>
            <p className="text-xl text-[#64748B] mb-16">{brand.products.length} products available — all genuine with manufacturer warranty.</p>
            <div className="space-y-12">
              {brand.products.map((product, idx) => (
                <div key={idx} className={`grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all ${idx % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative h-[300px] md:h-[380px]">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center text-[#64748B] font-extrabold text-3xl">{product.name}</div>
                    )}
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest mb-2">Product {String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#081F44] mb-4">{product.name}</h3>
                    <p className="text-[#3B4A6B] text-lg leading-relaxed mb-6">{product.description}</p>
                    <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-6 py-3 bg-[#081F44] text-white font-bold rounded-lg hover:bg-[#0A2A5C] transition-all w-fit text-lg">
                      <Phone className="w-5 h-5" /> Get Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <MoreProductsCTA />
          </div>
        </section>

        {/* Inline videos + gallery grid */}
        {(brand.videos?.length > 0 || brand.gallery.length > 0) && (
          <section className="py-24 bg-white">
            <div className="container">
              <h2 className="text-4xl font-extrabold text-[#081F44] mb-12">See {brand.name} in Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brand.videos?.map((id, index) => (
                  <div key={`v-${index}`} className="video-embed-container shadow-xl rounded-xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                      title={`${brand.name} video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
                {brand.gallery.slice(0, 4).map((img, i) => (
                  <div key={`g-${i}`} className="relative h-64 rounded-xl overflow-hidden">
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-[#A4161A] text-white">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Ready to order?</h2>
              <p className="text-white/80 text-lg mt-2">WhatsApp us your requirements for a quick estimate.</p>
            </div>
            <a href="https://wa.me/919832169125" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#25D366] text-white font-bold text-lg rounded-lg hover:bg-[#20BD5A] transition-all flex items-center gap-2 flex-shrink-0">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // TEMPLATE 4 — "MAGAZINE / EDITORIAL" (Large typography, bold layout)
  // ═══════════════════════════════════════════════════════════════
  if (layoutIndex === 4) {
    return (
      <div className="min-h-screen bg-white">
        {/* Text-only hero with subtle video bg */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-[#081F44] -mt-[100px] pt-[100px] overflow-hidden">
          {brand.videos?.[0] ? (
            <iframe
              className="absolute inset-0 w-full h-full scale-[1.3] pointer-events-none opacity-20"
              src={`https://www.youtube.com/embed/${brand.videos[0]}?autoplay=1&mute=1&loop=1&playlist=${brand.videos[0]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title={brand.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <Image src={brand.heroImage} alt={brand.name} fill className="object-cover opacity-30" priority />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081F44]/80 to-[#081F44]" />
          <div className="container relative z-10 text-center py-20">
            <p className="text-[#A4161A] font-bold text-xl uppercase tracking-[0.3em] mb-6">{categoryData.title}</p>
            <h1 className="text-6xl md:text-9xl font-extrabold text-white mb-6 leading-[0.95]">{brand.name}</h1>
            <p className="text-xl text-white/60 max-w-xl mx-auto mb-10">{brand.tagline}</p>
            <Link to="/contact" className="px-12 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">
              Get Quote
            </Link>
          </div>
        </section>

        {/* Full-width hero image */}
        <div className="relative h-[50vh] w-full">
          <Image src={brand.heroImage} alt={brand.name} fill className="object-cover" />
        </div>

        <Breadcrumb />

        {/* Long-form description */}
        <section className="py-24">
          <div className="container max-w-3xl">
            <BrandLogo centered />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] mb-8">The {brand.name} Story</h2>
            <p className="text-xl text-[#3B4A6B] leading-relaxed mb-6">{brand.description}</p>
            <p className="text-lg text-[#3B4A6B] leading-relaxed">As authorized dealers, we ensure every {brand.name} product you receive is genuine, backed by manufacturer warranty, and available at the most competitive rates in the market.</p>
          </div>
        </section>

        {/* Products - large full-width alternating */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container">
            <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] mt-2 mb-4">Product Range</h2>
            <p className="text-xl text-[#64748B] mb-16">{brand.products.length} products — all genuine with manufacturer warranty.</p>
            <div className="space-y-12">
              {brand.products.map((product, idx) => (
                <div key={idx} className={`grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all ${idx % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative h-[300px] md:h-[380px]">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center text-[#64748B] font-extrabold text-3xl">{product.name}</div>
                    )}
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest mb-2">Product {String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#081F44] mb-4">{product.name}</h3>
                    <p className="text-[#3B4A6B] text-lg leading-relaxed mb-6">{product.description}</p>
                    <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-6 py-3 bg-[#081F44] text-white font-bold rounded-lg hover:bg-[#0A2A5C] transition-all w-fit text-lg">
                      <Phone className="w-5 h-5" /> Call for Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <MoreProductsCTA />
          </div>
        </section>

        {/* Gallery masonry */}
        {brand.gallery.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container">
              <h2 className="text-4xl font-extrabold text-[#081F44] mb-14 text-center">Applications & Gallery</h2>
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {brand.gallery.slice(0, 6).map((img, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden break-inside-avoid" style={{ height: i % 2 === 0 ? '300px' : '220px' }}>
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Inline autoplaying videos */}
        <InlineVideoSection videos={brand.videos} title="Videos" darkBg columns={2} />

        {/* CTA */}
        <section className="py-20 bg-[#A4161A] text-white text-center">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Start Your Project with {brand.name}</h2>
            <p className="text-xl opacity-90 mb-10">Bulk orders, project supply, dealer support.</p>
            <Link to="/contact" className="px-12 py-4 bg-white text-[#A4161A] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2">
              Request Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // TEMPLATE 5 — "CARD GRID" (Clean cards, lots of white space)
  // ═══════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero with video */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#081F44] text-white overflow-hidden -mt-[100px] pt-[100px]">
        <BrandVideoHero brandName={brand.name} tagline={brand.tagline} heroImage={brand.heroImage} videos={brand.videos} />
      </section>
      <Breadcrumb />

      {/* Stats bar */}
      <section className="py-10 bg-white border-b border-[#E5E7EB]">
        <div className="container flex flex-wrap justify-center gap-8 md:gap-20">
          {[
            { num: '20+', label: 'Years Trusted' },
            { num: '5000+', label: 'Projects Supplied' },
            { num: '100%', label: 'Genuine Products' },
            { num: '24hr', label: 'Quick Delivery' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#A4161A]">{s.num}</div>
              <div className="text-base font-bold text-[#64748B] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About card */}
      <section className="py-24">
        <div className="container">
          <div className="bg-white rounded-2xl p-10 md:p-16 shadow-lg max-w-4xl mx-auto">
            <BrandLogo centered />
            <h2 className="text-4xl font-extrabold text-[#081F44] mb-6 text-center">About {brand.name}</h2>
            <p className="text-lg text-[#3B4A6B] leading-relaxed text-center">{brand.description}</p>
          </div>
        </div>
      </section>

      {/* Products — large alternating layout */}
      <section id="products" className="pb-24">
        <div className="container">
          <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#081F44] mt-2 mb-4">Products Available</h2>
          <p className="text-xl text-[#64748B] mb-16">{brand.products.length} products — all genuine with manufacturer warranty.</p>
          <div className="space-y-12">
            {brand.products.map((product, idx) => (
              <div key={idx} className={`grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#E5E7EB] ${idx % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative h-[300px] md:h-[380px]">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#081F44] to-[#0A2A5C] flex items-center justify-center text-white/30 font-extrabold text-4xl">{product.name}</div>
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[#A4161A] font-bold text-sm uppercase tracking-widest mb-2">Product {String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#081F44] mb-4">{product.name}</h3>
                  <p className="text-[#3B4A6B] text-lg leading-relaxed mb-6">{product.description}</p>
                  <div className="flex items-center gap-4">
                    <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-6 py-3 bg-[#081F44] text-white font-bold rounded-lg hover:bg-[#0A2A5C] transition-all text-lg">
                      <Phone className="w-5 h-5" /> Get Price
                    </a>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#A4161A] font-bold hover:underline text-lg">
                      Quote <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <MoreProductsCTA />
          </div>
        </section>

        {/* Inline autoplaying videos */}
        <InlineVideoSection videos={brand.videos} title={`Watch ${brand.name}`} darkBg columns={2} />

      {/* Gallery as full-width strip */}
      {brand.gallery.length > 0 && (
        <section className="py-0 bg-white">
          <div className="container py-12">
            <h2 className="text-4xl font-extrabold text-[#081F44] mb-10">Gallery</h2>
          </div>
          <div className="flex overflow-x-auto gap-2 pb-2 snap-x">
            {brand.gallery.map((img, i) => (
              <div key={i} className="relative h-80 min-w-[320px] flex-shrink-0 snap-start">
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA - dual */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#081F44] text-white p-12 rounded-2xl">
              <h3 className="text-2xl font-extrabold mb-4">Need Bulk Supply?</h3>
              <p className="text-white/70 mb-6 text-lg">Best rates for contractors, architects and project managers.</p>
              <a href="tel:+919832169125" className="px-8 py-3 bg-[#A4161A] text-white font-bold rounded-lg hover:bg-[#C41E3A] transition-all inline-flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5" /> Call Sales
              </a>
            </div>
            <div className="bg-[#A4161A] text-white p-12 rounded-2xl">
              <h3 className="text-2xl font-extrabold mb-4">Get Expert Advice</h3>
              <p className="text-white/80 mb-6 text-lg">Not sure which product is right? Our team can help.</p>
              <Link to="/contact" className="px-8 py-3 bg-white text-[#A4161A] font-bold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 text-lg">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
