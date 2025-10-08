import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  discount?: number;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: 'Беговые кроссовки Pro', price: 5990, category: 'Обувь', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop', discount: 20 },
  { id: 2, name: 'Гимнастический коврик', price: 1990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop' },
  { id: 3, name: 'Спортивная бутылка 1L', price: 890, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop' },
  { id: 4, name: 'Гантели 5кг (пара)', price: 2490, category: 'Инвентарь', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop', discount: 15 },
  { id: 5, name: 'Компрессионная футболка', price: 2790, category: 'Одежда', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop' },
  { id: 6, name: 'Фитнес-трекер Smart', price: 8990, category: 'Гаджеты', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop', discount: 25 },
];

const reviews = [
  { id: 1, name: 'Алексей М.', rating: 5, text: 'Отличный магазин! Быстрая доставка, качественные товары.' },
  { id: 2, name: 'Мария К.', rating: 5, text: 'Покупаю здесь регулярно. Всё всегда на высшем уровне!' },
  { id: 3, name: 'Дмитрий П.', rating: 4, text: 'Хороший выбор и приятные цены. Рекомендую!' },
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const cartTotal = cart.reduce((sum, item) => {
    const price = item.discount ? item.price * (1 - item.discount / 100) : item.price;
    return sum + price * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
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

      <main>
        {activeSection === 'home' && (
          <>
            <section className="relative py-20 overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(0, 255, 65, 0.1) 25%, rgba(0, 255, 65, 0.1) 50%, transparent 50%, transparent 75%, rgba(0, 255, 65, 0.1) 75%)',
                  backgroundSize: '60px 60px',
                }}
              />
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl animate-fade-in">
                  <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                    СВАРТИ КАВАРЫ
                    <span className="block text-primary">СПОРТ-ТОВАРЫ</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Всё для активного образа жизни и достижения спортивных целей
                  </p>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6"
                    onClick={() => setActiveSection('catalog')}
                  >
                    Перейти в каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-16 bg-card">
              <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-8">
                  <Icon name="Flame" size={32} className="text-primary" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold">Акции и скидки</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.filter(p => p.discount).map(product => {
                    const discountedPrice = product.price * (1 - (product.discount || 0) / 100);
                    return (
                      <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 animate-slide-up">
                        <div className="relative">
                          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                            -{product.discount}%
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                          <h3 className="font-heading font-semibold text-lg mb-2">{product.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl font-bold text-primary">{discountedPrice.toFixed(0)} ₽</span>
                            <span className="text-sm text-muted-foreground line-through">{product.price} ₽</span>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={() => addToCart(product)}
                          >
                            <Icon name="ShoppingCart" size={18} className="mr-2" />
                            В корзину
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
                  Почему выбирают нас?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Truck" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Быстрая доставка</h3>
                    <p className="text-muted-foreground">По всей России за 1-3 дня</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Tag" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Низкие цены</h3>
                    <p className="text-muted-foreground">Регулярные акции и скидки</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Trophy" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Качество</h3>
                    <p className="text-muted-foreground">Только проверенные бренды</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Star" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Отзывы</h3>
                    <p className="text-muted-foreground">Более 5000 довольных клиентов</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-card">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Отзывы клиентов</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reviews.map(review => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4">{review.text}</p>
                        <p className="font-semibold">{review.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'catalog' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Каталог товаров</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => {
                  const finalPrice = product.discount 
                    ? product.price * (1 - product.discount / 100) 
                    : product.price;
                  return (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
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
                          onClick={() => addToCart(product)}
                        >
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">О магазине</h2>
              <Card>
                <CardContent className="p-8 space-y-4">
                  <p className="text-lg">
                    <strong>СВАРТИ КАВАРЫ</strong> — это современный интернет-магазин спортивных товаров, где каждый найдёт всё необходимое для активного образа жизни.
                  </p>
                  <p>
                    Мы предлагаем широкий ассортимент качественной продукции: от одежды и обуви до профессионального спортивного инвентаря. Наша цель — сделать спорт доступным для каждого.
                  </p>
                  <p>
                    За годы работы мы завоевали доверие тысяч клиентов благодаря высокому качеству товаров, выгодным ценам и отличному сервису.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Доставка и оплата</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="delivery" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Способы доставки
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p><strong>Курьерская доставка:</strong> По Москве — 1-2 дня, бесплатно от 3000 ₽</p>
                    <p><strong>Почта России:</strong> 5-14 дней, от 300 ₽</p>
                    <p><strong>Транспортные компании:</strong> СДЭК, Boxberry — 2-5 дней</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="payment" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Способы оплаты
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>• Банковские карты (Visa, MasterCard, МИР)</p>
                    <p>• Электронные кошельки (ЮMoney, QIWI)</p>
                    <p>• Наличными курьеру</p>
                    <p>• Оплата при получении</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="returns" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Возврат товара
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>Вы можете вернуть товар в течение 14 дней с момента получения, если он не подошёл по размеру или не понравился. Товар должен сохранить товарный вид и потребительские свойства.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Контакты</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@svartikavary.ru</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Адрес</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Спортивная, д. 10</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MessageCircle" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Мессенджеры</h3>
                        <p className="text-muted-foreground">WhatsApp, Telegram: +7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/1b991944-6e39-49ee-83ad-608df27a198d.jpg" 
                alt="Смарт Фикт" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">© 2024 СВАРТИ КАВАРЫ. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;