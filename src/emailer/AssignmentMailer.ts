import Assignment from "./Assignment";
import IMailer from "./IMailer";

export default class AssignmentMailer {
    public static fromMailer(mailer: IMailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }

    private mailer: IMailer;

    public send(assignment: Assignment) {
        this.mailer.send({
            body: "Hello I am sending you an email: " + assignment.from.email,
            from: "",
            subject: "",
            to: "",
        });
    }

    protected setMailer(mailer: IMailer) {
        this.mailer = mailer;
    }
}
