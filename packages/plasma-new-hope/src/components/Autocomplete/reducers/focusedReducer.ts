export type FocusedState = number | null;

export type FocusedPathAction =
    | { type: 'reset' }
    | { type: 'setNextItem'; listLength: number }
    | { type: 'setPrevItem'; listLength: number }
    | { type: 'setFirstItem' }
    | { type: 'setLastItem'; listLength: number };

export function focusedReducer(state: FocusedState, action: FocusedPathAction): FocusedState {
    switch (action.type) {
        case 'reset': {
            return null;
        }

        case 'setNextItem': {
            if (state === action.listLength - 1) {
                return state;
            }

            if (state === null) {
                return 0;
            }

            return state + 1;
        }

        case 'setPrevItem': {
            if (state === 0) {
                return state;
            }

            if (state === null) {
                return action.listLength - 1;
            }

            return state - 1;
        }

        case 'setFirstItem': {
            return 0;
        }

        case 'setLastItem': {
            return action.listLength - 1;
        }

        default: {
            return state;
        }
    }
}
