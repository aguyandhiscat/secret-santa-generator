import Assignment from "./Assignment";
import AssignmentMail from "./AssignmentMail";
import IMailer from "./IMailer";

export default class AssignmentMailer {
    public static fromMailer(mailer: IMailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }

    private mailer: IMailer;

    public sendForAssignment(assignment: Assignment) {
        this.mailer.send(this.createMailFromAssignment(assignment));
    }

    protected setMailer(mailer: IMailer) {
        this.mailer = mailer;
    }

    private createMailFromAssignment(assignment: Assignment): AssignmentMail {
        return AssignmentMail.fromAssignment(assignment);
    }
}
