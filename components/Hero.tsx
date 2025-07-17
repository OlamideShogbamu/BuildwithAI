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

