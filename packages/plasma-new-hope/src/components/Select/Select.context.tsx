import { createContext } from 'react';

import type { ItemContext } from './Select.types';

export const Context = createContext<ItemContext>({} as ItemContext);
