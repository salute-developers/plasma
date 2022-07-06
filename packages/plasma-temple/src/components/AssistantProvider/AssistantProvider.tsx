import React from 'react';
import { AssistantClientCustomizedCommand, AssistantSmartAppData } from '@salutejs/client';

import { InitializeParams } from './assistant';
import { useInitializeAssistant } from './hooks/useInitializeAssistant';
import * as Actions from './store/actions';
import { initialAssistantState, reducer } from './store/reducer';
import { AssistantContext, AssistantContextType } from './AssistantContext';

export interface AssistantProviderProps<A extends AssistantSmartAppData = AssistantSmartAppData> {
    /** Параметры инициализации ассистента. В production среде используется только `getRecoveryState` */
    assistantParams: Omit<InitializeParams, 'getState'>;
    /** Колбэк, вызываемый после инициализации ассистента */
    onStart?: () => void;
    /** Колбэк, вызываемый при получении события `data` от ассистента */
    onData?: (command: AssistantClientCustomizedCommand<A>) => void;
}

/**
 * Компонент обеспечивающий взаимодействие с ассистентом.
 */
export function AssistantProvider<A extends AssistantSmartAppData = AssistantSmartAppData>({
    assistantParams,
    children,
    onStart,
    onData,
}: React.PropsWithChildren<AssistantProviderProps<A>>) {
    const [state, dispatch] = React.useReducer(reducer, initialAssistantState);

    const handleData = React.useCallback(
        (command: AssistantClientCustomizedCommand<A>) => {
            switch (command.type) {
                case 'insets':
                    dispatch(Actions.setInsets(command.insets));
                    break;
                case 'character':
                    dispatch(Actions.setCharacter(command.character.id));
                    break;
                case 'theme':
                    dispatch(Actions.setTheme(command.theme.name));
                    break;
                default:
            }
            onData?.(command);
        },
        [onData],
    );

    const { assistant, setAssistantState } = useInitializeAssistant({
        assistantParams,
        onStart,
        onData: handleData,
    });

    const value: AssistantContextType = React.useMemo(() => ({ assistant, setAssistantState, state }), [
        state,
        assistant,
        setAssistantState,
    ]);

    return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>;
}
