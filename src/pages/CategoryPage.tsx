import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Image from '@/components/Image';

export default function CategoryPage() {
  const { category: categoryKey } = useParams<{ category: string }>();

  if (!categoryKey || !siteData[categoryKey]) {
    return <Navigate to="/" replace />;
  }

  const data = siteData[categoryKey];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center justify-center text-white bg-[#0D0D0D] overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="container relative z-10 text-center">
          <nav className="flex justify-center items-center text-sm text-gray-400 mb-4 gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-semibold">{data.title}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">{data.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{data.description}</p>
          <div className="w-20 h-1 bg-[#C45C3F] mx-auto mt-6 rounded-full" />
        </div>
      </section>

      <div className="bg-[#F7F4EF] py-3 border-b border-[#E8E4DE]">
        <div className="container text-sm text-[#6B6B6B] flex items-center gap-2">
          <Link to="/" className="hover:text-[#C45C3F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#0D0D0D] font-semibold capitalize">{data.title}</span>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-12">
            <span className="text-[#C45C3F] font-semibold text-sm uppercase tracking-widest">Our Brands</span>
            <h2 className="text-4xl font-bold text-[#0D0D0D] mt-2 font-heading">
              Premium Brands Under {data.title}
            </h2>
            <p className="text-[#6B6B6B] mt-2 max-w-2xl">
              Each brand has its own dedicated page with product details and brand videos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(data.brands).map(([key, brand]) => (
              <div
                key={key}
                className="group bg-white rounded-2xl overflow-hidden shadow-card border border-[#E8E4DE] hover:border-[#C45C3F]/30 hover:shadow-elevated transition-all duration-300 -translate-y-0 hover:-translate-y-1"
              >
                <Link to={`/${categoryKey}/${brand.slug}`} className="block">
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={brand.heroImage || brand.gallery?.[0] || 'https://via.placeholder.com/400'}
                      alt={brand.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {brand.videos && brand.videos.length > 0 && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-black/60 rounded-full text-white text-xs font-medium">
                        <Play size={14} fill="currentColor" />
                        Video
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1 font-heading">{brand.name}</h3>
                      <p className="text-sm text-gray-300">{brand.tagline}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#6B6B6B] mb-6 line-clamp-2 min-h-[48px]">{brand.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#C45C3F] font-semibold group-hover:gap-3 transition-all">
                      View Brand Page
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0D0D0D] text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 font-heading">Need Expert Advice?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our consultants can help you choose the right material for your specific project needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#C45C3F] text-white font-semibold rounded-lg hover:bg-[#A84D32] transition-all"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
