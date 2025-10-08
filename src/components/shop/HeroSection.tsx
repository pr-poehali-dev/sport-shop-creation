import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: () => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
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
            СМАРТФИТ
            <span className="block text-primary">СПОРТ-ТОВАРЫ</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Всё для активного образа жизни и достижения спортивных целей
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={onNavigate}
          >
            Перейти в каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};