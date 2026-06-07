import { useState, useEffect } from 'react';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
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

const clientSlides = [
  [logo1, logo2, logo3, logo4],
];

const certSlides = [
  [cert1, cert2, cert3, cert4],
];

const ARSPrinting = () => {
  const [currentClientSlide, setCurrentClientSlide] = useState(0);
  const [currentCertSlide, setCurrentCertSlide] = useState(0);
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

  const productFiles = [
    'Bow.pdf',
    'Buckle.pdf',
    'Bunjee Cord.pdf',
    'Coconut Button.pdf',
    'D Ring.pdf',
    'Drawstring.pdf',
    'Eyelets.pdf',
    'Gromet.pdf',
    'Hang tag.pdf',
    'Heat Seal.pdf',
    'Leather Badge.pdf',
    'Lock String.pdf',
    'Metal Button.pdf',
    'Paper label.pdf',
    'Pompom.pdf',
    'Ribbed Tape.pdf',
    'Rubber Badge (1).pdf',
    'Screen Print label.pdf',
    'Shank Button.pdf',
    'Shell Button.pdf',
    'Sticker.pdf',
    'Stopper.pdf',
    'Tassel.pdf',
    'Twile Tape.pdf',
    'Weaving Belt.pdf',
    'Wooden Button.pdf',
    'woven label.pdf'
  ];

  const products = productFiles.map((filename, index) => ({
    id: index + 1,
    name: filename.replace(/\.pdf$/i, ''),
    link: new URL(`../assets/ars_products/${filename}`, import.meta.url).href,
  }));

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section 
        className="relative h-[600px] bg-slate-900 text-white overflow-hidden group flex items-center justify-center"
        style={{
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">ARS Printing Accessories</h1>
          {/* <p className="text-xl text-gray-300">Leading 100% Export-Oriented Knit Fabrics Manufacturer</p> */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group border border-gray-200">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <a href={product.link} target="_blank" rel="noreferrer" className="text-sm text-red-600 hover:text-red-700">
                    View PDF
                  </a>
                </div>
                <div className="h-64 overflow-hidden">
                  <iframe src={product.link} title={product.name} className="w-full h-full" />
                </div>
              </div>
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
