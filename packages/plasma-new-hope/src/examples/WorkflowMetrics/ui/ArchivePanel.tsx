import React from 'react';

import { Text } from '../../components/typography/components/Text/Text';
import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/Button/Button';
import { Spinner } from '../../components/Spinner/Spinner';
import { workflows, collectionRevision } from '../model/constants';
import type { Workflow } from '../model/types';
import { inputDate, firstFilterDate, formatDateTime, formatMessageDates } from '../utils/dates';
import type { WorkflowMetricsState } from '../hooks/useWorkflowMetrics';

import { FilterSelect } from './FilterSelect';
import { Panel } from './layout.styles';

export function ArchivePanel({
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
}: WorkflowMetricsState['archive']) {
    return (
        <Panel aria-label="Архив истории">
            <div className="source-row">
                <FilterSelect
                    label="Workflow"
                    value={workflow}
                    onChange={(value) => setWorkflow(value as Workflow)}
                    items={Object.entries(workflows).map(([value, label]) => ({ value, label }))}
                />
                <div className="source-meta">
                    {history && (
                        <>
                            <Text as="p" size="s">
                                {history.totals.runs.toLocaleString('ru-RU')} прогонов ·{' '}
                                {history.totals.jobs.toLocaleString('ru-RU')} jobs
                            </Text>
                            <Text as="p" size="s" className="muted">
                                Обновлено {formatDateTime(history.updatedAt)}
                            </Text>
                        </>
                    )}
                </div>
                <Button size="s" view="clear" disabled={!history || downloading} onClick={downloadHistory}>
                    {downloading ? 'Готовим JSON…' : 'Скачать JSON'}
                </Button>
            </div>
            {busy && (
                <div className="loading" role="status">
                    <Spinner size="s" view="accent" />
                    <Text size="s">Загружаем архив…</Text>
                </div>
            )}
            {error && (
                <div className="notice error" role="alert">
                    <Text as="p">{error}</Text>
                    <Button size="s" view="clear" onClick={retryArchive}>
                        Повторить загрузку
                    </Button>
                </div>
            )}
            {downloadError && (
                <Text as="p" className="error" role="alert">
                    {downloadError}
                </Text>
            )}
            {history && (
                <>
                    <Text as="p" size="s" className="muted">
                        Период архива: {inputDate(firstFilterDate(history.from))} — {inputDate(history.to)}. Графики
                        строятся по сохранённым данным.
                    </Text>
                    {history.collectionRevision !== collectionRevision && (
                        <Text as="p" size="s" className="muted">
                            Архив создан предыдущей версией сборщика. Следующий сбор перепроверит старые workflows и
                            jobs.
                        </Text>
                    )}
                    {gaps.length > 0 && (
                        <div className="notice">
                            <Badge view="warning" appearance="transparent" text="История собирается" />
                            <Text as="p" size="s">
                                Есть ещё не собранные интервалы: {gaps.length}. Отсутствие точек в них не означает
                                отсутствие прогонов.
                            </Text>
                        </div>
                    )}
                    {history.warnings.map((warning) => (
                        <Text as="p" size="s" className="muted" key={warning}>
                            {formatMessageDates(warning)}
                        </Text>
                    ))}
                </>
            )}
        </Panel>
    );
}
