const nodemailer = require('nodemailer');

dotenv.config({path: '../config.env'});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function send(text, subject) {
  const mailSent = await transporter.sendMail({
    text: text,
    subject: subject,
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
  })
  .catch(err => console.log(err));

  console.log(mailSent);
}