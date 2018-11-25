"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
const LastYearHandler_1 = require("./LastYearHandler");
const SantaReader_1 = require("./SantaReader");
const SecretSantaAssigner_1 = require("./SecretSantaAssigner");
const SecretSantaPrinter_1 = require("./SecretSantaPrinter");
const filePath = process.argv[2];
const santas = SantaReader_1.SantaReader.fromFile(filePath);
const lastYearHandler = LastYearHandler_1.LastYearHandler.fromFile(filePath);
lastYearHandler.assignUnavailableSantas(santas);
const assigner = SecretSantaAssigner_1.SecretSantaAssigner.fromSantas(santas);
assigner.assign();
SecretSantaPrinter_1.SecretSantaPrinter.printAssignments(assigner.getAssignments());
//# sourceMappingURL=run.js.map