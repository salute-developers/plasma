import { Config } from '../config';

export function intersectStabilizers(config: Config, taskAvailableStabilizers?: string[]): string[] {
    const configStabilizers = config.stabilizers;

    return configStabilizers.filter((stabilizer) => (taskAvailableStabilizers || []).includes(stabilizer));
}
