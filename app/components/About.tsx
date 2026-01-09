'use client';

import { useEffect, useState } from 'react';

const galleryImages = [
  '/images/about/bread.jpg',
  '/images/about/meat.jpg',
  '/images/about/sauses.png',
  '/images/about/soup.jpg',
  '/images/about/snack.jpg',
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // ✅ НОВЫЕ бизнес-карточки с фото-фонами
  const features = [
    {
      title: '100% Натуральное сырье',
      description: 'Только отборное дрожжевое сырье мирового уровня. Лабораторный контроль качества на каждом этапе.',
      icon: '🧪',
      image: '/images/about/soup.jpg', // суп как фон натуральности
      gradient: 'linear-gradient(135deg, rgba(255,248,231,0.9), rgba(255,242,207,0.85))',
      stats: '+500 тонн/год'
    },
    {
      title: 'Сертифицированное качество',
      description: 'Соответствие международным стандартам ISO 22000, HACCP. Гарантия стабильности каждой партии.',
      icon: '📋',
      image: '/images/about/meat.jpg', // мясо как фон надежности
      gradient: 'linear-gradient(135deg, rgba(248,250,252,0.9), rgba(240,246,252,0.85))',
      stats: 'ISO 22000'
    },
    {
      title: 'Доставка 3-5 дней',
      description: 'Склады в России и СНГ. Отгрузка в день заказа. Полная логистическая цепочка под ключ.',
      icon: '📦',
      image: '/images/about/bread.jpg', // хлеб как фон скорости
      gradient: 'linear-gradient(135deg, rgba(255,248,231,0.9), rgba(253,240,207,0.85))',
      stats: '24 города'
    }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#FFFFFF', padding: '90px 16px 100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 44px)',
          fontWeight: 700,
          color: '#1a1a1a',
          textAlign: 'center',
          marginBottom: '64px',
          lineHeight: 1.2
        }}>
          Почему лидеры рынка выбирают <span style={{ color: '#3F8A00' }}>AnGeoPrime</span>
        </h2>

        {/* Карусель продуктов */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          height: '380px',
          marginBottom: '72px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          backgroundColor: '#f8f9fa'
        }}>
          {galleryImages.map((src, index) => (
            <div
              key={src}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: index === activeIndex ? 1 : 0,
                transform: index === activeIndex ? 'scale(1)' : 'scale(1.03)',
                transition: 'all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 12
          }}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: index === activeIndex ? 28 : 12,
                  height: 12,
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: index === activeIndex ? '#FFC82C' : 'rgba(255,255,255,0.7)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
              />
            ))}
          </div>
        </div>

        {/* ✅ БИЗНЕС-КАРТОЧКИ ПРЕМИУМ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '40px',
          marginTop: '20px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                height: '320px',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.05)), url('${feature.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 35px 90px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
              }}
            >
              {/* Градиентный оверлей */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: feature.gradient,
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Иконка */}
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}>
                  {feature.icon}
                </div>

                {/* Контент */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#444',
                    lineHeight: 1.7,
                    marginBottom: '20px'
                  }}>
                    {feature.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#3F8A00'
                  }}>
                    <span style={{ fontSize: '18px' }}>{feature.stats}</span>
                    <span>✓ Гарантия</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
