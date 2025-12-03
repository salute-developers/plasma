import { ReactNode } from 'react';
type GetBaseVisualTestsArgs = {
    config: any;
    component: string;
    componentProps: any;
    configPropsForMatrix?: string[];
    children?: ReactNode;
    testCaseIds?: string[];
};
export declare const getBaseVisualTests: ({ testCaseIds, config, component, componentProps, children, configPropsForMatrix, }: GetBaseVisualTestsArgs) => Mocha.Suite;
export {};
