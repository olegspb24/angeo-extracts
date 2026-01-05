'use client';

export default function Blog() {
  const articles = [
    {
      title: 'Дрожжевые экстракты в пищевой промышленности',
      excerpt: 'Как натуральные ингредиенты улучшают вкусовые характеристики',
      date: '15 декабря 2024',
      category: 'Технология',
    },
    {
      title: 'Тренды в косметической индустрии',
      excerpt: 'Почему потребители выбирают натуральные компоненты',
      date: '10 декабря 2024',
      category: 'Рынок',
    },
    {
      title: 'Сертификация и стандарты качества',
      excerpt: 'Как мы гарантируем качество каждой партии',
      date: '5 декабря 2024',
      category: 'Качество',
    },
  ];

  return (
    <section
      id="blog"
      style={{
        backgroundColor: '#FFF8E7',
        padding: '80px 16px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          Блог и <span style={{ color: '#3F8A00' }}>статьи</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {articles.map((article, index) => (
            <article
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Заголовок статьи с цветной полосой */}
              <div
                style={{
                  backgroundColor: '#3F8A00',
                  height: '4px',
                }}
              />

              <div style={{ padding: '32px' }}>
                {/* Категория и дата */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '12px',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#3F8A00',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontWeight: '600',
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ color: '#999' }}>{article.date}</span>
                </div>

                {/* Заголовок */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '12px',
                    lineHeight: '1.4',
                  }}
                >
                  {article.title}
                </h3>

                {/* Описание */}
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {article.excerpt}
                </p>

                {/* Кнопка */}
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#3F8A00',
                    border: 'none',
                    padding: '0',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  Читать дальше →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
