import Assignment from "./Assignment";
import Santa from "./Santa";

export default class Assignments {
    public static fromLines(lines: string[]) {
        const obj = new this();
        obj.addAssignmentsForLines(lines);
        return obj;
    }

    private assignments: Assignment[];

    constructor() {
        this.assignments = [];
    }

    public *next(): IterableIterator<Assignment> {
        for (const assignment of this.assignments) {
            yield assignment;
        }
    }

    protected addAssignmentsForLines(lines: string[]) {
        lines.forEach((line: string) => {
            this.addPossibleAssignmentForLine(line);
        });
    }

    private addPossibleAssignmentForLine(line: string) {
        const csv = line.split(",");
        this.addPossibleAssignmentForCsv(csv);
    }

    private addPossibleAssignmentForCsv(csv: string[]) {
        if (this.isValidCsv(csv)) {
            this.addAssignmentForCsv(csv);
        }
    }

    private isValidCsv(csv: string[]) {
        if (csv.length === 4) {
            return true;
        }
        return false;
    }

    private addAssignmentForCsv(csv: string[]) {
        const [fromSanta, toSanta] = this.getFromAndToSantaForCsv(csv);
        const assignment = new Assignment();
        assignment.from = fromSanta;
        assignment.to = toSanta;
        this.addAssignment(assignment);
    }

    private getFromAndToSantaForCsv(csv: string[]) {
        const [fromName, fromEmail, toName, toEmail] = csv;
        const fromSanta = Santa.fromNameAndEmail(fromName, fromEmail);
        const toSanta = Santa.fromNameAndEmail(toName, toEmail);
        return [fromSanta, toSanta];
    }

    private addAssignment(assignment: Assignment) {
        this.assignments.push(assignment);
    }
}
