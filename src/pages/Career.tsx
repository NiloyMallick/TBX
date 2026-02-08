import { Briefcase, Send } from 'lucide-react';

const Career = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300">Build your career with TBX Group</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Openings</h2>
          <p className="text-gray-600 mb-8">
            We are always looking for talented individuals to join our growing team. If you are passionate about the fashion industry and want to make a difference, we want to hear from you.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-4">
              Currently, we don't have any specific openings listed online. However, we encourage you to send your CV for future consideration.
            </p>
            <a 
              href="mailto:careers@tbxgroup.org" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
