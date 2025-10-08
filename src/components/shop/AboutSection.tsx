import { Card, CardContent } from '@/components/ui/card';

export const AboutSection = () => {
  return (
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
  );
};
