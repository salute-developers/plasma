import React from 'react';
import { AssistantSmartAppData } from '@salutejs/client';

import { ScreensProvider } from '../ScreensProvider';
import { ScreensProviderProps } from '../types';

import {
    ScreensContainerAssistant,
    ScreensContainerAssistantProps,
} from './ScreensContainerAssistant/ScreensContainerAssistant';
import { ScreensContainerTheme, ScreensContainerThemeProps } from './ScreensContainerTheme/ScreensContainerTheme';

type ScreensContainerProps<A extends AssistantSmartAppData> = ScreensProviderProps &
    ScreensContainerAssistantProps<A> &
    ScreensContainerThemeProps;

/**
 * Компонент - контейнер, ускоряющий старт разработки приложения с использованием пакета `@salutejs/plasma-temple`.
 * Включает следующий функционал:
 *  1. Инициализация ассистента
 *  2. Настройка роутинга
 *  3. Настройка темизации
 *
 *  Под капотом использует следующие компоненты: `AssistantProvider`, `ScreensProvider`, `ThemeProvider`
 */
export function ScreensContainer<A extends AssistantSmartAppData = AssistantSmartAppData>({
    assistantParams,
    onStart,
    onData,
    provider,
    onPopState,
    children,
    ...themeProps
}: React.PropsWithChildren<ScreensContainerProps<A>>) {
    return (
        <ScreensProvider provider={provider} onPopState={onPopState}>
            <ScreensContainerAssistant
                {...themeProps}
                assistantParams={assistantParams}
                onStart={onStart}
                onData={onData}
            >
                <ScreensContainerTheme {...themeProps}>{children}</ScreensContainerTheme>
            </ScreensContainerAssistant>
        </ScreensProvider>
    );
}
