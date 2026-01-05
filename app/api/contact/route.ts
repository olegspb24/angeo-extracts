import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Типы для формы
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

// Валидация email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Валидация телефона (упрощённая)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
  return phoneRegex.test(phone);
}

export async function POST(request: NextRequest) {
  try {
    // Читаем данные из запроса
    const body: ContactFormData = await request.json();

    // Валидация
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все обязательные поля' },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Пожалуйста, введите корректный email' },
        { status: 400 }
      );
    }

    if (!isValidPhone(body.phone)) {
      return NextResponse.json(
        { error: 'Пожалуйста, введите корректный телефон' },
        { status: 400 }
      );
    }

    // Получаем переменные окружения
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@angeoprime.ru';

    // Проверяем наличие переменных окружения
    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error('Отсутствуют переменные окружения SMTP');
      return NextResponse.json(
        { error: 'Сервер не настроен для отправки писем' },
        { status: 500 }
      );
    }

    // Создаём транспортер nodemailer
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Проверяем соединение
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Ошибка соединения SMTP:', error);
      return NextResponse.json(
        { error: 'Ошибка подключения к серверу email' },
        { status: 500 }
      );
    }

    // Письмо для администратора
    const adminMailOptions = {
      from: smtpUser,
      to: adminEmail,
      subject: `📧 Новая заявка от ${body.name}`,
      html: `
        <h2>📧 Новая заявка с сайта AnGeoPrime</h2>
        <p><strong>Имя:</strong> ${body.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
        <p><strong>Телефон:</strong> <a href="tel:${body.phone}">${body.phone}</a></p>
        ${body.company ? `<p><strong>Компания:</strong> ${body.company}</p>` : ''}
        ${body.message ? `<p><strong>Сообщение:</strong></p><p>${body.message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Это письмо отправлено с сайта AnGeoPrime</small></p>
      `,
    };

    // Письмо для клиента
    const clientMailOptions = {
      from: smtpUser,
      to: body.email,
      subject: 'Спасибо за вашу заявку - AnGeoPrime',
      html: `
        <h2>Спасибо за вашу заявку!</h2>
        <p>Уважаемый ${body.name}!</p>
        <p>Мы получили вашу заявку и в ближайшее время с вами свяжется наш менеджер.</p>
        <p><strong>Ваши данные:</strong></p>
        <ul>
          <li>Имя: ${body.name}</li>
          <li>Email: ${body.email}</li>
          <li>Телефон: ${body.phone}</li>
          ${body.company ? `<li>Компания: ${body.company}</li>` : ''}
        </ul>
        ${body.message ? `<p><strong>Ваше сообщение:</strong></p><p>${body.message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p>
          С уважением,<br>
          <strong>Команда AnGeoPrime</strong><br>
          <a href="https://angeoprime.ru">www.angeoprime.ru</a>
        </p>
      `,
    };

    // Отправляем оба письма
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    // Возвращаем успешный ответ
    return NextResponse.json(
      { success: true, message: 'Письмо успешно отправлено' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    return NextResponse.json(
      { error: 'Ошибка при отправке письма. Попробуйте позже.' },
      { status: 500 }
    );
  }
}
