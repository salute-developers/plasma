import { KeyboardEvent } from 'react';
import type { Dispatch } from 'react';

import { PathAction, PathState } from '../reducers/pathReducer';
import { FocusedPathAction, FocusedPathState } from '../reducers/focusedPathReducer';
import { HandleGlobalToggleType, DropdownProps } from '../Dropdown.types';

import { PathMapType, FocusedToValueMapType } from './useHashMaps';

const getFurtherPath = (focusedPath: FocusedPathState, focusedToValueMap: FocusedToValueMapType) => {
    const focusedPathAsString = focusedPath.reduce((acc, n) => `${acc}/${n}`, '').replace(/^(\/)/, '');

    return focusedToValueMap.get(focusedPathAsString);
};

interface Props {
    focusedPath: FocusedPathState;
    dispatchFocusedPath: Dispatch<FocusedPathAction>;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    pathMap: PathMapType;
    focusedToValueMap: FocusedToValueMapType;
    handleGlobalToggle: HandleGlobalToggleType;
    closeOnSelect: DropdownProps['closeOnSelect'];
    onItemSelect: DropdownProps['onItemSelect'];
    onItemClick: DropdownProps['onItemClick'];
}

interface ReturnedProps {
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export const useKeyNavigation = ({
    focusedPath,
    dispatchFocusedPath,
    path,
    dispatchPath,
    pathMap,
    focusedToValueMap,
    handleGlobalToggle,
    closeOnSelect,
    onItemSelect,
    onItemClick,
}: Props): ReturnedProps => {
    const currentLength: number = pathMap.get(path?.[path.length - 1]) || 0;
    const currentIndex: number = focusedPath?.[focusedPath.length - 1] || 0;

    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        const { code } = event;

        if (code === 'ArrowUp') {
            if (focusedPath.length) {
                const newIndex = currentIndex <= 0 ? currentLength - 1 : currentIndex - 1;
                dispatchFocusedPath({ type: 'change_last_focus', value: newIndex });
            } else {
                dispatchPath({ type: 'opened_first_level' });
                dispatchFocusedPath({ type: 'set_initial_focus' });
                handleGlobalToggle(true, event);
            }
        }

        if (code === 'ArrowDown') {
            if (focusedPath.length) {
                const newIndex = currentIndex + 1 >= currentLength ? 0 : currentIndex + 1;
                dispatchFocusedPath({ type: 'change_last_focus', value: newIndex });
            } else {
                dispatchPath({ type: 'opened_first_level' });
                dispatchFocusedPath({ type: 'set_initial_focus' });
                handleGlobalToggle(true, event);
            }
        }

        if (code === 'ArrowLeft') {
            if (focusedPath.length) {
                dispatchPath({ type: 'removed_last_level' });
                dispatchFocusedPath({ type: 'return_prev_focus' });
            }

            if (focusedPath.length === 1) {
                handleGlobalToggle(false, event);
            }
        }

        if (code === 'ArrowRight') {
            if (focusedPath.length) {
                const currentItem = getFurtherPath(focusedPath, focusedToValueMap);

                if (currentItem?.items) {
                    dispatchPath({ type: 'added_next_level', value: currentItem.value.toString() });
                    dispatchFocusedPath({ type: 'add_focus', value: 0 });
                }
            }
        }

        if (code === 'Enter' || code === 'Space') {
            event.preventDefault();

            if (path[0]) {
                const currentItem = getFurtherPath(focusedPath, focusedToValueMap);

                if (currentItem?.disabled || currentItem?.isDisabled) return;

                if (currentItem?.items) {
                    dispatchPath({ type: 'added_next_level', value: currentItem.value.toString() });
                    dispatchFocusedPath({ type: 'add_focus', value: 0 });
                } else {
                    if (closeOnSelect) {
                        handleGlobalToggle(false, event);
                    }

                    if (onItemSelect && currentItem) {
                        onItemSelect(currentItem, event);
                    }

                    if (onItemClick && currentItem) {
                        onItemClick(currentItem, event);
                    }
                }
            } else {
                dispatchPath({ type: 'opened_first_level' });
                dispatchFocusedPath({ type: 'set_initial_focus' });
            }
        }

        if (code === 'Tab' || code === 'Escape') {
            dispatchFocusedPath({ type: 'reset' });
            dispatchPath({ type: 'reset' });

            handleGlobalToggle(false, event);
        }

        if (code === 'Home') {
            if (path[0]) {
                dispatchFocusedPath({ type: 'change_last_focus', value: 0 });
            } else {
                dispatchPath({ type: 'opened_first_level' });
                dispatchFocusedPath({ type: 'set_initial_focus' });

                handleGlobalToggle(true, event);
            }
        }

        if (code === 'End') {
            if (path[0]) {
                dispatchFocusedPath({ type: 'change_last_focus', value: currentLength - 1 });
            } else {
                dispatchPath({ type: 'opened_first_level' });
                dispatchFocusedPath({ type: 'change_last_focus', value: (pathMap.get('root') || 0) - 1 });

                handleGlobalToggle(true, event);
            }
        }

        if (code === 'PageUp') {
            if (path[0]) {
                if (currentIndex <= 10) {
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                } else {
                    dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex - 10 });
                }
            }
        }

        if (code === 'PageDown') {
            if (path[0]) {
                if (currentLength - currentIndex <= 10) {
                    dispatchFocusedPath({ type: 'change_last_focus', value: currentLength - 1 });
                } else {
                    dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex + 10 });
                }
            }
        }
    };

    return { onKeyDown };
};
