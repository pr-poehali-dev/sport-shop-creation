import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const ContactsSection = () => {
  return (
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
                  <p className="text-muted-foreground">info@smartfit.ru</p>
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
  );
};