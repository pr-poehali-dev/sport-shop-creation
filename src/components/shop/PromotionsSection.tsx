import Icon from '@/components/ui/icon';
import { ProductCard } from './ProductCard';
import { Product } from './types';

interface PromotionsSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const PromotionsSection = ({ products, onAddToCart }: PromotionsSectionProps) => {
  const discountedProducts = products.filter(p => p.discount);

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Icon name="Flame" size={32} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Акции и скидки</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discountedProducts.map(product => (
            <div key={product.id} className="animate-slide-up">
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
