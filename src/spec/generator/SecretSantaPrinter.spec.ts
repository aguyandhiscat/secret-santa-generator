import { SecretSantaAssignment } from "../../generator/SecretSantaAssignment";
import { SecretSantaPrinter } from "../../generator/SecretSantaPrinter";

describe("The SecretSantaPrinter", () => {
    it("should print Output to stdout", () => {
        spyOn(process.stdout, "write");
        const assignments: SecretSantaAssignment[] = [];
        SecretSantaPrinter.printAssignments(assignments);
        expect(process.stdout.write).toHaveBeenCalledWith("Output");
    });
});
