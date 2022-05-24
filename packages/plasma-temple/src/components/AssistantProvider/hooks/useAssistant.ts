import React from 'react';

import { AssistantInstance } from '../../../types';
import { AssistantContext, AssistantContextType } from '../AssistantContext';

export const useAssistant = (): {
    assistant: AssistantInstance | null;
    setAssistantState: AssistantContextType['setAssistantState'];
} => {
    const { assistant, setAssistantState } = React.useContext(AssistantContext);

    return {
        assistant,
        setAssistantState,
    };
};
