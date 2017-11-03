"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = require("../../emailer/Input");
describe("Input", () => {
    it("should trim and split lines", () => {
        const tests = [
            ["A", ["A"]],
            ["A,B\n", ["A,B"]],
            ["\nA,B\n", ["A,B"]],
            ["A,B\nC", ["A,B", "C"]],
            ["   A,B \n  C  ", ["A,B", "C"]],
        ];
        tests.forEach(([inValue, expected]) => {
            const actual = Input_1.default.getLinesFromData(inValue);
            expect(actual).toEqual(expected);
        });
    });
});
//# sourceMappingURL=Input.spec.js.map