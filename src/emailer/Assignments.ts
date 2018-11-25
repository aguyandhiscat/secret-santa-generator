import * as _ from "lodash";
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
        const csvLine: string = this.removeSurroundingSquareBrackets(line);
        const csv = csvLine.split(",");
        this.addPossibleAssignmentForCsv(csv);
    }

    private removeSurroundingSquareBrackets(line: string): string {
        return _.trim(line, "[]");
    }

    private addPossibleAssignmentForCsv(csv: string[]) {
        if (this.isValidCsv(csv)) {
            const strippedCsv = this.getRemovedSurroundingQuotesForCsv(csv);
            this.addAssignmentForCsv(strippedCsv);
        }
    }

    private isValidCsv(csv: string[]) {
        if (csv.length === 4) {
            return true;
        }
        return false;
    }

    private getRemovedSurroundingQuotesForCsv(csv: string[]): string[] {
        const strippedCsv: string[] = [];
        csv.forEach((item: string) => {
            if (item[0] === '"') {
                item = item.substr(1);
            }
            if (item[item.length - 1] === '"') {
                item = item.substr(0, item.length - 1);
            }
            strippedCsv.push(item);
        });
        return strippedCsv;
    }

    private addAssignmentForCsv(csv: string[]) {
        const [fromSanta, toSanta] = this.getFromAndToSantaForCsv(csv);
        const assignment = new Assignment();
        assignment.from = fromSanta;
        assignment.to = toSanta;
        this.addAssignment(assignment);
    }

    private getFromAndToSantaForCsv(csv: string[]): [Santa, Santa] {
        const [fromName, fromEmail, toName, toEmail] = csv;
        const fromSanta = Santa.fromNameAndEmail(fromName, fromEmail);
        const toSanta = Santa.fromNameAndEmail(toName, toEmail);
        return [fromSanta, toSanta];
    }

    private addAssignment(assignment: Assignment) {
        this.assignments.push(assignment);
    }
}
