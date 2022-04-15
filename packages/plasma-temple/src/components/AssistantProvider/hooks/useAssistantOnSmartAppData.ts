import { AssistantClientCustomizedCommand, AssistantSmartAppData } from '@salutejs/client';

import { useAssistantOnData } from './useAssistantOnData';

export function useAssistantOnSmartAppData<T extends AssistantSmartAppData = AssistantSmartAppData>(
    callback: (command: T['smart_app_data']) => void,
): void {
    useAssistantOnData((command: AssistantClientCustomizedCommand<T>) => {
        if (command.type === 'smart_app_data') {
            callback(command.smart_app_data);
        }
    });
}
