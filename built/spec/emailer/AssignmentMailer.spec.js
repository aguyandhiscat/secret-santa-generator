"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentMail_1 = require("../../emailer/AssignmentMail");
const AssignmentMailer_1 = require("../../emailer/AssignmentMailer");
const Assignments_1 = require("../../emailer/Assignments");
describe("An AssignmentMailer", () => {
    let mailer;
    let assignmentMailer;
    let assignments;
    beforeEach(() => {
        mailer = new FakeMailer();
        assignmentMailer = AssignmentMailer_1.default.fromMailer(mailer);
        assignments = getAssignments();
    });
    it("should send an email for each assignment", () => {
        sendAssignments();
        expect(mailer.mails.length).toBe(2);
    });
    it("should create mail through AssignmentMail", () => {
        spyOn(AssignmentMail_1.default, "fromAssignment").and.callThrough();
        sendAssignments();
        expect(AssignmentMail_1.default.fromAssignment).toHaveBeenCalledTimes(2);
    });
    function sendAssignments() {
        for (const assignment of assignments.next()) {
            assignmentMailer.sendForAssignment(assignment);
        }
    }
});
function getAssignments() {
    const lines = [
        "alfa,bravo@me.com,charlie,delta@me.com",
        "echo,foxtrot@me.com,golf,hotel@me.com"
    ];
    return Assignments_1.default.fromLines(lines);
}
class FakeMailer {
    constructor() {
        this.mails = [];
    }
    send(mail) {
        this.mails.push(mail);
    }
}
//# sourceMappingURL=AssignmentMailer.spec.js.map