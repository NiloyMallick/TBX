import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Flat list of all ARS product PDF filenames (from src/assets/ars_products)
const assetsBase = '../assets/ars_products/';
const productFiles = [
  'Bow.pdf',
  'Buckle.pdf',
  'Bunjee Cord.pdf',
  'Coconut Button.pdf',
  'D Ring.pdf',
  'Drawstring.pdf',
  'Eyelets.pdf',
  'Gromet.pdf',
  'Hang tag.pdf',
  'Heat Seal.pdf',
  'Leather Badge.pdf',
  'Lock String.pdf',
  'Metal Button.pdf',
  'Paper label.pdf',
  'Pompom.pdf',
  'Ribbed Tape.pdf',
  'Rubber Badge (1).pdf',
  'Screen Print label.pdf',
  'Shank Button.pdf',
  'Shell Button.pdf',
  'Sticker.pdf',
  'Stopper.pdf',
  'Tassel.pdf',
  'Twile Tape.pdf',
  'Weaving Belt.pdf',
  'Wooden Button.pdf',
  'woven label.pdf'
];

type Product = {
  id: number;
  name: string;
  pdfUrl: string;
};

const ARSPrintingCategory = () => {
  const products: Product[] = productFiles.map((filename, idx) => ({
    id: idx + 1,
    name: filename.replace(/\.pdf$/i, ''),
    pdfUrl: new URL(`${assetsBase}${filename}`, import.meta.url).href,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">ARS Printing — All Products</h1>
          <p className="text-lg text-gray-300">Listing all ARS product PDFs.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/ars-printing" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to ARS Printing
        </Link>
      </div>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                </div>
                <div className="h-64 sm:h-72 overflow-hidden">
                  <iframe src={p.pdfUrl} title={p.name} className="w-full h-full" />
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
