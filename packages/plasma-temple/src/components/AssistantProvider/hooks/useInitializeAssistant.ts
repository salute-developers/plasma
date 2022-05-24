import { useCallback, useRef, useState } from 'react';
import { AssistantClientCustomizedCommand, AssistantEvents, AssistantSmartAppData } from '@salutejs/client';

import { AssistantInstance } from '../../../types';
import { InitializeParams, initializeAssistant } from '../assistant';
import { useMount } from '../../../hooks/useMount';

export const useInitializeAssistant = <T extends AssistantSmartAppData>({
    assistantParams,
    onStart,
    onData,
}: {
    assistantParams: Omit<InitializeParams, 'getState'>;
    onStart?: () => void;
    onData?: (command: AssistantClientCustomizedCommand<T>) => void;
}): {
    assistant: AssistantInstance | null;
    setAssistantState: (newState: unknown) => void;
} => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const assistantStateRef = useRef({ item_selector: { items: [] } });
    const setAssistantState = useCallback((newState) => {
        assistantStateRef.current = newState;
    }, []);

    const [assistant, setAssistant] = useState<AssistantInstance | null>(null);

    useMount(() => {
        const assistantInstance = initializeAssistant<T>({
            ...assistantParams,
            getState: () => assistantStateRef.current,
        });

        setAssistant(assistantInstance);

        if (onStart) {
            const offStartListener = assistantInstance.on('start', () => {
                onStart();
                offStartListener();
            });
        }

        let removeListener = () => {};

        if (onData) {
            removeListener = assistantInstance.on('data', onData as AssistantEvents<AssistantSmartAppData>['data']);
        }

        return () => removeListener();
    });

    return {
        assistant,
        setAssistantState,
    };
};
