"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputWorker_1 = require("./InputWorker");
class Input {
    static read() {
        let data = "";
        process.stdin.setEncoding("utf8");
        process.stdin.on("readable", () => {
            const chunk = process.stdin.read();
            if (chunk !== null) {
                data += chunk;
            }
        });
        const dataEndPromise = new Promise((resolve, reject) => {
            process.stdin.on("end", () => {
                resolve();
            });
        }).then(() => {
            data = data.trim();
            this.lines = data.split("\n");
        });
        return InputWorker_1.InputWorker.fromPromise(dataEndPromise);
    }
    static getLines() {
        return this.lines;
    }
}
exports.Input = Input;
//# sourceMappingURL=Input.js.map