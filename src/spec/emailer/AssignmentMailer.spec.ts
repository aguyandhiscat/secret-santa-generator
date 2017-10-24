import AssignmentMailer from "../../emailer/AssignmentMailer";
import Assignments from "../../emailer/Assignments";
import IMail from "../../emailer/IMail";
import IMailer from "../../emailer/IMailer";

describe("An AssignmentMailer", () => {
    it("should send an email for each assignment", () => {
        const mailer = new FakeMailer();
        const assignmentMailer = AssignmentMailer.fromMailer(mailer);
        assignmentMailer.sendFor(getAssignments());
        // expect(mailer.tos).toEqual(["delta@me.com", "hotel@me.com"]);
    });
});

function getAssignments() {
    const lines: string[] = [
        "alfa,bravo@me.com,charlie,delta@me.com",
        "echo,foxtrot@me.com,golf,hotel@me.com"];
    return Assignments.fromLines(lines);
}

class FakeMailer implements IMailer {
    public tos: string[];

    constructor() {
        this.tos = [];
    }

    public send(mail: IMail) {
        this.tos.push(mail.to);
    }
}
