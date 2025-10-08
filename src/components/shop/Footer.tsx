import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
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
  );
};
