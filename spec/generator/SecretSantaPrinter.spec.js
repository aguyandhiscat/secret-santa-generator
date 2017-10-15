"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Santa_1 = require("../../generator/Santa");
const SecretSantaAssignment_1 = require("../../generator/SecretSantaAssignment");
const SecretSantaPrinter_1 = require("../../generator/SecretSantaPrinter");
let assignments;
let writeSpy;
describe("The SecretSantaPrinter", () => {
    it("should print each assignment as a JSON array on each line", () => {
        addAssignments();
        createOutputSpy();
        SecretSantaPrinter_1.SecretSantaPrinter.printAssignments(assignments);
        expect(writeSpy).toHaveBeenCalledTimes(2);
        expectWriteLine(0).toBe({
            gifter: ["Alfa", "alfa@me.com"],
            receiver: ["Bravo", "bravo@me.com"],
        });
        expectWriteLine(1).toBe({
            gifter: ["Charlie", "charlie@me.com"],
            receiver: ["Delta", "delta@me.com"],
        });
    });
});
function addAssignments() {
    assignments = [];
    addAssignmentByQuickData({
        gifter: ["Alfa", "alfa@me.com"],
        receiver: ["Bravo", "bravo@me.com"],
    });
    addAssignmentByQuickData({
        gifter: ["Charlie", "charlie@me.com"],
        receiver: ["Delta", "delta@me.com"],
    });
}
function addAssignmentByQuickData(assignableData) {
    const gifter = Santa_1.Santa.fromNameAndEmail(assignableData.gifter[0], assignableData.gifter[1]);
    const receiver = Santa_1.Santa.fromNameAndEmail(assignableData.receiver[0], assignableData.receiver[1]);
    addAssignment(SecretSantaAssignment_1.SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver));
}
function addAssignment(assignment) {
    assignments.push(assignment);
}
function createOutputSpy() {
    writeSpy = spyOn(process.stdout, "write");
}
function expectWriteLine(line) {
    return PrinterTest.fromLine(line);
}
class PrinterTest {
    static fromLine(line) {
        const printerTest = new this();
        printerTest.outLine = writeSpy.calls.argsFor(line)[0];
        return printerTest;
    }
    toBe(test) {
        const expected = "[" +
            '"' + test.gifter[0] + '"' +
            ',"' + test.gifter[1] + '"' +
            ',"' + test.receiver[0] + '"' +
            ',"' + test.receiver[1] + '"' +
            "]" + "\n";
        expect(this.outLine).toEqual(expected);
    }
}
//# sourceMappingURL=SecretSantaPrinter.spec.js.map