import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import joySarker from '../assets/joy-sarker.png';
import sadekuzzaman from '../assets/sadekuzzaman.jpeg';
import arifHossen from '../assets/arif-hossen.jpeg';

// Import extracted logos (using the paths returned by pdf_convert)
// Note: In a real scenario, we'd rename these for clarity.
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

const certLogos = [
  '/src/assets/certifications/h0u3r1s22k.pdf-0-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-1-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-2-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-3-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-4-0.png',
];

const Home = () => {
  const boardMembers = [
    { name: 'Joy Sarker', role: 'President', image: joySarker },
    { name: 'Sadekuzzaman', role: 'Director', image: sadekuzzaman },
    { name: 'Arif Hossen', role: 'Director', image: arifHossen },
  ];

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
      title: "Building Partnerships That Last",
      subtitle: "A vertically integrated apparel sourcing and supply chain group delivering excellence to the global fashion industry."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600",
      title: "Excellence in Manufacturing",
      subtitle: "State-of-the-art facilities ensuring quality and precision in every stitch."
    },
    {
      image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?auto=format&fit=crop&q=80&w=1600",
      title: "Sustainable Fashion Solutions",
      subtitle: "Committed to ethical sourcing and eco-friendly production practices."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <section className="relative h-[600px] bg-slate-900 text-white overflow-hidden group">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
                  <Link to="/tbx-sourcing" className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center">
                    Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-slate-900 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-red-600' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About TBX Group */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About TBX Group</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              TBX Group is a vertically integrated apparel sourcing and supply chain group formed by bringing together three specialized companies under one unified platform. With a strong foundation in sourcing, manufacturing support, trims & accessories, and fabric supply, TBX Group offers complete end-to-end solutions for global fashion brands and retailers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our group structure allows us to operate as a single strategic partner while leveraging the individual strengths of each business unit. This integration ensures speed, quality control, cost efficiency, and seamless coordination across the entire production process — from design development to final shipment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With experienced merchandising professionals, a strong factory network, and deep technical knowledge, TBX Group is committed to delivering reliable, transparent, and competitive sourcing solutions to the global apparel industry.
            </p>
            <Link to="/tbx-sourcing" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-red-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To rise as a global force in apparel sourcing and supply chain excellence — setting new standards of quality, speed, sustainability, and trust across the fashion world.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision TBX Group as a name that brands rely on, factories respect, and customers admire — a symbol of innovation, integrity, and unstoppable growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-red-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to redefine the future of apparel sourcing by building a seamless ecosystem where creativity meets precision, and ambition meets execution.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1" /> Unite sourcing, fabrics, trims, and production into one powerful engine</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1" /> Deliver world-class products with unmatched speed and consistency</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1" /> Empower brands with smarter, more transparent supply chains</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1" /> Champion ethical, sustainable, and responsible manufacturing</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1" /> Build partnerships that last beyond seasons and trends</li>
              </ul>
              <p className="text-gray-900 font-medium mt-4 italic">
                At TBX Group, we don’t just make garments — we build brands, shape industries, and move fashion forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Companies</h2>
            <p className="text-xl text-gray-600">Three specialized companies working together to deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TBX Sourcing */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">TBX Sourcing Ltd.</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive apparel sourcing and vendor management solutions with proven expertise in global markets.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> Strong factory network
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> Quality assurance & compliance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> On-time delivery performance
                </li>
              </ul>
              <Link to="/tbx-sourcing" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* A&A Fashion */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">A&A Fashion & Fabrics</h3>
              <p className="text-gray-600 mb-6">
                Premium knit fabric sourcing and supply with focus on excellence, durability, and innovation.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> Wide fabric range
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> Sustainable fabrics available
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> Custom fabric development
                </li>
              </ul>
              <Link to="/aa-fashion" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* ARS Printing */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">ARS Printing Accessories</h3>
              <p className="text-gray-600 mb-6">
                Premium trims, accessories, and packaging solutions with in-house production facilities.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> In-house production
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> Fast turnaround time
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 mr-2" /> Consistent quality
                </li>
              </ul>
              <Link to="/ars-printing" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Board of Directors</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600">Leading with vision and integrity</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {boardMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center group">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-red-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Slider */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-slate-900">Our Clients</h2>
        </div>
        <div className="flex space-x-12 animate-scroll">
          {/* Duplicate list for infinite scroll effect */}
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
              <img src={logo} alt="Client Logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-slate-900">Our Certifications</h2>
        </div>
        <div className="flex space-x-12 animate-scroll-reverse">
          {[...certLogos, ...certLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
              <img src={logo} alt="Certification Logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
