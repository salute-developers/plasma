import React from 'react';
import { createAssistant, Insets } from '@salutejs/client';

import {
    ScreensProviderContext,
    ScreensProviderContextValue,
} from '../../src/components/ScreensProvider/ScreensProviderContext';
import { AssistantContext } from '../../src/components/AssistantProvider/AssistantContext';

const stub = () => {};

const mockAssistant = createAssistant({
    getState: () => ({}),
});

export const screensProviderDefaultValue: ScreensProviderContextValue = {
    state: {
        history: [],
    },
    dispatch: stub,
    pushHistory: stub,
    pushScreen: stub,
    popScreen: stub,
    goToScreen: stub,
    changeActiveScreenState: stub,
};

const insets: Record<'sberBox' | 'sberPortal' | 'mobile', Insets> = {
    sberBox: { left: 0, top: 0, right: 0, bottom: 180 },
    sberPortal: { left: 0, top: 0, right: 0, bottom: 140 },
    mobile: { left: 0, top: 0, right: 0, bottom: 100 },
};

export const withAppState = (Story: React.ComponentType, context) => {
    return (
        <AssistantContext.Provider
            value={{
                state: { insets: insets[context.globals.typoSize], character: 'sber', theme: 'dark' },
                assistant: mockAssistant,
                setAssistantState: () => {},
            }}
        >
            <ScreensProviderContext.Provider value={screensProviderDefaultValue}>
                <Story />
            </ScreensProviderContext.Provider>
        </AssistantContext.Provider>
    );
};
