import { Input } from "../../emailer/Input";
import { MockStdin } from "../helpers/MockStdin";

fdescribe("The Reader", () => {
    it("should read in lines from stdin", () => {
        const stdin = new MockStdin();
        Input.stdin = stdin;

        Input.read();
        stdin.send("Hi");
        stdin.end();

        console.log("InData", Input.getLines());
    });
});
