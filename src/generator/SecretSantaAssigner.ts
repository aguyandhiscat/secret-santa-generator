import { getRandomFloatInclusive } from "./lib/Utils";
import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";

export class SecretSantaAssigner {
    private santas: Santa[];
    private santasForAssignment: Santa[];
    private assignments: SecretSantaAssignment[];

    constructor() {
        this.santas = [];
        this.santasForAssignment = [];
    }

    public addSanta(santa: Santa) {
        this.santas.push(santa);
    }

    public assign() {
        this.assignments = [];
        this.prepareAssignment();
        this.assignSecretSantas();
    }

    public getAssignments(): SecretSantaAssignment[] {
        return this.assignments;
    }

    private prepareAssignment() {
        this.santasForAssignment = [];
        this.copySantasForAssignment();
        this.randomizeAssignableSantas();
    }

    private copySantasForAssignment() {
        let santa: Santa;
        for (santa of this.santas) {
            this.santasForAssignment.push(santa);
        }
    }

    private randomizeAssignableSantas() {
        this.santasForAssignment.sort(this.randomSortMethod);
    }

    private randomSortMethod(left: Santa, right: Santa): number {
        return getRandomFloatInclusive(-1, 1);
    }

    private assignSecretSantas() {
        const lengthSubOne: number = (this.santasForAssignment.length - 1);
        for (let i = 0, ii = lengthSubOne; i < ii; i++) {
            this.addAssignmentByGifterAndReceiverIndex(i, i + 1);
        }
        this.addAssignmentByGifterAndReceiverIndex(lengthSubOne, 0);
    }

    private addAssignmentByGifterAndReceiverIndex(gifterIndex: number, receiverIndex: number) {
        const gifter: Santa = this.santasForAssignment[gifterIndex];
        const receiver: Santa = this.santasForAssignment[receiverIndex];
        const assignment: SecretSantaAssignment = SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver);
        this.addAssignment(assignment);
    }

    private addAssignment(assignment: SecretSantaAssignment) {
        this.assignments.push(assignment);
    }
}
