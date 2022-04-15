import React from 'react';
import { AssistantClientCustomizedCommand, AssistantSmartAppData } from '@salutejs/client';

import { useAssistant } from './useAssistant';

export const useAssistantOnData = <T extends AssistantSmartAppData = AssistantSmartAppData>(
    onData: (command: AssistantClientCustomizedCommand<T>) => void,
): void => {
    const { getAssistant } = useAssistant();
    const onDataRef = React.useRef(onData);
    onDataRef.current = onData;

    React.useEffect(() => {
        const removeListener = getAssistant().on('data', (command) =>
            onDataRef.current(command as AssistantClientCustomizedCommand<T>),
        );

        return () => {
            removeListener();
        };
    }, [getAssistant]);
};
