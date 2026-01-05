'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: 'fixed', // поверх Hero и всего контента
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // полупрозрачный фон, чтобы текст читался на картинке
        background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)',
        color: '#FFFFFF',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#FFFFFF',
        }}
      >
        AnGeo<span style={{ color: '#FFC82C' }}>Prime</span>
      </div>

      {/* Desktop Navigation */}
      <nav
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => scrollToSection('about')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            color: '#F5F5F5',
          }}
        >
          О продукции
        </button>
        <button
          onClick={() => scrollToSection('products')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            color: '#F5F5F5',
          }}
        >
          Продукты
        </button>
        <button
          onClick={() => scrollToSection('blog')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            color: '#F5F5F5',
          }}
        >
          Блог
        </button>
        <button
          onClick={() => scrollToSection('testimonials')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            color: '#F5F5F5',
          }}
        >
          Отзывы
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          style={{
            background: '#3F8A00',
            color: '#FFFFFF',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Контакты
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          color: '#FFFFFF',
          display: 'none', // при желании можно включить адаптив через mediaQuery в CSS
        }}
      >
        ≡
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <button
            onClick={() => scrollToSection('about')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#F5F5F5',
              textAlign: 'left',
            }}
          >
            О продукции
          </button>
          <button
            onClick={() => scrollToSection('products')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#F5F5F5',
              textAlign: 'left',
            }}
          >
            Продукты
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#F5F5F5',
              textAlign: 'left',
            }}
          >
            Блог
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#F5F5F5',
              textAlign: 'left',
            }}
          >
            Отзывы
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              background: '#3F8A00',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Контакты
          </button>
        </nav>
      )}
    </header>
  );
}
