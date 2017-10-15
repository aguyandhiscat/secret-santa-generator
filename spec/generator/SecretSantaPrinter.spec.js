"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecretSantaPrinter_1 = require("../../generator/SecretSantaPrinter");
describe("The SecretSantaPrinter", () => {
    it("should print Output to stdout", () => {
        spyOn(process.stdout, "write");
        const assignments = new Array();
        SecretSantaPrinter_1.SecretSantaPrinter.printAssignments(assignments);
        expect(process.stdout.write).toHaveBeenCalledWith("Output");
    });
    it("check write", () => {
        process.stdout.write("Check");
    });
});
//# sourceMappingURL=SecretSantaPrinter.spec.js.map