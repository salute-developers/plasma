import React from 'react';
import type { FC } from 'react';
export declare const isTestPackageSupported: (packageName: string) => boolean;
export declare const TestTheme: FC<{
    packageName: string;
}>;
export declare const getTestPackage: (packageName: string) => Record<string, React.FC<any> | undefined>;
export declare const getTestConfig: (component: string) => any;
