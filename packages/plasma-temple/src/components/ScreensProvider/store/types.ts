import { AnyObject } from '../../../types';
import { Action } from '../../../utils/createAction';

export interface History<N = string, T extends AnyObject = AnyObject, P extends AnyObject = AnyObject> {
    name: N;
    data: T | null;
    params: P;
}

export interface ScreensProviderState {
    history: History[];
}

export enum ScreensProviderActionType {
    PUSH_HISTORY = 'pushHistory',
    POP_HISTORY = 'popHistory',
    CHANGE_ACTIVE_SCREEN_STATE = 'changeActiveScreenState',
    REPLACE_HISTORY = 'replaceHistory',
}

export type PushHistoryAction = Action<ScreensProviderActionType.PUSH_HISTORY, { history: History }>;
export type PopHistoryAction = Action<ScreensProviderActionType.POP_HISTORY, { delta?: number }>;
export type ChangeActiveScreenStateAction = Action<
    ScreensProviderActionType.CHANGE_ACTIVE_SCREEN_STATE,
    { data: Partial<History['data']> }
>;
export type ReplaceHistoryAction = Action<ScreensProviderActionType.REPLACE_HISTORY, { history: History[] }>;

export type ScreensProviderAction =
    | PushHistoryAction
    | PopHistoryAction
    | ReplaceHistoryAction
    | ChangeActiveScreenStateAction;
