import Image from 'next/image';
import { Sneaker } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface ProductCardProps {
  sneaker: Sneaker;
}

export default function ProductCard({ sneaker }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          <Image src={sneaker.imageUrl} alt={sneaker.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <CardTitle>{sneaker.name}</CardTitle>
          <Badge variant="secondary">{sneaker.category}</Badge>
        </div>
        <CardDescription className="mt-2 text-lg font-semibold">${sneaker.price.toFixed(2)}</CardDescription>
        <div className="mt-2 flex items-center">
          {Array(sneaker.rating).fill(0).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

