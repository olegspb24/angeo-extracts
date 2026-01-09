'use client';  // ← ЭТО ОБЯЗАТЕЛЬНО ПЕРВЫМ!

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         zIndex: 0,
        }}
      >
        <Image
          src="/images/Hand_sprinkling_yellow_yeast_extract_powder_on_infinite_white_surface_-_premium_product_photography.png"
          alt="Yeast Extract Powder"
          fill
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5))',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Дрожжевые экстракты премиум качества
        </h1>
        <p
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            marginBottom: '48px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.95)',
            textShadow: '0 1px 5px rgba(0,0,0,0.5)',
          }}
        >
          Натуральные ингредиенты для вашего бизнеса. Проверено временем и качеством.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#contact"
            style={{
              backgroundColor: '#3F8A00',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(63, 138, 0, 0.3)',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2F6B00';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(63, 138, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3F8A00';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(63, 138, 0, 0.3)';
            }}
          >
            Получить прайс и TDS
          </a>
          <a
            href="#products"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Запросить образцы
          </a>
        </div>
      </div>
    </section>
  );
}
