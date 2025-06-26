const express = require("express");
// const app = express();
const route = express.Router();
const nodemailer = require('nodemailer');



route.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'smitkakadiya45@gmail.com',
      pass: 'axzx cjhi eklj ofci'
    }
  });

  try {
    await transporter.sendMail({
      from: 'your@gmail.com',
      to,
      subject,
      text
    });
    res.send('Email sent');
  } catch (err) {
    res.status(500).send(err.toString());
  }
});



module.exports = route;