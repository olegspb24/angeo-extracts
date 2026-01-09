'use client';

const articles = [
  {
    id: 1,
    slug: 'mjaso',
    title: 'Дрожжевые экстракты в мясной промышленности',
    excerpt: 'Исследование демонстрирует, что дрожжевые экстракты могут снизить содержание натрия на 25-30%, сохраняя при этом умами вкус в переработанных мясных продуктах. Angeotide и Angearom обеспечивают превосходное качество колбасных изделий.',
    category: 'Мясная наука',
    date: '2024-03-15',
    image: '/images/about/meat.jpg'
  },
  {
    id: 2,
    slug: 'hlebopechenie',
    title: 'Дрожжевые экстракты в хлебопечении',
    excerpt: 'Angeoboost увеличивает объем хлеба на 15-20%, усиливает продукты реакции Майяра и продлевает срок хранения за счет улучшенной структуры мякиша. Идеально для ржаного, пшеничного и безглютенового хлеба.',
    category: 'Хлебопечение',
    date: '2024-01-18',
    image: '/images/about/bread.jpg'
  },
  {
    id: 3,
    slug: 'supy',
    title: 'Термостабильные экстракты для супов и соусов',
    excerpt: 'Термостабильные Angeaprime до 140°C обеспечивают быстрое восстановление бульонного вкуса, полную растворимость в воде и отсутствие горечи. Применение в супах, соусах и готовых блюдах.',
    category: 'Пищевая переработка',
    date: '2024-07-20',
    image: '/images/about/soup.jpg'
  },
  {
    id: 4,
    slug: 'sneki',
    title: 'Усиление вкуса в снэковых продуктах',
    excerpt: 'Angearom эффективно маскирует посторонние привкусы и усиливает профили вкуса сыра и мяса в экструдированных продуктах. Снижение дозировки ароматизаторов при сохранении насыщенности вкуса.',
    category: 'Наука о вкусе',
    date: '2024-06-12',
    image: '/images/about/snack.jpg'
  },
  {
    id: 5,
    slug: 'premium',
    title: 'Премиум дрожжевые экстракты с высоким I+G',
    excerpt: 'Премиум экстракты содержат 20-24% I+G (инозин и гуанозин монофосфаты). Сенсорный анализ показывает превосходную интенсивность умами и длительное послевкусие. Подходит для Clean Label продуктов.',
    category: 'Пищевая химия',
    date: '2024-04-10',
    image: '/images/about/premium.jpg'
  },
  {
    id: 6,
    slug: 'individual',
    title: 'Индивидуальные рецептуры дрожжевых экстрактов',
    excerpt: 'Разработка индивидуальных дрожжевых экстрактов для сложных пищевых систем. R&D подходы для соответствия профилей экстрактов конкретным требованиям продуктов и условиям обработки.',
    category: 'R&D',
    date: '2024-05-05',
    image: '/images/about/individual.jpg'
  },
  {
    id: 7,
    slug: 'tehnologiya',
    title: 'Технология производства дрожжевых экстрактов',
    excerpt: 'Оптимизация условий автолиза: температура 50-55°C, pH 5.5-6.0 обеспечивает максимальное содержание растворимых веществ и ароматических соединений. Саморастворимый метод с высокой скоростью разложения.',
    category: 'Пищевые технологии',
    date: '2024-02-22',
    image: '/images/about/tehnologiya-blog.jpg'  // ✅ ИСПРАВЛЕНО
  },
  {
    id: 8,
    slug: 'biotehnologii',
    title: 'Биотехнологические аспекты производства',
    excerpt: 'Исследование процессов ферментации и автолиза дрожжей для получения высококачественных экстрактов. Анализ влияния штаммов дрожжей и условий культивирования на выход и качество конечного продукта.',
    category: 'Биотехнологии',
    date: '2024-08-15',
    image: '/images/about/biotehnologii-blog.jpg'  // ✅ ИСПРАВЛЕНО
  },
  {
    id: 9,
    slug: 'rynok',
    title: 'Рынок дрожжевых экстрактов: прогноз до 2032',
    excerpt: 'Рост рынка на 5.4% ежегодно. Замена глутамата натрия в пищевой промышленности. Преимущества натуральных экстрактов Angel для производителей продуктов питания по всему миру.',
    category: 'Аналитика',
    date: '2024-09-10',
    image: '/images/about/rynok-blog.jpg'  // ✅ ИСПРАВЛЕНО
  }
];

export default function Blog() {
  return (
    <section id="blog" style={{ 
      padding: '100px 16px', 
      backgroundColor: '#FFFFFF'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 52px)',
          fontWeight: 700,
          color: '#1a1a1a',
          textAlign: 'center',
          marginBottom: '16px',
          lineHeight: 1.2
        }}>
          Научные исследования
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#666',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 72px',
          lineHeight: 1.6
        }}>
          Актуальные публикации о дрожжевых экстрактах из ведущих научных журналов
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {articles.map((article) => (
            <div
              key={article.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '380px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                width: '100%',
                height: '220px',
                backgroundImage: `url('${article.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ 
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#3F8A00',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '12px'
                  }}>
                    {article.category}
                  </span>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '12px',
                    lineHeight: 1.4
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {article.excerpt}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '13px',
                  color: '#999'
                }}>
                  <span>{new Date(article.date).toLocaleDateString('ru-RU', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <a 
                    href={`/blog/${article.slug}`}
                    style={{
                      color: '#3F8A00',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    Читать полностью →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
