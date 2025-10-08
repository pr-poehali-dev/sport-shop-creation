import { Product, Review } from './types';

export const products: Product[] = [
  { id: 1, name: 'Беговые кроссовки Pro', price: 5990, category: 'Обувь', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop', discount: 20 },
  { id: 2, name: 'Кроссовки для тренировок Ultra', price: 6490, category: 'Обувь', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop' },
  { id: 3, name: 'Футбольные бутсы Speed', price: 7990, category: 'Обувь', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop', discount: 10 },
  { id: 4, name: 'Кеды для зала Comfort', price: 3990, category: 'Обувь', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop' },
  
  { id: 5, name: 'Спортивная футболка Dry-Fit', price: 1490, category: 'Одежда', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop' },
  { id: 6, name: 'Компрессионные леггинсы', price: 2990, category: 'Одежда', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=300&fit=crop', discount: 15 },
  { id: 7, name: 'Спортивный костюм Premium', price: 8990, category: 'Одежда', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop' },
  { id: 8, name: 'Худи с капюшоном Pro', price: 4490, category: 'Одежда', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop' },
  { id: 9, name: 'Ветровка для бега', price: 5490, category: 'Одежда', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop', discount: 20 },
  
  { id: 10, name: 'Гантели 5кг (пара)', price: 2490, category: 'Тренажеры', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop', discount: 15 },
  { id: 11, name: 'Гантели 10кг (пара)', price: 4290, category: 'Тренажеры', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop' },
  { id: 12, name: 'Набор гирь 8-16кг', price: 6990, category: 'Тренажеры', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=300&fit=crop', discount: 10 },
  { id: 13, name: 'Скакалка для кроссфита', price: 890, category: 'Тренажеры', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=300&fit=crop' },
  { id: 14, name: 'Эспандер набор 5шт', price: 1490, category: 'Тренажеры', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400&h=300&fit=crop' },
  { id: 15, name: 'Турник настенный', price: 3490, category: 'Тренажеры', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop', discount: 25 },
  
  { id: 16, name: 'Гимнастический коврик Premium', price: 2490, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop' },
  { id: 17, name: 'Спортивная бутылка 1L', price: 890, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop' },
  { id: 18, name: 'Спортивная сумка 40L', price: 3490, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop', discount: 15 },
  { id: 19, name: 'Перчатки для зала', price: 1290, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop' },
  { id: 20, name: 'Пояс для тяжелой атлетики', price: 2990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=300&fit=crop' },
  { id: 21, name: 'Полотенце из микрофибры', price: 690, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1585007600263-71228e40c8d1?w=400&h=300&fit=crop' },
  
  { id: 22, name: 'Фитнес-трекер Smart Pro', price: 8990, category: 'Гаджеты', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop', discount: 25 },
  { id: 23, name: 'Умные весы Body+', price: 5490, category: 'Гаджеты', image: 'https://images.unsplash.com/photo-1591844012726-1f5a94e04f61?w=400&h=300&fit=crop' },
  { id: 24, name: 'Пульсометр нагрудный', price: 3990, category: 'Гаджеты', image: 'https://images.unsplash.com/photo-1508243529287-e21914733111?w=400&h=300&fit=crop', discount: 20 },
  { id: 25, name: 'Наушники спортивные TWS', price: 4490, category: 'Гаджеты', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop' },
];

export const reviews: Review[] = [
  { id: 1, name: 'Алексей М.', rating: 5, text: 'Отличный магазин! Быстрая доставка, качественные товары.' },
  { id: 2, name: 'Мария К.', rating: 5, text: 'Покупаю здесь регулярно. Всё всегда на высшем уровне!' },
  { id: 3, name: 'Дмитрий П.', rating: 4, text: 'Хороший выбор и приятные цены. Рекомендую!' },
];