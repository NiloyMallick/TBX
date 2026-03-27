import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

// Company images
const tbxImage = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400';
const arsImage = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400';
const aaImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'TBX Sourcing Ltd', path: '/tbx-sourcing' },
  ];

  const companyLinks = [
    {
      name: 'TBX Sourcing Ltd',
      path: '/tbx-sourcing',
      image: tbxImage,
      description: 'Comprehensive apparel sourcing solutions'
    },
    {
      name: 'ARS ACC. & Printing',
      path: '/ars-printing',
      image: arsImage,
      description: 'Premium trims and printing accessories'
    },
    {
      name: 'A&A Fashion & Fabrics',
      path: '/aa-fashion',
      image: aaImage,
      description: 'Knit fabrics and textile solutions'
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold text-red-600">TBX</span>
              <span className="text-2xl font-bold text-slate-900 ml-1">Group</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200",
                  isActive(link.path) ? "text-red-600" : "text-slate-700 hover:text-red-600"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button
                className={clsx(
                  "flex items-center text-sm font-medium transition-colors duration-200 focus:outline-none",
                  location.pathname.includes('/ars-printing') || location.pathname.includes('/aa-fashion') 
                    ? "text-red-600" 
                    : "text-slate-700 hover:text-red-600"
                )}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Our Companies
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div 
                className="absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="p-3 space-y-2" role="menu">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center p-3 rounded-md hover:bg-slate-50 transition-colors duration-200 group/card"
                      role="menuitem"
                    >
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 mr-3">
                        <img
                          src={link.image}
                          alt={link.name}
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 text-sm group-hover/card:text-red-600 transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/sustainability"
              className={clsx(
                "text-sm font-medium transition-colors duration-200",
                isActive('/sustainability') ? "text-red-600" : "text-slate-700 hover:text-red-600"
              )}
            >
              Sustainability & CSR
            </Link>
            
            <Link
              to="/career"
              className={clsx(
                "text-sm font-medium transition-colors duration-200",
                isActive('/career') ? "text-red-600" : "text-slate-700 hover:text-red-600"
              )}
            >
              Career
            </Link>

            <Link
              to="/contact"
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path) ? "text-red-600 bg-slate-50" : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="px-3 py-2 text-base font-medium text-slate-900">Our Companies</div>
            <div className="pl-6 space-y-1">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-sm font-medium",
                    isActive(link.path) ? "text-red-600" : "text-slate-600 hover:text-red-600"
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              to="/sustainability"
              className={clsx(
                "block px-3 py-2 rounded-md text-base font-medium",
                isActive('/sustainability') ? "text-red-600 bg-slate-50" : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
              )}
              onClick={closeMenu}
            >
              Sustainability & CSR
            </Link>
            
            <Link
              to="/career"
              className={clsx(
                "block px-3 py-2 rounded-md text-base font-medium",
                isActive('/career') ? "text-red-600 bg-slate-50" : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
              )}
              onClick={closeMenu}
            >
              Career
            </Link>

            <Link
              to="/contact"
              className="block w-full text-center mt-4 px-4 py-3 rounded-md text-base font-medium bg-red-600 text-white hover:bg-red-700"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
