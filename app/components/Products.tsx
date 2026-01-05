'use client';

import { useState } from 'react';

export default function Products() {
  const [activeSlide, setActiveSlide] = useState(0);

  const products = [
    {
      name: 'FD00',
      description: 'Дрожжевой экстракт быстрого приготовления',
      details: 'Идеален для пищевой промышленности. Улучшает вкус и аромат.',
      benefits: ['Натуральный вкус', 'Быстрое растворение', 'Длительный срок хранения'],
    },
    {
      name: 'KU563',
      description: 'Премиум дрожжевой экстракт с микронутриентами',
      details: 'Обогащен витаминами группы B. Применяется в косметике.',
      benefits: ['Богат витаминами', 'Высокая пищевая ценность', 'Универсальное применение'],
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section
      id="products"
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
          Наши <span style={{ color: '#3F8A00' }}>продукты</span>
        </h2>

        {/* Слайдер */}
        <div
          style={{
            backgroundColor: '#FFF8E7',
            borderRadius: '16px',
            padding: '60px 40px',
            marginBottom: '40px',
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Левая кнопка */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#3F8A00',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ‹
          </button>

          {/* Содержимое слайда */}
          <div
            style={{
              flex: 1,
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#3F8A00',
                marginBottom: '16px',
              }}
            >
              {products[activeSlide].name}
            </h3>

            <p
              style={{
                fontSize: '18px',
                color: '#666',
                marginBottom: '20px',
              }}
            >
              {products[activeSlide].description}
            </p>

            <p
              style={{
                fontSize: '16px',
                color: '#1a1a1a',
                marginBottom: '32px',
                fontWeight: '500',
              }}
            >
              {products[activeSlide].details}
            </p>

            {/* Преимущества */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {products[activeSlide].benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#3F8A00',
                    borderLeft: '4px solid #3F8A00',
                  }}
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Правая кнопка */}
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#3F8A00',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ›
          </button>
        </div>

        {/* Точки навигации */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: activeSlide === index ? '#3F8A00' : '#DDD',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
            />
          ))}
        </div>

        {/* CTA Кнопка */}
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              backgroundColor: '#FFC82C',
              color: '#1a1a1a',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFB800')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFC82C')}
          >
            Скачать TDS
          </button>
        </div>
      </div>
    </section>
  );
}
