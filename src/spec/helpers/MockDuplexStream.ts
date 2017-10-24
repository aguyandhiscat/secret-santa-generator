import * as stream from "stream";

export default class MockDuplexStream extends stream.Duplex {
    private data: string;
    // tslint:disable-next-line:variable-name
    private _readableState: any;

    public send(data: string) {
        this.data = data;
        this.emit("readable");
    }

    public read(size?: number): string | Buffer {
        const data = this.data;
        this.data = "";
        return data;
    }

    public end() {
        this.emit("end");
    }
}
