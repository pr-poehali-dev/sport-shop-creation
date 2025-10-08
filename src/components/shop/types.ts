export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}
