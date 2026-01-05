'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '80px 16px',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage:
          "url('/images/Hand_sprinkling_yellow_yeast_extract_powder_on_infinite_white_surface_-_premium_product_photography.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* тёмный градиент поверх картинки */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)',
          zIndex: 0,
        }}
      />

      {/* контентный контейнер поверх градиента */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '700px',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '20px',
            maxWidth: '600px',
            marginInline: 'auto',
          }}
        >
          Дрожжевые экстракты
          <br />
          <span style={{ color: '#FFC82C' }}>премиум качества</span>
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#F2F2F2',
            marginBottom: '40px',
            maxWidth: '500px',
            lineHeight: '1.6',
            marginInline: 'auto',
          }}
        >
          Натуральные ингредиенты для вашего бизнеса. Проверено временем и качеством.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              backgroundColor: '#3F8A00',
              color: 'white',
              border: 'none',
              padding: '15px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2F6B00')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3F8A00')}
          >
            Получить прайс и TDS
          </button>

          <button
            onClick={() => scrollToSection('products')}
            style={{
              backgroundColor: 'transparent',
              color: '#3F8A00',
              border: '2px solid #3F8A00',
              padding: '13px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backdropFilter: 'blur(2px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3F8A00';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#3F8A00';
            }}
          >
            Запросить образцы
          </button>
        </div>

        <p
          style={{
            fontSize: '14px',
            color: '#E0E0E0',
            marginTop: '32px',
          }}
        >
          ✓ Доставка по России и СНГ
          <br />
          ✓ Сертификаты и документация
          <br />
          ✓ Техническая поддержка
        </p>
      </div>
    </section>
  );
}
