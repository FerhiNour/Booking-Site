const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nourferhi1@gmail.com",
    pass: "msorqstqlyczgdqn",
  },
});

module.exports = transporter;
