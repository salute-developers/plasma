import { useEffect, useState } from 'react';

import { getFilesSource } from '../api';
import type { Theme as ThemeType } from '../types';

const getThemeData = async (
    themeName: string,
    branchName?: string,
    owner = 'salute-developers',
    repo = 'plasma',
    token?: string,
) => getFilesSource(undefined, owner, repo, `packages/plasma-tokens/data/themes/${themeName}.json`, branchName, token);

export const useFetchTheme = (themeName?: string, branchName?: string) => {
    const [response, setResponse] = useState<ThemeType | undefined>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    useEffect(() => {
        if (!themeName) {
            return;
        }

        const fetchData = async () => {
            try {
                const rawData = await getThemeData(themeName, branchName);
                const dataObject = JSON.parse(rawData);
                setResponse(dataObject);
            } catch (err) {
                setErrorMessage(`Тема "${themeName}" не найдена в репозитории.`);
                console.error(err);
            }
        };

        fetchData();
    }, [branchName, themeName]);

    return [response, errorMessage] as const;
};
