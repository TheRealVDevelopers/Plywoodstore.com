import { Link } from 'react-router-dom';
import { siteData } from '@/data/siteData';

export default function Footer() {
  const categories = Object.entries(siteData).slice(0, 6);

  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#C45C3F] rounded-lg flex items-center justify-center font-bold text-xl font-heading">
                P
              </div>
              <span className="text-xl font-bold font-heading">
                PLYWOOD<span className="text-[#C45C3F]">STORES</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted supplier for premium plywood and interior materials. Authorized dealers for Century, Greenply, Merino, and more.
            </p>
          </div>

          <div>
            <h4 className="text-[#C45C3F] font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C45C3F] font-semibold text-sm uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-3">
              {categories.map(([key, cat]) => (
                <li key={key}>
                  <Link to={`/${key}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C45C3F] font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
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

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Plywood Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
