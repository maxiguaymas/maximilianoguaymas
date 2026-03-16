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
  
  // Honeypot check
  const honeypot = formData.get('honeypot');
  if (honeypot) {
    return { success: true }; // Silently ignore bot submission
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'maxikasta480@gmail.com', // Registered email in Resend
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

    return { success: true };
  } catch (error) {
    console.error('Error enviando email:', error);
    return { 
      error: 'Ocurrió un error técnico al enviar el mensaje. Intentá nuevamente más tarde.' 
    };
  }
}
