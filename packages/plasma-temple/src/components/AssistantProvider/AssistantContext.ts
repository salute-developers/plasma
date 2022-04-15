import { createContext } from 'react';

import { AssistantAppState, AssistantInstance } from '../../types';

import { initialAssistantState } from './store/reducer';
import { AssistantState } from './store/types';

export interface AssistantContextType {
    state: AssistantState;
    getAssistant: () => AssistantInstance;
    setAssistantState: <T extends AssistantAppState>(state: T) => void;
}

const throwFn = () => {
    throw new Error('Assistant context is not provided');
};

export const AssistantContext = createContext<AssistantContextType>({
    state: initialAssistantState,
    getAssistant: throwFn,
    setAssistantState: throwFn,
});
