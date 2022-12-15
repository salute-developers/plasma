import { useEffect, useState } from 'react';

import { getThemeData } from '../api/githubFilesFetcher';
import { Theme } from '../builder/types';

export const useFetchTheme = (themeName: string | null) => {
    const [response, setResponse] = useState<Theme | undefined>();
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
