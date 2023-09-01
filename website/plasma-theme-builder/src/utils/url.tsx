export const getURLParams = (params: string[]) => {
    const paramsFromURL = new URL(window.location.toString()).searchParams;

    return params.reduce((acc: (string | undefined)[], param) => {
        acc.push(paramsFromURL.get(param) || undefined);
        return acc;
    }, []);
};

export const createURL = (params: [string?, string?][], relativeLocation = './') => {
    if (!params.length) {
        return '';
    }

    const filteredParams = params.filter(([param, value]) => param && value);

    if (!filteredParams.length) {
        return '';
    }

    const mappedParams = filteredParams.map(([param, value]) => `${param}=${value}`);

    return `${relativeLocation}?${mappedParams.join('&')}`;
};

type PushHistoryState = {
    (params: [string?, string?][], relativeLocation?: string): void;
    (url: string, relativeLocation?: string): void;
};

export const pushHistoryState: PushHistoryState = (value, relativeLocation = '') => {
    let newState = '';

    if (typeof value === 'string') {
        newState = value;
    }

    if (typeof value === 'object') {
        const newURL = createURL(value, relativeLocation);
        const { href } = window.location;
        newState = href + newURL;
    }

    window.history.pushState({}, '', newState);
};

export const clearURLParam = () => (window.location.href = '/');
