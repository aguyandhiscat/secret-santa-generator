import IMail from "./IMail";
import IMailer from "./IMailer";

export default class Emailer implements IMailer {
    public send(mail: IMail) {
        const { body,
            from,
            subject,
            to } = mail;
        console.log(from, subject, to, body);
    }
}
