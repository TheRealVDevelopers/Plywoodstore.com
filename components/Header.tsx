'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { siteData } from '@/data/siteData';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMouseEnter = (category: string) => setActiveDropdown(category);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path: string) => pathname === path;
  const isCategoryActive = (category: string) => pathname.startsWith(`/${category}`);

  const navLinkClass = (active: boolean) =>
    `px-5 py-3 font-semibold text-lg tracking-[0.5px] transition-colors ${
      active ? 'text-[#A4161A] font-bold underline decoration-2 underline-offset-4' : 'text-[#081F44] hover:text-[#A4161A]'
    }`;

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-[#FFFFFF] border-b border-[#E5E7EB] h-[100px] min-h-[90px] flex flex-col justify-center">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Plywood Stores"
            width={180}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className={navLinkClass(isActive('/'))}>
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
                href={`/${key}`}
                className={`flex items-center gap-1 px-5 py-3 font-semibold text-lg tracking-[0.5px] transition-colors ${
                  isCategoryActive(key) ? 'text-[#A4161A] font-bold underline decoration-2 underline-offset-4' : 'text-[#081F44] hover:text-[#A4161A]'
                }`}
              >
                {category.title}
                <ChevronDown size={18} className={`transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
              </Link>

              <div
                className={`absolute top-full left-0 mt-0 w-80 bg-white rounded-b-xl shadow-xl border border-t-0 border-[#E5E7EB] overflow-hidden transition-all duration-200 origin-top ${
                  activeDropdown === key ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
              >
                <div className="p-4">
                  <div className="px-4 py-3 border-b border-[#E5E7EB] mb-2">
                    <span className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                      Brands under {category.title}
                    </span>
                  </div>
                  {Object.entries(category.brands).map(([brandKey, brand]) => (
                    <Link
                      key={brandKey}
                      href={`/${key}/${brand.slug}`}
                      className="block px-4 py-3 rounded-lg text-[#081F44] hover:bg-[#F8FAFC] hover:text-[#A4161A] font-medium text-base transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {brand.name}
                    </Link>
                  ))}
                  <Link
                    href={`/${key}`}
                    className="block px-4 py-3 mt-2 rounded-lg text-[#A4161A] font-bold hover:bg-[#A4161A]/5 transition-colors text-base"
                    onClick={() => setActiveDropdown(null)}
                  >
                    View all {category.title} →
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <Link href="/about" className={navLinkClass(isActive('/about'))}>
            ABOUT US
          </Link>
          <Link href="/contact" className={navLinkClass(isActive('/contact'))}>
            Contact
          </Link>
        </nav>

        {/* Top bar - Phone & Location - visible on desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-[#081F44] hover:text-[#A4161A] transition-colors font-semibold text-base">
            <Phone size={18} className="text-[#A4161A]" />
            +91 98765 43210
          </a>
          <span className="flex items-center gap-2 text-[#64748B] text-base">
            <MapPin size={18} className="text-[#A4161A]" />
            Kirti Nagar, New Delhi
          </span>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden p-2 text-[#081F44] hover:text-[#A4161A] rounded-lg transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-[#E5E7EB] flex justify-between items-center">
          <Image src="/logo.png" alt="Plywood Stores" width={140} height={44} className="h-10 w-auto" />
          <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-full pb-24">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-[#081F44] font-semibold text-lg mb-6">
            <Phone size={20} className="text-[#A4161A]" />
            +91 98765 43210
          </a>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-lg font-bold text-[#081F44] hover:text-[#A4161A] transition-colors py-3 border-b border-[#E5E7EB]" onClick={toggleMobileMenu}>
              Home
            </Link>
            {Object.entries(siteData).map(([key, category]) => (
              <div key={key} className="border-b border-[#E5E7EB]">
                <Link
                  href={`/${key}`}
                  className="text-lg font-bold text-[#081F44] flex justify-between items-center py-3 hover:text-[#A4161A] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {category.title}
                  <ChevronDown size={20} />
                </Link>
                <div className="pl-4 pb-3 flex flex-col gap-2">
                  {Object.entries(category.brands).map(([brandKey, brand]) => (
                    <Link
                      key={brandKey}
                      href={`/${key}/${brand.slug}`}
                      className="text-base text-[#64748B] hover:text-[#A4161A] transition-colors py-1"
                      onClick={toggleMobileMenu}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/about" className="text-lg font-bold text-[#081F44] py-3 border-b border-[#E5E7EB] hover:text-[#A4161A] transition-colors" onClick={toggleMobileMenu}>
              About Us
            </Link>
            <Link href="/contact" className="text-lg font-bold text-[#081F44] py-3 hover:text-[#A4161A] transition-colors" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
