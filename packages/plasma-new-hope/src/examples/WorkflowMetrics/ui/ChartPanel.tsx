import React from 'react';

import { Text } from '../../components/typography/components/Text/Text';
import type { TableColumnData } from '../../../components/Table/Table.types';
import { Button } from '../../components/Button/Button';
import { Table } from '../../components/Table/Table';
import { Heading } from '../../components/typography/components/Heading/Heading';
import { format, formatSpecFiles } from '../utils/formatting';
import type { WorkflowMetricsState } from '../hooks/useWorkflowMetrics';

import { statistics, groupingLabels, pageSize } from './constants';
import { MetricsChart } from './MetricsChart';
import { TablePagination } from './TablePagination';
import { Panel } from './layout.styles';

const pointColumns: TableColumnData[] = [
    { id: 'date', label: 'Начало периода', width: 150 },
    { id: 'series', label: 'Пакет · браузер', width: 280 },
    { id: 'count', label: 'Измерений', width: 130 },
    { id: 'p90', label: 'p90, мин', width: 130 },
    { id: 'median', label: 'Медиана, мин', width: 150 },
    { id: 'mean', label: 'Среднее, мин', width: 150 },
    { id: 'specFiles', label: 'Spec-файлов в git', width: 165 },
];

export function ChartPanel({
    points,
    buckets,
    statistic,
    grouping,
    packageColors,
    specCounts,
    pointPage,
    setPointPage,
    showPoints,
    setShowPoints,
}: WorkflowMetricsState['chart']) {
    const pointRows = points.slice(pointPage * pageSize, (pointPage + 1) * pageSize).map((point) => ({
        id: `${point.date}/${point.series}`,
        date: point.date,
        series: point.series,
        count: point.count,
        p90: format(point.p90),
        median: format(point.median),
        mean: format(point.mean),
        specFiles: formatSpecFiles(point.specFiles),
    }));
    return (
        <Panel aria-label="График длительности">
            <Heading as="h2" size="h5">
                Длительность job с подготовкой окружения
            </Heading>
            <Text as="p" size="s" className="muted">
                {statistics[statistic]} · {groupingLabels[grouping]} · UTC. Наведите на точку для деталей. WebKit —
                пунктир.
            </Text>
            {points.length ? (
                <MetricsChart
                    points={points}
                    buckets={buckets}
                    statistic={statistic}
                    packageColors={packageColors}
                    specCounts={specCounts}
                />
            ) : (
                <div className="empty">
                    <Text>Нет измерений для выбранных фильтров.</Text>
                </div>
            )}
            {specCounts && (
                <Text as="p" size="s" className="muted">
                    Под датами — число spec-файлов b2c в пакете и ядре по git; для недели или месяца указан диапазон. ≈
                    — приблизительная ревизия по истории ветки, * — данные есть не для всех jobs. Это полный набор
                    файлов в git; в PR может выполняться только его часть.
                </Text>
            )}
            <Text as="p" size="s" className="muted">
                p90 — 90-й процентиль методом ближайшего ранга. Пропуски не заменяются нулями. При одном измерении p90
                равен его длительности.
            </Text>
            <Button size="s" view="clear" aria-expanded={showPoints} onClick={() => setShowPoints(!showPoints)}>
                Данные графика: {points.length}
            </Button>
            {showPoints && (
                <>
                    <Table
                        className="metrics-table"
                        size="s"
                        borderVariant="rows"
                        aria-label="Данные графика"
                        data={pointRows}
                        columns={pointColumns}
                        bottomContent={
                            <TablePagination
                                label="Страницы данных графика"
                                page={pointPage}
                                count={points.length}
                                onChange={setPointPage}
                            />
                        }
                    />
                </>
            )}
        </Panel>
    );
}
