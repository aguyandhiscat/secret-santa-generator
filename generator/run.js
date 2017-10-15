"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
const Generator_1 = require("./Generator");
const filePath = process.argv[2];
const generator = new Generator_1.Generator();
generator.readInSantaDataFromFile(filePath);
generator.assignSecretSantas();
generator.printSecretSantas();
//# sourceMappingURL=run.js.map