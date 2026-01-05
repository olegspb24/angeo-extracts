'use client';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '48px 16px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Основное содержимое подвала */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Колонка 1: О компании */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#FFC82C',
              }}
            >
              AnGeoPrime
            </h4>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: '1.6',
              }}
            >
              Поставляем натуральные дрожжевые экстракты премиум качества для пищевой и косметической промышленности.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#FFC82C',
              }}
            >
              Навигация
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
              }}
            >
              <li style={{ marginBottom: '12px' }}>
                <a
                  href="#about"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#3F8A00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  О нас
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a
                  href="#products"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#3F8A00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  Продукты
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a
                  href="#blog"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#3F8A00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  Статьи
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#3F8A00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#FFC82C',
              }}
            >
              Контакты
            </h4>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '12px',
              }}
            >
              <strong>Email:</strong> <br />
              sales@angeoprime.ru
            </p>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '12px',
              }}
            >
              <strong>Телефон:</strong> <br />
              +7 (999) 123-45-67
            </p>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              <strong>Часы работы:</strong> <br />
              Пн-Пт: 9:00-18:00
            </p>
          </div>
        </div>

        {/* Нижняя часть */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              margin: '0',
            }}
          >
            © 2024 AnGeoPrime. Все права защищены.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            <a
              href="#"
              style={{
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                fontSize: '13px',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#3F8A00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              Политика конфиденциальности
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <a
              href="#"
              style={{
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                fontSize: '13px',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#3F8A00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
