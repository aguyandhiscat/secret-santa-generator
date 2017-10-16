import { Input } from "../../emailer/Input";

fdescribe("The Reader", () => {
    it("should read in lines from stdin", () => {
        process.stdout.write("Line1\n");
        process.stdout.write("Line2\n");
        process.stdout.write("Line3\n");

        // Reader.readInLines();
    });
});
