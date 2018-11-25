import * as _ from "lodash";
import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";

export class SecretSantaAssigner {
    public static fromSantas(santas: Santa[]) {
        const assigner = new this();
        assigner.addSantas(santas);
        return assigner;
    }

    private santas: Santa[];
    private assignablePool: Santa[];
    private assignments: SecretSantaAssignment[];

    constructor() {
        this.santas = [];
        this.assignablePool = [];
    }

    public addSantas(santas: Santa[]) {
        santas.forEach((santa: Santa) => {
            this.addSanta(santa);
        });
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
        this.assignablePool = [];
        this.copySantasToAssignable();
    }

    private copySantasToAssignable() {
        let santa: Santa;
        for (santa of this.santas) {
            this.assignablePool.push(santa);
        }
    }

    private assignSecretSantas() {
        for (const gifter of this.santas) {
            const receiver: Santa = this.assignReceiverForGifterAndReturnReceiver(gifter);
            this.removeSantaFromAssignablePool(receiver);
        }
    }

    private assignReceiverForGifterAndReturnReceiver(gifter: Santa): Santa {
        const receiver: Santa = this.getReceiverForGifter(gifter);
        const assignment: SecretSantaAssignment = SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver);
        this.addAssignment(assignment);
        return receiver;
    }

    private getReceiverForGifter(gifter: Santa) {
        const poolOfSantas: Santa[] = this.getPoolOfReceiversForSanta(gifter);
        if (poolOfSantas.length <= 0) {
            throw new Error("Must rerun. A Gifter was unable to be assigned a Receiver.");
        } else {
            return this.getRandomSantaFromPool(poolOfSantas);
        }
    }

    private getPoolOfReceiversForSanta(santa: Santa): Santa[] {
        const unavailable: Santa[] = santa.getUnavailableReceivers();
        return _.difference(this.assignablePool, unavailable);
    }

    private getRandomSantaFromPool(pool: Santa[]): Santa {
        const randomIndex = _.random(0, pool.length - 1, false);
        return pool[randomIndex];
    }

    private addAssignment(assignment: SecretSantaAssignment) {
        this.assignments.push(assignment);
    }

    private removeSantaFromAssignablePool(santa: Santa) {
        const index = this.assignablePool.indexOf(santa);
        this.assignablePool.splice(index, 1);
    }
}
