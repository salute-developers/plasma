import type { Reducer } from 'react';

import { Action, ActionTypes } from './actions';
import type { State } from './types';

export const initColorState: State['color'] = { value: 'inherit', label: 'inherit' };
export const initSizeState: State['size'] = { value: 'xs', label: '16' };

export const initialState: State = {
    theme: 'dark',
    color: { ...initColorState },
    size: { ...initSizeState },
};

export const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_THEME:
            return { ...state, theme: action.payload.theme };
        case ActionTypes.SET_ITEM:
            return {
                ...state,
                wizardItemType: action.payload.wizardItemType,
                wizardItemName: action.payload.wizardItemName,
            };
        case ActionTypes.SET_ITEM_COLOR:
            return {
                ...state,
                color: { ...action.payload },
            };
        case ActionTypes.SET_ITEM_SIZE:
            return {
                ...state,
                size: { ...action.payload },
            };
        default:
            return state;
    }
};
