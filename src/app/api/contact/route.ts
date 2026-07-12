import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, company, service, budget, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Ism va telefon majburiy' },
        { status: 400 }
      );
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan!');
      return NextResponse.json(
        { success: false, error: 'Server sozlanmagan' },
        { status: 500 }
      );
    }

    // Telegram xabar matni
    const lines = [
      `🔔 <b>Yangi zayavka — reyesagency.uz</b>`,
      ``,
      `👤 <b>Ism:</b> ${name}`,
      `📞 <b>Telefon:</b> ${phone}`,
    ];
    if (email) lines.push(`📧 <b>Email:</b> ${email}`);
    if (company) lines.push(`🏢 <b>Kompaniya:</b> ${company}`);
    if (service) lines.push(`📋 <b>Xizmat:</b> ${service}`);
    if (budget) lines.push(`💰 <b>Byudjet:</b> ${budget}`);
    if (message) lines.push(`💬 <b>Xabar:</b> ${message}`);
    lines.push(``);
    lines.push(`⏰ ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`);

    const text = lines.join('\n');

    // Telegram ga yuborish
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const telegramData = await telegramRes.json();

    // Telegram javobini tekshirish
    if (!telegramRes.ok || !telegramData.ok) {
      console.error('Telegram xato:', JSON.stringify(telegramData));
      return NextResponse.json(
        { success: false, error: 'Telegram yuborishda xato', details: telegramData.description || 'Unknown error' },
        { status: 500 }
      );
    }

    // Faqat Telegram muvaffaqiyatli bo'lganda success
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Contact form error:', error?.message || error);
    return NextResponse.json(
      { success: false, error: 'Server xatosi' },
      { status: 500 }
    );
  }
}
