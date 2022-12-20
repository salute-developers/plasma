export function defer<T extends (() => any) | void>(
    ms = 0,
    stub?: T,
): Promise<T extends () => any ? ReturnType<T> : void> {
    return new Promise((r) => setTimeout(() => r(stub?.()), ms));
}

class Deferred<T, P = void> {
    promise: Promise<T>;

    resolve: (result: T) => void;

    reject: (error: P) => void;

    constructor() {
        let res;
        let rej;

        this.promise = new Promise<T>((resolve, reject) => {
            res = resolve;
            rej = reject;
        });

        this.resolve = (res as unknown) as (result: T) => void;
        this.reject = (rej as unknown) as (error: P) => void;
    }
}

export default Deferred;
