import { useMemo } from 'react';

import type { Theme as ThemeType } from '../types';

export const useNormalizeThemeSections = (data?: ThemeType): ThemeType | undefined =>
    useMemo(() => {
        if (!data) {
            return undefined;
        }

        const legacySectionMap: Record<string, string> = {
            textIcons: 'text',
            controlsSurfaces: 'surface',
            banners: 'banner',
            backgrounds: 'background',
        };

        const legacySections = Object.keys(legacySectionMap);
        const themeSections = Object.keys(data.light).filter((key) => legacySections.includes(key)) as Array<
            keyof ThemeType['dark' | 'light']
        >;

        const copyData = JSON.parse(JSON.stringify(data));

        return themeSections.reduce((prev, section) => {
            const objectDark = prev.dark[section];
            const objectLight = prev.light[section];

            delete prev.dark[section];
            delete prev.light[section];

            return {
                ...prev,
                dark: {
                    ...prev.dark,
                    [legacySectionMap[section]]: objectDark,
                },
                light: {
                    ...prev.light,
                    [legacySectionMap[section]]: objectLight,
                },
            };
        }, copyData);
    }, [data]);
