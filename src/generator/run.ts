import { Generator } from "./Generator";
import * as process from "process";

let filePath = process.argv[2];

let generator = new Generator();
generator.readInSantaDataFromFile(filePath);
generator.assignSecretSantas();
generator.printSecretSantas();
