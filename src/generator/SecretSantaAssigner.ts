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
        this.prepareAssignment();
        this.assignSecretSantas();
    }

    prepareAssignment() {
        this.santasForAssignment = new Array<Santa>();
        this.copySantasForAssignment();
        this.randomizeAssignableSantas();
    }

    copySantasForAssignment() {
        let santa: Santa;
        for (santa of this.santas) {
            this.santasForAssignment.push(santa);
        }
    }

    randomizeAssignableSantas() {
        this.santasForAssignment.sort(this.randomSortMethod);
    }

    randomSortMethod(left: Santa, right: Santa): number {
        return getRandomFloatInclusive(-1, 1);
    }

    assignSecretSantas() {
        const lengthSubOne: number = (this.santasForAssignment.length - 1);
        for (let i = 0, ii = lengthSubOne; i < ii; i++) {
            this.addAssignmentByGifterAndReceiverIndex(i, i + 1);
        }
        this.addAssignmentByGifterAndReceiverIndex(lengthSubOne, 0);
    }

    addAssignmentByGifterAndReceiverIndex(gifterIndex: number, receiverIndex: number) {
        const gifter: Santa = this.santasForAssignment[gifterIndex];
        const receiver: Santa = this.santasForAssignment[receiverIndex];
        const assignment: SecretSantaAssignment = SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver);
        this.addAssignment(assignment);
    }

    addAssignment(assignment: SecretSantaAssignment) {
        this.assignments.push(assignment);
    }

    getAssignments(): Array<SecretSantaAssignment> {
        return this.assignments;
    }
}
