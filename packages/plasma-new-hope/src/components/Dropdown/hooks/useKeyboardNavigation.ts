import { KeyboardEvent } from 'react';
import type { Dispatch } from 'react';

import { PathAction, PathState } from '../reducers/pathReducer';
import { FocusedPathAction, FocusedPathState } from '../reducers/focusedPathReducer';
import { HandleGlobalToggleType, DropdownProps } from '../Dropdown.types';

import { PathMapType, FocusedToValueMapType } from './useHashMaps';

const JUMP_SIZE = 10;

export const keys = {
    Enter: 'Enter',
    Space: 'Space',
    Tab: 'Tab',
    Escape: 'Escape',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    Home: 'Home',
    End: 'End',
    PageUp: 'PageUp',
    PageDown: 'PageDown',
};

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
        switch (event.code) {
            case keys.ArrowUp: {
                if (focusedPath.length) {
                    if (currentIndex > 0) {
                        dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex - 1 });
                    }
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    handleGlobalToggle(true, event);
                }

                break;
            }

            case keys.ArrowDown: {
                if (focusedPath.length) {
                    if (currentIndex + 1 < currentLength) {
                        dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex + 1 });
                    }
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    handleGlobalToggle(true, event);
                }

                break;
            }

            case keys.ArrowLeft: {
                if (focusedPath.length) {
                    dispatchPath({ type: 'removed_last_level' });
                    dispatchFocusedPath({ type: 'return_prev_focus' });
                }

                if (focusedPath.length === 1) {
                    handleGlobalToggle(false, event);
                }

                break;
            }

            case keys.ArrowRight: {
                if (focusedPath.length) {
                    const currentItem = getFurtherPath(focusedPath, focusedToValueMap);

                    if (currentItem?.items) {
                        dispatchPath({ type: 'added_next_level', value: currentItem.value.toString() });
                        dispatchFocusedPath({ type: 'add_focus', value: 0 });
                    }
                }

                break;
            }

            case keys.Enter:
            case keys.Space: {
                event.preventDefault();

                if (path[0]) {
                    const currentItem = getFurtherPath(focusedPath, focusedToValueMap);

                    if (currentItem?.disabled || currentItem?.isDisabled) {
                        break;
                    }

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

                break;
            }

            case keys.Tab:
            case keys.Escape: {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
                handleGlobalToggle(false, event);

                break;
            }

            case keys.Home: {
                if (path[0]) {
                    dispatchFocusedPath({ type: 'change_last_focus', value: 0 });
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });

                    handleGlobalToggle(true, event);
                }

                break;
            }

            case keys.End: {
                if (path[0]) {
                    dispatchFocusedPath({ type: 'change_last_focus', value: currentLength - 1 });
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'change_last_focus', value: (pathMap.get('root') || 0) - 1 });

                    handleGlobalToggle(true, event);
                }

                break;
            }

            case keys.PageUp: {
                if (!path[0]) {
                    break;
                }

                if (currentIndex <= JUMP_SIZE) {
                    dispatchFocusedPath({ type: 'change_last_focus', value: 0 });
                } else {
                    dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex - JUMP_SIZE });
                }

                break;
            }

            case keys.PageDown: {
                if (!path[0]) {
                    break;
                }

                if (currentLength - currentIndex <= JUMP_SIZE) {
                    dispatchFocusedPath({ type: 'change_last_focus', value: currentLength - 1 });
                } else {
                    dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex + JUMP_SIZE });
                }

                break;
            }

            default: {
                break;
            }
        }
    };

    return { onKeyDown };
};
