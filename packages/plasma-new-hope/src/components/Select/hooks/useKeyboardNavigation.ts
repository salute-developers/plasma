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
    items: MergedDropdownNodeTransformed[];
    readOnly: boolean;
};

type ReturnedProps = {
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
};

// #TODO: подумать над идеей выноса логики фокуса непосредственно в focusedPathReducer.
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
    items,
    readOnly,
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
            items,
            readOnly,
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
        items,
        readOnly,
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
    readOnly,
}: Props): ReturnedProps => {
    const currentIndex: number = focusedPath?.[focusedPath.length - 1] || 0;
    const currentLength: number = pathMap.get(path?.[focusedPath.length - 1]) || 0;

    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (readOnly) {
            return;
        }

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
    items,
    readOnly,
}: Props): ReturnedProps => {
    const currentItem = getItemByFocused(focusedPath, focusedToValueMap);
    const currentIndex: number = focusedPath?.[focusedPath.length - 1] || 0;
    const currentLength: number = currentItem?.parent?.items?.length || pathMap.get('root') || 0;

    const isValidFocus = (focusCandidate: FocusedPathState) => {
        if (!Array.isArray(items) || !Array.isArray(focusCandidate)) return false;

        let currentLevel = items;

        for (const index of focusCandidate) {
            if (!Array.isArray(currentLevel) || index >= currentLevel.length) {
                return false;
            }

            const node = currentLevel[index];

            currentLevel = node.items || [];
        }

        return true;
    };

    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (readOnly) {
            return;
        }

        switch (event.code) {
            case keys.ArrowUp: {
                /**
                 * Если список открыт и фокус уже установлен на каком-либо элементе.
                 * */
                if (focusedPath.length) {
                    /**
                     * Если это не первый элемент, то нужно вначале найти элемент для фокуса.
                     * Т.к. если верхний элемент раскрыт, то и перемещаться нужно не на него,
                     * а на его самый нижний дочерний элемент.
                     * */
                    if (currentIndex > 0) {
                        let nextFocus = [...focusedPath.slice(0, -1), currentIndex - 1];

                        while (nextFocus) {
                            const focusedPathAsString = nextFocus
                                .reduce((acc, n) => `${acc}/${n}`, '')
                                .replace(/^(\/)/, '');

                            const item = focusedToValueMap.get(focusedPathAsString)!;

                            const isLevelOpened = keyExists(treePath, valueToPathMap.get(item!.value.toString()) || []);

                            if (isLevelOpened) {
                                nextFocus = [...nextFocus, (item?.items?.length || 0) - 1];
                            } else {
                                break;
                            }
                        }

                        dispatchFocusedPath({ type: 'set_focus', value: nextFocus });
                    } else {
                        /**
                         * Если элемент первый, то нужно лишь подняться к его родителю.
                         * */
                        dispatchFocusedPath({ type: 'return_prev_focus' });
                    }
                } else {
                    /**
                     * Если список закрыт, то нужно его открыть и установить фокус на первый элемент.
                     * */
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    handleListToggle(true);
                }

                break;
            }

            case keys.ArrowDown: {
                /**
                 * Если список открыт и фокус уже установлен на каком-либо элементе.
                 * */
                if (focusedPath.length) {
                    /**
                     * Заходим сюда если у элемента есть другие вложенные элементы.
                     * */
                    if (currentItem?.items && currentItem?.items.length) {
                        const isCurrentLevelOpened = keyExists(
                            treePath,
                            valueToPathMap.get(currentItem.value.toString()) || [],
                        );

                        /**
                         * Если у этого элемента открыт его дочерний список,
                         * то устанавливаем фокус на первый элемент из этого списка
                         * и сразу же выходим из обработчика события.
                         * */
                        if (isCurrentLevelOpened) {
                            dispatchFocusedPath({ type: 'add_focus', value: 0 });
                            break;
                        }
                    }

                    /**
                     * Если мы еще не достигли конца списка, то движемся к следующему элементу.
                     * */
                    if (currentIndex + 1 < currentLength) {
                        dispatchFocusedPath({ type: 'change_last_focus', value: currentIndex + 1 });
                    } else {
                        /**
                         * Если же достигли последнего элемента на текущем уровне, то нужно определить,
                         * на какой из элементов ниже мы перейдем.
                         * Переход фокуса отсюда может быть только на уровни выше, при чем сразу на несколько.
                         * */
                        let focusCandidate = [...focusedPath];
                        let nextFocus = null;

                        while (focusCandidate.length > 1) {
                            focusCandidate = [...focusCandidate.slice(0, -2), (focusCandidate.at(-2) || 0) + 1];

                            if (isValidFocus(focusCandidate)) {
                                nextFocus = focusCandidate;
                                break;
                            }
                        }

                        if (nextFocus) {
                            dispatchFocusedPath({ type: 'set_focus', value: nextFocus });
                        } else {
                            break;
                        }
                    }
                } else {
                    /**
                     * Если список закрыт, то нужно его открыть и установить фокус на первый элемент.
                     * */
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    handleListToggle(true);
                }

                break;
            }

            case keys.ArrowLeft: {
                if (path[0]) {
                    if (focusedPath.length) {
                        dispatchTreePath({
                            type: 'close_level',
                            value: valueToPathMap.get(currentItem?.value.toString() || '') || [],
                        });
                    }
                }

                break;
            }

            case keys.ArrowRight: {
                if (path[0]) {
                    if (
                        !focusedPath.length ||
                        currentItem?.disabled ||
                        currentItem?.isDisabled ||
                        !currentItem?.items
                    ) {
                        break;
                    }

                    dispatchTreePath({
                        type: 'open_level',
                        value: valueToPathMap.get(currentItem.value.toString()) || [],
                    });
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
