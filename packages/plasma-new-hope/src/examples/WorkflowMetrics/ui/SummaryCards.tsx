import React from 'react';

import { Text } from '../../components/typography/components/Text/Text';
import { Heading } from '../../components/typography/components/Heading/Heading';
import { format } from '../utils/formatting';
import type { WorkflowMetricsState } from '../hooks/useWorkflowMetrics';

import { statistics } from './constants';
import { StatCard } from './layout.styles';

export function SummaryCards({
    runCount,
    measurementCount,
    value,
    statistic,
    errorCount,
}: WorkflowMetricsState['summary']) {
    return (
        <div className="stats">
            {[
                ['Прогонов в выборке', runCount],
                ['Измерений после фильтра', measurementCount],
                [`${statistics[statistic]} по выборке · мин`, format(value)],
                ['Ошибок job', errorCount],
            ].map(([label, value]) => (
                <StatCard key={label}>
                    <Text size="s" className="muted">
                        {label}
                    </Text>
                    <Heading as="p" size="h3">
                        {value}
                    </Heading>
                </StatCard>
            ))}
        </div>
    );
}
