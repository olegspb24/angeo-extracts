import Image from 'next/image';

export default function Testimonials() {
  const list = [
    { text: 'Great taste improvement', author: 'R&D Chef', img: '/images/chef.jpg' },
    { text: 'Clean label solved', author: 'Procurement Manager', img: '/images/manager.jpg' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What our clients say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {list.map(t => (
            <blockquote key={t.author} className="bg-gray-50 rounded-lg p-6 shadow flex gap-4 items-center">
              <Image src={t.img} alt={t.author} width={80} height={80} className="rounded-full object-cover" />
              <div>
                <p className="mb-2 italic">&ldquo;{t.text}&rdquo;</p>
                <footer className="text-sm text-gray-600"> {t.author}</footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
