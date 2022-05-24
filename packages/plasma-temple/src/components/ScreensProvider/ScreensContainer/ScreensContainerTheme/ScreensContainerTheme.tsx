import React from 'react';

import { useAssistantCharacter } from '../../../AssistantProvider';
import { useAssistantTheme } from '../../../AssistantProvider/hooks/useAssistantTheme';
import { ThemeProvider, ThemeProviderProps } from '../../../ThemeProvider/ThemeProvider';

export type ScreensContainerThemeProps = Omit<ThemeProviderProps, 'character' | 'themeColor'>;

export function ScreensContainerTheme({
    children,
    ...themeProviderProps
}: React.PropsWithChildren<ScreensContainerThemeProps>) {
    const character = useAssistantCharacter();
    const theme = useAssistantTheme();

    return (
        <ThemeProvider {...themeProviderProps} character={character} themeColor={theme}>
            {children}
        </ThemeProvider>
    );
}
