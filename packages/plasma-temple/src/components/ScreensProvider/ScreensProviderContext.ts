import { createContext } from 'react';

import { AnyObject } from '../../types';

import { initialState } from './store/reducer';
import { ScreensProviderState, ScreensProviderAction, History } from './store/types';

export interface ScreensProviderContextValue {
    state: ScreensProviderState;
    dispatch: React.Dispatch<ScreensProviderAction>;
    pushHistory: (name: string, data: AnyObject) => void;
    pushScreen: (name: string, params?: AnyObject) => void;
    popScreen: () => void;
    goToScreen: (name: string) => void;
    changeActiveScreenState: (state: Partial<History['data']>) => void;
}

const throwFn = () => {
    throw new Error('ScreensProvider context is missing');
};

export const ScreensProviderContext = createContext<ScreensProviderContextValue>({
    state: initialState,
    dispatch: throwFn,
    pushHistory: throwFn,
    pushScreen: throwFn,
    popScreen: throwFn,
    goToScreen: throwFn,
    changeActiveScreenState: throwFn,
});
