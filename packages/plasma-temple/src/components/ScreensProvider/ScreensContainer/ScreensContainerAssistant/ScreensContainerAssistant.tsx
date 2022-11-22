import React from 'react';
import { AssistantClientCustomizedCommand, AssistantSmartAppData } from '@salutejs/client';

import { AssistantProvider } from '../../../AssistantProvider';
import { AssistantProviderProps } from '../../../AssistantProvider/AssistantProvider';
import { useScreens } from '../../hooks/useScreens';
import { OnDataFn, OnStartFn } from '../../types';

export interface ScreensContainerAssistantProps<A extends AssistantSmartAppData>
    extends Omit<AssistantProviderProps<A>, 'onStart' | 'onData'> {
    onStart?: OnStartFn;
    onData?: OnDataFn;
}

export function ScreensContainerAssistant<A extends AssistantSmartAppData = AssistantSmartAppData>({
    children,
    assistantParams,
    onStart,
    onData,
}: React.PropsWithChildren<ScreensContainerAssistantProps<A>>) {
    const { pushScreen, pushHistory, goToScreen, popScreen } = useScreens();

    const handleStart = React.useCallback(() => {
        onStart?.({ pushScreen, pushHistory });
    }, []);

    const handleData = React.useCallback((command: AssistantClientCustomizedCommand<A>) => {
        onData?.({ command, pushScreen, pushHistory, goToScreen, popScreen });
    }, []);

    return (
        <AssistantProvider assistantParams={assistantParams} onStart={handleStart} onData={handleData}>
            {children}
        </AssistantProvider>
    );
}
