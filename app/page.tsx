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

