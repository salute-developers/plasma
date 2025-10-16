import type { KeyboardEvent, Dispatch } from 'react';
import React from 'react';

import { keyExists } from '../reducers/treePathReducer';
import { PathAction, PathState, FocusedPathAction, FocusedPathState, TreePathAction, TreePathState } from '../reducers';
import type { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';

import { PathMapType, FocusedToValueMapType } from './usePathMaps';

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

export const getItemByFocused = (focusedPath: FocusedPathState, focusedToValueMap: FocusedToValueMapType) => {
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
    handleListToggle: (opened: boolean) => void;
    handlePressDown: (item: MergedDropdownNodeTransformed, e?: React.MouseEvent<HTMLElement>) => void;
    treePath: TreePathState;
    dispatchTreePath: Dispatch<TreePathAction>;
    treeView: boolean;
    valueToPathMap: Map<string, string[]>;
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
    handleListToggle,
    handlePressDown,
    treePath,
    dispatchTreePath,
    treeView,
    valueToPathMap,
}: Props): ReturnedProps => {
    if (treeView) {
        return keyboardNavigationTree({
            focusedPath,
            dispatchFocusedPath,
            path,
            dispatchPath,
            pathMap,
            focusedToValueMap,
            handleListToggle,
            handlePressDown,
            treePath,
            dispatchTreePath,
            treeView,
            valueToPathMap,
        });
    }

    return keyboardNavigationDefault({
        focusedPath,
        dispatchFocusedPath,
        path,
        dispatchPath,
        pathMap,
        focusedToValueMap,
        handleListToggle,
        handlePressDown,
        treePath,
        dispatchTreePath,
        treeView,
        valueToPathMap,
    });
};

const keyboardNavigationDefault = ({
    focusedPath,
    dispatchFocusedPath,
    path,
    dispatchPath,
    pathMap,
    focusedToValueMap,
    handleListToggle,
    handlePressDown,
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
                    handleListToggle(true);
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
                    handleListToggle(true);
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
                        handleListToggle(false);
                    }
                }

                break;
            }

            case keys.ArrowRight: {
                if (path[0]) {
                    if (!focusedPath.length) {
                        break;
                    }

                    const currentItem = getItemByFocused(focusedPath, focusedToValueMap);

                    if (currentItem?.disabled || currentItem?.isDisabled) {
                        break;
                    }

                    if (currentItem?.items) {
                        if (path.length > focusedPath.length) {
                            dispatchFocusedPath({ type: 'add_focus', value: 0 });
                        } else {
                            dispatchPath({ type: 'added_next_level', value: currentItem.value.toString() });
                        }
                    }
                }

                break;
            }

            case keys.Space: {
                event.preventDefault();

                const currentItem = getItemByFocused(focusedPath, focusedToValueMap);

                if (!path[0]) {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    break;
                }

                if (!currentItem || currentItem?.disabled || currentItem?.isDisabled) {
                    break;
                }

                handlePressDown(currentItem);

                break;
            }

            case keys.Enter: {
                event.preventDefault();

                const currentItem = getItemByFocused(focusedPath, focusedToValueMap)!;

                if (currentItem?.disabled || currentItem?.isDisabled) {
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
                if (path[0]) {
                    handleListToggle(false);
                }

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

                    handleListToggle(true);
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

                    handleListToggle(true);
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

const keyboardNavigationTree = ({
    focusedPath,
    dispatchFocusedPath,
    path,
    dispatchPath,
    pathMap,
    focusedToValueMap,
    handleListToggle,
    handlePressDown,
    treePath,
    dispatchTreePath,
    valueToPathMap,
}: Props): ReturnedProps => {
    const currentIndex: number = focusedPath?.[focusedPath.length - 1] || 0;
    const currentItem = getItemByFocused(focusedPath, focusedToValueMap);
    const currentLength: number = currentItem?.parent?.items?.length || pathMap.get('root') || 0;

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
                    handleListToggle(true);
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
                    handleListToggle(true);
                }

                break;
            }

            case keys.ArrowLeft: {
                if (path[0]) {
                    if (focusedPath.length) {
                        const isCurrentLevelOpened = keyExists(
                            treePath,
                            valueToPathMap.get(currentItem?.value.toString() || '') || [],
                        );

                        if (isCurrentLevelOpened) {
                            dispatchTreePath({
                                type: 'toggled_level',
                                value: valueToPathMap.get(currentItem?.value.toString() || '') || [],
                            });
                        } else if (focusedPath.length === 1) {
                            handleListToggle(false);
                        } else {
                            dispatchFocusedPath({ type: 'return_prev_focus' });
                        }
                    }
                }

                break;
            }

            case keys.ArrowRight: {
                if (path[0]) {
                    if (!focusedPath.length) {
                        break;
                    }

                    if (currentItem?.disabled || currentItem?.isDisabled) {
                        break;
                    }

                    if (currentItem?.items) {
                        const isCurrentLevelOpened = keyExists(
                            treePath,
                            valueToPathMap.get(currentItem.value.toString()) || [],
                        );

                        if (isCurrentLevelOpened) {
                            dispatchFocusedPath({ type: 'add_focus', value: 0 });
                        } else {
                            dispatchTreePath({
                                type: 'toggled_level',
                                value: valueToPathMap.get(currentItem.value.toString()) || [],
                            });
                        }
                    }
                }

                break;
            }

            case keys.Space:
            case keys.Enter: {
                event.preventDefault();

                if (!path[0]) {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    break;
                }

                if (!currentItem || currentItem?.disabled || currentItem?.isDisabled) {
                    break;
                }

                handlePressDown(currentItem);

                break;
            }

            case keys.Tab:
            case keys.Escape: {
                if (path[0]) {
                    handleListToggle(false);
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
