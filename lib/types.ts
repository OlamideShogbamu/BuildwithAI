export type Sneaker = {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Kids' | 'New Arrival';
  price: number;
  imageUrl: string;
  rating: number;
};