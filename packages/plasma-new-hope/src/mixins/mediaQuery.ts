export const breakpoints = {
    XL: 960, // TV
    L: 769, // Portal 8 cols
    M: 560, // Portal 6 cols
    S: 0, // Mobile
};

export const columns = {
    XL: 12,
    L: 8,
    M: 6,
    S: 4,
};

export const margins = {
    XL: 4,
    L: 3.5,
    M: 3.5,
    S: 1,
};

export const gutters = {
    XL: 1,
    L: 1,
    M: 1,
    S: 0.5,
};

export type MediaQueryFunction = (content: string) => string;
export type Breakpoint = keyof typeof breakpoints;

export const sizes = Object.keys(breakpoints) as Breakpoint[];

/**
 * Обертка над css-медиазапросами с заранее определенными брейкпоинтами.
 */
// TODO: https://github.com/salute-developers/plasma/issues/906
export const mediaQuery = (breakpoint: Breakpoint, deviceScale = 2): MediaQueryFunction => {
    const index = sizes.indexOf(breakpoint);
    const nextBreakpoint = sizes[index - 1] as Breakpoint;
    const min = breakpoints[breakpoint] > 0 ? breakpoints[breakpoint] * deviceScale : null;
    const max = breakpoints[nextBreakpoint] ? (breakpoints[nextBreakpoint] - 1) * deviceScale : null;

    if (min === null && max !== null) {
        return (content) => `
                @media (max-width: ${max}px) {
                    ${content}
                }
            `;
    }

    if (min !== null && max !== null) {
        return (content) => `
                @media screen and (min-width: ${min}px) and (max-width: ${max}px) {
                    ${content}
                }
            `;
    }

    return (content) => `
            @media (min-width: ${min}px) {
                ${content}
            }
        `;
};
