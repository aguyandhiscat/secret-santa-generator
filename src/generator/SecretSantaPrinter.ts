import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";

export class SecretSantaPrinter {
    public static printAssignments(assignments: SecretSantaAssignment[]) {
        process.stdout.write("Output");
    }
}
