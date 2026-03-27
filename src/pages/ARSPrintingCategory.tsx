import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ARSPrintingCategory = () => {
  const { categoryId } = useParams();

  const categoryData = {
    paper: {
      name: 'Paper & Printing',
      description: 'High-quality paper products and printing materials.',
      products: [
        {
          id: 1,
          name: 'Adhesive Sticker',
          description: 'Custom adhesive stickers for branding and labeling',
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Heat Seal',
          description: 'Heat seal materials for garment printing and labeling',
          image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Hang Tag',
          description: 'Branded hang tags for garment identification',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    tape: {
      name: 'Tape & Cord',
      description: 'Specialized tapes and cords for various applications.',
      products: [
        {
          id: 1,
          name: 'Twill Tape',
          description: 'Durable twill tape for garment reinforcement',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Bungee Cord',
          description: 'Elastic bungee cords for adjustable fastening',
          image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Drawstring',
          description: 'Adjustable drawstrings for hoodies and pants',
          image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    button: {
      name: 'Button',
      description: 'Wide variety of buttons for garment decoration and function.',
      products: [
        {
          id: 1,
          name: 'Horn Button',
          description: 'Natural horn buttons for traditional and rustic designs',
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Metal Button',
          description: 'Durable metal buttons in various finishes',
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Wooden Button',
          description: 'Eco-friendly wooden buttons for natural aesthetics',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    label: {
      name: 'Label',
      description: 'Various types of labels for garment identification and branding.',
      products: [
        {
          id: 1,
          name: 'Screen Print Label',
          description: 'Custom screen printed labels for branding',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Woven Label',
          description: 'High-quality woven labels for premium garments',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Satin Label',
          description: 'Smooth satin labels for elegant presentation',
          image: 'https://images.unsplash.com/photo-1506629905607-0b5ab9a9e21a?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    handicraft: {
      name: 'Handicraft',
      description: 'Artisanal handicraft items for garment decoration.',
      products: [
        {
          id: 1,
          name: 'Tassel',
          description: 'Decorative tassels for traditional and modern designs',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Pompom',
          description: 'Fun pompoms for playful garment accents',
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    others: {
      name: 'Others',
      description: 'Additional accessories and components for garments.',
      products: [
        {
          id: 1,
          name: 'Buckle',
          description: 'Metal and plastic buckles for belts and straps',
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Eyelets',
          description: 'Metal eyelets for reinforcement and decoration',
          image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Leather Badge',
          description: 'Premium leather badges for high-end garments',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    }
  };

  const category = categoryData[categoryId];

  if (!category) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Category Not Found</h1>
          <Link to="/ars-printing" className="text-red-600 hover:text-red-700 font-medium">
            Back to ARS Printing
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
        <Link to="/ars-printing" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to ARS Printing
        </Link>
      </div>

      {/* Products Grid */}
      <section className="pb-20">
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
      </section>
    </div>
  );
};

export default ARSPrintingCategory;