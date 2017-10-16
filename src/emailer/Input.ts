import { InputWorker } from "./InputWorker";

export class Input {
    public static read() {
        let data = "";
        process.stdin.setEncoding("utf8");
        process.stdin.on("readable", () => {
            const chunk = process.stdin.read();
            if (chunk !== null) {
                data += chunk;
            }
        });

        const dataEndPromise = new Promise<void>((resolve, reject) => {
            process.stdin.on("end", () => {
                resolve();
            });
        }).then(() => {
            data = data.trim();
            this.lines = data.split("\n");
        });

        return InputWorker.fromPromise(dataEndPromise);
    }

    public static getLines(): string[] {
        return this.lines;
    }

    private static lines: string[];
}
