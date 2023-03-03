import React from 'react';
import type { HeaderProps } from '@salutejs/plasma-ui';

import { PageProps } from '../Page/Page';
import { PushScreenFn } from '../Page/types';
import { AnyObject } from '../../types';
import { InitializeParams } from '../AssistantProvider/assistant';
import { ScreensContainer } from '../ScreensProvider';
import { OnDataFn } from '../ScreensProvider/types';

import { isPlasmaAppAction, isPopHistoryAction, isPushHistoryAction } from './guards';
import { AppStateContext } from './AppStateContext';

export type OnStartFn<
    PageStateType extends AnyObject = AnyObject,
    PageParamsType extends Partial<Record<keyof PageStateType, unknown>> = Partial<Record<keyof PageStateType, unknown>>
> = (params: {
    pushHistory: <T extends keyof PageStateType>(name: T, data: PageStateType[T]) => void;
    pushScreen: PushScreenFn<PageStateType, PageParamsType>;
}) => void;

export interface PlasmaAppProps<Name extends string = string> {
    children: React.ReactElement<PageProps<Name>> | React.ReactElement<PageProps<Name>>[];
    assistantParams: Omit<InitializeParams, 'getState'>;
    header?: HeaderProps;
    onStart?: OnStartFn;
}

export function App<Name extends string>({
    children,
    assistantParams,
    header,
    onStart,
}: React.PropsWithChildren<PlasmaAppProps<Name>>): React.ReactElement {
    const onData = React.useCallback<OnDataFn>(({ command, pushHistory, popScreen }) => {
        switch (command.type) {
            case 'smart_app_data': {
                if (isPlasmaAppAction(command.smart_app_data)) {
                    if (isPushHistoryAction(command.smart_app_data)) {
                        const { name, data } = command.smart_app_data.payload.history;
                        pushHistory(name, data);
                    } else if (isPopHistoryAction(command.smart_app_data)) {
                        popScreen();
                    }
                }

                break;
            }
            default:
        }
    }, []);

    const appStateContextValue = React.useMemo(() => ({ header }), [header]);

    return (
        <AppStateContext.Provider value={appStateContextValue}>
            <ScreensContainer assistantParams={assistantParams} onStart={onStart} onData={onData}>
                {children}
            </ScreensContainer>
        </AppStateContext.Provider>
    );
}

// @deprecated use ScreenProvider
export const PlasmaApp = React.memo(App);
