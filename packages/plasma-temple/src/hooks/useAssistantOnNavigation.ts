import React from 'react';
import { AssistantClientCustomizedCommand, AssistantNavigationCommand, AssistantSmartAppData } from '@salutejs/client';

import { useAssistantOnData } from './useAssistantOnData';

// @deprecated works only with PlasmaApp
export function useAssistantOnNavigation(callback: (command: AssistantNavigationCommand) => void): void {
    const onDataHandler = React.useCallback(
        (command: AssistantClientCustomizedCommand<AssistantSmartAppData>) => {
            if (command.type === 'navigation') {
                callback(command);
            }
        },
        [callback],
    );
    useAssistantOnData(onDataHandler);
}
