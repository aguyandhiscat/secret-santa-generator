"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecretSantaAssignment_1 = require("./SecretSantaAssignment");
const Utils_1 = require("./lib/Utils");
class SecretSantaAssigner {
    constructor() {
        this.santas = new Array();
        this.santasForAssignment = new Array();
    }
    addSanta(santa) {
        this.santas.push(santa);
    }
    assign() {
        this.assignments = Array();
        this.prepareAssignment();
        this.assignSecretSantas();
    }
    prepareAssignment() {
        this.santasForAssignment = new Array();
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
    getAssignments() {
        return this.assignments;
    }
}
exports.SecretSantaAssigner = SecretSantaAssigner;
//# sourceMappingURL=SecretSantaAssigner.js.map