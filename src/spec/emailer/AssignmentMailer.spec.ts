import AssignmentMail from "../../emailer/AssignmentMail";
import AssignmentMailer from "../../emailer/AssignmentMailer";
import Assignments from "../../emailer/Assignments";
import IMail from "../../emailer/IMail";
import IMailer from "../../emailer/IMailer";

describe("An AssignmentMailer", () => {
    let mailer: FakeMailer;
    let assignmentMailer: AssignmentMailer;
    let assignments: Assignments;
    beforeEach(() => {
        mailer = new FakeMailer();
        assignmentMailer = AssignmentMailer.fromMailer(mailer);
        assignments = getAssignments();
    });

    it("should send an email for each assignment", () => {
        sendAssignments();
        expect(mailer.mails.length).toBe(2);
    });

    it("should create mail through AssignmentMail", () => {
        spyOn(AssignmentMail, "fromAssignment").and.callThrough();
        sendAssignments();
        expect(AssignmentMail.fromAssignment).toHaveBeenCalledTimes(2);
    });

    function sendAssignments() {
        for (const assignment of assignments.next()) {
            assignmentMailer.sendForAssignment(assignment);
        }
    }
});

function getAssignments() {
    const lines: string[] = [
        "alfa,bravo@me.com,charlie,delta@me.com",
        "echo,foxtrot@me.com,golf,hotel@me.com"];
    return Assignments.fromLines(lines);
}

class FakeMailer implements IMailer {
    public mails: IMail[];

    constructor() {
        this.mails = [];
    }

    public send(mail: IMail) {
        this.mails.push(mail);
    }
}
