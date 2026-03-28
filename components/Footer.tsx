import Link from 'next/link';
import { Facebook, Instagram, Send, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-auto rounded-t-[2rem] shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              {/* Half-circle logo */}
              <div className="w-6 h-8 bg-black rounded-l-full"></div>
              <span className="text-2xl font-bold text-gray-900">Confy</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-colors">
                {/* Custom X (Twitter) Icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.974H5.078z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><Link href="#" className="hover:text-gray-900 transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Get App</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Services</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">How It Works</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4 font-medium">Subscribe to our newsletter</p>
            <div className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-gray-50/50 border border-gray-200 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 p-2 hover:bg-blue-50 rounded-full transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-800 font-semibold">
          <p>All rights reserved @drimdave</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
