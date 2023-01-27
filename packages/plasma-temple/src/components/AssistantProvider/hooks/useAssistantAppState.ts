import { useEffect } from 'react';

import { AssistantAppState } from '../../../types';

import { useAssistant } from './useAssistant';

export function useAssistantAppState(state: AssistantAppState): void {
    const { setAssistantState } = useAssistant();

    useEffect(() => {
        setAssistantState(state);
    }, [setAssistantState, state]);
}
