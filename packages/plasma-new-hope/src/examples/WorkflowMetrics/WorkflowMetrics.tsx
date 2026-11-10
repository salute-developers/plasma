import React from 'react';

import { useWorkflowMetrics } from './hooks/useWorkflowMetrics';
import { ArchivePanel } from './ui/ArchivePanel';
import { ChartPanel } from './ui/ChartPanel';
import { FiltersPanel } from './ui/FiltersPanel';
import { JobsPanel } from './ui/JobsPanel';
import { MetricsHeader, MetricsFooter } from './ui/PageLayout';
import { SeriesStatus } from './ui/SeriesStatus';
import { SummaryCards } from './ui/SummaryCards';
import { Page } from './ui/layout.styles';

export function WorkflowMetrics({ dataBaseUrl = './workflow-metrics' }: { dataBaseUrl?: string }) {
    const state = useWorkflowMetrics(dataBaseUrl);
    return (
        <Page>
            <MetricsHeader />
            <ArchivePanel {...state.archive} />
            {state.archive.history && (
                <>
                    <FiltersPanel {...state.filters} />
                    {state.filters.validRange && !state.series.ready && (
                        <SeriesStatus error={state.series.error} onRetry={state.series.retry} />
                    )}
                    {state.series.ready && (
                        <>
                            <SummaryCards {...state.summary} />
                            <ChartPanel {...state.chart} />
                            <JobsPanel {...state.jobs} />
                        </>
                    )}
                </>
            )}
            <MetricsFooter />
        </Page>
    );
}
