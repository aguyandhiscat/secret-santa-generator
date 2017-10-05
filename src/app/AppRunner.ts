import { SantaReader } from "./SantaReader";
import { Santa } from "./Santa";
import { SecretSantaAssignment } from "./SecretSantaAssignment";
import { SecretSantaAssigner } from "./SecretSantaAssigner";
import { SecretSantaPrinter } from "./SecretSantaPrinter";

export class AppRunner {
    dataFilePath: string;
    santas: Array<Santa>;
    secretSantaAssigner: SecretSantaAssigner;

    constructor() {
        this.santas = new Array<Santa>();
        this.secretSantaAssigner = new SecretSantaAssigner();
    }

    setPathToSantaData(path: string) {
        this.dataFilePath = path;
    }

    run() {
        this.readInSantaData();
        this.assignSecretSantas();
        this.printSecretSantas();
    }

    readInSantaData() {
        this.santas = SantaReader.fromFile(this.dataFilePath);
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
