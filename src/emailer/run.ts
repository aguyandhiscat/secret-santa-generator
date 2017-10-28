import AssignmentMailer from "./AssignmentMailer";
import Assignments from "./Assignments";
import Emailer from "./Emailer";
import Input from "./Input";
import Read from "./Read";

const assignmentMailer = AssignmentMailer.fromMailer(new Emailer());
const read = Read.from(process.stdin);
read.onComplete(() => {
    const lines = Input.getLinesFromData(read.getData());
    const assignments = Assignments.fromLines(lines);
    for (const assignment of assignments.next()) {
        assignmentMailer.sendForAssignment(assignment);
    }
});
