import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductsGrid } from '../components/ProductsGrid';

const TBXProducts = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300">Explore our comprehensive range of apparel solutions</p>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/tbx-sourcing" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to TBX Sourcing
        </Link>
      </div>

      {/* Dynamic Product Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsGrid company="TBX-Sourcing" />
        </div>
      </section>
    </div>
  );
};

export default TBXProducts;
