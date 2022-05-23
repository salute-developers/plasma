import { createContext } from 'react';
import { HeaderProps } from '@salutejs/plasma-ui/components/Header/Header';

export interface AppStateContextValue {
    header?: HeaderProps;
}

export const AppStateContext = createContext<AppStateContextValue>({});
