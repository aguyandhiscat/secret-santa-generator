import IMail from "./IMail";
import IMailer from "./IMailer";
import SendMailWrapper from "./SendMailWrapper";

export default class Emailer implements IMailer {
    public send(mail: IMail) {
        const { body,
            from,
            subject,
            to } = mail;
        SendMailWrapper.call(from, subject, to, body);
    }
}
