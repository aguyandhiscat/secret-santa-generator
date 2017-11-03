import Assignment from "../../emailer/Assignment";
import AssignmentMail from "../../emailer/AssignmentMail";
import Santa from "../../emailer/Santa";

describe("An AssignmentMail", () => {
    describe("from scratch", () => {
        let assignmentMail: AssignmentMail;
        beforeEach(() => {
            assignmentMail = new AssignmentMail();
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
        const assignmentMail = AssignmentMail.fromAssignment(assignment);
    });

    describe("from an assignment", () => {
        let assignmentMail: AssignmentMail;
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

function getNewAssignment(): Assignment {
    const assignment = new Assignment();
    assignment.from = Santa.fromNameAndEmail("alfa", "bravo");
    assignment.to = Santa.fromNameAndEmail("charlie", "delta");
    return assignment;
}

function getNewAssignmentMail(): AssignmentMail {
    const assignment = getNewAssignment();
    const assignmentMail = AssignmentMail.fromAssignment(assignment);
    return assignmentMail;
}
