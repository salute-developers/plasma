import { FullColorsList, writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

import * as legacyTokenGroups from './legacyTokenGroups';
import { colorThemes } from '../../../data';
import type { ThemeTokens } from '../../../data';

const convertGroupTokens = (tokenNames: Array<keyof typeof FullColorsList>, theme: ThemeTokens) =>
    Object.entries(theme).reduce((acc, [key, token]) => {
        if (tokenNames.some((name) => name === key)) {
            acc[key as keyof typeof FullColorsList] = token;
        }
        return acc;
    }, {} as ThemeTokens);

const convertGroupedTokenData = (theme: ThemeTokens): ThemeTokens => ({
    ...convertGroupTokens(legacyTokenGroups.textAndIcons, theme),
    ...convertGroupTokens(legacyTokenGroups.buttons, theme),
    ...convertGroupTokens(legacyTokenGroups.backgrounds, theme),
    ...convertGroupTokens(legacyTokenGroups.surfaces, theme),
    ...convertGroupTokens(legacyTokenGroups.speech, theme),
});

const generateColors = () =>
    Object.entries(colorThemes).reduce((acc, [themeName, theme]) => {
        acc[themeName] = convertGroupedTokenData(theme);
        return acc;
    }, {} as Record<string, ThemeTokens>);

// TODO: https://github.com/salute-developers/plasma/issues/491
export const createLegacyTheme = (dir: string) =>
    writeGeneratedToFS(dir, [
        {
            file: 'theme.json',
            content: JSON.stringify(
                {
                    color: {
                        base: generateColors(),
                    },
                },
                null,
                2,
            ),
        },
    ]);
