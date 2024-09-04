export type FocusedPathState = Array<number>;

export type FocusedPathAction =
    | { type: 'reset' }
    | { type: 'set_initial_focus' }
    | { type: 'change_last_focus'; value: number }
    | { type: 'add_focus'; value: number }
    | { type: 'return_prev_focus' };

export function focusedPathReducer(state: FocusedPathState, action: FocusedPathAction): FocusedPathState {
    switch (action.type) {
        case 'reset': {
            return [];
        }

        case 'set_initial_focus': {
            return [0];
        }

        case 'change_last_focus': {
            return [...state.slice(0, -1), action.value];
        }

        case 'add_focus': {
            return [...state, action.value];
        }

        case 'return_prev_focus': {
            return state.slice(0, -1);
        }

        default: {
            return state;
        }
    }
}
