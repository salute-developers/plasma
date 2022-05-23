import { AssistantSmartAppData } from '@salutejs/client';

import { SmartAppDataAction } from '../../types';
import { AssistantActionType, CharacterAction, InsetsAction } from '../AssistantProvider/store/types';
import {
    PopHistoryAction,
    PushHistoryAction,
    ChangeActiveScreenStateAction,
    ScreensProviderActionType,
} from '../ScreensProvider/store/types';

export type PlasmaAction =
    | SmartAppDataAction<PushHistoryAction>
    | SmartAppDataAction<ChangeActiveScreenStateAction>
    | SmartAppDataAction<PopHistoryAction>;
export type PlasmaActionData = CharacterAction | InsetsAction | PlasmaAction['smart_app_data'];

export const isPushHistoryAction = (
    smartAppData: AssistantSmartAppData['smart_app_data'],
): smartAppData is PushHistoryAction => {
    const action = smartAppData as PushHistoryAction;
    return action?.type === ScreensProviderActionType.PUSH_HISTORY && Boolean(action.payload?.history?.name);
};

export const isPopHistoryAction = (
    smartAppData: AssistantSmartAppData['smart_app_data'],
): smartAppData is PopHistoryAction => {
    const action = smartAppData as PopHistoryAction;
    return action?.type === ScreensProviderActionType.POP_HISTORY;
};

export const isCharacterAction = (
    smartAppData: AssistantSmartAppData['smart_app_data'],
): smartAppData is CharacterAction => {
    const action = smartAppData as CharacterAction;
    return action?.type === AssistantActionType.CHARACTER && Boolean(action.payload?.character);
};

export const isInsetsAction = (smartAppData: AssistantSmartAppData['smart_app_data']): smartAppData is InsetsAction => {
    const action = smartAppData as InsetsAction;
    return action?.type === AssistantActionType.INSETS && Boolean(action.payload?.insets);
};

export const isChangeStateAction = (
    smartAppData: AssistantSmartAppData['smart_app_data'],
): smartAppData is ChangeActiveScreenStateAction => {
    const action = smartAppData as ChangeActiveScreenStateAction;
    return action?.type === ScreensProviderActionType.CHANGE_ACTIVE_SCREEN_STATE && Boolean(action.payload?.data);
};

export const isPlasmaAppAction = (action: AssistantSmartAppData['smart_app_data']): action is PlasmaActionData => {
    if (!action) {
        return false;
    }

    return [isPushHistoryAction, isPopHistoryAction, isChangeStateAction].some((guard) => guard(action));
};
