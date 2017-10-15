import { SecretSantaPrinter } from "../../generator/SecretSantaPrinter";
import { SecretSantaAssignment } from "../../generator/SecretSantaAssignment";

describe("The SecretSantaPrinter", () => {
    it("should print Output to stdout", () => {
        spyOn(process.stdout, "write");
        const assignments = new Array<SecretSantaAssignment>();
        SecretSantaPrinter.printAssignments(assignments);
        expect(process.stdout.write).toHaveBeenCalledWith("Output");
    });
});
