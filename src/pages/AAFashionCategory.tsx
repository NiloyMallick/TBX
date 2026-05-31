import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const pdfFiles = {
  aaFashion: new URL('../assets/woven.pdf', import.meta.url).href,
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

const AAFashionCategory = () => {
  const { categoryId } = useParams();

  const categoryData: Record<string, ProductCategoryData> = {
    basic: {
      name: 'Basic Knit Fabrics',
      description: 'Essential knitted fabrics for everyday apparel.',
      pdfUrl: pdfFiles.aaFashion,
      products: [
        {
          id: 1,
          name: 'Single Jersey',
          description: 'Classic single jersey fabric perfect for t-shirts and basic apparel',
          image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Rib Fabric',
          description: 'Comfortable rib fabric ideal for cuffs, collars, and fitted garments',
          image: 'https://images.unsplash.com/photo-1582582494368-986c84ba9e2c?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Interlock',
          description: 'Soft and durable interlock fabric for comfortable wear',
          image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    specialty: {
      name: 'Specialty Fabrics',
      description: 'Advanced knitted fabrics with special properties and designs.',
      pdfUrl: pdfFiles.aaFashion,
      products: [
        {
          id: 1,
          name: 'Fleece Fabrics',
          description: 'Warm and comfortable fleece fabrics in various thread counts',
          image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Lycra & Spandex',
          description: 'Stretchable fabrics with excellent recovery properties',
          image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'Jacquard Knit',
          description: 'Intricate patterned fabrics with woven-like designs',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    performance: {
      name: 'Performance Fabrics',
      description: 'Technical fabrics designed for specific performance requirements.',
      pdfUrl: pdfFiles.aaFashion,
      products: [
        {
          id: 1,
          name: 'Polyester Mesh',
          description: 'Breathable mesh fabric perfect for activewear and sportswear',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Moisture-Wicking Fabrics',
          description: 'Fabrics that wick away moisture for comfort during activities',
          image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        }
      ]
    },
    custom: {
      name: 'Custom Developed Fabrics',
      description: 'Bespoke fabrics developed according to customer specifications.',
      pdfUrl: pdfFiles.aaFashion,
      products: [
        {
          id: 1,
          name: 'Custom Mélange',
          description: 'Custom blended mélange fabrics in various color combinations',
          image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 2,
          name: 'Engineered Stripes',
          description: 'Custom striped patterns designed to customer specifications',
          image: 'https://images.unsplash.com/photo-1506629905607-0b5ab9a9e21a?auto=format&fit=crop&q=80&w=600',
          price: 'Contact for pricing'
        },
        {
          id: 3,
          name: 'All Over Print (AOP)',
          description: 'Full-surface printed fabrics with custom designs',
          image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600',
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
          <Link to="/aa-fashion" className="text-red-600 hover:text-red-700 font-medium">
            Back to A&A Fashion
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
        <Link to="/aa-fashion" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to A&A Fashion
        </Link>
      </div>

      {pdfUrl && (
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg">
              <div className="px-6 py-6 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Category PDF Preview</h2>
                <p className="text-sm text-gray-500 mt-1">Open the PDF for the selected A&A Fashion category.</p>
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
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product) => {
              const card = (
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
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
              );

              return pdfUrl ? (
                <a key={product.id} href={pdfUrl} target="_blank" rel="noreferrer" className="block">
                  {card}
                </a>
              ) : (
                <div key={product.id}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AAFashionCategory;