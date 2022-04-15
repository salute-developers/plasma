import React from 'react';

import { useMount } from '../../../../hooks';
import { useAssistant, useAssistantCharacter } from '../../../AssistantProvider';
import { useAssistantTheme } from '../../../AssistantProvider/hooks/useAssistantTheme';
import { ThemeProvider, ThemeProviderProps } from '../../../ThemeProvider/ThemeProvider';
import { useScreens } from '../../hooks/useScreens';
import { OnDataFn, OnStartFn } from '../../types';

interface ScreensContainerManagerProps {
    onStart?: OnStartFn;
    onData?: OnDataFn;
    themeProviderProps: Omit<ThemeProviderProps, 'character'>;
}

export function ScreensContainerManager({
    children,
    themeProviderProps,
    onStart,
    onData,
}: React.PropsWithChildren<ScreensContainerManagerProps>) {
    const { getAssistant } = useAssistant();
    const character = useAssistantCharacter();
    const theme = useAssistantTheme();

    const { pushScreen, pushHistory, goToScreen } = useScreens();

    useMount(() => {
        const disposeStart = getAssistant().on('start', () => {
            onStart?.({ pushScreen, pushHistory });
            disposeStart();
        });

        const disposeData = getAssistant().on('data', (command) => {
            onData?.({ command, pushScreen, pushHistory, goToScreen });
        });

        return () => {
            disposeStart();
            disposeData();
        };
    });

    return (
        <ThemeProvider {...themeProviderProps} character={character} themeColor={theme}>
            {children}
        </ThemeProvider>
    );
}
