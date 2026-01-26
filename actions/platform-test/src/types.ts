type LocalRunTests = {
    command: 'open';
    platform: 'sberbox' | 'sberportal' | 'mobile';
};

type DockerRunTests = {
    command: 'run';
    platform: never;
};

export type Params = {
    config: string;
    [key: string]: string;
} & (LocalRunTests | DockerRunTests);
