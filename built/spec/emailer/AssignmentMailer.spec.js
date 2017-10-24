"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentMailer_1 = require("../../emailer/AssignmentMailer");
const Assignments_1 = require("../../emailer/Assignments");
describe("An AssignmentMailer", () => {
    it("should send an email for each assignment", () => {
        const mailer = new FakeMailer();
        const assignmentMailer = AssignmentMailer_1.default.fromMailer(mailer);
        assignmentMailer.sendFor(getAssignments());
        // expect(mailer.tos).toEqual(["delta@me.com", "hotel@me.com"]);
    });
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
        this.tos = [];
    }
    send(mail) {
        this.tos.push(mail.to);
    }
}
//# sourceMappingURL=AssignmentMailer.spec.js.map