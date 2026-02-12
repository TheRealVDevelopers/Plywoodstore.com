import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronRight, Shield, Truck, Award, Sparkles } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Image from '@/components/Image';

const allBrandNames = Object.values(siteData).flatMap((cat) =>
  Object.values(cat.brands).map((b) => b.name)
);

export default function Home() {
  return (
    <div className="overflow-x-hidden -mt-[120px]">
      <section className="relative min-h-screen flex items-center justify-center bg-[#0D0D0D] text-white overflow-hidden pt-[120px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Premium Interior"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-[#E8A838]" />
              <span className="text-sm font-semibold tracking-wider uppercase">Authorized Dealers Since 2005</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Premium Plywood
              <br />
              <span className="text-[#C45C3F]">For Every Space</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              India&apos;s trusted source for Century, Greenply, Merino & more. From kitchens to offices—build with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/plywood"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C45C3F] text-white font-semibold rounded-lg hover:bg-[#A84D32] transition-all duration-300 hover:shadow-xl hover:shadow-[#C45C3F]/25 hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white hover:text-[#0D0D0D] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1595558013260-530475b73188?auto=format&fit=crop&q=80"
                alt="Plywood finishes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="font-semibold text-lg">20+ Premium Brands</p>
                <p className="text-sm text-gray-300">Under one roof</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
        </div>
      </section>

      <section className="py-12 bg-[#0D0D0D] border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16">
          {[...allBrandNames, ...allBrandNames].map((name, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-white/40 hover:text-white/70 transition-colors px-4"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F5]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#C45C3F] font-semibold text-sm uppercase tracking-widest">Our Collections</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mt-2 mb-4">Explore by Category</h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Premium plywood, laminates, MDF, hardware & more—from India&apos;s most trusted brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(siteData).map(([key, category], index) => (
              <Link
                key={key}
                to={`/${key}`}
                className={`group relative overflow-hidden rounded-2xl border border-[#E8E4DE] bg-white hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index === 0 ? 'h-[400px] md:h-full min-h-[400px]' : 'h-[280px]'}`}>
                  <Image
                    src={category.heroImage}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{category.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#C45C3F] font-semibold group-hover:gap-3 transition-all">
                      View brands
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0D0D0D] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1595558013260-530475b73188?auto=format&fit=crop&q=80"
                alt="Brand showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Link
                  to="/plywood/century"
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-[#C45C3F] text-white hover:bg-[#A84D32] hover:scale-110 transition-all duration-300 shadow-xl"
                >
                  <Play className="w-10 h-10 ml-1" fill="currentColor" />
                </Link>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-gray-300">Watch brand stories</p>
                <p className="font-semibold text-lg">Each brand has its own video</p>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-[#C45C3F] font-semibold text-sm uppercase tracking-widest">Our Partners</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Trusted Brands.
                <br />
                <span className="text-gray-400">Genuine Products.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                We are authorized distributors for India&apos;s most reputed brands. Every product comes with manufacturer warranty and our commitment to quality.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: '100% Genuine' },
                  { icon: Truck, label: 'Fast Delivery' },
                  { icon: Award, label: 'Expert Support' },
                  { icon: Sparkles, label: '20 Years Exp.' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-[#C45C3F] shrink-0" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C45C3F] text-white font-semibold rounded-lg hover:bg-[#A84D32] transition-all"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#C45C3F] to-[#A84D32] text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Building a Project?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">Get expert advice and best market rates for your bulk requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-12 py-4 bg-white text-[#C45C3F] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
