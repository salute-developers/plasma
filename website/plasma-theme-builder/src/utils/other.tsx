export const getUUID = () => {
    const value = window.localStorage.getItem('uuid');

    if (value) {
        return value;
    }

    const pluginClientId = window.crypto.randomUUID();
    window.localStorage.setItem('uuid', pluginClientId);

    return pluginClientId;
};

export const getURLParams = (params: string[]) => {
    const paramsFromURL = new URL(window.location.toString()).searchParams;

    return params.reduce((acc: (string | undefined)[], param) => {
        acc.push(paramsFromURL.get(param) || undefined);
        return acc;
    }, []);
};

export const getFormatDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return formatter.format(date).replace(/,/, '');
};

export const clearURLParam = () => (window.location.href = '/');
