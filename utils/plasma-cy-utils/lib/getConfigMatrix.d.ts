type GetConfigMatrixReturn = {
    [key: string]: string;
};
export declare const getConfigMatrix: <T = {}>(config: T, options?: string[], excludePropsValues?: Record<string, string[]>) => GetConfigMatrixReturn[];
export {};
