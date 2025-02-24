import React, { createContext } from 'react';
import type { FC, PropsWithChildren } from 'react';

export interface HasSSR {
    noSSR?: boolean;
}

export const SSRContext = createContext<{ uniqId: number | null }>({
    uniqId: null,
});

export const SSRProvider: FC<PropsWithChildren<HasSSR>> = ({ children, noSSR: _noSSR }) => {
    const value = {
        uniqId: 0,
    };

    if (_noSSR) {
        return <>{children}</>;
    }

    return <SSRContext.Provider value={value}>{children}</SSRContext.Provider>;
};
