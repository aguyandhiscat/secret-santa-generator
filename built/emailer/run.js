"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentMailer_1 = require("./AssignmentMailer");
const Emailer_1 = require("./Emailer");
const Read_1 = require("./Read");
const assignmentMailer = AssignmentMailer_1.AssignmentMailer.fromMailer(new Emailer_1.Emailer());
Read_1.default.from(process.stdin).onComplete((reader) => {
    console.log(reader.getData());
});
// const assignments = Assignments.fromLines(Input.getLines());
// AssignmentMailer.mail(assignments);
//# sourceMappingURL=run.js.map