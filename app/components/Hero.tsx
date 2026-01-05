import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-amber-400 text-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Natural Yeast Extracts</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Premium ingredients that enhance taste, bring umami and reduce salt in meat, snacks, soups, sauces and bakery.
        </p>
        <a href="#products" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition">
          Explore Products
        </a>
      </div>
    </section>
  );
}
