import { useEffect, useState } from 'react';

import { getFilesSource } from '../api';
import type { Theme as ThemeType } from '../builder/types';

const getThemeData = async (themeName: string, owner = 'salute-developers', repo = 'plasma', token?: string) =>
    getFilesSource(owner, repo, `packages/plasma-tokens/data/themes/${themeName}.json`, token);

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
