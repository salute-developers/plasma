import { useMemo, useState } from 'react';

import type { DateShortcutItem } from '../../../components/DatePicker/RangeDate/RangeDate.types';
import { aggregateDailySeries, summarizeSeriesSpecFiles } from '../archive/series';
import { selectDailySeries } from '../archive/selectors';
import type { DailySeries } from '../archive/types';
import { collectionRevision } from '../model/constants';
import type { Grouping, Statistic } from '../model/types';
import {
    bucketDate,
    firstFilterDate,
    getBuckets,
    inputDate,
    isDate,
    minimumFilterDate,
    shiftDays,
} from '../utils/dates';
import { fullRange, missingRanges } from '../utils/ranges';
import { summarize } from '../utils/statistics';
import { colors } from '../ui/constants';

import { useArchiveSource } from './useArchiveSource';
import { useSeriesRows, useJobRows } from './useArchiveQueries';

/** Coordinates filters, exact chart statistics and keyed pagination; request lifecycles live in separate hooks. */
export function useWorkflowMetrics(dataBaseUrl: string) {
    const {
        client,
        workflow,
        setWorkflow,
        history,
        archiveKey,
        busy,
        error,
        from,
        setFrom,
        to,
        setTo,
        selectedPackages,
        setSelectedPackages,
        downloading,
        downloadError,
        downloadHistory,
        retryArchive,
    } = useArchiveSource(dataBaseUrl);
    const [browser, setBrowser] = useState('chromium');
    const [statistic, setStatistic] = useState<Statistic>('p90');
    const [grouping, setGrouping] = useState<Grouping>('week');
    const [jobPosition, setJobPosition] = useState({ key: '', page: 0 });
    const [pointPosition, setPointPosition] = useState({ key: '', page: 0 });
    const [showPoints, setShowPoints] = useState(false);
    const packages = history?.packages || [];

    const packageColors = useMemo(() => new Map(packages.map((name, index) => [name, colors[index % colors.length]])), [
        packages,
    ]);

    const dateRangeValue = useMemo<[string, string]>(() => [inputDate(from), inputDate(to)], [from, to]);

    const datePickerMin = useMemo(() => new Date(`${firstFilterDate(history?.from || minimumFilterDate)}T00:00:00`), [
        history?.from,
    ]);

    const dateShortcuts = useMemo<DateShortcutItem[]>(() => {
        if (!history) return [];
        const minimum = firstFilterDate(history.from);
        return [
            { label: '30 дней', days: 30 },
            { label: '90 дней', days: 90 },
            { label: 'Полгода', days: 180 },
            { label: 'Год', days: 365 },
            { label: 'Вся история', days: null },
        ].map(
            ({ label, days }): DateShortcutItem => {
                const start = days === null ? minimum : shiftDays(history.to, 1 - days);
                return {
                    label,
                    value: [
                        new Date(`${start < minimum ? minimum : start}T00:00:00`),
                        new Date(`${history.to}T00:00:00`),
                    ],
                };
            },
        );
    }, [history?.from, history?.to]);

    const validRange = isDate(from) && isDate(to) && from >= minimumFilterDate && from <= to;

    const seriesKey = history ? `${archiveKey}/${history.updatedAt}/${from}/${to}` : '';
    const { state: seriesState, retry: retrySeries } = useSeriesRows({
        client,
        history,
        from,
        to,
        validRange,
        seriesKey,
    });
    const seriesReady = validRange && seriesState.key === seriesKey && !seriesState.loading && !seriesState.error;

    const filter = useMemo(() => ({ from, to, packages: selectedPackages, browser }), [
        from,
        to,
        selectedPackages,
        browser,
    ]);

    const matching = useMemo(() => (seriesReady ? selectDailySeries(seriesState.rows, filter) : []), [
        seriesState.rows,
        seriesReady,
        filter,
    ]);

    const values = useMemo(() => matching.flatMap((row) => row.seconds.map((seconds) => seconds / 60)), [matching]);

    const summary = useMemo(() => summarize(values), [values]);

    const points = useMemo(() => aggregateDailySeries(matching, grouping), [matching, grouping]);

    const jobCount = useMemo(() => matching.reduce((sum, row) => sum + row.success, 0), [matching]);

    const runCount = useMemo(() => new Set(matching.flatMap((row) => row.runIds)).size, [matching]);

    const errorCount = useMemo(() => matching.reduce((sum, row) => sum + row.errors, 0), [matching]);

    const specCounts = useMemo(() => {
        if (!selectedPackages.includes('plasma-b2c')) return undefined;
        const grouped = new Map<string, DailySeries[]>();
        matching.forEach((row) => {
            if (row.packageName !== 'plasma-b2c' || !row.seconds.length) return;
            const date = bucketDate(row.day, grouping);
            const group = grouped.get(date) || [];
            group.push(row);
            grouped.set(date, group);
        });
        return new Map([...grouped].map(([date, rows]) => [date, summarizeSeriesSpecFiles(rows)]));
    }, [matching, grouping, selectedPackages]);

    const gaps = useMemo(
        () =>
            history
                ? missingRanges(
                      fullRange(history.from, history.to),
                      history.collectionRevision === collectionRevision ? history.coverage : [],
                  )
                : [],
        [history],
    );

    const pageKey = JSON.stringify([seriesKey, selectedPackages, browser, grouping]);

    const jobPage = jobPosition.key === pageKey ? jobPosition.page : 0;

    const pointPage = pointPosition.key === pageKey ? pointPosition.page : 0;

    const setJobPage = (page: number) => setJobPosition({ key: pageKey, page });

    const setPointPage = (page: number) => setPointPosition({ key: pageKey, page });

    const jobsKey = `${pageKey}/${jobPage}`;
    const { state: jobsState, retry: retryJobs } = useJobRows({
        client,
        history,
        seriesReady,
        series: seriesState.rows,
        filter,
        jobPage,
        jobsKey,
    });
    const jobsLoading = jobsState.key !== jobsKey || jobsState.loading;

    const jobMeasurements = jobsState.key === jobsKey && !jobsState.loading && !jobsState.error ? jobsState.rows : [];
    return {
        archive: {
            workflow,
            setWorkflow,
            history,
            busy,
            error,
            downloading,
            downloadError,
            downloadHistory,
            retryArchive,
            gaps,
        },
        filters: {
            dateRangeValue,
            datePickerMin,
            dateShortcuts,
            validRange,
            browser,
            setBrowser,
            statistic,
            setStatistic,
            grouping,
            setGrouping,
            packages,
            selectedPackages,
            setSelectedPackages,
            packageColors,
            setFrom,
            setTo,
        },
        series: {
            ready: seriesReady,
            error: seriesState.key === seriesKey ? seriesState.error : '',
            retry: retrySeries,
        },
        summary: { runCount, measurementCount: values.length, value: summary?.[statistic], statistic, errorCount },
        chart: {
            points,
            buckets: validRange ? getBuckets(from, to, grouping) : [],
            statistic,
            grouping,
            packageColors,
            specCounts,
            pointPage,
            setPointPage,
            showPoints,
            setShowPoints,
        },
        jobs: {
            jobMeasurements,
            jobsLoading,
            error: jobsState.key === jobsKey ? jobsState.error : '',
            retryJobs,
            jobPage,
            setJobPage,
            jobCount,
        },
    };
}

export type WorkflowMetricsState = ReturnType<typeof useWorkflowMetrics>;
