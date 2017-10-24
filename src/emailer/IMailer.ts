import IMail from "./IMail";

export default interface IMailer {
    send(mail: IMail): void;
}
