'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'О нас', href: '#about' },
    { label: 'Продукты', href: '#products' },
    { label: 'Блог', href: '#blog' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#FFFFFF',
        padding: '60px 0 30px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Company Info */}
          <div>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#FFFFFF',
              }}
            >
              AnGeo<span style={{ color: '#FFC82C' }}>Prime</span>
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              Поставщик премиальных дрожжевых экстрактов для пищевой промышленности. Качество, проверенное временем.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#FFFFFF',
              }}
            >
              Быстрые ссылки
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFC82C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#FFFFFF',
              }}
            >
              Контакты
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0,
                  }}
                >
                  <strong style={{ color: '#FFFFFF' }}>Email:</strong>{' '}
                  <a
                    href="mailto:sales@angeoprime.ru"
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFC82C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    }}
                  >
                    sales@angeoprime.ru
                  </a>
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0,
                  }}
                >
                  <strong style={{ color: '#FFFFFF' }}>Телефон:</strong>{' '}
                  <a
                    href="tel:+79991234567"
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFC82C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    }}
                  >
                    +7 (999) 123-45-67
                  </a>
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0,
                  }}
                >
                  <strong style={{ color: '#FFFFFF' }}>Адрес:</strong> Москва, ул. Примерная, д. 123
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
            }}
          >
            &copy; {currentYear} AnGeoPrime. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
