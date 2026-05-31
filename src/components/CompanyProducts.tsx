import { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductsGrid } from './ProductsGrid';

interface CompanyProductsProps {
  showAllCompanies?: boolean;
}

export const CompanyProducts = ({ showAllCompanies = false }: CompanyProductsProps) => {
  const { getAllCompanies, loading, error } = useProducts();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const companies = useMemo(() => getAllCompanies(), [getAllCompanies]);

  if (loading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="w-full">
      {/* Company Selector */}
      {showAllCompanies && companies.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Company</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCompany(null)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCompany === null
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Companies
            </button>
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedCompany === company
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {company}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <ProductsGrid company={selectedCompany || undefined} />
    </div>
  );
};
