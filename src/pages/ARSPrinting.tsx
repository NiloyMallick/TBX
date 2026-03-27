import { useState, useEffect } from 'react';
import { Printer, Package, CheckCircle, Users, Award, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import riyadHossen from '../assets/riyad-hossen.jpeg';
import arifHossen from '../assets/arif-hossen.jpeg';

// Import client logos
import logo1 from '../assets/logos/1.png';
import logo2 from '../assets/logos/2.png';
import logo3 from '../assets/logos/3.png';
import logo4 from '../assets/logos/4.png';

// Import certification logos
import cert1 from '../assets/certifications/1.jpg';
import cert2 from '../assets/certifications/2.jpg';
import cert3 from '../assets/certifications/3.jpg';
import cert4 from '../assets/certifications/4.jpg';

// Using extracted logos for clients and certifications
const clientLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
];

const certLogos = [
  cert1,
  cert2,
  cert3,
  cert4,
];

const clientSlides = [
  [logo1, logo2, logo3, logo4],
];

const certSlides = [
  [cert1, cert2, cert3, cert4],
];

const ARSPrinting = () => {
  const [currentClientSlide, setCurrentClientSlide] = useState(0);
  const [currentCertSlide, setCurrentCertSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClientSlide((prev) => (prev + 1) % clientSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCertSlide((prev) => (prev + 1) % certSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const sections = [
    { id: 'overview', name: 'Overview & Goals' },
    { id: 'management', name: 'Management' },
    { id: 'products', name: 'Products' },
    { id: 'clients', name: 'Clients' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'contact', name: 'Contact' },
  ];

  const productCategories = [
    {
      id: 'paper',
      name: 'Paper & Printing',
      description: 'High-quality paper products and printing materials',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=600',
      items: ['Adhesive Sticker', 'Heat Seal', 'Hang Tag']
    },
    {
      id: 'tape',
      name: 'Tape & Cord',
      description: 'Specialized tapes and cords for various applications',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
      items: ['Twill Tape', 'Bungee Cord', 'Weaving Belt', 'Ribbed Tape', 'Drawstring']
    },
    {
      id: 'button',
      name: 'Button',
      description: 'Wide variety of buttons for garment decoration and function',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600',
      items: ['Horn Button', 'Wooden Button', 'Shell Button', 'Fabric Button', 'Metal Button', 'Rivet Button', 'Coconut Button', 'Shank Button']
    },
    {
      id: 'label',
      name: 'Label',
      description: 'Various types of labels for garment identification and branding',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=600',
      items: ['Screen Print Label', 'Paper Label', 'Woven Label', 'Satin Label']
    },
    {
      id: 'handicraft',
      name: 'Handicraft',
      description: 'Artisanal handicraft items for garment decoration',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600',
      items: ['Tassel', 'Bow', 'Flowers', 'Pompom']
    },
    {
      id: 'others',
      name: 'Others',
      description: 'Additional accessories and components for garments',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
      items: ['Lock String', 'Metal Badge', 'Rubber Badge', 'Buckle', 'D Ring', 'Eyelets', 'Gromet', 'Leather Badge', 'Stopper']
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">ARS Printing Accessories</h1>
          <p className="text-xl text-gray-300">Premium Packaging & Accessories Solutions</p>
        </div>
      </section>

      {/* Sub Navigation */}
      <div className="sticky top-20 z-40 bg-white shadow-sm border-b border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4 min-w-max">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                smooth={true}
                duration={500}
                offset={-150}
                className="text-sm font-medium text-gray-600 hover:text-red-600 cursor-pointer whitespace-nowrap"
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview & Goals</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                ARS Printing Accessories specializes in high-quality printing and packaging solutions for the apparel industry. We understand that packaging is the first touchpoint for your customers, and we ensure it reflects the quality of your brand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span>Eco-friendly Packaging Options</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span>Advanced Printing Technology</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span>In-house Design Support</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://trimtex-bd.com/wp-content/uploads/2024/06/Leading-Garment-Accessories-Bangladesh-5.png?auto=format&fit=crop&q=80&w=1000" 
                alt="Factory Floor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 bg-slate-50" id="management">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Management Team</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={arifHossen} alt="Chairman" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Arif Hossen</h3>
              <p className="text-red-600 font-medium">Chairman</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={riyadHossen} alt="Director" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Riyad Hossen</h3>
              <p className="text-red-600 font-medium">Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Link key={category.id} to={`/ars-printing/${category.id}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group border border-gray-200">
                  <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span key={item} className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Slider */}
      <section className="py-16 bg-white" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-slate-900">Our Clients</h2>
        </div>
        <div className="relative h-20 flex justify-center">
          {clientSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex justify-center space-x-12 transition-opacity duration-1000 ease-in-out ${
                index === currentClientSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.map((logo, logoIndex) => (
                <div key={logoIndex} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                  <img src={logo} alt="Client Logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-16 bg-slate-50" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-slate-900">Our Certifications</h2>
        </div>
        <div className="relative h-20 flex justify-center">
          {certSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex justify-center space-x-12 transition-opacity duration-1000 ease-in-out ${
                index === currentCertSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.map((logo, logoIndex) => (
                <div key={logoIndex} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                  <img src={logo} alt="Certification Logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Contact ARS Printing</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-2" />
                <span>103/1, Arambagh, Motijheel, Dhaka-1000</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-2" />
                <span>+880 1866 409 690</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-2" />
                <span>+880 1818 057 679</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-2" />
                <span>ARS@TBXGROUP.ORG</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ARSPrinting;
