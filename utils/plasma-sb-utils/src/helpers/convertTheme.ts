type CssTokens = {
    [key: string]: string;
};

export const convertTheme = (theme: string) => {
    const regex = /--([\w-]+):\s*([^;]+);/g;
    const cssTokens = Array.from(theme.matchAll(regex));

    return cssTokens.reduce((acc, match) => {
        const [_, key, value] = match;
        acc[key] = value.trim();

        return acc;
    }, {} as CssTokens);
};
