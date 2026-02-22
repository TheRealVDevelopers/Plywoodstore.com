import { Link } from 'react-router-dom';
import { siteData } from '@/data/siteData';
import { Phone, MapPin, ArrowRight, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const categories = Object.entries(siteData);

  return (
    <footer className="relative overflow-hidden w-full">
      {/* ── Top CTA Band ── */}
      <div className="bg-[#A4161A] w-full">
        <div className="w-full px-6 md:px-12 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold">Ready to Start Your Project?</h3>
            <p className="text-white/80 mt-1 text-lg">Get expert consultation and competitive bulk pricing today.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#A4161A] font-bold rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919832169125"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="bg-[#081F44] relative w-full">
        {/* Decorative subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />

        <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
          {/* Logo + Intro Row */}
          <div className="py-14 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Plywood Stores"
                  className="h-16 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </Link>
              <div>
                <h4 className="text-2xl font-extrabold text-white tracking-wide">PLYWOOD STORES</h4>
                <p className="text-white/60 text-sm font-medium tracking-widest uppercase mt-0.5">Premium Interior Solutions</p>
              </div>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919832169125"
                className="flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/90 hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4 text-[#A4161A]" />
                <span className="font-semibold">+91 98321 69125</span>
              </a>
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/90">
                <Clock className="w-4 h-4 text-[#A4161A]" />
                <span className="font-semibold">Mon–Sat 9 AM – 8 PM</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Column 1: About + Quick Links */}
            <div className="lg:col-span-3">
              <p className="text-base leading-relaxed text-white/70 mb-8">
                Your trusted supplier for premium plywood and interior materials since 2003. Authorized dealers for Century, Greenply, Merino, Hettich and more.
              </p>
              <div className="space-y-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-[#A4161A] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2-3: Brands by Category */}
            <div className="lg:col-span-6">
              <h4 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#A4161A] inline-block" />
                Our Brands
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5">
                {categories.map(([key, cat]) => (
                  <div key={key}>
                    <Link
                      to={`/${key}`}
                      className="text-white font-bold text-sm tracking-wider uppercase hover:text-[#A4161A] transition-colors"
                    >
                      {cat.title}
                    </Link>
                    <ul className="mt-2 space-y-1.5">
                      {Object.entries(cat.brands).map(([brandKey, brand]) => (
                        <li key={brandKey}>
                          <Link
                            to={`/${key}/${brand.slug}`}
                            className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#A4161A] opacity-0 group-hover:opacity-100 transition-opacity" />
                            {brand.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: Location + Map */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#A4161A] inline-block" />
                Visit Us
              </h4>
              <div className="flex items-start gap-3 text-white/70 mb-6">
                <MapPin className="w-5 h-5 text-[#A4161A] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed text-sm">
                  49/6, 3rd Cross, Rajiv Gandhi Nagar,<br />
                  HSR Layout, Hosur Rd, Bommanahalli,<br />
                  Bengaluru, Karnataka 560068
                </p>
              </div>

              {/* Mini Map Embed */}
              <div className="rounded-xl overflow-hidden border border-white/10 h-[140px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.024!2d77.6409!3d12.9082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f0c5e1c6e7%3A0x2a6c3a4e5b8d9f0a!2s49%2F6%2C%203rd%20Cross%2C%20Rajiv%20Gandhi%20Nagar%2C%20HSR%20Layout%2C%20Bommanahalli%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Plywood Stores Location"
                />
              </div>

              <a
                href="https://maps.google.com?q=49/6+3rd+Cross+Rajiv+Gandhi+Nagar+HSR+Layout+Bommanahalli+Bengaluru+Karnataka+560068"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A4161A] font-semibold text-sm mt-3 hover:text-[#C41E3A] transition-colors"
              >
                Get Directions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 w-full">
          <div className="w-full px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Plywood Stores. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-sm text-white/50 hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link to="/about" className="text-sm text-white/50 hover:text-white/80 transition-colors">Terms of Service</Link>
              <span className="text-sm text-white/30">Designed with care</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
