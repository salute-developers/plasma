import React from 'react';

import { Text } from '../../components/typography/components/Text/Text';
import type { TableColumnData } from '../../../components/Table/Table.types';
import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';
import { Spinner } from '../../components/Spinner/Spinner';
import { Table } from '../../components/Table/Table';
import { Heading } from '../../components/typography/components/Heading/Heading';
import { repository } from '../model/constants';
import { getOutcome } from '../model/jobs';
import { format } from '../utils/formatting';
import type { WorkflowMetricsState } from '../hooks/useWorkflowMetrics';

import { duration, outcomeLabels, outcomeViews } from './constants';
import { TablePagination } from './TablePagination';
import { Panel } from './layout.styles';

const renderContent = (value: unknown) => value as React.ReactNode;
const jobColumns: TableColumnData[] = [
    { id: 'run', label: 'Прогон', width: 150, renderCell: renderContent },
    { id: 'date', label: 'Дата UTC', width: 120 },
    { id: 'packageName', label: 'Пакет', width: 180 },
    { id: 'browser', label: 'Браузер', width: 115 },
    { id: 'react', label: 'React', width: 120 },
    { id: 'branch', label: 'Ветка', width: 160 },
    { id: 'result', label: 'Job', width: 140, renderCell: renderContent },
    { id: 'cypress', label: 'Cypress, мин', width: 130 },
    { id: 'job', label: 'Job, мин', width: 110 },
    { id: 'specFiles', label: 'Spec-файлов в git', width: 165, renderCell: renderContent },
];

export function JobsPanel({
    jobMeasurements,
    jobsLoading,
    error,
    retryJobs,
    jobPage,
    setJobPage,
    jobCount,
}: WorkflowMetricsState['jobs']) {
    const jobRows = jobMeasurements.map((measurement) => ({
        id: String(measurement.jobId),
        run: (
            <Link
                href={`https://github.com/${repository}/actions/runs/${measurement.runId}/job/${measurement.jobId}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                #{measurement.runNumber} · {measurement.attempt}
            </Link>
        ),
        date: measurement.createdAt.slice(0, 10),
        packageName: measurement.packageName,
        browser: measurement.browser,
        react: measurement.reactVersion || 'Стандартный',
        branch: measurement.branch,
        result: (
            <Badge
                size="s"
                appearance="transparent"
                view={outcomeViews[getOutcome(measurement, duration)]}
                text={outcomeLabels[getOutcome(measurement, duration)]}
            />
        ),
        cypress: format(measurement.cypressSeconds === null ? null : measurement.cypressSeconds / 60),
        job: format(measurement.jobSeconds === null ? null : measurement.jobSeconds / 60),
        specFiles: measurement.specFiles ? (
            <Link
                href={`https://github.com/${repository}/commit/${measurement.specFiles.commit}`}
                target="_blank"
                rel="noopener noreferrer"
                title={
                    measurement.specFiles.basis === 'history'
                        ? 'Приблизительная ревизия по истории ветки'
                        : 'SHA прогона'
                }
            >
                {measurement.specFiles.basis === 'history' ? '≈' : ''}
                {format(measurement.specFiles.count)}
            </Link>
        ) : (
            '—'
        ),
    }));
    return (
        <Panel aria-label="Последние jobs">
            <Heading as="h2" size="h5">
                Последние jobs
            </Heading>
            <Text as="p" size="s" className="muted">
                Ссылки ведут к jobs в GitHub Actions. Время указано в минутах.
            </Text>
            {jobsLoading && (
                <div className="loading" role="status">
                    <Spinner size="s" view="accent" />
                    <Text size="s">Загружаем jobs…</Text>
                </div>
            )}
            {error && (
                <div className="notice error" role="alert">
                    <Text as="p">{error}</Text>
                    <Button size="s" view="clear" onClick={retryJobs}>
                        Повторить загрузку jobs
                    </Button>
                </div>
            )}
            <Table
                className="metrics-table"
                size="s"
                borderVariant="rows"
                aria-label="История jobs"
                aria-busy={jobsLoading}
                data={jobRows}
                columns={jobColumns}
                bottomContent={
                    <TablePagination label="Страницы jobs" page={jobPage} count={jobCount} onChange={setJobPage} />
                }
            />
        </Panel>
    );
}
