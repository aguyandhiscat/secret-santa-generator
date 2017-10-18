import { InputWorker } from "./InputWorker";

export class Input {
    public static stdin = process.stdin;

    public static read() {
        this.data = "";
        this.readFromStdin();
        return InputWorker.fromPromise(this.getNewEndPromise());
    }

    public static getLines(): string[] {
        return this.lines;
    }

    private static data: string;
    private static dataEndPromise: Promise<void>;
    private static lines: string[];

    private static readFromStdin() {
        this.stdin.setEncoding("utf8");
        this.stdin.on("readable", () => {
            const chunk = this.stdin.read();
            if (chunk !== null) {
                this.data += chunk;
            }
        });
    }

    private static getNewEndPromise(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.stdin.on("end", () => {
                this.createLinesFromData();
                resolve();
            });
        });
    }

    private static createLinesFromData() {
        this.lines = this.data.trim().split("\n");
    }
}
