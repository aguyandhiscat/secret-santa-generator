"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssignmentMailer {
    static fromMailer(mailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }
    send(assignment) {
        this.mailer.send({
            body: "Hello I am sending you an email: " + assignment.from.email,
            from: "",
            subject: "",
            to: "",
        });
    }
    setMailer(mailer) {
        this.mailer = mailer;
    }
}
exports.default = AssignmentMailer;
//# sourceMappingURL=AssignmentMailer.js.map