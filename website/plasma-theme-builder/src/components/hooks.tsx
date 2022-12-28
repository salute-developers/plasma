import { useEffect, useMemo, useState } from 'react';

import { getThemeData } from '../api/githubFilesFetcher';
import type { Theme as ThemeType } from '../builder/types';

export const useFetchTheme = (themeName: string | null) => {
    const [response, setResponse] = useState<ThemeType | undefined>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    useEffect(() => {
        if (!themeName) {
            return;
        }

        const fetchData = async () => {
            try {
                const rawData = await getThemeData(themeName);
                const dataObject = JSON.parse(rawData);
                setResponse(dataObject);
            } catch (err) {
                setErrorMessage(`Тема "${themeName}" не найдена в репозитории.`);
                console.error(err);
            }
        };

        fetchData();
    }, [themeName]);

    return [response, errorMessage] as const;
};

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

        return themeSections.reduce(
            (prev, section) => {
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
            },
            { ...data },
        );
    }, [data]);
