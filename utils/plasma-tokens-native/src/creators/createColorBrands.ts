import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

import type { ThemeTokenDataGroups } from '../types';

export const createColorBrands = (
    dir: string,
    themesColorTokenGroups: Record<string, Record<string, ThemeTokenDataGroups>>,
) =>
    writeGeneratedToFS(
        dir,
        Object.entries(themesColorTokenGroups).map(([key, value]) => {
            const color = Object.entries(value).reduce((acc, [themeName, tokens]) => {
                return {
                    ...acc,
                    [themeName]: {
                        ...tokens.color,
                    },
                };
            }, {});

            return {
                file: `${key}.json`,
                content: JSON.stringify(
                    {
                        color,
                    },
                    null,
                    2,
                ),
            };
        }),
        '',
    );
