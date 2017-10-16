import { IMailer } from "./IMailer";

export class AssignmentMailer {
    public static fromMailer(mailer: IMailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }

    private mailer: IMailer;

    public setMailer(mailer: IMailer) {
        this.mailer = mailer;
    }
}
