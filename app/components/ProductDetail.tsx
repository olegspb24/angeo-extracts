'use client';

import { useEffect, useState } from 'react';

interface ProductDetail {
  category: string;
  title: string;
  articles: string[];
  description: string;
  benefits: string[];
  dosage: string;
}

const PRODUCT_DATA: ProductDetail[] = [
  // 1. Хлебобулочные изделия
  {
    category: 'bread',
    title: 'Хлебобулочные изделия',
    articles: ['Angeoboost (FIG/KU)', 'Angeaprime (KA/FD)', 'Angeocell (F5)'],
    description: 'Экстракты для улучшения объема, аромата и структуры мякиша. Подходят для ржаного, пшеничного и безглютенового хлеба.',
    benefits: [
      'Увеличение объема хлеба на 15-20%',
      'Усиление хлебного аромата (реакция Майяра)',
      'Улучшение структуры и эластичности мякиша',
      'Замедление черствения на 2-3 дня'
    ],
    dosage: '0.3-0.8% к массе муки'
  },
  
  // 2. Мясные продукты
  {
    category: 'meat',
    title: 'Мясные продукты',
    articles: ['Angeotide (KK/KH)', 'Angearom (VT/SA)', 'Angeapro (F8)'],
    description: 'Умами и ароматические экстракты для колбас, сосисок, паштетов, полуфабрикатов. Замена MSG и гидролизатов.',
    benefits: [
      'Снижение соли на 25% без потери вкуса',
      'Усиление умами (I+G 3-24%)',
      'Улучшение связывания влаги и эмульсий',
      'Маскировка посторонних привкусов'
    ],
    dosage: '0.2-1.0% к массе фарша'
  },
  
  // 3. Супы и соусы
  {
    category: 'soup',
    title: 'Супы и соусы',
    articles: ['Angeaprime (KA/FD)', 'Angeoboost (FIG/KU)', 'Базовые ДЭ'],
    description: 'Нейтральные и умами экстракты для супов, соусов, готовых блюд. Термостабильны до 140°C.',
    benefits: [
      'Быстрое восстановление бульонного вкуса',
      'Полная растворимость в воде',
      'Термостабильность при варке и жарке',
      'Без горечи и металлического привкуса'
    ],
    dosage: '0.3-1.0% к массе продукта'
  },
  
  // 4. Снэки
  {
    category: 'snack',
    title: 'Снэки',
    articles: ['Angearom (VT/SA)', 'Ароматические ДЭ', 'Angeapro (F8)'],
    description: 'Ароматические экстракты для усиления вкуса чипсов, сухариков, орешков. Профиль: сыр, мясо, специи.',
    benefits: [
      'Усиление топовых ароматов (сыр, мясо)',
      'Маскировка дефектов сырья',
      'Увеличение насыщенности вкуса',
      'Снижение дозировки ароматизаторов'
    ],
    dosage: '0.2-0.5% к массе'
  },
  
  // 5. Премиум продукты
  {
    category: 'premium',
    title: 'Премиум продукты',
    articles: ['Angeaprime (KA/FD)', 'Angeotide Premium', 'Высококачественные ДЭ'],
    description: 'Экстракты премиум-класса для высокомаржинальных продуктов. Чистый вкус, высокое содержание I+G.',
    benefits: [
      'Высокое содержание риботидов (до 24%)',
      'Длительное послевкусие',
      'Чистый бульонный профиль',
      'Подходит для Clean Label продуктов'
    ],
    dosage: '0.1-0.5% для премиум вкуса'
  },
  
  // 6. Индивидуальные решения
  {
    category: 'custom',
    title: 'Индивидуальные решения',
    articles: ['На заказ', 'Специальные ДЭ', 'R&D разработки'],
    description: 'Разработка экстрактов под конкретные рецептуры и технологии. Полная поддержка R&D отделов.',
    benefits: [
      'Индивидуальный вкус под ваш продукт',
      'Технологическая адаптация',
      'Полная конфиденциальность',
      'R&D поддержка от Angel'
    ],
    dosage: 'По технологическому расчету'
  }
];

export default function ProductDetail({ 
  category, 
  isOpen, 
  onClose 
}: { 
  category: string; 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  const product = PRODUCT_DATA.find(p => p.category === category);

  if (!product || !isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        maxWidth: '1000px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 30px 100px rgba(0,0,0,0.4)',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#3F8A00',
            color: 'white',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          ×
        </button>

        <div style={{ padding: '60px 40px 40px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            {product.title}
          </h2>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {product.articles.map(article => (
              <div key={article} style={{
                backgroundColor: '#3F8A00',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '15px',
                fontWeight: 600
              }}>
                {article}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h3 style={{ fontSize: '22px', color: '#3F8A00', marginBottom: '16px' }}>Описание</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444' }}>
                {product.description}
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '22px', color: '#3F8A00', marginBottom: '16px' }}>Преимущества</h3>
              <ul style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', paddingLeft: '20px' }}>
                {product.benefits.map((benefit, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>✓ {benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '22px', color: '#3F8A00', marginBottom: '16px' }}>Дозировка</h3>
            <div style={{
              backgroundColor: '#F0F8F0',
              padding: '20px',
              borderRadius: '12px',
              borderLeft: '4px solid #3F8A00'
            }}>
              <strong>{product.dosage}</strong>
            </div>
          </div>

          <div style={{ 
            marginTop: '40px', 
            paddingTop: '24px', 
            borderTop: '1px solid #eee',
            textAlign: 'center'
          }}>
            <button style={{
              backgroundColor: '#3F8A00',
              color: 'white',
              padding: '18px 48px',
              borderRadius: '30px',
              border: 'none',
              fontSize: '18px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(63,138,0,0.3)'
            }}>
              Запросить образцы и TDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
