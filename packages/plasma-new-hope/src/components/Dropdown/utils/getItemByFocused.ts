import { FocusedPathState } from '../reducers/focusedPathReducer';
import { FocusedToValueMapType } from '../hooks/useHashMaps';

export const getItemByFocused = (focusedPath: FocusedPathState, focusedToValueMap: FocusedToValueMapType) => {
    const focusedPathAsString = focusedPath.reduce((acc, n) => `${acc}/${n}`, '').replace(/^(\/)/, '');

    return focusedToValueMap.get(focusedPathAsString);
};
