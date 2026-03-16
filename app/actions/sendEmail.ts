'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("El email no es válido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export async function sendEmail(formData: FormData) {
  const result = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  const { name, email, message } = result.data;
  const honeypot = formData.get('honeypot');

  if (honeypot) {
    return { success: true }; // Silently ignore bot submission
  }

  try {
    // 1. Email para Maximiliano (Notificación)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'maximiliano.guaymas480@gmail.com',
      subject: `🚀 Nuevo mensaje de: ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Has recibido un nuevo contacto desde tu Portafolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; border-left: 4px solid #000;">
            ${message}
          </div>
        </div>
      `,
    });

    // 2. Email para el Usuario (Confirmación)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Hola ${name}, gracias por contactarme 👋`,
      html: `
        <div style="background-color: #f9fafb; padding: 40px 20px; font-family: sans-serif; color: #1f2937;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 30px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">¡Hola ${name}!</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
              Gracias por ponerte en contacto conmigo a través de mi portfolio. He recibido tu mensaje correctamente y te responderé lo antes posible.
            </p>
            <p style="font-size: 14px; color: #9ca3af; margin-top: 30px;">
              Este es un mensaje automático.
            </p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error enviando email:', error);
    return { 
      error: 'Ocurrió un error técnico al enviar el mensaje. Intentá nuevamente más tarde.' 
    };
  }
}
