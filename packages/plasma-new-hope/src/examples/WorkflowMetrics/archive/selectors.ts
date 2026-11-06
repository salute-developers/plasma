import type { DailySeries } from './types.ts';

export interface MetricsFilter {
    from: string;
    to: string;
    packages: string[];
    browser: string;
}

export function selectDailySeries(rows: DailySeries[], filter: MetricsFilter) {
    const packages = new Set(filter.packages);
    return rows.filter(
        (row) =>
            row.day >= filter.from &&
            row.day <= filter.to &&
            packages.has(row.packageName) &&
            (!filter.browser || row.browser === filter.browser),
    );
}

export function planJobPage(rows: DailySeries[], page: number, pageSize: number) {
    if (!Number.isSafeInteger(page) || page < 0 || !Number.isSafeInteger(pageSize) || pageSize < 1) {
        throw new Error('Некорректный номер или размер страницы.');
    }
    const counts = new Map<string, number>();
    rows.forEach((row) => {
        const month = row.day.slice(0, 7);
        counts.set(month, (counts.get(month) || 0) + row.success);
    });
    const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
    const current = Math.min(page, Math.max(0, Math.ceil(total / pageSize) - 1));
    let skip = current * pageSize;
    let remaining = pageSize;
    const months: Array<{ period: string; count: number }> = [];
    let offset = 0;
    for (const [period, count] of [...counts].sort(([a], [b]) => b.localeCompare(a))) {
        if (count <= skip) {
            skip -= count;
        } else {
            if (!months.length) offset = skip;
            months.push({ period, count });
            remaining -= count - skip;
            skip = 0;
            if (remaining <= 0) break;
        }
    }
    return { total, page: current, months, offset };
}
