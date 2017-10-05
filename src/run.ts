import { AppRunner } from "./app/AppRunner";
import * as process from "process";

let app = new AppRunner();
app.setPathToSantaData(process.argv[2]);
app.run();
