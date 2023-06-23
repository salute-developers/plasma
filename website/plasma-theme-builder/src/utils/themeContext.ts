import { createContext } from 'react';

import type { TokenContextHandlers } from '../types';

export const TokenContext = createContext<TokenContextHandlers>({
    onOpenTokenForm: () => {},
    onTokenDelete: () => {},
    onTokenEnabled: () => {},
    onTokensSubsectionEnabled: () => {},
    onTokensSectionEnabled: () => {},
});
