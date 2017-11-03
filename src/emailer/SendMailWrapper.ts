export default class SendMailWrapper {
    public static from: string;
    public static subject: string;
    public static to: string;
    public static body: string;

    public static call(from: string, subject: string, to: string, body: string) {
        this.from = from;
        this.subject = subject;
        this.to = to;
        this.body = body;
    }
}
