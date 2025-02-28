import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold">ShopLogo</h2>
            <p className="text-gray-400 mt-2 text-sm">
              The best online store for all your needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/cart" className="hover:text-white transition">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.56 8.56 0 01-2.72 1.05 4.26 4.26 0 00-7.27 3.88A12.07 12.07 0 013 5.24a4.26 4.26 0 001.32 5.7 4.22 4.22 0 01-1.92-.53v.05a4.26 4.26 0 003.42 4.17 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.57 8.57 0 012 19.55 12.07 12.07 0 008.29 21c7.78 0 12.05-6.44 12.05-12V8.84A8.5 8.5 0 0022.46 6z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h7V15h-3v-3h3V9.5A4.5 4.5 0 0116.5 5H19v3h-2.5a1.5 1.5 0 00-1.5 1.5V12h4l-1 3h-3v6h5a2 2 0 002-2V5a2 2 0 00-2-2z" />
                </svg>
              </a>
              <a href="https://github.com/Zohirketto
" className="hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48V18.2c-2.76.6-3.34-1.34-3.34-1.34a2.63 2.63 0 00-1.1-1.47c-.9-.61.07-.6.07-.6a2.08 2.08 0 011.52 1.02 2.1 2.1 0 002.88.82 2.1 2.1 0 01.62-1.33c-2.2-.25-4.5-1.1-4.5-4.91a3.86 3.86 0 011-2.67 3.62 3.62 0 01.1-2.64s.83-.26 2.73 1a9.4 9.4 0 014.96 0c1.9-1.26 2.73-1 2.73-1a3.62 3.62 0 01.1 2.64 3.86 3.86 0 011 2.67c0 3.82-2.3 4.66-4.5 4.91a2.38 2.38 0 01.69 1.85v2.74c0 .27.18.59.69.48A10 10 0 0012 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} ShopLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
