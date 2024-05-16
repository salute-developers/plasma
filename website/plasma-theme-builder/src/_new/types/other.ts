export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export type ValueOf<T> = T[keyof T];

declare global {
    interface ObjectConstructor {
        entries<T extends object>(o: T): Entries<T>;
        keys<T extends object>(o: T): Array<keyof T>;
    }
}
