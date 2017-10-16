export class InputWorker {
    public static fromPromise(promise: Promise<void>) {
        const inputWorker = new this();
        inputWorker.setPromise(promise);
        return inputWorker;
    }

    private promise: Promise<void>;

    public onComplete(callback: () => void) {
        this.promise.then(callback);
    }

    protected setPromise(promise: Promise<void>) {
        this.promise = promise;
    }
}
