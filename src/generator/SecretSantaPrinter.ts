import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";

export class SecretSantaPrinter {
    public static printAssignments(assignments: SecretSantaAssignment[]) {
        for (let i = 0, ii = assignments.length; i < ii; i++) {
            this.printAssignment(assignments[i]);
        }
    }

    private static printAssignment(assignment: SecretSantaAssignment) {
        this.appendToStdout(this.assignmentToString(assignment));
    }

    private static assignmentToString(assignment: SecretSantaAssignment) {
        const out: string[] = [];
        out.push(assignment.gifter.name);
        out.push(assignment.gifter.email);
        out.push(assignment.receiver.name);
        out.push(assignment.receiver.email);
        return JSON.stringify(out);
    }

    private static appendToStdout(out: string) {
        process.stdout.write(out + "\n");
    }
}
