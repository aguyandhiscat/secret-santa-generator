"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assignment_1 = require("../../emailer/Assignment");
const AssignmentMail_1 = require("../../emailer/AssignmentMail");
const Santa_1 = require("../../emailer/Santa");
describe("An AssignmentMail", () => {
    describe("from scratch", () => {
        let assignmentMail;
        beforeEach(() => {
            assignmentMail = new AssignmentMail_1.default();
        });
        it("should not initialize the following values", () => {
            expect(assignmentMail.body).toBeUndefined();
            expect(assignmentMail.to).toBeUndefined();
        });
        it("should assign the from", () => {
            expect(assignmentMail.from).toBe("Secret Santa <hohoho@wilczewski.org>");
        });
        it("should assign the subject", () => {
            expect(assignmentMail.subject).toBe("Secret Santa Assignment");
        });
    });
    it("should be creatable from an Assignment", () => {
        const assignment = getNewAssignment();
        const assignmentMail = AssignmentMail_1.default.fromAssignment(assignment);
    });
    describe("from an assignment", () => {
        let assignmentMail;
        beforeEach(() => {
            assignmentMail = getNewAssignmentMail();
        });
        it("should assign to", () => {
            expect(assignmentMail.to).toBe("alfa <bravo>");
        });
        it("should assign body", () => {
            // tslint:disable-next-line:max-line-length
            expect(assignmentMail.body).toBe("As a Secret Santa for the 2017 Christmas, you have been assigned to give a gift to charlie.");
        });
    });
});
function getNewAssignment() {
    const assignment = new Assignment_1.default();
    assignment.from = Santa_1.default.fromNameAndEmail("alfa", "bravo");
    assignment.to = Santa_1.default.fromNameAndEmail("charlie", "delta");
    return assignment;
}
function getNewAssignmentMail() {
    const assignment = getNewAssignment();
    const assignmentMail = AssignmentMail_1.default.fromAssignment(assignment);
    return assignmentMail;
}
//# sourceMappingURL=AssignmentMail.spec.js.map