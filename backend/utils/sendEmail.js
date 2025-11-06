const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * sendMail - sends an email
 * @param {Object} options - { to, subject, text, html, attachments }
 */
const sendMail = async (options) => {
  const mailOptions = {
    from: `"Airport Golden Tulip Hotel" <${process.env.EMAIL_USER}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments || []
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendMail;
