'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Валидация
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Пожалуйста, заполните все обязательные поля');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });

        // Скрыть сообщение об успехе через 5 секунд
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError('Ошибка при отправке. Пожалуйста, попробуйте позже.');
      }
    } catch (err) {
      setError('Ошибка соединения. Проверьте интернет и попробуйте снова.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#FFF8E7',
        padding: '80px 16px',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Свяжитесь с <span style={{ color: '#3F8A00' }}>нами</span>
        </h2>

        <p
          style={{
            fontSize: '16px',
            color: '#666',
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: '1.6',
          }}
        >
          Заполните форму и наш менеджер свяжется с вами в течение 2 часов
        </p>

        {/* Сообщение об успехе */}
        {submitted && (
          <div
            style={{
              backgroundColor: '#3F8A00',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '24px',
              textAlign: 'center',
              animation: 'slideDown 0.3s ease-out',
            }}
          >
            ✅ Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в скором времени.
          </div>
        )}

        {/* Сообщение об ошибке */}
        {error && (
          <div
            style={{
              backgroundColor: '#ff4444',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* Форма */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '8px',
              }}
            >
              Имя *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Петров"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                border: '1px solid #DDD',
                borderRadius: '8px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#3F8A00')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD')}
            />
          </div>

          <div
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '8px',
              }}
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ivan@company.ru"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                border: '1px solid #DDD',
                borderRadius: '8px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#3F8A00')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD')}
            />
          </div>

          <div
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '8px',
              }}
            >
              Телефон *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 999-99-99"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                border: '1px solid #DDD',
                borderRadius: '8px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#3F8A00')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD')}
            />
          </div>

          <div
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '8px',
              }}
            >
              Компания
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="ООО 'Компания'"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                border: '1px solid #DDD',
                borderRadius: '8px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#3F8A00')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD')}
            />
          </div>

          <div
            style={{
              marginBottom: '32px',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '8px',
              }}
            >
              Сообщение
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Расскажите о вашем проекте..."
              rows={6}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                border: '1px solid #DDD',
                borderRadius: '8px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#3F8A00')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD')}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: loading ? '#999' : '#3F8A00',
              color: 'white',
              border: 'none',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = '#2F6B00';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = '#3F8A00';
              }
            }}
          >
            {loading ? 'Отправляется...' : 'Отправить запрос'}
          </button>
        </form>

        {/* Дополнительная информация */}
        <div
          style={{
            marginTop: '48px',
            padding: '32px',
            backgroundColor: 'white',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '16px',
            }}
          >
            Другие способы связи
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: '#666',
              margin: '8px 0',
            }}
          >
            <strong>Email:</strong> sales@angeoprime.ru
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#666',
              margin: '8px 0',
            }}
          >
            <strong>Телефон:</strong> +7 (999) 123-45-67
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#666',
              margin: '8px 0',
            }}
          >
            <strong>Адрес:</strong> Москва, ул. Примерная, д. 123
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
