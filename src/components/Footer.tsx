import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-red-600">TBX</span>
              <span className="text-2xl font-bold text-white ml-1">Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A vertically integrated apparel sourcing and supply chain group delivering excellence, innovation, and trust to the global fashion industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/tbx-sourcing" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-white text-sm transition-colors">Career</Link>
              </li>
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">Our Companies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tbx-sourcing" className="text-gray-400 hover:text-white text-sm transition-colors">TBX Sourcing Ltd.</Link>
              </li>
              <li>
                <Link to="/aa-fashion" className="text-gray-400 hover:text-white text-sm transition-colors">A&A Fashion & Fabrics</Link>
              </li>
              <li>
                <Link to="/ars-printing" className="text-gray-400 hover:text-white text-sm transition-colors">ARS Printing & Packaging</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Email:</p>
                  <a href="mailto:info@tbxgroup.org" className="text-sm text-gray-400 hover:text-white">info@tbxgroup.org</a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Phone:</p>
                  <a href="tel:+8801618707387" className="text-sm text-gray-400 hover:text-white">+880-1618707387</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Dhaka Office:</p>
                  <p className="text-sm text-gray-400">House: 20, Road: 02, Uttara,<br />Sector: 12, Dhaka-1230</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TBX Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
