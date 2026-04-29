export type NeverProps<T> = {
    [Key in keyof T]?: never;
};
