import React, { useEffect } from 'react';
import { AssistantClientCustomizedCommand, AssistantSmartAppData } from '@salutejs/client';

import { logger } from '../../utils/logger';
import { useMount } from '../../hooks';

import { AssistantContext, AssistantContextType } from './AssistantContext';
import { assistantRef, InitializeParams } from './assistant';
import { useInitializeAssistant } from './hooks/useInitializeAssistant';
import * as Actions from './store/actions';
import { initialAssistantState, reducer } from './store/reducer';

import { AssistantAppState, AssistantInstance } from '.';

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

    const value = React.useMemo(() => ({ assistant, setAssistantState, state }), [state, assistant, setAssistantState]);

    return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>;
}

export interface AssistantProviderInstanceProps {
    instance?: AssistantInstance;
    onData?: <A extends AssistantSmartAppData>(command: AssistantClientCustomizedCommand<A>) => void;
}

export interface AssistantProiderInstanceInterface {
    (props: React.PropsWithChildren<AssistantProviderInstanceProps>): JSX.Element;
}

/**
 * Experimental feature for early initialized assitant instance
 * ex. initialize assistant before react render
 */
export const AssistantProviderInstance: AssistantProiderInstanceInterface = ({ instance, onData, children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialAssistantState);
    const isInitRef = React.useRef(false);

    useMount(() => {
        if (instance && !isInitRef.current) {
            assistantRef.assistant = instance;
            isInitRef.current = true;
        }
    });

    const stateSetter = React.useCallback(
        (nextState: AssistantAppState) => {
            if (!instance) return;
            instance.setGetState(() => {
                logger('Assistant state', nextState);
                return nextState;
            });
        },
        [instance],
    );

    const onDataHandler = React.useCallback(
        (command: AssistantClientCustomizedCommand<AssistantSmartAppData>) => {
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
            logger('Assistant Action', command);
        },
        [onData],
    );

    useEffect(() => {
        if (!instance) {
            return () => {};
        }

        const unsubscribe = instance.on('data', onDataHandler);

        instance.getInitialData().forEach(onDataHandler);

        return () => {
            unsubscribe();
        };
    }, [instance, onDataHandler]);

    const value: AssistantContextType = React.useMemo(
        () => ({ assistant: instance ?? null, setAssistantState: stateSetter, state }),
        [state, instance, stateSetter],
    );

    return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>;
};
