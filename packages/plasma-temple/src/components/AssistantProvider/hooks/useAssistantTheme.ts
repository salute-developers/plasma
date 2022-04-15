import React from 'react';
import { ThemeColorName } from '@salutejs/client';

import { AssistantContext } from '../AssistantContext';

export function useAssistantTheme(): ThemeColorName {
    const {
        state: { theme },
    } = React.useContext(AssistantContext);

    return theme;
}
