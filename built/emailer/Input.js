"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputWorker_1 = require("./InputWorker");
class Input {
    static read() {
        this.data = "";
        this.readFromStdin();
        return InputWorker_1.InputWorker.fromPromise(this.getNewEndPromise());
    }
    static getLines() {
        return this.lines;
    }
    static readFromStdin() {
        this.stdin.setEncoding("utf8");
        this.stdin.on("readable", () => {
            const chunk = this.stdin.read();
            if (chunk !== null) {
                this.data += chunk;
            }
        });
    }
    static getNewEndPromise() {
        return new Promise((resolve, reject) => {
            this.stdin.on("end", () => {
                this.createLinesFromData();
                resolve();
            });
        });
    }
    static createLinesFromData() {
        this.lines = this.data.trim().split("\n");
    }
}
Input.stdin = process.stdin;
exports.Input = Input;
//# sourceMappingURL=Input.js.map