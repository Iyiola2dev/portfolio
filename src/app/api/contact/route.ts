import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'iyioladan11@gmail.com',
      to: 'iyiolad21@gmail.com',
      subject: 'New Booking Request',
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Description: ${formData.description}
      `
    });
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}