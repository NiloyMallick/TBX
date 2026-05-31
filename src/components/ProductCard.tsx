import { useState } from 'react';
import { Product } from '../hooks/useProducts';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    product.Image_Link,
    product.Image_Link_2,
    product.Image_Link_3,
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Section */}
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={product.Product_Name}
          className="w-full h-full object-cover"
        />

        {/* Image Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              →
            </button>
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentImageIndex
                      ? 'bg-white'
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase">
            {product.Category}
          </span>
          <span className="text-xs text-gray-500 ml-2">SKU: {product.SKU}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {product.Product_Name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.Description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${parseFloat(product.Price).toFixed(2)}
          </span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${
              product.Status === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {product.Status}
          </span>
        </div>
      </div>
    </div>
  );
};
