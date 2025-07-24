type Changelog = Record<
    string,
    {
        date: string;
        core: Record<string, { component: string; children: string[] }>[];
        lib: Record<string, { component: string; children: string[] }>[];
    }
>;

export const groupVersionsByMonth = (data: Changelog) => {
    const groups = new Map();

    // INFO: Группируем по месяцам
    for (const [version, item] of Object.entries(data)) {
        // INFO: "2025-07"
        const key = item.date.slice(0, 7);

        if (!groups.has(key)) {
            groups.set(key, []);
        }

        groups.get(key).push({ version, date: item.date });
    }

    return Array.from(groups.values())
        .map((versions) => {
            const earliest = versions.reduce((a: any, b: any) => (a.date < b.date ? a : b));
            const date = new Date(earliest.date);
            const month = date.getMonth() + 1; // 1-12

            let monthName = date.toLocaleDateString('ru-RU', { month: 'short' });
            // INFO: Для всех месяцев кроме июня и июля обрезаем до 3 букв
            if (month !== 6 && month !== 7) {
                monthName = monthName.slice(0, 3);
            }

            const year = date.toLocaleDateString('ru-RU', { year: '2-digit' });
            const label = `${monthName} '${year}`;

            return versions.map((item: any) => ({
                version: item.version,
                ...(item === earliest && { label }),
            }));
        })
        .flat();
};
