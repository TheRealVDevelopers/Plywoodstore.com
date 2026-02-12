'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { siteData } from '@/data/siteData';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMouseEnter = (category: string) => {
        setActiveDropdown(category);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    // Helper to check if a link handles the current route
    const isActive = (path: string) => pathname === path;
    const isCategoryActive = (category: string) => pathname.startsWith(`/${category}`);

    return (
        <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md font-sans">
            {/* Top Bar */}
            <div className="bg-dark-blue text-white py-2 text-xs md:text-sm">
                <div className="container flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition"><Phone size={14} className="text-red-accent" /> +91 98765 43210</span>
                        <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition hidden sm:flex"><MapPin size={14} className="text-red-accent" /> Kirti Nagar, New Delhi</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hover:text-red-accent transition">Request Quote</Link>
                        <span className="text-white/20">|</span>
                        <Link href="/about" className="hover:text-red-accent transition">About Us</Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container py-4 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-red-accent rounded-sm flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-dark-blue transition-colors">
                        P
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold leading-none text-dark-blue tracking-tight">PLYWOOD<span className="text-red-accent">STORES</span></span>
                        <span className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">Authorized Dealer</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-1">
                    <Link
                        href="/"
                        className={`px-4 py-2 font-bold uppercase text-sm tracking-wide hover:text-red-accent transition-colors ${isActive('/') ? 'text-red-accent' : 'text-dark-blue'}`}
                    >
                        Home
                    </Link>

                    {/* Dynamic Category Dropdowns */}
                    {Object.entries(siteData).map(([key, category]) => (
                        <div
                            key={key}
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={`/${key}`}
                                className={`flex items-center gap-1 px-4 py-2 font-bold uppercase text-sm tracking-wide hover:text-red-accent transition-colors ${isCategoryActive(key) ? 'text-red-accent' : 'text-dark-blue'}`}
                            >
                                {category.title}
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </Link>

                            {/* Mega Menu Dropdown */}
                            <div className={`absolute top-full left-0 w-64 bg-white shadow-xl border-t-4 border-red-accent transform transition-all duration-300 origin-top ${activeDropdown === key ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 invisible'}`}>
                                <div className="p-4 flex flex-col gap-2">
                                    {Object.entries(category.brands).map(([brandKey, brand]) => (
                                        <Link
                                            key={brandKey}
                                            href={`/${key}/${brand.slug}`}
                                            className="block px-4 py-3 hover:bg-light-grey rounded-md text-gray-700 hover:text-primary-blue font-medium transition-colors border-l-2 border-transparent hover:border-red-accent"
                                        >
                                            {brand.name}
                                        </Link>
                                    ))}
                                    <div className="h-px bg-gray-100 my-1"></div>
                                    <Link href={`/${key}`} className="block px-4 py-2 text-red-accent text-sm font-bold hover:underline">
                                        View All {category.title} &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link
                        href="/contact"
                        className={`px-4 py-2 font-bold uppercase text-sm tracking-wide hover:text-red-accent transition-colors ${isActive('/contact') ? 'text-red-accent' : 'text-dark-blue'}`}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-dark-blue hover:text-red-accent transition-colors"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Side Menu */}
            <div className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu}></div>

            <div className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-dark-blue text-white">
                    <span className="font-bold text-xl uppercase tracking-widest">Menu</span>
                    <button onClick={toggleMobileMenu}><X size={24} /></button>
                </div>
                <div className="p-6 overflow-y-auto h-full pb-24">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-lg font-bold text-dark-blue" onClick={toggleMobileMenu}>Home</Link>

                        {/* Mobile Categories */}
                        {Object.entries(siteData).map(([key, category]) => (
                            <div key={key} className="flex flex-col gap-3">
                                <Link
                                    href={`/${key}`}
                                    className="text-lg font-bold text-dark-blue flex justify-between items-center border-b border-gray-100 pb-2"
                                    onClick={toggleMobileMenu}
                                >
                                    {category.title}
                                </Link>
                                <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 ml-1">
                                    {Object.entries(category.brands).map(([brandKey, brand]) => (
                                        <Link
                                            key={brandKey}
                                            href={`/${key}/${brand.slug}`}
                                            className="text-gray-600 font-medium"
                                            onClick={toggleMobileMenu}
                                        >
                                            {brand.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <Link href="/about" className="text-lg font-bold text-dark-blue border-t border-gray-100 pt-4" onClick={toggleMobileMenu}>About Us</Link>
                        <Link href="/contact" className="text-lg font-bold text-dark-blue" onClick={toggleMobileMenu}>Contact Support</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
