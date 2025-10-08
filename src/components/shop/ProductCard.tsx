import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const finalPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            -{product.discount}%
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-heading font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-primary">{finalPrice.toFixed(0)} ₽</span>
          {product.discount && (
            <span className="text-sm text-muted-foreground line-through">{product.price} ₽</span>
          )}
        </div>
        <Button 
          className="w-full" 
          onClick={() => onAddToCart(product)}
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
};
