import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { CartItem } from './types';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

export const Header = ({ 
  activeSection, 
  setActiveSection, 
  cart, 
  cartCount, 
  cartTotal,
  updateQuantity,
  removeFromCart
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/1b991944-6e39-49ee-83ad-608df27a198d.jpg" 
              alt="Смарт Фикт" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('catalog')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              О магазине
            </button>
            <button 
              onClick={() => setActiveSection('delivery')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Доставка
            </button>
            <button 
              onClick={() => setActiveSection('contacts')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                ) : (
                  <>
                    {cart.map(item => {
                      const finalPrice = item.discount 
                        ? item.price * (1 - item.discount / 100) 
                        : item.price;
                      return (
                        <div key={item.id} className="flex gap-4 p-3 bg-card rounded-lg border border-border">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-primary font-bold">{finalPrice.toFixed(0)} ₽</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto"
                              >
                                <Icon name="Trash2" size={16} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="border-t border-border pt-4 mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">Итого:</span>
                        <span className="text-2xl font-bold text-primary">{cartTotal.toFixed(0)} ₽</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
