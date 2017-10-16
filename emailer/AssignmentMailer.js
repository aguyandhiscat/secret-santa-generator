"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssignmentMailer {
    static fromMailer(mailer) {
        const assignmentMailer = new this();
        assignmentMailer.setMailer(mailer);
        return assignmentMailer;
    }
    setMailer(mailer) {
        this.mailer = mailer;
    }
}
exports.AssignmentMailer = AssignmentMailer;
//# sourceMappingURL=AssignmentMailer.js.map