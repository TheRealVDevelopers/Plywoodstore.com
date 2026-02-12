import { Link } from 'react-router-dom';
import Image from '@/components/Image';

export default function About() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white bg-[#0D0D0D] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80"
          alt="About Plywood Stores"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">Building Trust with Quality Interiors Since 1995</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6 font-heading">Who We Are</h2>
            <p className="text-[#6B6B6B] mb-4 leading-relaxed">
              Plywood Stores is a premier supplier of high-quality interior materials, catering to architects, interior designers, contractors, and homeowners. We pride ourselves on offering a comprehensive range of products including Plywood, Laminates, MDF, Hardware, Adhesives, and more.
            </p>
            <p className="text-[#6B6B6B] mb-4 leading-relaxed">
              With decades of experience in the industry, we have established strong partnerships with leading brands like Century, Greenply, Merino, and Hettich to bring you only the best.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
              alt="Our Showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F4EF]">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-card border-l-4 border-[#0D0D0D]">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4 font-heading">Our Vision</h3>
            <p className="text-[#6B6B6B]">
              To be the most trusted and preferred partner for interior infrastructure solutions, known for quality, integrity, and customer satisfaction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-card border-l-4 border-[#C45C3F]">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4 font-heading">Our Mission</h3>
            <p className="text-[#6B6B6B]">
              To provide a diverse range of premium products at competitive prices, ensuring timely delivery and exceptional service to help our clients build their dream spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-[#0D0D0D] mb-12 font-heading">Brands We Deal With</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Century Ply', 'Greenply', 'Merino', 'Hettich', 'Greenlam', 'Stylam', 'Ozone', 'Fevicol'].map((brand) => (
              <div key={brand} className="text-xl font-bold px-6 py-3 border border-[#E8E4DE] rounded-xl hover:border-[#C45C3F] hover:text-[#C45C3F] transition cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0D0D0D] text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center font-heading">Visit Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative h-[250px] bg-gray-800 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Gallery Image {i}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn-cta px-8 py-3 text-lg">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
