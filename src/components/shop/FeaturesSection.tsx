import Icon from '@/components/ui/icon';

export const FeaturesSection = () => {
  const features = [
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'По всей России за 1-3 дня'
    },
    {
      icon: 'Tag',
      title: 'Низкие цены',
      description: 'Регулярные акции и скидки'
    },
    {
      icon: 'Trophy',
      title: 'Качество',
      description: 'Только проверенные бренды'
    },
    {
      icon: 'Star',
      title: 'Отзывы',
      description: 'Более 5000 довольных клиентов'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Почему выбирают нас?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon} size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
