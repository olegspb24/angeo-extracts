# Убираем лишние 'use client' и добавляем минимальные типы
# Запускать из корня проекта (где лежит package.json)

function Write-Utf8 {
    param($Path, $Value)
    [System.IO.File]::WriteAllText($Path, $Value, (New-Object System.Text.UTF8Encoding $false))
}

# 1. Header.tsx
Write-Utf8 app/components/Header.tsx @"
type HeaderProps = { className?: string };

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`bg-white shadow-md ${className || ''}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">AnGeo Extracts</div>
        <nav className="hidden md:flex space-x-6">
          {['About', 'Products', 'Blog', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-orange-500 transition">
              {item}
            </a>
          ))}
        </nav>
        <div className="md:hidden text-gray-800">☰</div>
      </div>
    </header>
  );
}
"@

# 2. Hero.tsx
Write-Utf8 app/components/Hero.tsx @"
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-amber-400 text-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Natural Yeast Extracts</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Premium ingredients that enhance taste, bring umami and reduce salt in meat, snacks, soups, sauces and bakery.
        </p>
        <a
          href="#products"
          className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}
"@

# 3. About.tsx
Write-Utf8 app/components/About.tsx @"
export default function About() {
  const items = [
    { title: 'Meat', img: '/images/about/meat.jpg' },
    { title: 'Soups', img: '/images/about/soup.jpg' },
    { title: 'Sauces', img: '/images/about/sauses.png' },
    { title: 'Snacks', img: '/images/about/snack.jpg' },
    { title: 'Bakery', img: '/images/about/bread.jpg' },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About AnGeo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, img }) => (
            <div key={title} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"@

# 4. Products.tsx
Write-Utf8 app/components/Products.tsx @"
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
"@

# 5. Blog.tsx
Write-Utf8 app/components/Blog.tsx @"
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
              <time className="text-sm text-gray-500">{p.date}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
"@

# 6. Testimonials.tsx
Write-Utf8 app/components/Testimonials.tsx @"
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
"@

# 7. Footer.tsx
Write-Utf8 app/components/Footer.tsx @"
export default function Footer() {
  return (
    <footer className=\"bg-gray-800 text-white py-8\">
      <div className=\"container mx-auto px-6 text-center\">
        <p>&copy; {new Date().getFullYear()} AnGeo Extracts. All rights reserved.</p>
      </div>
    </footer>
  );
}
"@

# 8. layout.tsx
Write-Utf8 app/layout.tsx @"
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang=\"en\">
      <body>{children}</body>
    </html>
  );
}
"@

# 9. page.tsx
Write-Utf8 app/page.tsx @"
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Products />
      <Blog />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
"@

Write-Host "✅ Все 8 файлов обновлены. 'use client' убрано где не нужно."
Write-Host "Следующий шаг:"
Write-Host "git add ."
Write-Host "git commit -m 'remove redundant use client'"
Write-Host "git push"