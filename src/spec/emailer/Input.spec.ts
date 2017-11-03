import Input from "../../emailer/Input";

describe("Input", () => {
    it("should trim and split lines", () => {
        const tests: [[InputValue, InputExpected]] = [
            ["A", ["A"]],
            ["A,B\n", ["A,B"]],
            ["\nA,B\n", ["A,B"]],
            ["A,B\nC", ["A,B", "C"]],
            ["   A,B \n  C  ", ["A,B", "C"]],
        ];
        tests.forEach(([inValue, expected]) => {
            const actual = Input.getLinesFromData(inValue);
            expect(actual).toEqual(expected);
        });
    });
});

type InputValue = string;
type InputExpected = string[];
