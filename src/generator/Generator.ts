import { Santa } from "./Santa";
import { SantaReader } from "./SantaReader";
import { SecretSantaAssigner } from "./SecretSantaAssigner";
import { SecretSantaAssignment } from "./SecretSantaAssignment";
import { SecretSantaPrinter } from "./SecretSantaPrinter";

export class Generator {
    public santas: Santa[];
    public secretSantaAssigner: SecretSantaAssigner;

    constructor() {
        this.santas = [];
        this.secretSantaAssigner = new SecretSantaAssigner();
    }

    public readInSantaDataFromFile(path: string) {
        this.santas = SantaReader.fromFile(path);
    }

    public assignSecretSantas() {
        this.addSantasToAssigner();
        this.secretSantaAssigner.assign();
    }

    public printSecretSantas() {
        const assignments: SecretSantaAssignment[] = this.secretSantaAssigner.getAssignments();
        SecretSantaPrinter.printAssignments(assignments);
    }

    private addSantasToAssigner() {
        let santa: Santa;
        for (santa of this.santas) {
            this.secretSantaAssigner.addSanta(santa);
        }
    }
}
