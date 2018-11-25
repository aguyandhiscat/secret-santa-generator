import AssignmentMailer from "./AssignmentMailer";
import Assignments from "./Assignments";
import ConsoleEmailer from "./ConsoleEmailer";
import Input from "./Input";
import Read from "./Read";
import SendmailEmailer from "./SendmailEmailer";

run();
async function run() {
    const emailer = new SendmailEmailer();
    await emailer.connect();
    const assignmentMailer = AssignmentMailer.fromMailer(emailer);
    const read = Read.from(process.stdin);
    read.onComplete(async () => {
        const lines = Input.getLinesFromData(read.getData());
        const assignments = Assignments.fromLines(lines);
        for (const assignment of assignments.next()) {
            assignmentMailer.sendForAssignment(assignment);
            await giveMailerTime();
        }
    });
}

function giveMailerTime() {
    // tslint:disable-next-line:no-empty
    return new Promise((fulfill) => {
        setTimeout(fulfill, 1000);
    });
}
