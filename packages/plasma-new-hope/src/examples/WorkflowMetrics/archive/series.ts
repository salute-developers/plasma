import type { Grouping, Measurement } from '../model/types.ts';
import { bucketDate } from '../utils/dates.ts';
import { summarize, summarizeSpecFiles } from '../utils/statistics.ts';

import type { DailySeries } from './types.ts';

export function buildDailySeries(measurements: Measurement[]): DailySeries[] {
    const groups = new Map<string, Measurement[]>();
    measurements.forEach((measurement) => {
        const key = `${measurement.createdAt.slice(0, 10)}/${measurement.packageName}/${measurement.browser}`;
        const rows = groups.get(key) || [];
        rows.push(measurement);
        groups.set(key, rows);
    });
    return [...groups.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, rows]) => {
            const timed = rows.filter((row) => row.jobConclusion === 'success' && row.jobSeconds !== null);
            return {
                day: rows[0].createdAt.slice(0, 10),
                packageName: rows[0].packageName,
                browser: rows[0].browser,
                runIds: [...new Set(rows.map((row) => row.runId))].sort((a, b) => a - b),
                jobs: rows.length,
                success: rows.filter((row) => row.jobConclusion === 'success').length,
                errors: rows.filter((row) => ['failure', 'timed_out'].includes(row.jobConclusion)).length,
                seconds: timed.map((row) => row.jobSeconds!).sort((a, b) => a - b),
                specFiles: summarizeSpecFiles(timed),
            };
        });
}

/** Merge spec coverage across days and browsers without counting missing values as known. */
export function summarizeSeriesSpecFiles(rows: DailySeries[]) {
    const known = rows.flatMap((row) => (row.specFiles ? [row.specFiles] : []));
    return known.length
        ? {
              minimum: Math.min(...known.map((value) => value.minimum)),
              maximum: Math.max(...known.map((value) => value.maximum)),
              estimated: known.some((value) => value.estimated),
              known: known.reduce((sum, value) => sum + value.known, 0),
              total: rows.reduce((sum, row) => sum + row.seconds.length, 0),
          }
        : null;
}

/** Recompute percentiles from samples, never from daily percentiles. Filter whole UTC days first. */
export function aggregateDailySeries(rows: DailySeries[], grouping: Grouping) {
    const groups = new Map<string, { date: string; series: string; rows: DailySeries[] }>();
    rows.forEach((row) => {
        if (!row.seconds.length) return;
        const date = bucketDate(row.day, grouping);
        const series = `${row.packageName} · ${row.browser}`;
        const key = `${date}/${series}`;
        const group = groups.get(key) || { date, series, rows: [] };
        group.rows.push(row);
        groups.set(key, group);
    });
    return [...groups.values()]
        .map(({ date, series, rows: grouped }) => {
            const values = grouped.flatMap((row) => row.seconds.map((seconds) => seconds / 60));
            return {
                date,
                series,
                count: values.length,
                specFiles: summarizeSeriesSpecFiles(grouped),
                ...summarize(values)!,
            };
        })
        .sort((a, b) => a.date.localeCompare(b.date) || a.series.localeCompare(b.series));
}
