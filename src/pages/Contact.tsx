import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Global presence to serve you better</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Offices</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Corporate Office</h3>
                    <p className="mt-1 text-gray-600">
                      House: 20, Road: 02, Uttara<br />
                      Sector: 12, Dhaka-1230<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Dhaka Office</h3>
                    <p className="mt-1 text-gray-600">
                      147/1 Sokina Bhaban, Arambag<br />
                      Mothijhil, Dhaka - 1000<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Regional Office</h3>
                    <p className="mt-1 text-gray-600">
                      G-151 West Rajdighirpar<br />
                      Joydebpur, Gazipur- 1700<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Dubai Office</h3>
                    <p className="mt-1 text-gray-600">
                      JB-8 Building, Jafza South<br />
                      Commercial Area, Free Zone<br />
                      UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">UK Office</h3>
                    <p className="mt-1 text-gray-600">
                      45 Hillside Road<br />
                      Durham, DL14 8LS<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3" />
                    <a href="mailto:Info@tbxgroup.Org" className="text-gray-600 hover:text-red-600">Info@tbxgroup.Org</a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <a href="tel:+8801618707387" className="text-gray-600 hover:text-red-600">+880-1618707387</a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-600">TBX Sourcing Limited</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm h-fit">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
