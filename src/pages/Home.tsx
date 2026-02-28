import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Truck, Award, Volume2, VolumeX } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Image from '@/components/Image';

const HERO_VIDEO_ID = 'lIl5xx7tP3w';
const allBrandNames = Object.values(siteData).flatMap((cat) => Object.values(cat.brands).map((b) => b.name));

/* ── VERIFIED IMAGES — each confirmed to show the described product ── */
const IMAGES = {
  heroPlywood:      'https://images.unsplash.com/photo-1697302575756-1605c79a129b?auto=format&fit=crop&w=1600&q=80',   // stacked plywood sheets
  aboutWarehouse:   'https://images.unsplash.com/photo-1739204618173-3e89def7140f?auto=format&fit=crop&w=1200&q=80',   // lumber warehouse
  plywood:          'https://images.unsplash.com/photo-1697302575756-1605c79a129b?auto=format&fit=crop&w=800&q=80',    // stacked plywood planks
  laminates:        'https://images.unsplash.com/photo-1752321531522-20d9c4dc2e0b?auto=format&fit=crop&w=800&q=80',    // decorative material samples
  mdf:              'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80',       // smooth brown MDF board
  particleBoard:    'https://images.unsplash.com/photo-1758055660736-021f5ec9e247?auto=format&fit=crop&w=800&q=80',    // particle board close-up
  hardware:         'https://images.unsplash.com/photo-1583691028182-e8f01e74bfa2?auto=format&fit=crop&w=800&q=80',    // door handle hardware
  adhesives:        'https://images.unsplash.com/photo-1728379909828-c715c09fc49e?auto=format&fit=crop&w=800&q=80',    // woodworking / glue
  kitchen:          'https://images.unsplash.com/photo-1761656630581-69a58e4e1c09?auto=format&fit=crop&w=800&q=80',    // modern kitchen wood cabinets
  office:           'https://images.unsplash.com/photo-1758630737403-1bda34e3f98e?auto=format&fit=crop&w=800&q=80',    // modern office wood desks
  bedroom:          'https://images.unsplash.com/photo-1758072328635-586f3c121af2?auto=format&fit=crop&w=800&q=80',    // bedroom wooden wardrobe
  commercial:       'https://images.unsplash.com/photo-1759038086403-c607d67bb245?auto=format&fit=crop&w=800&q=80',    // hotel lobby curved wood walls
  retail:           'https://images.unsplash.com/photo-1625623189951-25bc5e478b58?auto=format&fit=crop&w=800&q=80',    // retail store wooden shelves
};

const productStrengths = [
  { title: 'Plywood',         image: IMAGES.plywood,       desc: 'Premium grade marine & commercial plywood for furniture and construction.',  slug: 'plywood' },
  { title: 'Laminates',       image: IMAGES.laminates,     desc: 'Decorative laminates that transform kitchens, wardrobes and offices.',       slug: 'laminates' },
  { title: 'MDF & HDHMR',     image: IMAGES.mdf,           desc: 'Engineered boards for precision machining and smooth finishes.',             slug: 'mdf' },
  { title: 'Particle Boards', image: IMAGES.particleBoard, desc: 'Economical and reliable boards for modern modular furniture.',               slug: 'particle-boards' },
  { title: 'Hardware',        image: IMAGES.hardware,      desc: 'Hettich, Ozone, Europa — premium hinges, locks and fittings.',               slug: 'hardware' },
  { title: 'Adhesives',       image: IMAGES.adhesives,     desc: 'Fevicol range for woodworking and professional bonding.',                    slug: 'fevicol' },
];

const applications = [
  { name: 'Kitchen',    image: IMAGES.kitchen },
  { name: 'Office',     image: IMAGES.office },
  { name: 'Bedroom',    image: IMAGES.bedroom },
  { name: 'Retail',     image: IMAGES.retail },
];

