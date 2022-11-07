import { AssistantSmartAppData, createAssistant, createSmartappDebugger } from '@salutejs/client';

import { AssistantInstance, PickOptional } from '../../types';
import { logger } from '../../utils/logger';

export type AssistantProps = Parameters<typeof createSmartappDebugger>[0];

export type InitializeParams = PickOptional<AssistantProps, 'token'> & Omit<AssistantProps, 'token'>;

const errorMessage = {
    notInitialized: "Assistant is not initialized.\n Don't try get instance before initialize",
    dontSetAnotherInstance: "Don't use this feature. Its may break your application",
};

let assistant: AssistantInstance;
let isInitialized: boolean;

// @deprecated use getAssistantRef
export const getAssistant = (): AssistantInstance => assistant;

export interface AssistantRef {
    readonly assistant: AssistantInstance;
}

export interface ProtectedAssistantRef {
    assistant: AssistantInstance;
}

export const assistantRef: ProtectedAssistantRef = {
    get assistant() {
        if (!(assistant || isInitialized) && process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn(new ReferenceError(errorMessage.notInitialized));
        }

        return assistant;
    },
    /** @protected */
    set assistant(value) {
        if (isInitialized && process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn(new ReferenceError(errorMessage.dontSetAnotherInstance));
        }

        assistant = value;
        isInitialized = true;
    },
};

export const getAssistantRef = (): AssistantRef => {
    return {
        assistant: assistantRef.assistant,
    };
};

export const initializeAssistant = <T extends AssistantSmartAppData>({
    getState,
    getRecoveryState,
    token = '',
    ...restProps
}: InitializeParams): AssistantInstance => {
    if (process.env.NODE_ENV === 'development' && !window.Cypress) {
        assistantRef.assistant = createSmartappDebugger<T>({
            getState: () => {
                const state = getState();
                logger('Assistant state', state);
                return state;
            },
            token,
            ...restProps,
        });

        assistantRef.assistant.on('data', (action) => logger('Assistant Action', action));
    } else {
        assistantRef.assistant = createAssistant<T>({ getState, getRecoveryState });
    }

    return assistantRef.assistant;
};
