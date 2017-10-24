import Assignments from "./Assignments";
import IMailer from "./IMailer";

export default class AssignmentMailer {
    public static fromMailer(mailer: IMailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }

    private mailer: IMailer;

    public sendFor(assignments: Assignments) {
        // Do things
    }

    protected setMailer(mailer: IMailer) {
        this.mailer = mailer;
    }
}