export default function Home() {
  const [videoMuted, setVideoMuted] = useState(true);
  return (
    <div className="overflow-x-hidden -mt-[60px]">
      {/* ═══ 1. HERO — stacked plywood sheets background ═══ */}
      <section className="relative min-h-[85vh] flex items-center pt-[60px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroPlywood}
            alt="Stacked plywood sheets in a timber warehouse"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
        </div>

        <div className="container relative z-10 py-16">
          <div className="max-w-2xl">
            <h1 className="text-[56px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight text-[#081F44] mb-6">
              Premium Interiors Products for Every Space
            </h1>
            <p className="text-xl text-[#3B4A6B] leading-relaxed mb-8">
              India&apos;s trusted supplier of plywood, laminates, MDF and hardware. Authorized dealers for Century, Greenply, Merino, Hettich and more.
            </p>
            <ul className="space-y-2 text-lg text-[#3B4A6B] mb-10">
              <li className="flex items-center gap-2">• 20+ years experience</li>
              <li className="flex items-center gap-2">• Authorized dealers for top brands</li>
              <li className="flex items-center gap-2">• Bulk supply for contractors &amp; builders</li>
              <li className="flex items-center gap-2">• Trusted by architects across the region</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/plywood" className="inline-flex items-center gap-2 px-10 py-4 bg-[#081F44] text-white font-bold text-lg rounded-lg hover:bg-[#0A2A5C] transition-all shadow-lg">
                Explore Products <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+919832169125" className="inline-flex items-center gap-2 px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all shadow-lg">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. FULL-SCREEN AUTOPLAY VIDEO ═══ */}
      <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=${videoMuted ? '1' : '0'}&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          title="Plywood Stores — Quality That Builds Trust"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Quality That Builds Trust</h2>
          <button
            type="button"
            onClick={() => setVideoMuted(!videoMuted)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/30"
            aria-label={videoMuted ? 'Unmute video' : 'Mute video'}
          >
            {videoMuted ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            {videoMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </section>

      {/* ═══ 3. BRAND MARQUEE ═══ */}
      <section className="py-16 bg-white overflow-hidden border-y border-[#E5E7EB]">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {[...allBrandNames, ...allBrandNames].map((name, i) => (
            <span key={i} className="text-2xl md:text-3xl font-bold text-[#94A3B8] hover:text-[#081F44] transition-colors px-6">{name}</span>
          ))}
        </div>
      </section>

      {/* ═══ 4. ABOUT OUR STORE — lumber warehouse image ═══ */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.aboutWarehouse}
                alt="Plywood and timber stacked in warehouse"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-[#081F44] mb-6">About Our Store</h2>
              <p className="text-lg text-[#3B4A6B] leading-relaxed mb-6">
                Plywood Stores is a leading supplier of premium plywood, laminates, MDF boards, hardware fittings and adhesives. Serving contractors, architects and interior professionals across South India, we focus on quality, durability and long-term trust.
              </p>
              <p className="text-lg text-[#3B4A6B] leading-relaxed mb-6">
                With partnerships across top brands like Century Ply, Greenply, Merino, Hettich and EBCO, we ensure genuine products and competitive pricing. Bulk orders for projects, dealer support, and expert advice — all under one roof.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-[#081F44] text-white font-bold rounded-lg hover:bg-[#0A2A5C] transition-all">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. OUR PRODUCT STRENGTH — verified product images ═══ */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-[#081F44] text-center mb-4">Our Product Strength</h2>
          <p className="text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-16">Premium materials for every need — from furniture to construction.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productStrengths.map((item, i) => (
              <Link key={i} to={`/${item.slug}`} className="group relative h-[320px] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-extrabold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-base line-clamp-2">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. APPLICATION SHOWCASE — verified space images ═══ */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-[#081F44] text-center mb-4">Applications That Define Spaces</h2>
          <p className="text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-16">From kitchens to commercial — we supply for every application.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {applications.map((app, i) => (
              <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all">
                <Image src={app.image} alt={app.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-extrabold text-lg">{app.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. CONTRACTOR TRUST ═══ */}
      <section className="py-24 bg-[#081F44] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Trusted by Contractors, Architects &amp; Builders</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-16">
            {[{ n: '5000+', l: 'Projects' }, { n: '100+', l: 'Dealers' }, { n: '25+', l: 'Brands' }].map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-extrabold text-[#A4161A]">{s.n}</div>
                <div className="text-xl font-bold mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-16">
            {[Shield, Truck, Award].map((Icon, i) => (
              <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg">
                <Icon className="w-6 h-6 text-[#A4161A]" />
                <span className="font-bold">{['100% Genuine', 'Fast Delivery', 'Expert Support'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. EXPLORE BY CATEGORY — uses siteData heroImages ═══ */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-[#081F44] text-center mb-4">Explore by Category</h2>
          <p className="text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-16">Premium plywood, laminates, MDF, hardware &amp; more — from India&apos;s most trusted brands.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(siteData).map(([key, category]) => (
              <Link key={key} to={`/${key}`} className="group relative h-[280px] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#A4161A] transition-all">
                <Image src={category.heroImage} alt={category.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-extrabold mb-2">{category.title}</h3>
                  <p className="text-white/90 text-base line-clamp-2">{category.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#A4161A] font-bold mt-2 group-hover:gap-3 transition-all">View brands <ArrowRight className="w-5 h-5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. CTA ═══ */}
      <section className="py-24 bg-gradient-to-r from-[#A4161A] to-[#C41E3A] text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Building a Project?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">Get expert advice and best market rates for your bulk requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-12 py-4 bg-white text-[#A4161A] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-xl">
            Request a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
