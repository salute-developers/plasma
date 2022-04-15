import { AssistantClientCustomizedCommand, AssistantNavigationCommand, AssistantSmartAppData } from '@salutejs/client';

import { useAssistantOnData } from './useAssistantOnData';

export function useAssistantOnNavigation(callback: (command: AssistantNavigationCommand) => void): void {
    useAssistantOnData((command: AssistantClientCustomizedCommand<AssistantSmartAppData>) => {
        if (command.type === 'navigation') {
            callback(command);
        }
    });
}
