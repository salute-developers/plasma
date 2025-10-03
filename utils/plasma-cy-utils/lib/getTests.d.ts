import { ReactNode } from 'react';
type GetBaseVisualTestsArgs = {
    config: any;
    component: string;
    configPropsForMatrix?: string[];
    children?: ReactNode;
    testCaseIds?: string[];
};
export declare const getBaseVisualTests: ({ testCaseIds, config, component, children, configPropsForMatrix, }: GetBaseVisualTestsArgs) => Mocha.Suite;
export {};
