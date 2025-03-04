// https://github.com/microsoft/TypeScript/issues/28339
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
