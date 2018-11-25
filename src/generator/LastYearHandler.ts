import * as fs from "fs";
import { Santa } from "./Santa";

export class LastYearHandler {
    public static fromFile(fileName: string): LastYearHandler {
        const handler = new this();
        handler.readInJson(fileName);
        handler.objectifyJson();
        return handler;
    }

    private jsonRawSantaData: string;
    private lastYearAssignments: any;
    private santas: Santa[];

    public assignUnavailableSantas(santas: Santa[]) {
        this.santas = santas;
        for (const assignment of this.lastYearAssignments) {
            const giverName: string = assignment[0];
            const receiverName: string = assignment[1];
            this.assignUnavailableForGiverAndReceiverName(giverName, receiverName);
        }
    }

    private assignUnavailableForGiverAndReceiverName(giverName: string, receiverName: string) {
        const giver: Santa = this.findSantaByName(giverName);
        const receiver: Santa = this.findSantaByName(receiverName);
        giver.assignLastYearsSanta(receiver);
    }

    private findSantaByName(name: string): Santa {
        let found: Santa;
        this.santas.forEach((s: Santa) => {
            if (s.name === name) {
                found = s;
            }
        });
        return found;
    }

    private readInJson(fileName: string): void {
        this.jsonRawSantaData = fs.readFileSync(fileName, "utf8");
    }

    private objectifyJson(): void {
        this.lastYearAssignments = JSON.parse(this.jsonRawSantaData).lastyearassignments;
    }
}
