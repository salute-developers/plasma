export type FocusedChipIndexState = number | null;

export type FocusedChipIndexAction = { type: 'reset' } | { type: 'moveLeft' } | { type: 'moveRight'; total: number };

export function focusedChipIndexReducer(
    state: FocusedChipIndexState,
    action: FocusedChipIndexAction,
): FocusedChipIndexState {
    switch (action.type) {
        case 'reset': {
            return null;
        }

        case 'moveLeft': {
            if (state === null) {
                return 0;
            }

            if (state === 0) {
                return state;
            }

            return state - 1;
        }

        case 'moveRight': {
            if (state === null) {
                return action.total - 1;
            }

            if (state === action.total - 1) {
                return state;
            }

            return state + 1;
        }

        default: {
            return null;
        }
    }
}
