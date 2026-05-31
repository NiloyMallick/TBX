# Dynamic Product Management System

## Overview
This system allows you to manage all products for your 3 companies through a single CSV file (`products_database.csv`). Any changes to the CSV will automatically reflect across your entire application.

## Files Created

### 1. **useProducts Hook** (`src/hooks/useProducts.ts`)
The core hook that fetches and parses the CSV file.

**Features:**
- Automatically fetches and parses `products_database.csv`
- Provides filtering methods for companies, categories, and combinations
- Returns loading and error states

**Usage:**
```tsx
import { useProducts } from '../hooks/useProducts';

const { 
  products,
  loading,
  error,
  getProductsByCompany,
  getProductsByCategory,
  getProductsByCompanyAndCategory,
  getAllCompanies,
  getAllCategories
} = useProducts();
```

### 2. **ProductCard Component** (`src/components/ProductCard.tsx`)
Displays individual product cards with image gallery support.

**Features:**
- Multi-image carousel navigation
- Product details (price, status, SKU)
- Category badge
- Responsive design

### 3. **ProductsGrid Component** (`src/components/ProductsGrid.tsx`)
Main grid component for displaying products with filtering.

**Props:**
- `company?` (string) - Filter by company name
- `category?` (string) - Filter by category

**Features:**
- Dynamic category filtering
- Loading states
- Error handling
- Auto-updates when CSV changes

**Example Usage:**
```tsx
import { ProductsGrid } from '../components/ProductsGrid';

// Show all products
<ProductsGrid />

// Show TBX-Sourcing products
<ProductsGrid company="TBX-Sourcing" />

// Show specific category with company
<ProductsGrid company="TBX-Sourcing" category="Electronics" />
```

### 4. **CompanyProducts Component** (`src/components/CompanyProducts.tsx`)
Higher-level component for displaying all companies with selector.

**Props:**
- `showAllCompanies?` (boolean) - Enable company selector

**Example Usage:**
```tsx
import { CompanyProducts } from '../components/CompanyProducts';

// Show with company selector
<CompanyProducts showAllCompanies={true} />
```

## CSV Structure

The CSV file has these columns:

| Column | Type | Example | Notes |
|--------|------|---------|-------|
| Company | String | TBX-Sourcing | Must match exactly in components |
| Category | String | Electronics | Used for filtering |
| Product_Name | String | Product Name 1 | Display name |
| Description | String | High quality... | Product details |
| Image_Link | String | /images/product.jpg | Primary image |
| Image_Link_2 | String | /images/product2.jpg | Optional secondary image |
| Image_Link_3 | String | /images/product3.jpg | Optional tertiary image |
| SKU | String | TBX-001 | Stock keeping unit |
| Price | String | 100.00 | Must be numeric string |
| Status | String | Active | Active or Inactive |

## How to Update Products

### Add New Product:
1. Open `products_database.csv`
2. Add a new row with all required data
3. Save the file
4. Changes reflect immediately on all pages

### Edit Existing Product:
1. Find the product row in CSV
2. Update any column (name, price, description, images, etc.)
3. Save the file
4. Updates appear instantly

### Delete Product:
1. Remove the entire row from CSV
2. Save the file
3. Product disappears from all pages

## Image Management

### Local Images:
Place images in `public/images/` folder with company subfolders:
```
public/
├── images/
│   ├── tbx/
│   │   ├── product1.jpg
│   │   └── product2.jpg
│   ├── ars/
│   │   ├── painting1.jpg
│   │   └── acc1.jpg
│   └── aa/
│       ├── fabric1.jpg
│       └── fashion1.jpg
```

Use paths in CSV: `/images/tbx/product1.jpg`

### External URLs:
You can also use full URLs:
```
https://example.com/images/product.jpg
```

## Integration Examples

### 1. **Company-Specific Product Pages**

For TBX-Sourcing:
```tsx
import { ProductsGrid } from '../components/ProductsGrid';

export default function TBXProducts() {
  return (
    <div>
      <ProductsGrid company="TBX-Sourcing" />
    </div>
  );
}
```

For ARS Acc & Paintings:
```tsx
<ProductsGrid company="ARS Acc & Paintings" />
```

For A&A Fashion and Fabrics:
```tsx
<ProductsGrid company="A&A Fashion and Fabrics" />
```

### 2. **Mixed Company Display**

Show all companies with selector:
```tsx
import { CompanyProducts } from '../components/CompanyProducts';

export default function AllProducts() {
  return <CompanyProducts showAllCompanies={true} />;
}
```

### 3. **Category-Specific Display**

Show only a specific category:
```tsx
<ProductsGrid category="Paintings" />
```

## Real-Time Updates

The system watches the CSV file changes automatically. You can:
1. Update the CSV while the app is running
2. Refresh the page in your browser
3. See all changes immediately

## Troubleshooting

### Products Not Showing?
- Check company name matches exactly (case-sensitive)
- Ensure CSV has required columns
- Verify image links are correct

### Images Not Loading?
- Check image paths start with `/` for local files
- Verify images exist in `public/` folder
- For external URLs, check they're accessible

### CSV Parse Error?
- Ensure CSV has no extra spaces
- Check that comma-separated values don't contain commas (use quotes if needed)
- Verify all rows have the same number of columns

## Future Enhancements

Consider adding:
- Search functionality
- Sorting options (price, name)
- Product detail pages/modals
- Wishlist/cart functionality
- Advanced filtering
