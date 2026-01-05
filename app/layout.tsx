import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnGeoPrime - Дрожжевые экстракты премиум качества',
  description: 'Натуральные дрожжевые экстракты для пищевой и косметической промышленности. Доставка по России и СНГ.',
  keywords: 'дрожжевые экстракты, натуральные ингредиенты, пищевая промышленность, косметика',
  authors: [{ name: 'AnGeoPrime' }],
  creator: 'AnGeoPrime',
  publisher: 'AnGeoPrime',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://example.com',
    title: 'AnGeoPrime - Дрожжевые экстракты премиум качества',
    description: 'Натуральные ингредиенты для вашего бизнеса',
    siteName: 'AnGeoPrime',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnGeoPrime',
    description: 'Дрожжевые экстракты премиум качества',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Основные мета-теги */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3F8A00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Canonical для SEO */}
        <link rel="canonical" href="https://example.com" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Яндекс.Метрика - ДОБАВЬТЕ СВОЙ ID ПОЗЖЕ */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
              ym(YOUR_COUNTER_ID, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        /> */}

        {/* Google Analytics - ДОБАВЬТЕ СВОЙ ID ПОЗЖЕ */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YOUR_GA_ID');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID" /> */}

        {/* Schema.org JSON-LD для Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AnGeoPrime',
              url: 'https://example.com',
              logo: 'https://example.com/logo.png',
              description: 'Поставки натуральных дрожжевых экстрактов',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+7-999-123-4567',
                contactType: 'Sales',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'ул. Примерная, д. 123',
                addressLocality: 'Москва',
                addressRegion: 'МО',
                postalCode: '100000',
                addressCountry: 'RU',
              },
            }),
          }}
        />

        {/* Schema.org JSON-LD для Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Дрожжевые экстракты AnGeoPrime',
              description: 'Натуральные дрожжевые экстракты премиум качества',
              brand: {
                '@type': 'Brand',
                name: 'AnGeoPrime',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '156',
              },
            }),
          }}
        />
      </head>
      <body style={{ margin: 0, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
