import { Printer, Package, CheckCircle, Users, Award, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';
import riyadHossen from '../assets/riyad-hossen.jpeg';
import arifHossen from '../assets/arif-hossen.jpeg';

// Using extracted logos for clients and certifications
const clientLogos = [
  '/src/assets/logos/1.png',
  '/src/assets/logos/2.png',
  '/src/assets/logos/3.png',
  '/src/assets/logos/4.png',
];

const certLogos = [
  '/src/assets/certifications/1.jpg',
  '/src/assets/certifications/2.jpg',
  '/src/assets/certifications/3.jpg',
  '/src/assets/certifications/4.jpg',
];

const ARSPrinting = () => {
  const sections = [
    { id: 'overview', name: 'Overview & Goals' },
    { id: 'management', name: 'Management' },
    { id: 'products', name: 'Products' },
    { id: 'clients', name: 'Clients' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'contact', name: 'Contact' },
  ];

  const products = [
    { name: 'Paper & Printing', items: ['Adhesive Sticker', 'Heat Seal', 'Hang Tag'] },
    { name: 'Tape & Cord', items: ['Twill Tape', 'Bungee Cord', 'Weaving Belt', 'Ribbed Tape', 'Drawstring'] },
    { name: 'Button', items: ['Horn Button', 'Wooden Button', 'Shell Button', 'Fabric Button', 'Metal Button', 'Rivet Button', 'Coconut Button', 'Shank Button'] },
    { name: 'Label', items: ['Screen Print Label', 'Paper Label', 'Woven Label', 'Satin Label'] },
    { name: 'Handicraft', items: ['Tassel', 'Bow', 'Flowers', 'Pompom'] },
    { name: 'Others', items: ['Lock String', 'Metal Badge', 'Rubber Badge', 'Buckle', 'D Ring', 'Eyelets', 'Gromet', 'Leather Badge', 'Stopper'] },
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
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
              <Printer className="h-32 w-32 text-gray-300" />
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
            {products.map((category) => (
              <div key={category.name} className="p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-slate-50" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Clients</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['H&M', 'Wal-Mart', 'Li & Fung', 'Adidas', 'Levis', 'VF Asia', 'Nike', 'GAP', 'Tesco', 'C&A', 'Target', 'ASDA', 'Next', 'Zara', 'Old Navy', 'PVH', 'S. Oliver', 'Puma', 'K-mart', 'M&S'].map((client) => (
              <span key={client} className="text-lg font-medium text-gray-500">{client}</span>
            ))}
          </div>
          <div className="mt-8 flex space-x-8 overflow-x-auto pb-4 justify-center">
             {clientLogos.map((logo, index) => (
                <img key={index} src={logo} alt="Client" className="h-16 object-contain opacity-70" />
             ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['OEKO-TEX® Standard 100', 'ISO 9001:2015', 'Global Recycled Standard (GRS)', 'FSC®'].map((cert) => (
              <div key={cert} className="flex flex-col items-center">
                <Award className="h-12 w-12 text-red-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
           <div className="mt-8 flex space-x-8 overflow-x-auto pb-4 justify-center">
             {certLogos.map((logo, index) => (
                <img key={index} src={logo} alt="Certification" className="h-16 object-contain opacity-70" />
             ))}
          </div>
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
