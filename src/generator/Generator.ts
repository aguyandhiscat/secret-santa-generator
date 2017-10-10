import { SantaReader } from "./SantaReader";
import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";
import { SecretSantaAssigner } from "./SecretSantaAssigner";
import { SecretSantaPrinter } from "./SecretSantaPrinter";

export class Generator {
    santas: Array<Santa>;
    secretSantaAssigner: SecretSantaAssigner;

    constructor() {
        this.santas = new Array<Santa>();
        this.secretSantaAssigner = new SecretSantaAssigner();
    }

    readInSantaDataFromFile(path: string) {
        this.santas = SantaReader.fromFile(path);
    }

    assignSecretSantas() {
        this.addSantasToAssigner();
        this.secretSantaAssigner.assign();
    }

    addSantasToAssigner() {
        let santa: Santa;
        for (santa of this.santas) {
            this.secretSantaAssigner.addSanta(santa);
        }
    }

    printSecretSantas() {
        let assignments: Array<SecretSantaAssignment> = this.secretSantaAssigner.getAssignments();
        SecretSantaPrinter.printAssignments(assignments);
    }
}
