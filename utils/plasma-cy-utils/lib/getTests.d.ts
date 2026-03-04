import { ReactNode } from 'react';
type GetBaseVisualTestsArgs = {
    component: string;
    componentProps: any;
    configPropsForMatrix?: string[];
    children?: ReactNode;
    testCaseIds?: string[];
};
export declare const getBaseVisualTests: ({ component, componentProps, children, configPropsForMatrix, }: GetBaseVisualTestsArgs) => void | Mocha.Suite;
export {};
