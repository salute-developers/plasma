import { createContext, useContext } from 'react';

import type { ItemContext } from './Select.types';

export const Context = createContext<ItemContext | null>(null);

export const useSelectContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error('Select context is not available');
    }

    return context;
};
