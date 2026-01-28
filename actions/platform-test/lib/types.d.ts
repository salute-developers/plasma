declare type LocalRunTests = {
    command: 'open-ct';
    platform: 'sberbox' | 'sberportal' | 'mobile';
};
declare type DockerRunTests = {
    command: 'run-ct';
    platform: never;
};
export declare type Params = {
    config: string;
    [key: string]: string;
} & (LocalRunTests | DockerRunTests);
export {};
