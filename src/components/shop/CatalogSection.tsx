import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from './types';
import { Button } from '@/components/ui/button';

interface CatalogSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const categories = ['Все', 'Обувь', 'Одежда', 'Тренажеры', 'Аксессуары', 'Гаджеты'];

export const CatalogSection = ({ products, onAddToCart }: CatalogSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Каталог товаров</h2>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Товары в этой категории пока не добавлены
          </p>
        )}
      </div>
    </section>
  );
};