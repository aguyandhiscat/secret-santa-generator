import * as process from "process";
import { LastYearHandler } from "./LastYearHandler";
import { Santa } from "./Santa";
import { SantaReader } from "./SantaReader";
import { SecretSantaAssigner } from "./SecretSantaAssigner";
import { SecretSantaPrinter } from "./SecretSantaPrinter";

const filePath: string = process.argv[2];

const santas: Santa[] = SantaReader.fromFile(filePath);
const lastYearHandler: LastYearHandler = LastYearHandler.fromFile(filePath);
lastYearHandler.assignUnavailableSantas(santas);
const assigner: SecretSantaAssigner = SecretSantaAssigner.fromSantas(santas);
assigner.assign();

SecretSantaPrinter.printAssignments(assigner.getAssignments());
