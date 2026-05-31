import { useMemo, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

interface ProductsGridProps {
  company?: string;
  category?: string;
}

export const ProductsGrid = ({ company, category }: ProductsGridProps) => {
  const { products, loading, error, getProductsByCompanyAndCategory, getAllCategories } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category || null
  );

  const filteredProducts = useMemo(() => {
    if (company && selectedCategory) {
      return getProductsByCompanyAndCategory(company, selectedCategory);
    }
    if (company) {
      return products.filter((p) => p.Company === company);
    }
    if (selectedCategory) {
      return products.filter((p) => p.Category === selectedCategory);
    }
    return products;
  }, [products, company, selectedCategory, getProductsByCompanyAndCategory]);

  const categories = useMemo(() => {
    if (company) {
      return getAllCategories(company);
    }
    return getAllCategories();
  }, [company, getAllCategories]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={`${product.SKU}-${index}`} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center py-12">
          <div className="text-lg text-gray-600">No products found</div>
        </div>
      )}
    </div>
  );
};
