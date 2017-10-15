import * as process from "process";
import { Generator } from "./Generator";

const filePath: string = process.argv[2];

const generator: Generator = new Generator();
generator.readInSantaDataFromFile(filePath);
generator.assignSecretSantas();
generator.printSecretSantas();
