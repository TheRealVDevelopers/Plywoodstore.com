import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { siteData } from '@/data/siteData';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = useLocation().pathname;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMouseEnter = (category: string) => setActiveDropdown(category);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path: string) => pathname === path;
  const isCategoryActive = (category: string) => pathname.startsWith(`/${category}`);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E4DE]/50 font-body">
      <div className="bg-[#0D0D0D] text-white py-2 text-xs md:text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Phone size={14} className="text-[#C45C3F]" />
              +91 98765 43210
            </a>
            <span className="hidden sm:flex items-center gap-2 text-gray-400">
              <MapPin size={14} className="text-[#C45C3F]" />
              Kirti Nagar, New Delhi
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="text-gray-400 hover:text-[#C45C3F] transition-colors font-medium">
              Request Quote
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/about" className="text-gray-400 hover:text-[#C45C3F] transition-colors font-medium">
              About Us
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#C45C3F] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-[#A84D32] transition-colors font-heading">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none text-[#0D0D0D] tracking-tight font-heading">
              PLYWOOD<span className="text-[#C45C3F]">STORES</span>
            </span>
            <span className="text-[10px] tracking-widest text-[#6B6B6B] font-semibold uppercase">
              Authorized Dealer
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 font-semibold text-sm tracking-wide rounded-lg transition-colors ${
              isActive('/') ? 'text-[#C45C3F] bg-[#C45C3F]/5' : 'text-[#0D0D0D] hover:text-[#C45C3F] hover:bg-[#F7F4EF]'
            }`}
          >
            Home
          </Link>

          {Object.entries(siteData).map(([key, category]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${key}`}
                className={`flex items-center gap-1 px-4 py-2 font-semibold text-sm tracking-wide rounded-lg transition-colors ${
                  isCategoryActive(key) ? 'text-[#C45C3F] bg-[#C45C3F]/5' : 'text-[#0D0D0D] hover:text-[#C45C3F] hover:bg-[#F7F4EF]'
                }`}
              >
                {category.title}
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
              </Link>

              <div
                className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-elevated border border-[#E8E4DE] overflow-hidden transition-all duration-200 origin-top ${
                  activeDropdown === key ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
              >
                <div className="p-2">
                  <div className="px-3 py-2 border-b border-[#E8E4DE] mb-2">
                    <span className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                      Brands under {category.title}
                    </span>
                  </div>
                  {Object.entries(category.brands).map(([brandKey, brand]) => (
                    <Link
                      key={brandKey}
                      to={`/${key}/${brand.slug}`}
                      className="block px-4 py-3 rounded-lg text-[#0D0D0D] hover:bg-[#F7F4EF] hover:text-[#C45C3F] font-medium transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                  <Link
                    to={`/${key}`}
                    className="block px-4 py-3 mt-2 rounded-lg text-[#C45C3F] font-semibold hover:bg-[#C45C3F]/10 transition-colors text-sm"
                  >
                    View all {category.title} →
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <Link
            to="/contact"
            className={`px-4 py-2 font-semibold text-sm tracking-wide rounded-lg transition-colors ${
              isActive('/contact') ? 'text-[#C45C3F] bg-[#C45C3F]/5' : 'text-[#0D0D0D] hover:text-[#C45C3F] hover:bg-[#F7F4EF]'
            }`}
          >
            Contact
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-[#0D0D0D] hover:text-[#C45C3F] hover:bg-[#F7F4EF] rounded-lg transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-[#E8E4DE] flex justify-between items-center bg-[#0D0D0D] text-white">
          <span className="font-bold text-lg tracking-wide font-heading">Menu</span>
          <button onClick={toggleMobileMenu} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-full pb-24">
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-lg font-bold text-[#0D0D0D] hover:text-[#C45C3F] transition-colors" onClick={toggleMobileMenu}>
              Home
            </Link>

            {Object.entries(siteData).map(([key, category]) => (
              <div key={key} className="flex flex-col gap-3">
                <Link
                  to={`/${key}`}
                  className="text-lg font-bold text-[#0D0D0D] flex justify-between items-center border-b border-[#E8E4DE] pb-2 hover:text-[#C45C3F] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {category.title}
                </Link>
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#E8E4DE] ml-1">
                  {Object.entries(category.brands).map(([brandKey, brand]) => (
                    <Link
                      key={brandKey}
                      to={`/${key}/${brand.slug}`}
                      className="text-[#6B6B6B] font-medium hover:text-[#C45C3F] transition-colors py-1"
                      onClick={toggleMobileMenu}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link to="/about" className="text-lg font-bold text-[#0D0D0D] border-t border-[#E8E4DE] pt-4 hover:text-[#C45C3F] transition-colors" onClick={toggleMobileMenu}>
              About Us
            </Link>
            <Link to="/contact" className="text-lg font-bold text-[#0D0D0D] hover:text-[#C45C3F] transition-colors" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
