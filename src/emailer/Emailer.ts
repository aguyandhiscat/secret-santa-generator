import IMail from "./IMail";
import IMailer from "./IMailer";

export default class Emailer implements IMailer {
    public send(mail: IMail) {
        console.log(mail.body);
        // callSendMail();
    }
}
