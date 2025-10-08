import { ProductCard } from './ProductCard';
import { Product } from './types';

interface CatalogSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const CatalogSection = ({ products, onAddToCart }: CatalogSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Каталог товаров</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};
