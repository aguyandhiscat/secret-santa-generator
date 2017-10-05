"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppRunner_1 = require("./app/AppRunner");
const process = require("process");
let app = new AppRunner_1.AppRunner();
app.setPathToSantaData(process.argv[2]);
app.run();
//# sourceMappingURL=run.js.map