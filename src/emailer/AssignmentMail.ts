import * as util from "util";
import Assignment from "./Assignment";
import IMail from "./IMail";

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
        this.from = "no-reply@wilczewski.org";
        this.subject = "Secret Santa Assignment";
    }

    protected setAssignment(assignment: Assignment) {
        this.assignment = assignment;
    }

    protected assignTo() {
        this.to = util.format("%s <%s>", this.assignment.from.name, this.assignment.from.email);
    }

    protected assignBody() {
        // tslint:disable-next-line:max-line-length
        this.body = util.format("As a Secret Santa for the 2017 Christmas, you have been assigned to give a gift to %s.", this.assignment.to.name);
    }
}
