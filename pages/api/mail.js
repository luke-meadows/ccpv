import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const html = `
  <h1>Website Enquiry</h1>
  <p>
  <strong>Name</strong>: ${body.firstName} ${body.lastName}
  </p>
  <p>
  <strong>Email</strong>: ${body.email}
  </p>
  <p>
  <strong>Message</strong>: ${body.message}
  </p>
  `;
  await resend.emails
    .send({
      // from: 'onboarding@resend.dev',
      from: 'cameron.cox@ccpv.co.uk',
      to: 'cameron.cox1993@hotmail.co.uk',
      subject: 'New Website Enquiry',
      html: html,
    })
    .then(
      (success) => {
        res.status(200).json('success');
      },
      (error) => {
        res.status(500).json('error');
      }
    );
}
