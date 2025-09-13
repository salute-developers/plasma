import { useState, useEffect } from 'react';

import NativePlatformsMeta from '../public/data/native-platforms-meta.json';

// INFO: Хук для загрузки данных из GitHub репозитория
export const useGitHubData = (url: string, options = {}) => {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);

                if (!response.ok) {
                    setData(NativePlatformsMeta);

                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                setData(result);
            } catch (e) {
                setError(e?.message || '');

                console.error('Error fetching GitHub data:', e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
};
