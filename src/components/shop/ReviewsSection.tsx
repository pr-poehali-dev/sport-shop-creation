import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Review } from './types';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
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
  );
};
