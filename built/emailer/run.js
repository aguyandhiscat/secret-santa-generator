"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentMailer_1 = require("./AssignmentMailer");
const Assignments_1 = require("./Assignments");
const Emailer_1 = require("./Emailer");
const Input_1 = require("./Input");
const Read_1 = require("./Read");
const assignmentMailer = AssignmentMailer_1.default.fromMailer(new Emailer_1.default());
const read = Read_1.default.from(process.stdin);
read.onComplete(() => {
    const lines = Input_1.default.getLinesFromData(read.getData());
    const assignments = Assignments_1.default.fromLines(lines);
    for (const assignment of assignments.next()) {
        assignmentMailer.send(assignment);
    }
});
//# sourceMappingURL=run.js.map