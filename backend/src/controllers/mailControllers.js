const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { sqldb } = require("../models/db");

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
      from: "blablagare <blablagare@outlook.fr>",
      to: receiverEmail,
      subject: "It's a good message for you✔",
      text: "Hello world?",
      html: `<b>Quelqu'un est interessé par ton trajet tu peux le contacter a ce mail ${senderEmail} </b>`, // html body
    });
  } catch (error) {
    console.warn(error);
  }
}

function forgotPassword(req, res) {
  const { alias } = req.params;
  const payload = { sub: alias };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    service: "outlook",
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
  sqldb
    .query("SELECT * FROM users WHERE u_alias=?", [alias])
    .then(([data]) => {
      if (data[0] != null) {
        req.userEmail = data[0].u_email;
        try {
          transporter.sendMail({
            from: "blablagare <blablagare@outlook.fr>", // sender address
            to: req.userEmail, // list of receivers   receiverEmail
            subject: "Link to change your password", // Subject line
            text: "Hello world?", // plain text body
            html: ` <h2> Cliquez sur le lien suivant pour réinitialiser votre mot de passe</h2>
              <a href=${process.env.FRONTEND_URL}/ResetPassword?token=${token}>Lien renouvellement mot de passe</a>
              <p>Si vous n'êtes pas à l'orgine de cette demande merci de ne pas tenir compte de cet email</p> `,
          });
          console.warn("to", req.userEmail);
          res.send("link send").status(200);
        } catch (error) {
          console.warn(error);
        }
      }
    })
    .catch((error) => {
      console.warn(error);
    });
}

module.exports = {
  mail,
  forgotPassword,
};
