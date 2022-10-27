import React, { useReducer } from 'react';

import { usePopHistoryListener } from '../../hooks/usePopHistoryListener';
import { AnyObject } from '../../types';
import { last } from '../../utils/last';

import { History } from './store/types';
import { ScreensProviderContext } from './ScreensProviderContext';
import * as Actions from './store/actions';
import { initialState, reducer } from './store/reducer';
import { RouterProvider, ScreensProviderProps } from './types';

const defaultRouterProvider: RouterProvider = {
    back: () => window.history.back(),
    push: (name, params) => window.history.pushState({ name, params }, ''),
    go: (delta) => window.history.go(delta),
};

/**
 * Компонент, отвечающий за роутинг между экранами приложения, обернутыми в компонент `Screen`.
 * Предоставляет следующие методы для работы с экранами, которые доступны через использование
 * хука `useScreens`:
 * - `pushHistory` - переход на новый экран с состоянием
 * - `pushScreen` - переход на новый экран без состояния
 * - `changeState` - изменение состояния экрана
 * - `popScreen` - удаление экрана (возврат на предыдущий экран)
 * - `goToScreen` - возврат на конкретный экран в истории экранов, вся история до целевого экрана очищается,
 * если целевого экрана в истории нет выполняется `pushScreen`
 * - `changeState` - изменение состояния текущего экрана
 */
export function ScreensProvider({
    provider = defaultRouterProvider,
    onPopState,
    children,
}: React.PropsWithChildren<ScreensProviderProps>): React.ReactElement {
    const [state, dispatch] = useReducer(reducer, initialState);
    const popScreenDelta = React.useRef(1);

    const { history } = state;

    const pushHistory = React.useCallback((name: string, data: AnyObject) => {
        provider.push(name);
        dispatch(Actions.pushHistory(name, data, {}));
    }, []);

    const pushScreen = React.useCallback((name: string, params?: AnyObject) => {
        provider.push(name, params);
        dispatch(Actions.pushHistory(name, null, params ?? {}));
    }, []);

    const popScreen = React.useCallback(() => {
        provider.back?.();
    }, []);

    const goToScreen = React.useCallback(
        (name: string) => {
            const screenIndex = history.findIndex((screenState) => screenState.name === name);

            if (screenIndex >= 0) {
                const delta = history.length - screenIndex - 1;

                if (delta && delta < history.length) {
                    popScreenDelta.current = delta;
                    provider.go(-delta);
                }
            } else {
                // Если экран не найден, то чистим историю и пушим экран
                dispatch(Actions.popHistory(history.length));
                pushScreen(name);
            }
        },
        [history],
    );

    const onPopScreen = React.useCallback(
        (event: PopStateEvent) => {
            const currentHistory = last(history) ?? { name: 'unknown', data: null, params: {} };
            dispatch(Actions.popHistory(popScreenDelta.current));
            onPopState?.({ currentHistory, event, pushScreen, pushHistory, goToScreen });

            /* В случае, если popScreen был вызван в результате вызова goToScreen, то после прыжка в несколько экранов
           необходимо вернуть стандартный переход в один экран
        */
            popScreenDelta.current = 1;
        },
        [history, onPopState, pushScreen, pushHistory, goToScreen],
    );

    const changeActiveScreenState = React.useCallback(
        (data: Partial<History['data']>) => dispatch(Actions.changeActiveState(data)),
        [],
    );

    usePopHistoryListener(state.history.length, onPopScreen);

    const value = React.useMemo(
        () => ({
            state,
            pushScreen,
            pushHistory,
            popScreen,
            goToScreen,
            changeActiveScreenState,
            dispatch,
        }),
        [state, pushScreen, popScreen, pushHistory, goToScreen, changeActiveScreenState],
    );

    return <ScreensProviderContext.Provider value={value}>{children}</ScreensProviderContext.Provider>;
}
