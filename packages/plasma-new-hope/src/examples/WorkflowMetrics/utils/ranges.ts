import type { TimeRange } from '../model/types.ts';

export const fullRange = (from: string, to: string): TimeRange => ({
    from: `${from}T00:00:00.000Z`,
    to: `${to}T23:59:59.000Z`,
});

export function mergeRanges(ranges: TimeRange[]): TimeRange[] {
    const result: TimeRange[] = [];
    [...ranges]
        .sort((a, b) => Date.parse(a.from) - Date.parse(b.from))
        .forEach((range) => {
            const last = result[result.length - 1];
            if (last && Date.parse(range.from) <= Date.parse(last.to) + 1000) {
                last.to = new Date(Math.max(Date.parse(last.to), Date.parse(range.to))).toISOString();
            } else {
                result.push({ ...range });
            }
        });
    return result;
}

export function missingRanges(range: TimeRange, coverage: TimeRange[]): TimeRange[] {
    const result: TimeRange[] = [];
    let cursor = Date.parse(range.from);
    const end = Date.parse(range.to);
    mergeRanges(coverage).forEach((covered) => {
        const start = Date.parse(covered.from);
        const finish = Date.parse(covered.to);
        if (finish < cursor || start > end) {
            return;
        }
        if (start > cursor) {
            result.push({ from: new Date(cursor).toISOString(), to: new Date(start - 1000).toISOString() });
        }
        cursor = Math.max(cursor, finish + 1000);
    });
    if (cursor <= end) {
        result.push({ from: new Date(cursor).toISOString(), to: new Date(end).toISOString() });
    }
    return result;
}
