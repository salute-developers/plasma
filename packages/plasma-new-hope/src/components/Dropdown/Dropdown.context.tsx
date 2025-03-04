import { createContext } from 'react';

import type { ItemContext } from './Dropdown.types';

export const Context = createContext<ItemContext>({} as ItemContext);
