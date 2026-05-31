import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export interface Product {
  Company: string;
  Category: string;
  Product_Name: string;
  Description: string;
  Image_Link: string;
  Image_Link_2?: string;
  Image_Link_3?: string;
  SKU: string;
  Price: string;
  Status: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products_database.csv');
        if (!response.ok) throw new Error('Failed to fetch CSV');

        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setProducts(results.data as Product[]);
            setLoading(false);
          },
          error: (error: Error) => {
            setError(error.message);
            setLoading(false);
          },
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductsByCompany = (company: string) =>
    products.filter((p) => p.Company === company);

  const getProductsByCategory = (category: string) =>
    products.filter((p) => p.Category === category);

  const getProductsByCompanyAndCategory = (company: string, category: string) =>
    products.filter((p) => p.Company === company && p.Category === category);

  const getAllCompanies = () => [...new Set(products.map((p) => p.Company))];

  const getAllCategories = (company?: string) => [
    ...new Set(
      (company
        ? products.filter((p) => p.Company === company)
        : products
      ).map((p) => p.Category)
    ),
  ];

  return {
    products,
    loading,
    error,
    getProductsByCompany,
    getProductsByCategory,
    getProductsByCompanyAndCategory,
    getAllCompanies,
    getAllCategories,
  };
};
