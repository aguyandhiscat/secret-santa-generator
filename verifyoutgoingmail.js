const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    auth: {
        pass: "<pass>",
        user: "alexw77@gmail.com",
    },
    host: "smtp.gmail.com",
    pool: true,
    secure: true,
});

// transporter.verify(function (error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Server is ready to take our messages');
//     }
// });

const tos = [
    // "paulwil259@yahoo.com",
    // "chriswilczewski@live.com",
    // "danielle.wilczewski@gmail.com",
    // "jenn.ratini@gmail.com",
    "alex@wilczewski.org",
    "alexw77@gmail.com",
    // "frank.ratini@gmail.com",
];

var message = {
    from: 'hohoho@wilczewski.org',
    to: tos,
    subject: 'Test from Node',
    text: 'This is to test if Node can send you all emails.'
};

transporter.sendMail(message, function (err) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Message sent");
    }
});