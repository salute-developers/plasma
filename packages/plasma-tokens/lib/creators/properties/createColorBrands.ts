import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

import type { ThemeTokenDataGroups } from '../../tokensGenerator/types';

export const createColorBrands = (dir: string, themesColorTokenGroups: Record<string, ThemeTokenDataGroups>) =>
    writeGeneratedToFS(
        dir,
        Object.entries(themesColorTokenGroups).map(([key, value]) => ({
            file: `${key}.json`,
            content: JSON.stringify(
                {
                    color: value,
                },
                null,
                2,
            ),
        })),
    );
