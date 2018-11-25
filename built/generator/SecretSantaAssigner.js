"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const SecretSantaAssignment_1 = require("./SecretSantaAssignment");
class SecretSantaAssigner {
    static fromSantas(santas) {
        const assigner = new this();
        assigner.addSantas(santas);
        return assigner;
    }
    constructor() {
        this.santas = [];
        this.assignablePool = [];
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
        this.assignablePool = [];
        this.copySantasToAssignable();
    }
    copySantasToAssignable() {
        let santa;
        for (santa of this.santas) {
            this.assignablePool.push(santa);
        }
    }
    assignSecretSantas() {
        for (const gifter of this.santas) {
            const receiver = this.assignReceiverForGifterAndReturnReceiver(gifter);
            this.removeSantaFromAssignablePool(receiver);
        }
    }
    assignReceiverForGifterAndReturnReceiver(gifter) {
        const receiver = this.getReceiverForGifter(gifter);
        const assignment = SecretSantaAssignment_1.SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver);
        this.addAssignment(assignment);
        return receiver;
    }
    getReceiverForGifter(gifter) {
        const poolOfSantas = this.getPoolOfReceiversForSanta(gifter);
        if (poolOfSantas.length <= 0) {
            throw new Error("Must rerun. A Gifter was unable to be assigned a Receiver.");
        }
        else {
            return this.getRandomSantaFromPool(poolOfSantas);
        }
    }
    getPoolOfReceiversForSanta(santa) {
        const unavailable = santa.getUnavailableReceivers();
        return _.difference(this.assignablePool, unavailable);
    }
    getRandomSantaFromPool(pool) {
        const randomIndex = _.random(0, pool.length - 1, false);
        return pool[randomIndex];
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
    removeSantaFromAssignablePool(santa) {
        const index = this.assignablePool.indexOf(santa);
        this.assignablePool.splice(index, 1);
    }
}
exports.SecretSantaAssigner = SecretSantaAssigner;
//# sourceMappingURL=SecretSantaAssigner.js.map