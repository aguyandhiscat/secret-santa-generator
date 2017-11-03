import * as util from "util";
import Assignment from "./Assignment";
import IMail from "./IMail";

const FROM_NAME = "Secret Santa";
const FROM_EMAIL = "hohoho@wilczewski.org";
const SUBJECT = "Secret Santa Assignment";

export default class AssignmentMail implements IMail {
    public static fromAssignment(assignment: Assignment): AssignmentMail {
        const mail = new this();
        mail.setAssignment(assignment);
        mail.assignTo();
        mail.assignBody();
        return mail;
    }

    public to: string;
    public from: string;
    public subject: string;
    public body: string;
    private assignment: Assignment;

    constructor() {
        this.from = this.getEmailAddressFromNameAndEmail(FROM_NAME, FROM_EMAIL);
        this.subject = SUBJECT;
    }

    protected setAssignment(assignment: Assignment) {
        this.assignment = assignment;
    }

    protected assignTo() {
        const name = this.assignment.from.name;
        const email = this.assignment.from.email;
        this.to = this.getEmailAddressFromNameAndEmail(name, email);
    }

    protected assignBody() {
        // tslint:disable-next-line:max-line-length
        this.body = util.format("As a Secret Santa for the 2017 Christmas, you have been assigned to give a gift to %s.", this.assignment.to.name);
    }

    private getEmailAddressFromNameAndEmail(name: string, email: string): string {
        return util.format("%s <%s>", name, email);
    }
}
