import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';

export const SEARCH_QUERY_PARAM = 'search';

const getSearchQueryParam = (query: NextRouter['query']) => {
    const value = query[SEARCH_QUERY_PARAM];

    return typeof value === 'string' ? value : '';
};

export const useSearchQueryParam = () => {
    const router = useRouter();
    const [searchQuery, setSearchQueryState] = useState(() => getSearchQueryParam(router.query));

    useEffect(() => {
        if (router.isReady) {
            setSearchQueryState(getSearchQueryParam(router.query));
        }
    }, [router.isReady]);

    const setSearchQuery = useCallback(
        (value: string) => {
            setSearchQueryState(value);

            const query = { ...router.query };

            if (value) {
                query[SEARCH_QUERY_PARAM] = value;
            } else {
                delete query[SEARCH_QUERY_PARAM];
            }

            router.replace({ pathname: router.pathname, query }, undefined, { scroll: false });
        },
        [router],
    );

    return [searchQuery, setSearchQuery] as const;
};
