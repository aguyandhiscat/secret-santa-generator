import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";

export class SecretSantaPrinter {
    static printAssignments(assignments: Array<SecretSantaAssignment>) {
        process.stdout.write("Output");
    }
}
