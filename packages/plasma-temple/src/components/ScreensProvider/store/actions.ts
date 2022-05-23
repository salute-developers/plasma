import { AnyObject } from '../../../types';
import { createAction } from '../../../utils/createAction';

import {
    PushHistoryAction,
    PopHistoryAction,
    ChangeActiveScreenStateAction,
    History,
    ScreensProviderActionType,
    ReplaceHistoryAction,
} from './types';

export const pushHistory = <
    T extends AnyObject = AnyObject,
    N extends Extract<keyof T, string> = Extract<keyof T, string>,
    P extends AnyObject = AnyObject
>(
    name: N,
    data: T[N],
    params: P,
): PushHistoryAction => createAction(ScreensProviderActionType.PUSH_HISTORY, { history: { name, data, params } });

export const popHistory = (delta?: number): PopHistoryAction =>
    createAction(ScreensProviderActionType.POP_HISTORY, { delta });

export const changeActiveState = (data: Partial<History['data']>): ChangeActiveScreenStateAction =>
    createAction(ScreensProviderActionType.CHANGE_ACTIVE_SCREEN_STATE, { data });

export const replaceHistory = (history: History[]): ReplaceHistoryAction =>
    createAction(ScreensProviderActionType.REPLACE_HISTORY, { history });

export const getActionCreators = <
    T extends AnyObject = AnyObject,
    N extends Extract<keyof T, string> = Extract<keyof T, string>
>() => ({
    pushHistory: <S extends N>(name: S, data: T[S]) => pushHistory(name, data, {}),
    pushScreen: <S extends N>(name: S) => pushHistory(name, null, {}),
    popHistory,
    changeActiveState: <S extends N>(data: T[S]) => changeActiveState(data),
});
