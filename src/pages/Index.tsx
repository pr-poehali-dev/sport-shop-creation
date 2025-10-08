import { useState } from 'react';
import { Header } from '@/components/shop/Header';
import { Footer } from '@/components/shop/Footer';
import { HeroSection } from '@/components/shop/HeroSection';
import { PromotionsSection } from '@/components/shop/PromotionsSection';
import { FeaturesSection } from '@/components/shop/FeaturesSection';
import { ReviewsSection } from '@/components/shop/ReviewsSection';
import { CatalogSection } from '@/components/shop/CatalogSection';
import { AboutSection } from '@/components/shop/AboutSection';
import { DeliverySection } from '@/components/shop/DeliverySection';
import { ContactsSection } from '@/components/shop/ContactsSection';
import { products, reviews } from '@/components/shop/data';
import { Product, CartItem } from '@/components/shop/types';

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
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <main>
        {activeSection === 'home' && (
          <>
            <HeroSection onNavigate={() => setActiveSection('catalog')} />
            <PromotionsSection products={products} onAddToCart={addToCart} />
            <FeaturesSection />
            <ReviewsSection reviews={reviews} />
          </>
        )}

        {activeSection === 'catalog' && (
          <CatalogSection products={products} onAddToCart={addToCart} />
        )}

        {activeSection === 'about' && <AboutSection />}

        {activeSection === 'delivery' && <DeliverySection />}

        {activeSection === 'contacts' && <ContactsSection />}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
