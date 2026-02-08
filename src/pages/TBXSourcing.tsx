import { CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import drubaRanjanSarker from '../assets/druba-ranjan-sarker.png';
import joySarker from '../assets/joy-sarker.png';

// Using extracted logos for clients
const clientLogos = [
  '/src/assets/logos/yx9c2nwi4n.pdf-0-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-1-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-2-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-3-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-4-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-5-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-6-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-7-0.png',
  '/src/assets/logos/yx9c2nwi4n.pdf-8-0.png',
];

const TBXSourcing = () => {
  const sections = [
    { id: 'overview', name: 'Overview & Goals' },
    { id: 'management', name: 'Management' },
    { id: 'story', name: 'Our Story' },
    { id: 'why-us', name: 'Why Us' },
    { id: 'services', name: 'Services' },
    { id: 'products', name: 'Products' },
    { id: 'clients', name: 'Clients' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">TBX Sourcing Ltd.</h1>
          <p className="text-xl text-gray-300">A Story Built on the Factory Floor</p>
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

      {/* Overview & Goals */}
      <section className="py-16 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview & Goals</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                TBX Sourcing Ltd. began its journey on a factory floor in Bangladesh. What started as a vision for better manufacturing processes has grown into a global sourcing powerhouse. We are driven by the ambition to redefine apparel sourcing through precision, speed, and sustainability.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our goal is to be the most trusted partner for global fashion brands, providing end-to-end solutions that bridge the gap between design and delivery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span>Uncompromising Quality Standards</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span>Sustainable Manufacturing Practices</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span>Global Supply Chain Integration</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
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
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img src={drubaRanjanSarker} alt="Chairman" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Druba Ranjan Sarker</h3>
              <p className="text-red-600 font-medium mt-1">Chairman</p>
              <p className="text-gray-500 mt-4 text-sm">
                Visionary leader with decades of experience in the apparel industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img src={joySarker} alt="CEO" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Joy Sarker</h3>
              <p className="text-red-600 font-medium mt-1">CEO</p>
              <p className="text-gray-500 mt-4 text-sm">
                Driving innovation and global growth for TBX Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story (Legacy) */}
      <section className="py-16 bg-white" id="story">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">A Story Built on the Factory Floor</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Long before sourcing offices, global brands, or international audits, the journey began on a factory floor in Bangladesh.
            </p>

            <div className="border-l-4 border-red-600 pl-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">1979: The Beginning</h3>
              <p>
                Mr. Druba Ranjan Sarker started his career not behind a desk, but beside sewing machines—working as a Foreman then supervisor. Day after day, he learned the language of garments the hardest way possible: through hands-on production, long hours, and responsibility for every stitch that left the line. Those years shaped not only his technical skill, but his belief that true quality comes from discipline, respect for process, and accountability at every stage of production.
              </p>
            </div>

            <p className="mb-6">
              As Bangladesh’s ready-made garments industry grew, so did Mr. Sarker. Over the next four decades, he rose through the ranks gaining deep experience across woven, knit manufacturing, with a lifelong specialization in technical apparel. He learned how factories succeed, how they fail, and—most importantly—how people make the difference.
            </p>

            <div className="border-l-4 border-red-600 pl-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">1987: The Dream</h3>
              <p>
                Driven by ambition and belief in the future of Bangladesh’s apparel industry, Mr. Sarker took a bold step. He established his own manufacturing unit, starting with just one production line. Within a year, through determination and tireless effort, that single line grew into three. It was the beginning of a dream built with hope, courage, and hard-earned savings.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">1988: Resilience in Adversity</h3>
              <p>
                But destiny had other plans. A catastrophic flood swept across Bangladesh—claiming thousands of lives and devastating the nation’s economy. The flood destroyed crops, factories, and livelihoods. Among them was Mr. Sarker’s young manufacturing venture. Overnight, his dream was washed away.
              </p>
              <p className="mt-4">
                That same year, life gave him another responsibility—he became a father. Faced with the reality of loss and the duty of providing for his family, Mr. Sarker made one of the hardest decisions of his life. Guided by resilience, realism, and responsibility, he let go of his entrepreneurial dream and returned to professional life—carrying with him the lessons of failure, survival, and strength.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">A Lifetime of Preparation</h3>
            <p className="mb-6">
              Though the dream was paused, it was never forgotten. For decades, Mr. Sarker continued to serve the industry with integrity and commitment—working across production, quality assurance, and technical operations in reputed buying houses and sourcing offices. He became a trusted bridge between European and US buyers and Bangladeshi factories.
            </p>
            <p className="mb-6">
              Over the years, he partnered with globally respected brands including GAP, H&M, Zara, Levi’s, Banana Republic, Eddie Bauer, C&A, Lindex, K-Mart, Kappa, and A&E. These experiences sharpened his understanding of international audits, product risk, critical paths, and performance KPIs—but more importantly, reinforced his belief that trust is the most valuable currency in global sourcing.
            </p>

            <div className="border-l-4 border-red-600 pl-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">2022: The Dream Reborn</h3>
              <p>
                After more than three decades, the dream returned—this time through the next generation. Mr. Sarker’s son, Mr. Joy Sarker, carrying both his father’s legacy and a modern global perspective, established TBX Sourcing Ltd. Armed with two Major degrees in Textile Engineering and over 13 years of merchandising experience, Joy had worked with international brands such as Armani, DIESEL, United Colors of Benetton, Eddie Bauer, Harley-Davidson, River Island, Minoya, GAP, H&M, Nautica, Kronstadt etc.
              </p>
            </div>

            <p className="text-lg font-medium text-slate-900 italic text-center mt-8">
              "What the father built through experience, the son strengthened through education, technology, and global exposure."
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-slate-50" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We deliver more than just products; we deliver value, reliability, and peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <Globe className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">Extensive network of factories and suppliers across the region.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <Award className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">Rigorous quality control processes at every stage of production.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <Users className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Dedicated professionals managing your orders from concept to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-900 text-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-500">Apparel Sourcing</h3>
              <p className="text-gray-300">Strategic sourcing of high-quality apparel from trusted manufacturers.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-500">Product Development</h3>
              <p className="text-gray-300">End-to-end design and development support to bring your vision to life.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-500">Quality Control</h3>
              <p className="text-gray-300">Comprehensive inspection and testing to ensure product excellence.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-500">Logistics Management</h3>
              <p className="text-gray-300">Efficient supply chain solutions for timely delivery worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="py-20 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From knitwear to outerwear, we offer a diverse range of high-quality apparel products. Explore our full collection to see what we can create for you.
          </p>
          <Link 
            to="/tbx-sourcing/products" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            View All Products <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Clients Slider */}
      <section className="py-16 bg-slate-50 overflow-hidden" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-slate-900">Our Clients</h2>
        </div>
        <div className="flex space-x-12 animate-scroll justify-center">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
              <img src={logo} alt="Client Logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Sourcing?</h2>
            <p className="text-xl text-red-100 mb-8">Contact us today to discuss your requirements.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-2" />
                <span>info@tbxgroup.org</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-2" />
                <span>+880-1618707387</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TBXSourcing;
