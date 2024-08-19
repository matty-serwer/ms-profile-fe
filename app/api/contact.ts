
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'dominique.leuschke@ethereal.email',
    pass: '8PjKad4KAekAy7e1uy',
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await transporter.sendMail({
        from: '"Contact Form" <dominique.leuschke@ethereal.email>',
        to: 'matthew.serwer@gmail.com', // Replace with your email
        subject: 'Profile Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
