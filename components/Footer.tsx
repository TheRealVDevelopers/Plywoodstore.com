import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/siteData';

export default function Footer() {
  const categories = Object.entries(siteData);

  return (
    <footer className="bg-[#081F44] text-white">
      {/* Brand logo row above footer */}
      <div className="border-b border-white/10">
        <div className="container py-8">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Plywood Stores"
              width={220}
              height={66}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <p className="text-base leading-relaxed text-white/90">
              Your trusted supplier for premium plywood and interior materials. Authorized dealers for Century, Greenply, Merino, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#A4161A] w-fit">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-base text-white/90 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-base text-white/90 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-base text-white/90 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#A4161A] w-fit">Our Brands</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {categories.map(([key, cat]) => (
                <div key={key}>
                  <p className="text-white font-bold text-base mb-2">{cat.title}</p>
                  <ul className="space-y-1">
                    {Object.entries(cat.brands).map(([brandKey, brand]) => (
                      <li key={brandKey}>
                        <Link href={`/${key}/${brand.slug}`} className="text-base text-white/90 hover:text-white transition-colors">
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#A4161A] w-fit">Contact Us</h4>
            <ul className="space-y-4 text-base text-white/90">
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li>
                <a href="mailto:info@plywoodstores.com" className="hover:text-white transition-colors">info@plywoodstores.com</a>
              </li>
              <li className="leading-relaxed">
                123, Furniture Market, <br />Kirti Nagar, New Delhi - 110015
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <p className="text-base text-white/70">© {new Date().getFullYear()} Plywood Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
