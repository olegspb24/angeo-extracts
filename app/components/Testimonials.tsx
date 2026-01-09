'use client';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Использование дрожжевых экстрактов AnGeoPrime значительно улучшило вкусовой профиль наших продуктов. Клиенты заметили разницу!',
      author: 'Иван Петров',
      role: 'Шеф-технолог',
      company: 'ООО "Вкусные продукты"',
    },
    {
      text: 'Благодаря AnGeoPrime мы смогли снизить содержание соли на 25% без потери вкуса. Это именно то, что нужно для чистых этикеток.',
      author: 'Мария Сидорова',
      role: 'Менеджер по закупкам',
      company: 'ЗАО "Здоровое питание"',
    },
    {
      text: 'Качество продукции стабильное, логистика работает отлично. Рекомендую AnGeoPrime как надежного партнера.',
      author: 'Алексей Козлов',
      role: 'Директор по производству',
      company: 'ООО "Премиум Фуд"',
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: '#FFF8E7',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '16px',
            color: '#1a1a1a',
          }}
        >
          Отзывы <span style={{ color: '#3F8A00' }}>клиентов</span>
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#666',
            textAlign: 'center',
            marginBottom: '48px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Что говорят о нас наши партнеры
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  color: '#FFC82C',
                  marginBottom: '16px',
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                  flex: 1,
                }}
              >
                {testimonial.text}
              </p>
              <footer
                style={{
                  borderTop: '1px solid #EEE',
                  paddingTop: '20px',
                }}
              >
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    marginBottom: '4px',
                  }}
                >
                  {testimonial.author}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#666',
                  }}
                >
                  {testimonial.role}, {testimonial.company}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
