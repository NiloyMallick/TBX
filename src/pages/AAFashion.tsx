import { useState, useEffect } from 'react';
import { Scissors, Shirt, CheckCircle, Users, Award, Globe, Mail, Phone, MapPin, Factory } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import sadekuzzaman from '../assets/sadekuzzaman.jpeg';
import soniaAfrin from '../assets/sonia-afrin.jpeg';
import aaHomeVideo from '../assets/videos/a&a_home.mp4';

const AAFashion = () => {
  const slides = [
    'https://lh3.googleusercontent.com/-XcE0tc-R2EI/VaQaNaQveaI/AAAAAAAAYgY/4yefm25pETk/s660-Ic42/Garment-Labels-Australia_159702_29428_image.jpg',
    'https://trimtex-bd.com/wp-content/uploads/elementor/thumbs/Hang-Tag-28-riwsf2bpz6xth809niegixz5s1b23dq9c37k7uy10g.webp',
    'https://etienter.com/wp-content/uploads/2022/04/draw-cord-500x500-1-300x300.jpg',
    'https://i0.wp.com/textileengineering.net/wp-content/uploads/2024/01/types-of-buttons.jpg?fit=600%2C400&ssl=1'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'management', name: 'Management' },
    { id: 'products', name: 'Products' },
    { id: 'factory', name: 'Factory' },
    { id: 'quality', name: 'Quality' },
    { id: 'clients', name: 'Clients' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[600px] bg-slate-900 text-white overflow-hidden group flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={aaHomeVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">A & A Fashion & Fabrics</h1>
          <p className="text-xl text-gray-300">Leading 100% Export-Oriented Knit Fabrics Manufacturer</p>
        </div>
      </section>

      {/* Sub Navigation */}
      <div className="sticky top-20 z-40 bg-white shadow-sm border-b border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4 min-w-max">
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                smooth={true}
                duration={500}
                offset={-150}
                className="text-sm font-medium text-gray-600 hover:text-red-600 cursor-pointer whitespace-nowrap"
              >
                {section.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A & A Fashion & Fabrics is a leading 100% export-oriented knit fabrics manufacturer and supplier in Bangladesh. We provide premium-quality knitted fabrics to global apparel brands, buying houses, and garment factories.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We focus on Superior fabric quality, International standard consistency, Dynamic customer support, and On-time production. Our commitment to quality and customer satisfaction has helped us build strong partnerships in both local and international markets.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Vision</h3>
                <p className="text-gray-600 mb-4">To become a globally recognized and trusted knit fabric manufacturer providing innovative, sustainable and premium textile solutions.</p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mission</h3>
                <p className="text-gray-600">To deliver high-quality fabrics that meet global standards, maintain ethical practices, invest in technology, and build long-term partnerships.</p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.shopify.com/s/files/1/0520/8893/0456/files/cr_w_1200_h_600_ec1defb5-63f7-4b58-bf03-8736d6e61a61.jpg?v=1613959526?auto=format&fit=crop&q=80&w=1000" 
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
                <img src={sadekuzzaman} alt="Managing Director" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sadekuzzaman</h3>
              <p className="text-red-600 font-medium">Managing Director</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={soniaAfrin} alt="Director" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sonia Afrin</h3>
              <p className="text-red-600 font-medium">Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 'basic',
                name: 'Basic Knit Fabrics',
                description: 'Essential knitted fabrics including Single Jersey, Rib, and Interlock',
                image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
                items: ['Single Jersey', 'Rib & Interlock', 'Plain Fabrics']
              },
              {
                id: 'specialty',
                name: 'Specialty Fabrics',
                description: 'Advanced fabrics with special properties and intricate designs',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
                items: ['Fleece (1-3 thread)', 'Lycra & Spandex', 'Pique & Lacoste', 'French Terry', 'Jacquard']
              },
              {
                id: 'performance',
                name: 'Performance Fabrics',
                description: 'Technical fabrics designed for specific performance requirements',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
                items: ['Polyester Fabrics', 'Mesh Fabrics', 'Moisture-Wicking', 'Quick-Dry']
              },
              {
                id: 'custom',
                name: 'Custom Developed',
                description: 'Bespoke fabrics developed according to customer specifications',
                image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=600',
                items: ['Mélange Fabrics', 'Engineered Stripes', 'All Over Print (AOP)', 'Custom Blends']
              }
            ].map((category) => (
              <RouterLink key={category.id} to={`/aa-fashion/${category.id}`} className="block">
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
              </RouterLink>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & Quality */}
      <section className="py-16 bg-slate-50" id="factory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Factory className="h-6 w-6 text-red-600 mr-2" /> Factory Environment & Facilities
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li><strong>Total Area:</strong> 18,700 sq. ft. (7,200 sq. ft. in production)</li>
                <li><strong>Daily Capacity:</strong> 5,000–6,000 kg of knit fabrics</li>
                <li>Modern production floor with natural lighting and ventilation</li>
                <li>Skilled and trained workforce</li>
                <li>Safety-compliant building and operational standards</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-red-600 mr-2" /> Quality Assurance
              </h2>
              <p className="text-gray-600 mb-4">We follow a strict multi-stage quality control process:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Raw Material Inspection</li>
                <li>• In-Process QC</li>
                <li>• Final Fabric Inspection (4-Point System)</li>
                <li>• Shrinkage / GSM / Colorfastness Tests</li>
              </ul>
              <p className="text-gray-600 mt-4 font-medium">Our QC team ensures every roll meets customer expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Clients</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['Fortis Group', 'HKD outdoors ltd', 'GH Heawea ltd', 'Arbella fashion Ltd.', 'Amaizing fasion ltd.', 'Lavender Garments ltd.', 'Next Sourcing ltd.', 'Team group', 'li & fung'].map((client) => (
              <span key={client} className="text-lg font-medium text-gray-500">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Contact A&A Fashion & Fabrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
              <div>
                <h3 className="font-bold mb-2">Corporate Address:</h3>
                <p className="text-red-100">House: 20, Road: 02, Uttara, Sector: 12, Dhaka-1230</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Factory Address:</h3>
                <p className="text-red-100">South Aouch Para, Nishat Nagar, Tongi, Gazipur</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Contact:</h3>
                <p className="text-red-100">+880 1722-080523</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Email:</h3>
                <p className="text-red-100">A&A@TBXGROUP.ORG</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AAFashion;
