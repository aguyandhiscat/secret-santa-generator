const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    auth: {
        pass: "<pass>",
        user: "alex@wilczewski.org",
    },
    host: "mail.wilczewski.org",
    secure: true,
    tls: {
        rejectUnauthorized: false,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// var message = {
//     from: 'hohoho@wilczewski.org',
//     to: 'alex@wilczewski.org',
//     subject: 'Test from Node',
//     text: 'This is a message with Nodemailer'
// };

// transporter.sendMail(message, function (err) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Message sent");
//     }
// });