import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, message } = body;

    // Validation
    if (!fullName || (!email && !phone) || !message) {
      return NextResponse.json(
        { error: 'Please provide your name, contact information (email or phone), and message.' },
        { status: 400 }
      );
    }

    // 1. Formspree Dispatch (Preferred for zero-config email routing)
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || 
      (process.env.NEXT_PUBLIC_FORMSPREE_ID ? 'https://formspree.io/f/' + process.env.NEXT_PUBLIC_FORMSPREE_ID : null);

    if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email || 'not-provided@riverdalepharmacyny.com',
          phone: phone || 'Not provided',
          subject: subject || 'General Inquiry',
          message: message,
          _source: 'Riverdale Pharmacy Website Contact Form',
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        console.error('Formspree dispatch error:', errData);
        return NextResponse.json(
          { error: 'Failed to deliver message via Formspree. Please call (718) 543-7500 directly.' },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true, provider: 'formspree' });
    }

    // 2. Resend API Dispatch (if configured via RESEND_API_KEY)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.RESEND_API_KEY,
        },
        body: JSON.stringify({
          from: 'Riverdale Pharmacy Web <inquiries@riverdalepharmacyny.com>',
          to: [process.env.PHARMACY_NOTIFICATION_EMAIL || 'info@riverdalepharmacyny.com'],
          reply_to: email || undefined,
          subject: '[Web Inquiry] ' + (subject || 'Prescription / General Question') + ' - ' + fullName,
          text: 'Name: ' + fullName + '\nEmail: ' + (email || 'N/A') + '\nPhone: ' + (phone || 'N/A') + '\nSubject: ' + subject + '\n\nMessage:\n' + message,
        }),
      });

      if (!resendResponse.ok) {
        console.error('Resend dispatch error:', await resendResponse.text());
        return NextResponse.json(
          { error: 'Failed to deliver message via Resend. Please call (718) 543-7500.' },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true, provider: 'resend' });
    }

    // Fallback: If no external provider key is active yet, acknowledge message receipt and log securely
    console.log('[Contact Submission Received]:', {
      timestamp: new Date().toISOString(),
      fullName,
      email,
      phone,
      subject,
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      provider: 'local',
      notice: 'Message accepted. Set FORMSPREE_ENDPOINT or RESEND_API_KEY for automatic email forwarding.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing contact request.' },
      { status: 500 }
    );
  }
}
