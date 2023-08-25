import { useEffect, useState } from 'react';

import { getFullThemeName, getThemeData, loadTheme } from '../utils';

import type { Theme as ThemeType } from '../types';

export const useFetchTheme = (themeName?: string, branchName?: string) => {
    const [response, setResponse] = useState<ThemeType | undefined>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    useEffect(() => {
        if (!themeName) {
            return;
        }

        const fullThemeName = getFullThemeName(themeName, branchName);
        const result = loadTheme(fullThemeName)?.themeData;
        if (result) {
            setResponse(result);
            return;
        }

        const fetchData = async () => {
            try {
                const themeData = await getThemeData(themeName, branchName);
                setResponse(themeData);
            } catch (err) {
                setErrorMessage(`Тема "${themeName}" не найдена в репозитории.`);
                console.error(err);
            }
        };

        fetchData();
    }, [branchName, themeName]);

    return [response, errorMessage] as const;
};
