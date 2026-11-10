import type { Duration, Grouping, Measurement, Statistic } from '../model/types.ts';

import { bucketDate } from './dates.ts';

export function summarize(values: number[]): Record<Statistic, number> | null {
    if (!values.length) {
        return null;
    }
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return {
        // Nearest-rank percentile: each point represents a real measured duration.
        p90: sorted[Math.ceil(sorted.length * 0.9) - 1],
        median: sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2,
        mean: sorted.reduce((sum, value) => sum + value, 0) / sorted.length,
    };
}

export function summarizeSpecFiles(measurements: Measurement[]) {
    const known = measurements.flatMap((measurement) => (measurement.specFiles ? [measurement.specFiles] : []));
    if (!known.length) return null;
    return {
        minimum: Math.min(...known.map((value) => value.count)),
        maximum: Math.max(...known.map((value) => value.count)),
        estimated: known.some((value) => value.basis === 'history'),
        known: known.length,
        total: measurements.length,
    };
}

export function aggregate(measurements: Measurement[], duration: Duration, grouping: Grouping) {
    const groups = new Map<string, { date: string; series: string; values: number[]; measurements: Measurement[] }>();
    measurements.forEach((measurement) => {
        const seconds = measurement[duration];
        if (seconds === null) {
            return;
        }
        const date = bucketDate(measurement.createdAt, grouping);
        const series = `${measurement.packageName} · ${measurement.browser}`;
        const key = `${date}/${series}`;
        const group = groups.get(key) || { date, series, values: [], measurements: [] };
        group.values.push(seconds / 60);
        group.measurements.push(measurement);
        groups.set(key, group);
    });
    return [...groups.values()]
        .map(({ date, series, values, measurements: groupMeasurements }) => ({
            date,
            series,
            count: values.length,
            specFiles: summarizeSpecFiles(groupMeasurements),
            ...summarize(values)!,
        }))
        .sort((a, b) => a.date.localeCompare(b.date) || a.series.localeCompare(b.series));
}
