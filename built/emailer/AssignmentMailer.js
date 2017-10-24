"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssignmentMailer {
    static fromMailer(mailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }
    sendFor(assignments) {
        // Do things
    }
    setMailer(mailer) {
        this.mailer = mailer;
    }
}
exports.default = AssignmentMailer;
//# sourceMappingURL=AssignmentMailer.js.map