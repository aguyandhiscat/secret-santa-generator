import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";
import { getRandomFloatInclusive } from "./lib/Utils";

export class SecretSantaAssigner {
    santas: Array<Santa>;
    randomlySortedSantas: Array<Santa>;
    assignments: Array<SecretSantaAssignment>;

    constructor() {
        this.santas = new Array<Santa>();
    }

    addSanta(santa: Santa) {
        this.santas.push(santa);
    }

    assign() {
        this.randomlySortedSantas = new Array<Santa>();
        this.copySantasToRandomList();
        this.randomlySortSantas();

        this.assignments = Array<SecretSantaAssignment>();
        this.assignSecretSantas();
    }

    copySantasToRandomList() {
        let santa: Santa;
        for(santa of this.santas) {
            this.randomlySortedSantas.push(santa);
        }
    }

    randomlySortSantas() {
        this.randomlySortedSantas.sort(this.randomSortMethod);
    }

    assignSecretSantas() {
        
    }

    randomSortMethod(left: Santa, right: Santa): number {
        return getRandomFloatInclusive(-1, 1);
    }

    getAssignments(): Array<SecretSantaAssignment> {
        return this.assignments;
    }
}
