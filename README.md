# 🏪 Sneaker Store – Built with Next.js & shadcn/ui

This is a modern, stylish sneaker store built using **Next.js**, **TypeScript**, **Tailwind CSS**, and the elegant **shadcn/ui** component library.

---

## ⚙️ 1. Project Setup

### Create a new Next.js project with Tailwind CSS

```bash
npx create-next-app@latest sneaker-store --typescript --tailwind --eslint
cd sneaker-store
```

### Initialize `shadcn/ui`

```bash
npx shadcn-ui@latest init
```

### Add UI components and icons

```bash
npx shadcn-ui@latest add button card navigation-menu input badge separator
npm install lucide-react
```

---

## 🗂 2. Project Structure

```
/app
├── globals.css
├── layout.tsx
├── page.tsx
/components
├── Footer.tsx
├── Header.tsx
├── Hero.tsx
├── ProductCard.tsx
/lib
├── data.ts
├── types.ts
/public
└── hero-bg.jpg
└── sneaker1.png
└── sneaker2.png
└── sneaker3.png
└── sneaker4.png
```

---

## 🧩 3. Components

### types.ts

```ts
export type Sneaker = {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Kids' | 'New Arrival';
  price: number;
  imageUrl: string;
  rating: number;
};
```

### data.ts

```ts
import { Sneaker } from './types';

export const featuredSneakers: Sneaker[] = [
  {
    id: '1',
    name: 'Aether-Run Pro',
    category: 'Men',
    price: 160.00,
    imageUrl: '/sneaker1.png',
    rating: 5,
  },
  {
    id: '2',
    name: 'Geo-Cruiser V2',
    category: 'New Arrival',
    price: 125.00,
    imageUrl: '/sneaker2.png',
    rating: 4,
  },
  {
    id: '3',
    name: 'Velocity-Knit',
    category: 'Women',
    price: 145.00,
    imageUrl: '/sneaker3.png',
    rating: 5,
  },
  {
    id: '4',
    name: 'React-Flow',
    category: 'Men',
    price: 180.00,
    imageUrl: '/sneaker4.png',
    rating: 4,
  },
];
```

### Hero.tsx

```tsx
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[60vh] bg-cover bg-center bg-[url('/hero-bg.jpg')]">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Find Your Perfect Pair
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl">
          Step up your game with the latest drops from the world's biggest brands.
        </p>
        <Button size="lg" className="mt-8">
          Shop Now
        </Button>
      </div>
    </section>
  );
}
```

### ProductCard.tsx

```tsx
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
```

### Footer.tsx

```tsx
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kicks Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 🧱 4. Assembling the App

### layout.tsx

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kicks - Your Ultimate Sneaker Store',
  description: 'The best place to find your next pair of sneakers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

### page.tsx

```tsx
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { featuredSneakers } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">Featured Kicks</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSneakers.map((sneaker) => (
              <ProductCard key={sneaker.id} sneaker={sneaker} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

## 🖼 5. Add Images

Place the following images in your `/public` directory:

- `/public/hero-bg.jpg`
- `/public/sneaker1.png`
- `/public/sneaker2.png`
- `/public/sneaker3.png`
- `/public/sneaker4.png`

Get royalty-free images from [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/).

---

## 🚀 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎉 You're Done!

You now have a fully functional, modern sneaker store frontend using **Next.js** + **shadcn/ui**.  
Happy coding! 👟🔥