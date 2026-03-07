'use server';
import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validación básica en servidor
  if (!name || !email || !message) {
    return { error: 'Todos los campos son obligatorios.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    // 1. Email para Maximiliano (Notificación de nuevo lead)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🚀 Nuevo mensaje de: ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Has recibido un nuevo contacto desde tu Portafolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; border-left: 4px solid #0070f3;">
            ${message}
          </div>
        </div>
      `,
    });

    // 2. Email para el Usuario (Confirmación profesional)
    await transporter.sendMail({
      from: `"Maximiliano Guaymás" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Confirmación de recepción: Hola ${name} 👋`,
      html: `
        <div style="background-color: #f9fafb; padding: 40px 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <!-- Header con Acento -->
            <div style="background-color: #000000; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: -0.025em;">Maximiliano Guaymás</h1>
              <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 14px;">Full Stack Developer</p>
            </div>
            
            <!-- Cuerpo del Mensaje -->
            <div style="padding: 40px 30px;">
              <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #111827;">¡Hola ${name}!</h2>
              <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
                Gracias por ponerte en contacto conmigo a través de mi portfolio. He recibido tu mensaje correctamente.
              </p>
              <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
                Revisaré tu propuesta con atención y te responderé en este mismo hilo lo antes posible.
              </p>
              
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f3f4f6; padding: 20px 30px; text-align: center;">
              <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                Este es un mensaje automático enviado desde <a href="https://maximilianoguaymas.vercel.app/" style="color: #6b7280; text-decoration: underline;">maxiguaymas.dev</a>
              </p>
              <p style="font-size: 12px; color: #9ca3af; margin-top: 4px;">
                Salta, Argentina
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error enviando email:', error);
    return { 
      error: 'Lo siento, hubo un problema técnico al enviar el mensaje. Por favor, intentá contactarme directamente por LinkedIn o Email.' 
    };
  }
}