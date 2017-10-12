import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";
import { getRandomFloatInclusive } from "./lib/Utils";

export class SecretSantaAssigner {
    santas: Array<Santa>;
    santasForAssignment: Array<Santa>;
    assignments: Array<SecretSantaAssignment>;

    constructor() {
        this.santas = new Array<Santa>();
        this.santasForAssignment = new Array<Santa>();
    }

    addSanta(santa: Santa) {
        this.santas.push(santa);
    }

    assign() {
        this.assignments = Array<SecretSantaAssignment>();
        this.prepareSantasForAssignment();
        this.assignSecretSantas();
    }

    prepareSantasForAssignment() {
        this.santasForAssignment = new Array<Santa>();
        this.copySantasForAssignment();
        this.randomlySortSantas();
    }

    copySantasForAssignment() {
        let santa: Santa;
        for (santa of this.santas) {
            this.santasForAssignment.push(santa);
        }
    }

    randomlySortSantas() {
        this.santasForAssignment.sort(this.randomSortMethod);
    }

    randomSortMethod(left: Santa, right: Santa): number {
        return getRandomFloatInclusive(-1, 1);
    }

    assignSecretSantas() {
        let lengthSubOne: number = (this.santasForAssignment.length - 1);
        for (let i = 0, ii = lengthSubOne; i < ii; i++) {
            this.addAssignmentByGifterAndReceiverIndex(i, i + 1);
        }

        this.addAssignmentByGifterAndReceiverIndex(lengthSubOne, 0);
    }

    addAssignmentByGifterAndReceiverIndex(gifterIndex: number, receiverIndex: number) {
        let assignment = new SecretSantaAssignment();
        assignment.gifter = this.santasForAssignment[gifterIndex];
        assignment.receiver = this.santasForAssignment[receiverIndex];
        this.assignments.push(assignment);
    }

    getAssignments(): Array<SecretSantaAssignment> {
        return this.assignments;
    }
}
