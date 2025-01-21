export const isString = (value: unknown): value is string => typeof value === 'string';

export const getUUID = () => {
    const value = window.localStorage.getItem('uuid');

    if (value) {
        return value;
    }

    const pluginClientId = window.crypto.randomUUID();
    window.localStorage.setItem('uuid', pluginClientId);

    return pluginClientId;
};

export const getFormatDate = (date: string) => {
    const newDate = new Date(date);
    const formatter = new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return formatter.format(newDate).replace(/,/, '');
};

export const inRange = (x: number, [from, to]: number[]) => x >= from && x <= to;

export const isCamelCaseNotation = (value: string) => RegExp(/^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]+)*$/).test(value);

export const isHEXFormat = (value: string) => RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/).test(value);
