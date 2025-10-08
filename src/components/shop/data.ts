import { Product, Review } from './types';

export const products: Product[] = [
  { id: 1, name: 'Беговые кроссовки Pro', price: 5990, category: 'Обувь', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop', discount: 20 },
  { id: 2, name: 'Гимнастический коврик', price: 1990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop' },
  { id: 3, name: 'Спортивная бутылка 1L', price: 890, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop' },
  { id: 4, name: 'Гантели 5кг (пара)', price: 2490, category: 'Инвентарь', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop', discount: 15 },
  { id: 5, name: 'Компрессионная футболка', price: 2790, category: 'Одежда', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop' },
  { id: 6, name: 'Фитнес-трекер Smart', price: 8990, category: 'Гаджеты', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop', discount: 25 },
];

export const reviews: Review[] = [
  { id: 1, name: 'Алексей М.', rating: 5, text: 'Отличный магазин! Быстрая доставка, качественные товары.' },
  { id: 2, name: 'Мария К.', rating: 5, text: 'Покупаю здесь регулярно. Всё всегда на высшем уровне!' },
  { id: 3, name: 'Дмитрий П.', rating: 4, text: 'Хороший выбор и приятные цены. Рекомендую!' },
];
