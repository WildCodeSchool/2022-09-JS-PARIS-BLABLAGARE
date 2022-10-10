const nodemailer = require("nodemailer");

function mail(req) {
  const { senderEmail, receiverEmail } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    service: " outlook",
    port: 587,
    secure: false,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    transporter.sendMail({
      from: "blablagare <blablagare@outlook.fr>", // sender address
      to: receiverEmail, // list of receivers   receiverEmail
      subject: "It's a good message for you✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>Quelqu'un est interessé par ton trajet tu peux le contacter a ce mail ${senderEmail} </b>`, // html body
    });
  } catch (error) {
    console.warn(error);
  }
}

module.exports = {
  mail,
};
