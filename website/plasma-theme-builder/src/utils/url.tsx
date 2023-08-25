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

export const pushURLParams = (params: [string?, string?][], relativeLocation = '') => {
    const newURL = createURL(params, relativeLocation);
    const { href } = window.location;
    window.history.pushState({}, '', href + newURL);
};

export const clearURLParam = () => (window.location.href = '/');
