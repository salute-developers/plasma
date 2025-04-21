type Changelog = Record<
    string,
    {
        date: string;
        core: Record<string, { component: string; children: string[] }>[];
        lib: Record<string, { component: string; children: string[] }>[];
    }
>;

export const groupVersionsByMonth = (data: Changelog) => {
    const result = new Map();

    for (const [version, item] of Object.entries(data)) {
        const [year, month] = item.date.split('-');
        const formattedYear = `‘${year.slice(-2)}`;
        const dateObj = new Date(item.date);

        const monthShortName = dateObj.toLocaleDateString('ru-RU', {
            month: 'short',
        });

        const key = `${year}-${month}`;

        if (!result.has(key)) {
            result.set(key, [{ label: `${monthShortName} ${formattedYear}`, version }]);
        } else {
            const data = result.get(key);
            data.push({ version });
        }
    }
    return Array.from(result.values())
        .map((versions) => versions)
        .flat();
};
