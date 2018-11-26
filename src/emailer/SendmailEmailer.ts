import * as nodemailer from "nodemailer";
import IMail from "./IMail";
import IMailer from "./IMailer";

export default class SendmailEmailer implements IMailer {
    private transporter: nodemailer.Transporter;

    public async connect() {
        this.transporter = nodemailer.createTransport({
            auth: {
                pass: "<pass>",
                user: "alexw77@gmail.com",
            },
            host: "smtp.gmail.com",
            pool: true,
            secure: true,
        });
        return this.transporter.verify().then(() => {
            console.log('Server is ready to take our messages');
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    public send(mail: IMail) {
        const message = {
            from: mail.from,
            subject: mail.subject,
            text: mail.body,
            to: mail.to,
        };

        this.transporter.sendMail(message, (err) => {
            if (err) {
                console.log("Error: ", err);
                console.log("Error message: ", message);
            } else {
                console.log("Message sent: ", message);
            }
        });
    }
}
