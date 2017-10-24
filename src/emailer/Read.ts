export default class Read {
    public static from(stream: NodeJS.ReadableStream) {
        const obj = new this();
        obj.setStream(stream);
        obj.read();
        return obj;
    }

    private stream: NodeJS.ReadableStream;
    private data: string;
    private onReadComplete: Promise<this>;

    public onComplete(callback: (reader: this) => void) {
        this.onReadComplete.then(callback);
    }

    public getData() {
        return this.data;
    }

    protected setStream(stream: NodeJS.ReadableStream) {
        this.stream = stream;
    }

    protected read() {
        this.data = "";
        this.stream.setEncoding("utf8");
        this.stream.on("readable", () => {
            this.readPartFromStream();
        });
        this.assignOnEnd();
    }

    private readPartFromStream() {
        const chunk = this.stream.read();
        if (chunk !== null) {
            this.data += chunk;
        }
    }

    private assignOnEnd() {
        this.onReadComplete = new Promise<this>((resolve, reject) => {
            this.stream.on("end", () => {
                resolve(this);
            });
        });
    }
}
