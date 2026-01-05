'use client';

import { useEffect, useState } from 'react';

// Точные пути к файлам из папки public/images/about/
// Обратите внимание на написание имен (soupl, snacs, sauses.png) — как на вашем скриншоте
const galleryImages = [
  '/images/about/bread.jpg',
  '/images/about/meat.jpg',
  '/images/about/sauses.png',
  '/images/about/soup.jpg',   // новое имя
  '/images/about/snack.jpg',  // новое имя
];


export default function About() {
  const features = [
    {
      title: 'Натуральные компоненты',
      description: 'Отбираем лучшее сырьё для гарантии стабильного вкуса и аромата в ваших продуктах.',
      icon: '🌿',
    },
    {
      title: 'Проверенное качество',
      description: 'Каждая партия проходит лабораторный контроль и соответствует международным стандартам.',
      icon: '✓',
    },
    {
      title: 'Быстрая логистика',
      description: 'Складские запасы и отгрузка по России и СНГ в течение 3–5 рабочих дней.',
      icon: '🚚',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Автопереключение слайдов каждые 4 секунды
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '90px 16px 100px',
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
            marginBottom: '40px',
          }}
        >
          Почему выбирают <span style={{ color: '#3F8A00' }}>AnGeoPrime</span>
        </h2>

        {/* Галерея-карусель с фото продуктов */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '320px', // Высоту можно менять (было 260px, сделал побольше для красоты)
            marginBottom: '56px',
            boxShadow: '0 18px 45px rgba(0,0,0,0.12)',
            backgroundColor: '#f0f0f0', // фон-заглушка пока грузится фото
          }}
        >
          {galleryImages.map((src, index) => (
            <div
              key={src}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: index === activeIndex ? 1 : 0,
                transform: index === activeIndex ? 'scale(1)' : 'scale(1.04)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}

          {/* Легкий градиент поверх фото, чтобы было стильнее */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* Точки-индикаторы снизу */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 10,
              zIndex: 2,
            }}
          >
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: index === activeIndex ? 24 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  backgroundColor: index === activeIndex ? '#FFC82C' : 'rgba(255,255,255,0.6)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Три инфо-панели */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background:
                  'linear-gradient(135deg, #FFF8E7 0%, #FFF2CF 100%)',
                padding: '36px 32px 40px',
                borderRadius: '18px',
                textAlign: 'left',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  margin: 0,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#444',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
