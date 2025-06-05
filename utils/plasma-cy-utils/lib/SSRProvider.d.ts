import React from 'react';
import type { FC, PropsWithChildren } from 'react';
export interface HasSSR {
    noSSR?: boolean;
}
export declare const SSRContext: React.Context<{
    uniqId: number | null;
}>;
export declare const SSRProvider: FC<PropsWithChildren<HasSSR>>;
