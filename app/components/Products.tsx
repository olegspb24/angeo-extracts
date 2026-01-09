'use client';

import { useState } from 'react';
import ProductDetail from './ProductDetail';

const products = [
  {
    category: 'bread',
    title: 'Хлебобулочные изделия',
    description: 'Улучшение объема, аромата мякиша',
    image: '/images/about/bread.jpg',
    articles: ['Angeoboost FIG/KU', 'Angeaprime KA']
  },
  {
    category: 'meat',
    title: 'Мясные продукты',
    description: 'Умами для колбас и полуфабрикатов',
    image: '/images/about/meat.jpg',
    articles: ['Angeotide KK', 'Angearom VT']
  },
  {
    category: 'soup',
    title: 'Супы и соусы',
    description: 'Нейтральные экстракты для готовых блюд',
    image: '/images/about/soup.jpg',
    articles: ['Angeaprime KA', 'Базовые ДЭ']
  },
  {
    category: 'snack',
    title: 'Снэки',
    description: 'Ароматические экстракты (сыр, мясо)',
    image: '/images/about/snack.jpg',
    articles: ['Angearom SA', 'Angeapro F8']
  },
  {
    category: 'premium',
    title: 'Премиум продукты',
    description: 'Высокое содержание I+G до 24%',
    image: '/images/about/premium.jpg',
    articles: ['Angeaprime Premium', 'Angeotide Premium']
  },
  {
    category: 'custom',
    title: 'Индивидуальные решения',
    description: 'R&D разработки под ваш продукт',
    image: '/images/about/individual.jpg',
    articles: ['На заказ', 'Специальные ДЭ']
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <>
      <ProductDetail 
        category={selectedProduct || ''} 
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)} 
      />
      
      <section id="products" style={{ 
        padding: '100px 16px', 
        background: 'linear-gradient(135deg, #FFF8E7 0%, #FFFFFF 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 52px)',
            fontWeight: 700,
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            Ассортимент дрожжевых экстрактов
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#666',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 72px',
            lineHeight: 1.6
          }}>
            Высокотехнологичные решения Angel для пищевой промышленности
          </p>

          {/* ✅ ФИКС: 2x3 сетка + темный оверлей для читаемости */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // ← 3 колонки РОВНО
            gridTemplateRows: 'repeat(2, 1fr)',    // ← 2 ряда РОВНО
            gap: '28px',                           // ← Равные отступы
            maxWidth: '1200px',                    // ← Ограничение ширины
            margin: '0 auto'
          }}>
            {products.map((product, index) => (
              <div
                key={product.category}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '340px',  // ← Фиксированная высота
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.12)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => setSelectedProduct(product.category)}
              >
                {/* ✅ ФИКС: Темный градиент + белый текст */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, transparent 85%)',
                  color: '#FFFFFF',
                  padding: '32px 24px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}>
                  <h3 style={{ 
                    fontSize: '24px', 
                    fontWeight: 700, 
                    marginBottom: '8px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                  }}>
                    {product.title}
                  </h3>
                  <p style={{ 
                    fontSize: '15px', 
                    marginBottom: '20px',
                    opacity: 0.95,
                    textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                    lineHeight: 1.5
                  }}>
                    {product.description}
                  </p>
                  
                  {/* Артикулы */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    flexWrap: 'wrap', 
                    marginBottom: '20px' 
                  }}>
                    {product.articles.slice(0,2).map(article => (
                      <span key={article} style={{
                        backgroundColor: 'rgba(63,138,0,0.9)',
                        color: '#FFFFFF',
                        padding: '6px 14px',
                        borderRadius: '16px',
                        fontSize: '13px',
                        fontWeight: 600,
                        textShadow: 'none'
                      }}>
                        {article}
                      </span>
                    ))}
                  </div>
                  
                  {/* Кнопка */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#FFC82C',
                    fontWeight: 600,
                    fontSize: '15px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '12px 20px',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    width: 'fit-content'
                  }}>
                    <span>Подробнее</span>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
