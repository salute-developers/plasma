import { createContext } from 'react';

import { AssistantAppState, AssistantInstance } from '../../types';

import { getAssistantRef } from './assistant';
import { initialAssistantState } from './store/reducer';
import { AssistantState } from './store/types';

export interface AssistantContextType {
    state: AssistantState;
    assistant: AssistantInstance | null;
    setAssistantState: <T extends AssistantAppState>(newState: T) => void;
}

const throwFn = () => {
    throw new Error('Assistant context is not provided');
};

export const AssistantContext = createContext<AssistantContextType>({
    state: initialAssistantState,
    assistant: getAssistantRef().assistant,
    setAssistantState: throwFn,
});
