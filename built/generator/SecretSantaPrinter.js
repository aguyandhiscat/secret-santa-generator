"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SecretSantaPrinter {
    static printAssignments(assignments) {
        for (let i = 0, ii = assignments.length; i < ii; i++) {
            this.printAssignment(assignments[i]);
        }
    }
    static printAssignment(assignment) {
        this.appendToStdout(this.assignmentToString(assignment));
    }
    static assignmentToString(assignment) {
        const out = [];
        out.push(assignment.gifter.name);
        out.push(assignment.gifter.email);
        out.push(assignment.receiver.name);
        out.push(assignment.receiver.email);
        return JSON.stringify(out);
    }
    static appendToStdout(out) {
        process.stdout.write(out + "\n");
    }
}
exports.SecretSantaPrinter = SecretSantaPrinter;
//# sourceMappingURL=SecretSantaPrinter.js.map