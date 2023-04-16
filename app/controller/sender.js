const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

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

const sendToMail = async function(text, subject) {
  const mailSent = await transporter.sendMail({
    text: text,
    subject: subject,
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
  })
  .catch(err => console.log(err));
}

module.exports = sendToMail;