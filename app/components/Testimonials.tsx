export default function Testimonials() {
  const list = [
    { text: 'Great taste improvement', author: 'R&D Chef' },
    { text: 'Clean label solved', author: 'Procurement Manager' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What our clients say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {list.map(t => (
            <blockquote key={t.author} className="bg-gray-50 rounded-lg p-6 shadow">
              <p className="mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <footer className="text-sm text-gray-600">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
