import { Santa } from "../../generator/Santa";
import { SecretSantaAssignment } from "../../generator/SecretSantaAssignment";
import { SecretSantaPrinter } from "../../generator/SecretSantaPrinter";

let assignments: SecretSantaAssignment[];
let writeSpy: jasmine.Spy;

describe("The SecretSantaPrinter", () => {
    it("should print each assignment as a JSON array on each line", () => {
        addAssignments();
        createOutputSpy();
        SecretSantaPrinter.printAssignments(assignments);
        expect(writeSpy).toHaveBeenCalledTimes(2);
        expectWriteLine(0).toBe(
            {
                gifter: ["Alfa", "alfa@me.com"],
                receiver: ["Bravo", "bravo@me.com"],
            });
        expectWriteLine(1).toBe(
            {
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

function addAssignmentByQuickData(assignableData: IQuickAssignment) {
    const gifter = Santa.fromNameAndEmail(assignableData.gifter[0], assignableData.gifter[1]);
    const receiver = Santa.fromNameAndEmail(assignableData.receiver[0], assignableData.receiver[1]);
    addAssignment(SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver));
}

function addAssignment(assignment: SecretSantaAssignment) {
    assignments.push(assignment);
}

function createOutputSpy() {
    writeSpy = spyOn(process.stdout, "write");
}

function expectWriteLine(line: number) {
    return PrinterTest.fromLine(line);
}

class PrinterTest {
    public static fromLine(line: number) {
        const printerTest = new this();
        printerTest.outLine = writeSpy.calls.argsFor(line)[0];
        return printerTest;
    }
    protected outLine: string;
    public toBe(test: IQuickAssignment) {
        const expected = "[" +
            '"' + test.gifter[0] + '"' +
            ',"' + test.gifter[1] + '"' +
            ',"' + test.receiver[0] + '"' +
            ',"' + test.receiver[1] + '"' +
            "]" + "\n";
        expect(this.outLine).toEqual(expected);
    }
}

interface IQuickAssignment {
    gifter: string[];
    receiver: string[];
}
