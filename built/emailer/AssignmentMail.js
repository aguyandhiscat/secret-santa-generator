"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
class AssignmentMail {
    static fromAssignment(assignment) {
        const mail = new this();
        mail.setAssignment(assignment);
        mail.assignTo();
        mail.assignBody();
        return mail;
    }
    constructor() {
        this.from = "no-reply@wilczewski.org";
        this.subject = "Secret Santa Assignment";
    }
    setAssignment(assignment) {
        this.assignment = assignment;
    }
    assignTo() {
        this.to = util.format("%s <%s>", this.assignment.from.name, this.assignment.from.email);
    }
    assignBody() {
        // tslint:disable-next-line:max-line-length
        this.body = util.format("As a Secret Santa for the 2017 Christmas, you have been assigned to give a gift to %s.", this.assignment.to.name);
    }
}
exports.default = AssignmentMail;
//# sourceMappingURL=AssignmentMail.js.map