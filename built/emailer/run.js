"use strict";
// Reader.readInAssignments
// AssignmentMailer.registerMailer(emailer)
// AssignmentMailer.emailAssignments
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentMailer_1 = require("./AssignmentMailer");
const Emailer_1 = require("./Emailer");
const Input_1 = require("./Input");
const assignmentMailer = AssignmentMailer_1.AssignmentMailer.fromMailer(new Emailer_1.Emailer());
const inputWorker = Input_1.Input.read();
inputWorker.onComplete(() => {
    console.log(Input_1.Input.getLines());
    // const assignments = Assignments.fromLines(Input.getLines());
    // AssignmentMailer.mail(assignments);
});
//# sourceMappingURL=run.js.map