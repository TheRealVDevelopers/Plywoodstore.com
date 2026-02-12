import { Link } from 'react-router-dom';
import Image from '@/components/Image';

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-white bg-[#081F44] overflow-hidden -mt-[60px] pt-[60px]">
        <Image
          src="https://images.unsplash.com/photo-1697302575756-1605c79a129b?w=1600&auto=format&fit=crop"
          alt="About Plywood Stores"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#081F44]/70" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Building Trust with Quality Interiors Since 1995</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#081F44] mb-6">Who We Are</h2>
            <p className="text-lg text-[#3B4A6B] mb-4 leading-relaxed">
              Plywood Stores is a leading supplier of premium plywood, laminates, MDF boards, hardware fittings and adhesives. Serving contractors, architects and interior professionals, the company focuses on quality, durability and long-term trust.
            </p>
            <p className="text-lg text-[#3B4A6B] mb-4 leading-relaxed">
              With partnerships across top brands like Century, Greenply, Merino and Hettich, the store ensures genuine products and competitive pricing.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=1200&auto=format&fit=crop"
              alt="Plywood and Laminate Products"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#081F44]">
            <h3 className="text-2xl font-bold text-[#081F44] mb-4">Our Vision</h3>
            <p className="text-lg text-[#3B4A6B] leading-relaxed">
              To be the most trusted and preferred partner for interior infrastructure solutions, known for quality, integrity, and customer satisfaction.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#A4161A]">
            <h3 className="text-2xl font-bold text-[#081F44] mb-4">Our Mission</h3>
            <p className="text-lg text-[#3B4A6B] leading-relaxed">
              To provide a diverse range of premium products at competitive prices, ensuring timely delivery and exceptional service to help our clients build their dream spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#081F44] text-center mb-6">Commitment to Quality</h2>
          <p className="text-xl text-[#3B4A6B] text-center max-w-3xl mx-auto leading-relaxed">
            Every product we supply comes with manufacturer warranty. We work only with authorized distributors to guarantee authenticity. Our team provides expert guidance for project selection, bulk orders, and installation support.
          </p>
        </div>
      </section>

      {/* Brands We Deal With */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-[#081F44] mb-12">Brands We Deal With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Century Ply', 'Greenply', 'Merino', 'Hettich', 'Greenlam', 'Stylam', 'Ozone', 'Fevicol'].map((brand) => (
              <div key={brand} className="text-xl font-bold px-8 py-4 border-2 border-[#E5E7EB] rounded-xl hover:border-[#A4161A] hover:text-[#A4161A] transition cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Gallery */}
      <section className="py-24 bg-[#081F44] text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Visit Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1758055660736-021f5ec9e247?w=800&auto=format&fit=crop", alt: "Plywood Boards Collection" },
              { src: "https://images.unsplash.com/photo-1665507279638-5b48073c637b?w=800&auto=format&fit=crop", alt: "Modern Kitchen with Laminates" },
              { src: "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=800&auto=format&fit=crop", alt: "Carpentry Workshop" }
            ].map((img, i) => (
              <div key={i} className="relative h-[280px] rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg">{img.alt}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
