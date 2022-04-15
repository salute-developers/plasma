import React from 'react';

import { AssistantInstance } from '../../../types';
import { AssistantContext, AssistantContextType } from '../AssistantContext';

export const useAssistant = (): {
    getAssistant: () => AssistantInstance;
    setAssistantState: AssistantContextType['setAssistantState'];
} => {
    return React.useContext(AssistantContext);
};
