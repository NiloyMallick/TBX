import { Leaf, Heart, Globe, Award } from 'lucide-react';

// Using extracted logos for certifications
const certLogos = [
  '/src/assets/certifications/h0u3r1s22k.pdf-0-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-1-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-2-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-3-0.png',
  '/src/assets/certifications/h0u3r1s22k.pdf-4-0.png',
];

const Sustainability = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sustainability & CSR</h1>
          <p className="text-xl text-green-100">Committed to Ethical and Eco-friendly Practices</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Stewardship</h3>
              <p className="text-gray-600">
                We are dedicated to minimizing our environmental footprint through sustainable sourcing, waste reduction, and energy-efficient operations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Social Responsibility</h3>
              <p className="text-gray-600">
                We prioritize the well-being of our workers and the communities we operate in, ensuring fair wages, safe working conditions, and community support.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">
                Our supply chain is built on transparency and integrity. We partner with suppliers who share our commitment to ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-slate-900">Our Certifications</h2>
        </div>
        <div className="flex space-x-12 animate-scroll justify-center">
          {certLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
              <img src={logo} alt="Certification Logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
