import React from 'react';

import { Text } from '../../components/typography/components/Text/Text';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { DatePickerRange } from '../../components/DatePicker/DatePicker';
import type { Grouping, Statistic } from '../model/types';
import { localDate } from '../utils/dates';
import type { WorkflowMetricsState } from '../hooks/useWorkflowMetrics';

import { statistics } from './constants';
import { FilterSelect } from './FilterSelect';
import { Panel } from './layout.styles';

export function FiltersPanel({
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
}: WorkflowMetricsState['filters']) {
    return (
        <Panel aria-label="Фильтры графика">
            <div className="period-row">
                <div className="field">
                    <DatePickerRange
                        label="Период (UTC)"
                        role="group"
                        aria-label="Период (UTC)"
                        firstPlaceholder="С (UTC)"
                        secondPlaceholder="По (UTC)"
                        size="s"
                        value={dateRangeValue}
                        dateShortcuts={dateShortcuts}
                        dateShortcutsWidth="7rem"
                        calendarContainerWidth="min(30rem, calc(100vw - 1rem))"
                        min={datePickerMin}
                        includeEdgeDates
                        format="DD.MM.YYYY"
                        lang="ru"
                        maskWithFormat
                        onCommitFirstDate={(_, values) => {
                            if (!values.error && values.originalDate) {
                                setFrom(localDate(values.originalDate));
                            }
                        }}
                        onCommitSecondDate={(_, values) => {
                            if (!values.error && values.originalDate) setTo(localDate(values.originalDate));
                        }}
                    />
                </div>
            </div>
            {!validRange && (
                <Text as="p" className="error">
                    Укажите период с 01.08.2025: начало должно быть не позже окончания.
                </Text>
            )}
            <div className="filter-grid">
                <FilterSelect
                    label="Браузер"
                    value={browser}
                    onChange={setBrowser}
                    items={[
                        { value: 'chromium', label: 'Chromium' },
                        { value: 'webkit', label: 'WebKit' },
                        { value: '', label: 'Оба браузера' },
                    ]}
                />
                <FilterSelect
                    label="Метрика"
                    value={statistic}
                    onChange={(value) => setStatistic(value as Statistic)}
                    items={Object.entries(statistics).map(([value, label]) => ({ value, label }))}
                />
                <FilterSelect
                    label="Группировка"
                    value={grouping}
                    onChange={(value) => setGrouping(value as Grouping)}
                    items={[
                        { value: 'day', label: 'По дням' },
                        { value: 'week', label: 'По неделям' },
                        { value: 'month', label: 'По месяцам' },
                    ]}
                />
            </div>
            <Text as="p" size="s" className="muted">
                Показаны успешные jobs всех версий React и всех веток.
            </Text>
            <fieldset>
                <legend>
                    <Text size="s">Пакеты</Text>
                </legend>
                <div className="packages">
                    {packages.map((name) => (
                        <Checkbox
                            key={name}
                            size="s"
                            view="accent"
                            checked={selectedPackages.includes(name)}
                            label={
                                <span>
                                    <span className="dot" style={{ background: packageColors.get(name) }} />
                                    {name}
                                </span>
                            }
                            onChange={(event) => {
                                setSelectedPackages((selected) =>
                                    event.target.checked
                                        ? [...selected, name]
                                        : selected.filter((item) => item !== name),
                                );
                            }}
                        />
                    ))}
                </div>
                <div className="presets">
                    <Button size="xs" view="clear" onClick={() => setSelectedPackages(packages)}>
                        Выбрать все
                    </Button>
                    <Button size="xs" view="clear" onClick={() => setSelectedPackages([])}>
                        Снять выбор
                    </Button>
                </div>
            </fieldset>
        </Panel>
    );
}
