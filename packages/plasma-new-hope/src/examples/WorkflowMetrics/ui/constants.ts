import type { Grouping, Outcome, Statistic } from '../model/types';

export const colors = [
    '#4169e1',
    '#c44791',
    '#14947b',
    '#c17c16',
    '#8959c6',
    '#d15049',
    '#2586a5',
    '#798c20',
    '#aa61a0',
    '#64748b',
    '#a46437',
    '#448853',
];

export const statistics: Record<Statistic, string> = { p90: 'p90', median: 'Медиана', mean: 'Среднее' };

export const groupingLabels: Record<Grouping, string> = {
    day: 'по дням',
    week: 'недели с понедельника',
    month: 'по месяцам',
};

export const outcomeViews: Record<Outcome, 'positive' | 'negative' | 'default'> = {
    success: 'positive',
    failure: 'negative',
    timed_out: 'negative',
    cancelled: 'default',
    skipped: 'default',
    unknown: 'default',
};

export const outcomeLabels: Record<Outcome, string> = {
    success: 'Успешно',
    failure: 'Ошибка',
    cancelled: 'Отменено',
    skipped: 'Пропущено',
    timed_out: 'Таймаут',
    unknown: 'Нет данных',
};

export const pageSize = 25;

export const duration = 'jobSeconds';
