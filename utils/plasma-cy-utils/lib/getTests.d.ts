import { ReactNode } from 'react';
type GetBaseVisualTestsArgs = {
    component: string;
    componentProps: any;
    configPropsForMatrix?: string[];
    children?: ReactNode;
    actionBeforeSnapshot?: () => void;
    testCaseIds?: string[];
    propsForName?: string[];
};
export declare const getBaseVisualTests: ({ component, componentProps, children, actionBeforeSnapshot, configPropsForMatrix, propsForName, }: GetBaseVisualTestsArgs) => void | Mocha.Suite;
export {};
