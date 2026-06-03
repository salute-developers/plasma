import { createContext } from 'react';

export const ListContext = createContext<{ disabled?: boolean; hasItemBackground?: boolean; hasDivider?: boolean }>({});
