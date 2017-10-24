import { AssignmentMailer } from "./AssignmentMailer";
import { Assignments } from "./Assignments";
import { Emailer } from "./Emailer";
import Read from "./Read";

const assignmentMailer = AssignmentMailer.fromMailer(new Emailer());
Read.from(process.stdin).onComplete((reader: Read) => {
    console.log(reader.getData());
});
    // const assignments = Assignments.fromLines(Input.getLines());
    // AssignmentMailer.mail(assignments);
