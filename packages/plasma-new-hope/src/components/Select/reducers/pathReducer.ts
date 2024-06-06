export type PathState = Array<string>;

export type PathAction =
    | { type: 'reset' }
    | { type: 'opened_first_level' }
    | { type: 'added_next_level'; value: string }
    | { type: 'removed_last_level' }
    | { type: 'changed_on_level'; value: string; level: number }
    | { type: 'cut_by_level'; level: number };

export function pathReducer(state: PathState, action: PathAction): PathState {
    switch (action.type) {
        case 'reset': {
            return [];
        }

        case 'opened_first_level': {
            return ['root'];
        }

        case 'added_next_level': {
            return [...state, action.value];
        }

        case 'removed_last_level': {
            return [...state.slice(0, -1)];
        }

        case 'changed_on_level': {
            return [...state.slice(0, action.level), action.value];
        }

        case 'cut_by_level': {
            return state.slice(0, action.level);
        }

        default: {
            return state;
        }
    }
}
