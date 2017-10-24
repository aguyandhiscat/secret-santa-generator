import AssignmentMailer from "./AssignmentMailer";
import Assignments from "./Assignments";
import Emailer from "./Emailer";
import Input from "./Input";
import Read from "./Read";

const assignmentMailer = AssignmentMailer.fromMailer(new Emailer());
Read.from(process.stdin).onComplete((reader: Read) => {
    const lines = Input.getLinesFromData(reader.getData());
    assignmentMailer.sendFor(Assignments.fromLines(lines));
});
