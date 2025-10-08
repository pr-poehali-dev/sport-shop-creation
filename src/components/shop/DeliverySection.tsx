import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const DeliverySection = () => {
  return (
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
  );
};
