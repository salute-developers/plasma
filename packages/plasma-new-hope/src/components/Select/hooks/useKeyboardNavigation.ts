import type { KeyboardEvent, Dispatch } from 'react';
import React from 'react';

import {
    PathAction,
    PathState,
    FocusedPathAction,
    FocusedPathState,
    FocusedChipIndexState,
    FocusedChipIndexAction,
} from '../reducers';
import { SelectProps } from '../Select.types';
import type { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';

import { PathMapType, FocusedToValueMapType, ValueToItemMapType } from './usePathMaps';

const JUMP_SIZE = 10;

export const keys = {
    Enter: 'Enter',
    Space: 'Space',
    Tab: 'Tab',
    Escape: 'Escape',
    Backspace: 'Backspace',
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

type Props = {
    focusedPath: FocusedPathState;
    dispatchFocusedPath: Dispatch<FocusedPathAction>;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    pathMap: PathMapType;
    focusedToValueMap: FocusedToValueMapType;
    handleToggle: (opened: boolean) => void;
    handlePressDown: (item: MergedDropdownNodeTransformed, e?: React.MouseEvent<HTMLElement>) => void;
    focusedChipIndex: FocusedChipIndexState;
    dispatchFocusedChipIndex: Dispatch<FocusedChipIndexAction>;
    value: string | string[];
    valueToItemMap: ValueToItemMapType;
    multiselect: SelectProps['multiselect'];
    isTargetAmount: SelectProps['isTargetAmount'];
};

type ReturnedProps = {
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export const useKeyNavigation = ({
    focusedPath,
    dispatchFocusedPath,
    path,
    dispatchPath,
    pathMap,
    focusedToValueMap,
    handleToggle,
    handlePressDown,
    focusedChipIndex,
    dispatchFocusedChipIndex,
    value,
    valueToItemMap,
    multiselect,
    isTargetAmount,
}: Props): ReturnedProps => {
    const currentIndex: number = focusedPath?.[focusedPath.length - 1] || 0;
    const currentLength: number = pathMap.get(path?.[focusedPath.length - 1]) || 0;

    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        switch (event.code) {
            case keys.ArrowUp: {
                if (focusedPath.length) {
                    if (currentIndex > 0) {
                        if (path.length > focusedPath.length) {
                            dispatchPath({ type: 'removed_last_level' });
                        }

                        dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex - 1 });
                    }
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    handleToggle(true);
                }

                if (Array.isArray(value)) {
                    dispatchFocusedChipIndex({ type: 'reset' });
                }

                break;
            }

            case keys.ArrowDown: {
                if (focusedPath.length) {
                    if (currentIndex + 1 < currentLength) {
                        if (path.length > focusedPath.length) {
                            dispatchPath({ type: 'removed_last_level' });
                        }

                        dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex + 1 });
                    }
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    handleToggle(true);
                }

                if (Array.isArray(value)) {
                    dispatchFocusedChipIndex({ type: 'reset' });
                }

                break;
            }

            case keys.ArrowLeft: {
                if (path[0]) {
                    if (focusedPath.length) {
                        if (path.length > focusedPath.length) {
                            dispatchPath({ type: 'removed_last_level' });
                        } else {
                            dispatchFocusedPath({ type: 'return_prev_focus' });
                        }
                    }

                    if (path.length === 1) {
                        handleToggle(false);
                    }
                } else if (Array.isArray(value) && !isTargetAmount) {
                    dispatchFocusedChipIndex({ type: 'moveLeft' });
                }

                break;
            }

            case keys.ArrowRight: {
                if (path[0]) {
                    if (!focusedPath.length) {
                        break;
                    }

                    const currentItem = getFurtherPath(focusedPath, focusedToValueMap);

                    if (currentItem?.items) {
                        if (path.length > focusedPath.length) {
                            dispatchFocusedPath({ type: 'add_focus', value: 0 });
                        } else {
                            dispatchPath({ type: 'added_next_level', value: currentItem.value.toString() });
                        }
                    }
                } else if (Array.isArray(value) && !isTargetAmount) {
                    dispatchFocusedChipIndex({ type: 'moveRight', total: value.length });
                }

                break;
            }

            case keys.Backspace: {
                if (!multiselect) break;

                if (focusedChipIndex !== null) {
                    const currentItem = valueToItemMap.get(value[focusedChipIndex])!;

                    handlePressDown(currentItem);

                    if (value.length === 1) {
                        dispatchFocusedChipIndex({ type: 'reset' });

                        break;
                    }

                    if (focusedChipIndex === value.length - 1) {
                        dispatchFocusedChipIndex({ type: 'moveLeft' });

                        break;
                    }
                }

                break;
            }

            case keys.Space: {
                event.preventDefault();

                const currentItem = getFurtherPath(focusedPath, focusedToValueMap);

                if (!path[0]) {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    break;
                }

                if (!currentItem || currentItem?.disabled) {
                    break;
                }

                handlePressDown(currentItem);

                break;
            }

            case keys.Enter: {
                event.preventDefault();

                if (Array.isArray(value)) {
                    dispatchFocusedChipIndex({ type: 'reset' });
                }

                const currentItem = getFurtherPath(focusedPath, focusedToValueMap)!;

                if (currentItem?.disabled) {
                    break;
                }

                if (!path[0]) {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    break;
                }

                if (currentItem?.items) {
                    if (path.length > focusedPath.length) {
                        dispatchFocusedPath({ type: 'add_focus', value: 0 });
                    } else {
                        dispatchPath({ type: 'added_next_level', value: currentItem.value.toString() });
                    }

                    break;
                }

                handlePressDown(currentItem);

                break;
            }

            case keys.Tab:
            case keys.Escape: {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
                dispatchFocusedChipIndex({ type: 'reset' });
                handleToggle(false);

                break;
            }

            case keys.Home: {
                if (path[0]) {
                    if (path.length > focusedPath.length) {
                        dispatchPath({ type: 'removed_last_level' });
                    }

                    dispatchFocusedPath({ type: 'change_last_focus', value: 0 });
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });

                    handleToggle(true);
                }

                break;
            }

            case keys.End: {
                if (path[0]) {
                    if (path.length > focusedPath.length) {
                        dispatchPath({ type: 'removed_last_level' });
                    }

                    dispatchFocusedPath({ type: 'change_last_focus', value: currentLength - 1 });
                } else {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'change_last_focus', value: (pathMap.get('root') || 0) - 1 });

                    handleToggle(true);
                }

                break;
            }

            case keys.PageUp: {
                if (!path[0]) {
                    break;
                }

                if (path.length > focusedPath.length) {
                    dispatchPath({ type: 'removed_last_level' });
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

                if (path.length > focusedPath.length) {
                    dispatchPath({ type: 'removed_last_level' });
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
