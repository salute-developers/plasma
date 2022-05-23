import React from 'react';

import { AnyObject } from '../../../types';
import { last } from '../../../utils/last';
import { ScreensProviderContext } from '../ScreensProviderContext';
import { History } from '../store/types';

export interface PushScreenFn<S, P extends { [key in keyof S]: unknown }> {
    <T extends keyof S, P1 extends P[T]>(name: T, params: P extends void ? never : P1): void;
    <T extends keyof S>(name: T, params?: never): void;
}

export interface UseScreensTypeReturn<
    PageStateType extends AnyObject,
    Name extends keyof PageStateType,
    PageParamsType extends Partial<Record<keyof PageStateType, unknown>> = Partial<Record<keyof PageStateType, unknown>>
> {
    state: PageStateType[Name];
    params: PageParamsType[Name];
    name: Name;
    history: History[];
    pushHistory: <N extends keyof PageStateType>(name: N, data: PageStateType[N]) => void;
    pushScreen: PushScreenFn<PageStateType, PageParamsType>;
    goToScreen: (name: keyof PageStateType) => void;
    popScreen: () => void;
    changeState: (data: Partial<PageStateType[Name]>) => void;
}

export const useScreens = <
    PageStateType extends AnyObject,
    Name extends keyof PageStateType = keyof PageStateType,
    PageParamsType extends Partial<Record<keyof PageStateType, any>> = {}
>(): UseScreensTypeReturn<PageStateType, Name, PageParamsType> => {
    const {
        state: { history },
        pushHistory,
        pushScreen,
        goToScreen,
        popScreen,
        changeActiveScreenState,
    } = React.useContext(ScreensProviderContext);

    const activeHistory = last(history) as History<Name, PageStateType[Name], PageParamsType[Name]>;

    return {
        state: activeHistory?.data,
        params: activeHistory?.params,
        name: activeHistory?.name,
        history,
        pushHistory,
        pushScreen,
        goToScreen,
        popScreen,
        changeState: changeActiveScreenState,
    } as UseScreensTypeReturn<PageStateType, Name, PageParamsType>;
};
