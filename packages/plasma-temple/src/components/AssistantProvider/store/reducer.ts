import { AssistantState, AssistantActionType, AssistantAction } from './types';

export const initialAssistantState: AssistantState = {
    character: 'sber',
    insets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    theme: 'dark',
};

export const reducer = (state: AssistantState, action: AssistantAction): AssistantState => {
    switch (action.type) {
        case AssistantActionType.CHARACTER: {
            const { character } = action.payload;
            return {
                ...state,
                character,
            };
        }

        case AssistantActionType.INSETS: {
            const { insets } = action.payload;

            return {
                ...state,
                insets,
            };
        }

        case AssistantActionType.THEME: {
            const { theme } = action.payload;

            return {
                ...state,
                theme,
            };
        }

        default:
            return state;
    }
};
