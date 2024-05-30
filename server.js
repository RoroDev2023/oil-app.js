const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahimaskerov100@gmail.com',
    pass: 'Rahim20122004',
  },
});

app.post('/send-email', (req, res) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'rahim.askarov.2004@gmail.com',
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
