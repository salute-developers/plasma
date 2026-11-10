import type { Grouping } from '../model/types.ts';

const dayMs = 24 * 60 * 60 * 1000;

export function formatDateTime(value: string, timeZone?: string): string {
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) {
        return value;
    }
    return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZone,
    }).format(date);
}

export function formatMessageDates(message: string, timeZone?: string): string {
    return message.replace(/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})\b/g, (value) =>
        formatDateTime(value, timeZone),
    );
}

export function bucketDate(date: string, grouping: Grouping): string {
    const value = new Date(`${date.slice(0, 10)}T00:00:00Z`);
    if (grouping === 'week') {
        value.setUTCDate(value.getUTCDate() - ((value.getUTCDay() + 6) % 7));
    }
    if (grouping === 'month') {
        value.setUTCDate(1);
    }
    return value.toISOString().slice(0, 10);
}

export function getBuckets(from: string, to: string, grouping: Grouping): string[] {
    const buckets: string[] = [];
    const step = dayMs * (grouping === 'week' ? 7 : 1);
    const date = new Date(bucketDate(from, grouping));
    while (date.getTime() <= Date.parse(to)) {
        buckets.push(date.toISOString().slice(0, 10));
        if (grouping === 'month') {
            date.setUTCMonth(date.getUTCMonth() + 1);
        } else {
            date.setTime(date.getTime() + step);
        }
    }
    return buckets;
}

export const isDate = (value: string) =>
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    Number.isFinite(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value;

export function validateRange(from: string, to: string) {
    if (!isDate(from) || !isDate(to) || from > to) {
        throw new Error('Укажите корректный период. Даты включаются целиком, в UTC.');
    }
}

export function yearsAgo(date: string, years = 3): string {
    const value = new Date(`${date}T00:00:00Z`);
    const month = value.getUTCMonth();
    value.setUTCFullYear(value.getUTCFullYear() - years);
    if (value.getUTCMonth() !== month) {
        value.setUTCDate(0);
    }
    return value.toISOString().slice(0, 10);
}

export const shortDate = (date: string) => `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(2, 4)}`;

export const inputDate = (date: string) => `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;

export const shiftDays = (date: string, days: number) =>
    new Date(Date.parse(date) + days * 86400000).toISOString().slice(0, 10);

export const localDate = (date: Date) =>
    new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

export const minimumFilterDate = '2025-08-01';

export const firstFilterDate = (archiveFrom: string) =>
    archiveFrom > minimumFilterDate ? archiveFrom : minimumFilterDate;
