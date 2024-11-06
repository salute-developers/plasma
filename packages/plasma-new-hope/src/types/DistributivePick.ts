// https://github.com/microsoft/TypeScript/issues/28339
export type DistributivePick<T, K extends keyof T> = T extends unknown ? Pick<T, K> : never;
