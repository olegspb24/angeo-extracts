export default function Blog() {
  const posts = [
    { title: 'Reducing Salt with Yeast Extract', date: '2024-01-10' },
    { title: 'Umami Trends 2024', date: '2024-01-03' },
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(p => (
            <article key={p.title} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <time className="text-sm text-gray-500\">{p.date}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
