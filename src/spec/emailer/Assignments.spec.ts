import Assignment from "../../emailer/Assignment";
import Assignments from "../../emailer/Assignments";

describe("An Assignments", () => {
    describe("created from a csv of strings", () => {
        let assignments: Assignments;
        let as: Assignment[];
        let lines: string[];
        beforeEach(() => {
            lines = [
                "alfa,bravo,charlie,delta",
                "echo,foxtrot,gulf",
                "hotel,india,juliett,kilo",
            ];
            assignments = Assignments.fromLines(lines);
            as = [...assignments.next()];
            expect(as.length).toBe(2);
        });

        it("should contain Assignment objects", () => {
            expect(as[0].constructor.name).toBe(Assignment.name);
        });

        it("should ignore non-valid strings", () => {
            expect(as[0].from.name).toBe("alfa");
            expect(as[1].from.name).not.toBe("echo");
            expect(as[1].from.name).toBe("hotel");
        });
    });
});
