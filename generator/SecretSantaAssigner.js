"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./lib/Utils");
const SecretSantaAssignment_1 = require("./SecretSantaAssignment");
class SecretSantaAssigner {
    static fromSantas(santas) {
        const assigner = new this();
        assigner.addSantas(santas);
        return assigner;
    }
    constructor() {
        this.santas = [];
        this.santasForAssignment = [];
    }
    addSantas(santas) {
        santas.forEach((santa) => {
            this.addSanta(santa);
        });
    }
    addSanta(santa) {
        this.santas.push(santa);
    }
    assign() {
        this.assignments = [];
        this.prepareAssignment();
        this.assignSecretSantas();
    }
    getAssignments() {
        return this.assignments;
    }
    prepareAssignment() {
        this.santasForAssignment = [];
        this.copySantasForAssignment();
        this.randomizeAssignableSantas();
    }
    copySantasForAssignment() {
        let santa;
        for (santa of this.santas) {
            this.santasForAssignment.push(santa);
        }
    }
    randomizeAssignableSantas() {
        this.santasForAssignment.sort(this.randomSortMethod);
    }
    randomSortMethod(left, right) {
        return Utils_1.getRandomFloatInclusive(-1, 1);
    }
    assignSecretSantas() {
        const lengthSubOne = (this.santasForAssignment.length - 1);
        for (let i = 0, ii = lengthSubOne; i < ii; i++) {
            this.addAssignmentByGifterAndReceiverIndex(i, i + 1);
        }
        this.addAssignmentByGifterAndReceiverIndex(lengthSubOne, 0);
    }
    addAssignmentByGifterAndReceiverIndex(gifterIndex, receiverIndex) {
        const gifter = this.santasForAssignment[gifterIndex];
        const receiver = this.santasForAssignment[receiverIndex];
        const assignment = SecretSantaAssignment_1.SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver);
        this.addAssignment(assignment);
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
}
exports.SecretSantaAssigner = SecretSantaAssigner;
//# sourceMappingURL=SecretSantaAssigner.js.map