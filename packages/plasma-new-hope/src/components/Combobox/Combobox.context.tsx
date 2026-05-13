import { createContext } from 'react';

import type { ItemContext } from './Combobox.types';

export const Context = createContext<ItemContext>({} as ItemContext);
