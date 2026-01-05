export default function About() {
  const items = [
    { title: 'Meat', img: '/images/about/meat.jpg' },
    { title: 'Soups', img: '/images/about/soup.jpg' },
    { title: 'Sauces', img: '/images/about/sauses.png' },
    { title: 'Snacks', img: '/images/about/snack.jpg' },
    { title: 'Bakery', img: '/images/about/bread.jpg' },
  ];

  return (
    <section id=\"about\" className=\"py-16 bg-gray-50\">
      <div className=\"container mx-auto px-6\">
        <h2 className=\"text-3xl font-bold text-center mb-12\">About AnGeo</h2>
        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-6\">
          {items.map(({ title, img }) => (
            <div key={title} className=\"rounded-lg overflow-hidden shadow hover:shadow-lg transition\">
              <img src={img} alt={title} className=\"w-full h-48 object-cover\" />
              <div className=\"p-4\"><h3 className=\"text-xl font-semibold\">{title}</h3></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
