'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [activePodcast, setActivePodcast] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const podcasts = [
    {
      name: 'Иван Петров',
      company: 'ООО "Вкусные продукты"',
      quote: 'AnGeoPrime помогла нам улучшить вкусовые характеристики нашей продукции на 40%',
      role: 'Главный технолог',
    },
    {
      name: 'Мария Сидорова',
      company: 'ЗАО "Красота и здоровье"',
      quote: 'Натуральные компоненты - это то, что ищут наши клиенты. Спасибо AnGeoPrime!',
      role: 'Директор по развитию',
    },
    {
      name: 'Алексей Морозов',
      company: 'ИП "Премиум ингредиенты"',
      quote: 'Качество, доставка, техподдержка - всё на высочайшем уровне. Рекомендую!',
      role: 'Владелец компании',
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: '#FFFFFF',
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
          Отзывы наших <span style={{ color: '#3F8A00' }}>партнёров</span>
        </h2>

        {/* Подкаст слайдер */}
        <div
          style={{
            backgroundColor: '#FFF8E7',
            borderRadius: '16px',
            padding: '48px 32px',
            marginBottom: '60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Плеер */}
            <div
              style={{
                flex: '0 0 auto',
                width: '120px',
                height: '120px',
                backgroundColor: '#3F8A00',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div
                style={{
                  fontSize: '48px',
                  color: 'white',
                }}
              >
                {isPlaying ? '⏸' : '▶'}
              </div>
            </div>

            {/* Информация */}
            <div style={{ flex: 1, minWidth: '250px' }}>
              <p
                style={{
                  fontSize: '14px',
                  color: '#999',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                }}
              >
                Подкаст
              </p>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1a1a1a',
                  marginBottom: '16px',
                }}
              >
                {podcasts[activePodcast].name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '8px',
                }}
              >
                {podcasts[activePodcast].company}
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#999',
                }}
              >
                {podcasts[activePodcast].role}
              </p>

              {/* Прогресс бар */}
              <div
                style={{
                  backgroundColor: '#DDD',
                  height: '4px',
                  borderRadius: '2px',
                  marginTop: '16px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#3F8A00',
                    height: '100%',
                    width: `${isPlaying ? '45%' : '0%'}`,
                    transition: 'width 0.3s',
                  }}
                />
              </div>
            </div>

            {/* Кнопки навигации */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flex: '0 0 auto',
              }}
            >
              <button
                onClick={() => setActivePodcast((prev) => (prev - 1 + podcasts.length) % podcasts.length)}
                style={{
                  backgroundColor: 'white',
                  border: '2px solid #3F8A00',
                  color: '#3F8A00',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ‹
              </button>
              <button
                onClick={() => setActivePodcast((prev) => (prev + 1) % podcasts.length)}
                style={{
                  backgroundColor: '#3F8A00',
                  border: 'none',
                  color: 'white',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Отзывы карточки */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFF8E7',
                padding: '32px',
                borderRadius: '12px',
                borderLeft: '4px solid #3F8A00',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#3F8A00',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    marginRight: '12px',
                  }}
                >
                  {podcast.name[0]}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      margin: '0 0 4px 0',
                    }}
                  >
                    {podcast.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#999',
                      margin: '0',
                    }}
                  >
                    {podcast.role}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  margin: '0',
                }}
              >
                "{podcast.quote}"
              </p>

              <p
                style={{
                  fontSize: '12px',
                  color: '#999',
                  marginTop: '12px',
                  margin: '12px 0 0 0',
                }}
              >
                {podcast.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
