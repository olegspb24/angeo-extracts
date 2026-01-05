export default function Products() {
  const products = [
    { name: 'Standard Yeast Extract', app: 'Soups, Sauces' },
    { name: 'Low Salt Yeast Extract', app: 'Meat, Snacks' },
    { name: 'Umami Boost', app: 'Plant-based foods' },
  ];

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.name} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600">Ideal for {p.app}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
