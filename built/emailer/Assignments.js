"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assignment_1 = require("./Assignment");
const Santa_1 = require("./Santa");
class Assignments {
    static fromLines(lines) {
        const obj = new this();
        obj.addAssignmentsForLines(lines);
        return obj;
    }
    constructor() {
        this.assignments = [];
    }
    *next() {
        for (const assignment of this.assignments) {
            yield assignment;
        }
    }
    addAssignmentsForLines(lines) {
        lines.forEach((line) => {
            this.addPossibleAssignmentForLine(line);
        });
    }
    addPossibleAssignmentForLine(line) {
        const csv = line.split(",");
        this.addPossibleAssignmentForCsv(csv);
    }
    addPossibleAssignmentForCsv(csv) {
        if (this.isValidCsv(csv)) {
            this.addAssignmentForCsv(csv);
        }
    }
    isValidCsv(csv) {
        if (csv.length === 4) {
            return true;
        }
        return false;
    }
    addAssignmentForCsv(csv) {
        const [fromSanta, toSanta] = this.getFromAndToSantaForCsv(csv);
        const assignment = new Assignment_1.default();
        assignment.from = fromSanta;
        assignment.to = toSanta;
        this.addAssignment(assignment);
    }
    getFromAndToSantaForCsv(csv) {
        const [fromName, fromEmail, toName, toEmail] = csv;
        const fromSanta = Santa_1.default.fromNameAndEmail(fromName, fromEmail);
        const toSanta = Santa_1.default.fromNameAndEmail(toName, toEmail);
        return [fromSanta, toSanta];
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
}
exports.default = Assignments;
//# sourceMappingURL=Assignments.js.map