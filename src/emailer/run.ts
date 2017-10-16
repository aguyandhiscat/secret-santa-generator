// Reader.readInAssignments
// AssignmentMailer.registerMailer(emailer)
// AssignmentMailer.emailAssignments

import { AssignmentMailer } from "./AssignmentMailer";
import { Assignments } from "./Assignments";
import { Emailer } from "./Emailer";
import { Input } from "./Input";

const assignmentMailer = AssignmentMailer.fromMailer(new Emailer());
const worker = Input.read();
worker.onComplete(() => {
    console.log(Input.getLines());
    // const assignments = Assignments.fromLines(Input.getLines());
    // AssignmentMailer.mail(assignments);
});
