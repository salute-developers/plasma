import { StatsMap } from '../statistics';

export function isStatsMap(obj: unknown): obj is StatsMap {
    return typeof obj === 'object' && obj !== null && '__statsMap' in obj;
}
