import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const pdfFiles = {
  woven: new URL('../assets/woven.pdf', import.meta.url).href,
  denim_non_denim: new URL('../assets/denim_non_denim.pdf', import.meta.url).href,
  caps_and_hats: new URL('../assets/caps_and_hats.pdf', import.meta.url).href,


};

type ProductItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

type ProductCategoryData = {
  name: string;
  description: string;
  products: ProductItem[];
  pdfUrl?: string;
};

const ProductCategory = () => {
  const { categoryId } = useParams();

  const categoryData: Record<string, ProductCategoryData> = {
    knitted: {
      name: 'Knitted Garments',
      description: 'Comprehensive range of knitted apparel for all ages.',
      products: [
        {
          id: 1,
          name: 'Blank T-shirts',
          description: 'High-quality blank t-shirts perfect for customization',
          image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Custom Print T-shirt',
          description: 'Custom printed t-shirts with your design',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Private Label T-shirts',
          description: 'White-label t-shirts for your brand',
          image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 4,
          name: 'Kids T-shirts',
          description: 'Comfortable and durable t-shirts for children',
          image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 5,
          name: 'Polo Shirt',
          description: 'Classic polo shirts for casual and professional wear',
          image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 6,
          name: 'Hoodies',
          description: 'Warm and comfortable hoodies for all seasons',
          image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    woven: {
      name: 'Woven And Outerwear Garments',
      description: 'High-quality woven clothing for casual and formal wear.',
      pdfUrl: pdfFiles.woven,
      products: [
        {
          id: 1,
          name: 'Women\'s Clothing',
          description: 'Stylish and comfortable women\'s apparel',
          image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Jeans Pants',
          description: 'Classic denim jeans in various styles',
          image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Custom Shirts',
          description: 'Tailored shirts for professional and casual wear',
          image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 4,
          name: 'Jackets',
          description: 'Versatile jackets for different weather conditions',
          image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    denim_and_non_denim: {
        name: 'Denim And Non-Denim',
      description: 'Durable and functional workwear for various industries.',
      pdfUrl: pdfFiles.denim_non_denim,
      products: [
        {
          id: 1,
          name: 'Medical Scrubs',
          description: 'Professional medical uniforms and scrubs',
          image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Coveralls',
          description: 'Protective coveralls for industrial work',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Hi-vis Workwear',
          description: 'High-visibility safety workwear',
          image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    promotional: {
      name: 'Promotional Apparel',
      description: 'Customized apparel for brand promotion and events.',
      products: [
        {
          id: 1,
          name: 'Customised T-shirts',
          description: 'Branded t-shirts for promotional campaigns',
          image: 'https://images.unsplash.com/photo-1529720317453-c8da503f2051?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Customized Polo Shirts',
          description: 'Professional polo shirts with custom branding',
          image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    caps_and_hats: {
      name: 'Caps And Hats',
      description: 'Stylish and functional headwear for all occasions.',
      pdfUrl: pdfFiles.caps_and_hats,
      products: [
        {
          id: 1,
          name: 'Baseball Caps',
          description: 'Classic baseball caps for sports and casual wear',
          image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Sleepwear Manufacturer',
          description: 'Comfortable sleepwear for restful nights',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    }
  };

  const category = categoryId ? categoryData[categoryId as keyof typeof categoryData] : undefined;
  const pdfUrl = category?.pdfUrl;

  if (!category) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Category Not Found</h1>
          <Link to="/tbx-sourcing/products" className="text-red-600 hover:text-red-700 font-medium">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-gray-300">{category.description}</p>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/tbx-sourcing/products" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>
      </div>

      {/* PDF Preview */}
      {pdfUrl && (
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg">
              <div className="px-6 py-6 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">{category.name}</h2>
                {/* <p className="text-sm text-gray-500 mt-1">This PDF opens automatically for the selected product category.</p> */}
              </div>
              <div className="h-[80vh]">
                <iframe
                  src={pdfUrl}
                  title={`${category.name} PDF`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      {/* <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">{product.price}</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProductCategory;