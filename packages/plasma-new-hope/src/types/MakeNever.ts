export type MakeNever<T> = {
    [K in keyof T]: never;
};
