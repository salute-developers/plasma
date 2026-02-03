import React from 'react';
import type { FC, PropsWithChildren } from 'react';
export declare const hasComponent: (componentName: string) => boolean;
export declare const getComponent: <T = {
    children?: React.ReactNode | undefined;
}>(componentName: string) => React.FC<T>;
export declare const getDescribeFN: (component: string) => Mocha.PendingSuiteFunction;
export declare const CypressTestDecorator: FC<PropsWithChildren<any>>;
