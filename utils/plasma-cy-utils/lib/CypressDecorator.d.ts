import React from 'react';
import type { FC, PropsWithChildren } from 'react';
export declare const getComponent: <T = {
    children?: React.ReactNode | undefined;
}>(componentName: string) => React.FC<T>;
export declare const CypressTestDecorator: FC<PropsWithChildren<any>>;
