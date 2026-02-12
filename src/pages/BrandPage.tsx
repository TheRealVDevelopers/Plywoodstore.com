import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Image from '@/components/Image';
import VideoModal from '@/components/VideoModal';
import BrandVideoHero from '@/components/BrandVideoHero';

export default function BrandPage() {
  const { category: categoryKey, brand: brandKey } = useParams<{ category: string; brand: string }>();

  const categoryData = categoryKey ? siteData[categoryKey] : undefined;
  const brand = categoryData?.brands[brandKey || ''];

  useEffect(() => {
    if (brand) {
      document.title = `${brand.title} | Plywood Stores`;
    }
  }, [brand]);

  if (!brand || !categoryData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0D0D0D] text-white overflow-hidden">
        <BrandVideoHero
          brandName={brand.name}
          tagline={brand.tagline}
          heroImage={brand.heroImage}
          videos={brand.videos}
        />
      </section>

      <div className="bg-white py-4 border-b border-[#E8E4DE]">
        <div className="container text-sm text-[#6B6B6B] flex items-center gap-2">
          <Link to="/" className="hover:text-[#C45C3F] transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/${categoryKey}`} className="hover:text-[#C45C3F] transition-colors capitalize">
            {categoryData.title}
          </Link>
          <span>/</span>
          <span className="text-[#0D0D0D] font-semibold">{brand.name}</span>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C45C3F] font-semibold text-sm uppercase tracking-widest">About the Brand</span>
            <h2 className="text-4xl font-bold text-[#0D0D0D] mt-2 mb-6 font-heading">
              World Class Quality from <span className="text-[#C45C3F]">{brand.name}</span>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">{brand.description}</p>
            <ul className="space-y-4">
              {[
                '100% Genuine Products',
                'Manufacturer Warranty',
                'Expert Installation Support',
                'Best Market Rates',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#0D0D0D] font-medium">
                  <CheckCircle className="text-[#C45C3F] mr-3 w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-card">
                <Image src={brand.gallery[0] || 'https://via.placeholder.com/400'} alt="Gallery 1" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-card">
                <Image src={brand.gallery[1] || 'https://via.placeholder.com/400'} alt="Gallery 2" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-card">
                <Image src={brand.gallery[2] || 'https://via.placeholder.com/400'} alt="Gallery 3" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-card">
                <Image src={brand.gallery[3] || 'https://via.placeholder.com/400'} alt="Gallery 4" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section-padding bg-[#F7F4EF]">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-[#0D0D0D] mb-4 font-heading">Product Range</h2>
          <p className="text-center text-[#6B6B6B] max-w-2xl mx-auto mb-12">
            Discover the diverse collection of high-performance surfaces and materials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-card group hover:shadow-elevated transition-all duration-300 border border-[#E8E4DE]"
              >
                <div className="relative h-64 bg-[#F7F4EF] overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#E8E4DE] text-[#6B6B6B] font-bold text-xl">
                      {product.name}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8 border-t-4 border-transparent group-hover:border-[#C45C3F] transition-colors">
                  <h3 className="text-2xl font-bold text-[#0D0D0D] mb-3 font-heading">{product.name}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#0D0D0D] mb-2 font-heading">Applications</h2>
              <p className="text-[#6B6B6B]">See how {brand.name} transforms spaces.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex text-[#C45C3F] font-semibold hover:underline"
            >
              Get Quote for Project →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-h-[400px] md:min-h-[500px]">
            {brand.gallery.slice(0, 5).map((img, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all group ${
                  idx === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <Image src={img} alt={`Application ${idx}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <span className="text-white font-medium text-sm">Interior Design</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {brand.videos && brand.videos.length > 0 && (
        <section className="section-padding bg-[#0D0D0D] text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 font-heading">Watch {brand.name} in Action</h2>
            <VideoModal videos={brand.videos} />
          </div>
        </section>
      )}

      <section className="py-24 bg-[#C45C3F] text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ready to upgrade your space?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            Get the best quote for {brand.name} products today. Bulk orders available for contractors and architects.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-[#C45C3F] font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Quote
            </Link>
            <a
              href="tel:+919876543210"
              className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              Call Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
