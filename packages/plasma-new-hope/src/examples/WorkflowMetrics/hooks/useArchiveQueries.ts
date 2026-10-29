import { useEffect, useState } from 'react';

import type { MetricsClient } from '../api/client';
import type { MetricsFilter } from '../archive/selectors';
import type { ArchiveManifest, DailySeries } from '../archive/types';
import type { Measurement } from '../model/types';
import { pageSize } from '../ui/constants';

interface LoadedRows<T> {
    key: string;
    rows: T[];
    loading: boolean;
    error: string;
}

type SeriesQuery = {
    client: MetricsClient;
    history: ArchiveManifest | null;
    from: string;
    to: string;
    validRange: boolean;
    seriesKey: string;
};

export function useSeriesRows({ client, history, from, to, validRange, seriesKey }: SeriesQuery) {
    const [seriesState, setSeriesState] = useState<LoadedRows<DailySeries>>({
        key: '',
        rows: [],
        loading: false,
        error: '',
    });

    const [seriesRevision, setSeriesRevision] = useState(0);

    useEffect(() => {
        if (!history || !validRange) return undefined;
        const controller = new AbortController();
        setSeriesState({ key: seriesKey, rows: [], loading: true, error: '' });
        void client.loadSeries(history, from, to, controller.signal).then(
            (rows) => {
                if (!controller.signal.aborted) setSeriesState({ key: seriesKey, rows, loading: false, error: '' });
            },
            (reason) => {
                if (!controller.signal.aborted) {
                    setSeriesState({
                        key: seriesKey,
                        rows: [],
                        loading: false,
                        error: reason instanceof Error ? reason.message : String(reason),
                    });
                }
            },
        );
        return () => controller.abort();
    }, [client, history, from, to, validRange, seriesKey, seriesRevision]);
    return { state: seriesState, retry: () => setSeriesRevision((value) => value + 1) };
}

type JobsQuery = {
    client: MetricsClient;
    history: ArchiveManifest | null;
    seriesReady: boolean;
    series: DailySeries[];
    filter: MetricsFilter;
    jobPage: number;
    jobsKey: string;
};

export function useJobRows({ client, history, seriesReady, series, filter, jobPage, jobsKey }: JobsQuery) {
    const [jobsState, setJobsState] = useState<LoadedRows<Measurement>>({
        key: '',
        rows: [],
        loading: false,
        error: '',
    });

    const [jobsRevision, setJobsRevision] = useState(0);

    useEffect(() => {
        if (!history || !seriesReady) return undefined;
        const controller = new AbortController();
        setJobsState({ key: jobsKey, rows: [], loading: true, error: '' });
        void client.loadJobsPage(history, series, filter, jobPage, pageSize, controller.signal).then(
            ({ rows }) => {
                if (!controller.signal.aborted) setJobsState({ key: jobsKey, rows, loading: false, error: '' });
            },
            (reason) => {
                if (!controller.signal.aborted) {
                    setJobsState({
                        key: jobsKey,
                        rows: [],
                        loading: false,
                        error: reason instanceof Error ? reason.message : String(reason),
                    });
                }
            },
        );
        return () => controller.abort();
    }, [client, history, seriesReady, series, filter, jobPage, jobsKey, jobsRevision]);
    return { state: jobsState, retry: () => setJobsRevision((value) => value + 1) };
}
