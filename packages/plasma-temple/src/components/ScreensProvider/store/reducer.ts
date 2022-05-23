import { last } from '../../../utils/last';

import { ScreensProviderState, ScreensProviderAction, ScreensProviderActionType } from './types';

export const initialState: ScreensProviderState = {
    history: [],
};

export const reducer = (state: ScreensProviderState, action: ScreensProviderAction): ScreensProviderState => {
    switch (action.type) {
        case ScreensProviderActionType.PUSH_HISTORY: {
            const { history } = action.payload;

            return {
                ...state,
                history: [...state.history, history],
            };
        }

        case ScreensProviderActionType.POP_HISTORY: {
            const { delta = 1 } = action.payload;
            return {
                ...state,
                history: state.history.slice(0, -delta),
            };
        }

        case ScreensProviderActionType.CHANGE_ACTIVE_SCREEN_STATE: {
            const { data } = action.payload;
            const screen = last(state.history);

            if (screen) {
                return {
                    ...state,
                    history: [...state.history.slice(0, -1), { ...screen, data: { ...(screen.data ?? {}), ...data } }],
                };
            }

            return state;
        }

        case ScreensProviderActionType.REPLACE_HISTORY: {
            const { history } = action.payload;

            return { ...state, history };
        }

        default:
            return state;
    }
};
