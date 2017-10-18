"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = require("../../emailer/Input");
const MockStdin_1 = require("../helpers/MockStdin");
fdescribe("The Reader", () => {
    it("should read in lines from stdin", () => {
        const stdin = new MockStdin_1.MockStdin();
        Input_1.Input.stdin = stdin;
        Input_1.Input.read();
        stdin.send("Hi");
        stdin.end();
        console.log("InData", Input_1.Input.getLines());
    });
});
//# sourceMappingURL=Input.spec.js.map