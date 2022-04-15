import React from 'react';
import { AssistantSmartAppData } from '@salutejs/client';
import { DeviceThemeProps } from '@salutejs/plasma-ui/components/Device/DeviceDetection';

import { AssistantProvider } from '../../AssistantProvider';
import { AssistantProviderProps } from '../../AssistantProvider/AssistantProvider';
import { ScreensProvider } from '../ScreensProvider';
import { OnDataFn, OnStartFn, ScreensProviderProps } from '../types';

import { ScreensContainerManager } from './ScreensContainerManager/ScreensContainerManager';

interface ScreensContainerProps<A extends AssistantSmartAppData>
    extends Omit<AssistantProviderProps<A>, 'onStart' | 'onData'>,
        ScreensProviderProps,
        DeviceThemeProps {
    onStart?: OnStartFn;
    onData?: OnDataFn;
}

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
        <AssistantProvider assistantParams={assistantParams}>
            <ScreensProvider provider={provider} onPopState={onPopState}>
                <ScreensContainerManager themeProviderProps={themeProps} onStart={onStart} onData={onData}>
                    {children}
                </ScreensContainerManager>
            </ScreensProvider>
        </AssistantProvider>
    );
}
