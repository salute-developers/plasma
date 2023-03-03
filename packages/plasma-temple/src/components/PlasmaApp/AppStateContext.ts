import { createContext } from 'react';
import type { HeaderProps } from '@salutejs/plasma-ui';

export interface AppStateContextValue {
    header?: HeaderProps;
}

export const AppStateContext = createContext<AppStateContextValue>({});
