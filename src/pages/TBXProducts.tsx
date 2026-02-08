import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TBXProducts = () => {
  const categories = [
    {
      id: 'knitted',
      name: 'Knitted Garments',
      description: 'Comprehensive range of knitted apparel for all ages.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
      items: [
        'Blank T-shirts', 'Custom Print T-shirt', 'Private Label T-shirts', 'Promo T-shirts',
        'Kids T-shirts', 'Polo Shirt', 'Tank Tops', 'Hoodies', 'Sportswear', 'Leggings',
        'Kids Wear', 'Knitwear'
      ]
    },
    {
      id: 'woven',
      name: 'Woven Garments',
      description: 'High-quality woven clothing for casual and formal wear.',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
      items: [
        'Women’s Clothing', 'Jeans Pants', 'Chino Pants', 'Custom Shirts', 'Custom Jacket',
        'Cargo Shorts', 'Cargo Trouser', 'Swim Shorts', 'Jackets', 'Fleece Jacket',
        'padded jackets', 'Fake down jackets', 'Down jackets', 'Ski jackets', 'Rain coats',
        'Bomber jackets', 'Seam Sealling jackets', 'bikers Jackets'
      ]
    },
    {
      id: 'workwear',
      name: 'Workwear & Uniform',
      description: 'Durable and functional workwear for various industries.',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
      items: [
        'Camouflage T-shirts', 'Camouflage Uniforms', 'Medical Scrubs', 'Coveralls',
        'Businesswear Polo Shirt', 'Workwear Manufacturer', 'Hi-vis workwear Manufacturer',
        'Uniforms Manufacturer', 'Kitchen & Restaurant Aprons', 'School Uniform Manufacturer',
        'Medical Scrubs & Uniforms'
      ]
    },
    {
      id: 'promotional',
      name: 'Promotional Apparel',
      description: 'Customized apparel for brand promotion and events.',
      image: 'https://images.unsplash.com/photo-1529720317453-c8da503f2051?auto=format&fit=crop&q=80&w=800',
      items: [
        'Customised T-shirts', 'Customized Polo Shirts', 'Customized Hoodies',
        'Customized Sportswear', 'Customized Fleece Jackets', 'Customised Windbreakers'
      ]
    },
    {
      id: 'underwear',
      name: 'Underwear',
      description: 'Comfortable and high-quality underwear and sleepwear.',
      image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=800',
      items: ['Underwear Manufacturer', 'Sleepwear Manufacturer']
    }
  ];

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

      {/* Product Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden relative">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TBXProducts;
