export const getUUID = () => {
    const value = window.localStorage.getItem('uuid');

    if (value) {
        return value;
    }

    const pluginClientId = window.crypto.randomUUID();;
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

export const clearURLParam = () => (window.location.href = '/');
