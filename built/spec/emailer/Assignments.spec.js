"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assignment_1 = require("../../emailer/Assignment");
const Assignments_1 = require("../../emailer/Assignments");
describe("An Assignments", () => {
    describe("created from a csv of strings", () => {
        let assignments;
        let as;
        let lines;
        beforeEach(() => {
            lines = [
                "alfa,bravo,charlie,delta",
                "echo,foxtrot,gulf",
                "hotel,india,juliett,kilo",
            ];
            assignments = Assignments_1.default.fromLines(lines);
            as = [...assignments.next()];
            expect(as.length).toBe(2);
        });
        it("should contain Assignment objects", () => {
            expect(as[0].constructor.name).toBe(Assignment_1.default.name);
        });
        it("should ignore non-valid strings", () => {
            expect(as[0].from.name).toBe("alfa");
            expect(as[1].from.name).not.toBe("echo");
            expect(as[1].from.name).toBe("hotel");
        });
    });
});
//# sourceMappingURL=Assignments.spec.js.map