"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentMail_1 = require("./AssignmentMail");
class AssignmentMailer {
    static fromMailer(mailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }
    sendForAssignment(assignment) {
        this.mailer.send(this.createMailFromAssignment(assignment));
    }
    setMailer(mailer) {
        this.mailer = mailer;
    }
    createMailFromAssignment(assignment) {
        return AssignmentMail_1.default.fromAssignment(assignment);
    }
}
exports.default = AssignmentMailer;
//# sourceMappingURL=AssignmentMailer.js.map