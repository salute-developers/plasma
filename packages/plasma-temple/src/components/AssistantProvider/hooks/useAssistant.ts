import React from 'react';

import { AssistantInstance } from '../../../types';
import { AssistantContext, AssistantContextType } from '../AssistantContext';

export const useAssistant = (): {
    assistant: AssistantInstance;
    setAssistantState: AssistantContextType['setAssistantState'];
} => {
    const { getAssistant, setAssistantState } = React.useContext(AssistantContext);

    return {
        assistant: getAssistant(),
        setAssistantState,
    };
};
