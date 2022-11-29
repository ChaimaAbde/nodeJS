var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chaimaabdedaime@gmail.com",
    pass: "xxxx",
  },
});

var mailOptions = {
  from: "chaimaabdedaime@gmail.com",
  to: "mariemabdedaime446@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
