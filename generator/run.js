"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Generator_1 = require("./Generator");
const process = require("process");
let filePath = process.argv[2];
let generator = new Generator_1.Generator();
generator.readInSantaDataFromFile(filePath);
generator.assignSecretSantas();
generator.printSecretSantas();
//# sourceMappingURL=run.js.map