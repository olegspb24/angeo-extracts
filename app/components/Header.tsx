'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'О нас', href: '#about' },
    { label: 'Продукты', href: '#products' },
    { label: 'Блог', href: '#blog' },
    { label: 'Отзывы', href: '#testimonials' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.85))'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            AnGeo<span style={{ color: '#FFC82C' }}>Prime</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex"
            style={{
              gap: '32px',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFC82C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="#contact"
              className="hidden md:inline-block"
              style={{
                backgroundColor: '#3F8A00',
                color: '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '20px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2F6B00';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3F8A00';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Контакты
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '8px',
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.95)',
              padding: '24px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
            className="md:hidden"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontWeight: '500',
                    padding: '8px 0',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFC82C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  backgroundColor: '#3F8A00',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '8px',
                }}
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
