import type { KeyboardEvent, Dispatch } from 'react';
import React from 'react';

import { PathAction, PathState, FocusedPathAction, FocusedPathState } from '../reducers';
import type { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';
import { isEmpty } from '../../../../utils';

import { PathMapType, FocusedToValueMapType, ValueToItemMapType } from './getPathMaps';

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
    handlePressDown: (item: ItemOptionTransformed, e?: React.MouseEvent<HTMLElement>) => void;
    setTextValue: React.Dispatch<React.SetStateAction<string>>;
    multiple: boolean | undefined;
    value: string | string[];
    textValue: string;
    valueToItemMap: ValueToItemMapType;
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
    setTextValue,
    multiple,
    value,
    textValue,
    valueToItemMap,
}: Props): ReturnedProps => {
    const currentIndex: number = focusedPath?.[focusedPath.length - 1] || 0;
    const currentLength: number = pathMap.get(path?.[focusedPath.length - 1]) || 0;

    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        switch (event.key) {
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

                if (path[0]) {
                    event.stopPropagation();
                    event.preventDefault();
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

                if (path[0]) {
                    event.stopPropagation();
                    event.preventDefault();
                }

                break;
            }

            case keys.ArrowLeft: {
                if (path[0]) {
                    event.stopPropagation();
                    event.preventDefault();

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
                    event.stopPropagation();
                    event.preventDefault();

                    if (!focusedPath.length) {
                        break;
                    }

                    const currentItem = getItemByFocused(focusedPath, focusedToValueMap);

                    if (currentItem?.disabled) {
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

            case keys.Enter: {
                event.preventDefault();

                const currentItem = getItemByFocused(focusedPath, focusedToValueMap)!;

                if (currentItem?.disabled) {
                    break;
                }

                if (!path[0]) {
                    dispatchPath({ type: 'opened_first_level' });
                    dispatchFocusedPath({ type: 'set_initial_focus' });
                    break;
                }

                if (currentItem) {
                    handlePressDown(currentItem);
                }

                break;
            }

            case keys.Tab:
            case keys.Escape: {
                dispatchPath({ type: 'reset' });
                dispatchFocusedPath({ type: 'reset' });
                handleListToggle(false);

                if (multiple) {
                    setTextValue('');
                } else if (textValue !== value) {
                    // Проверяем, отличается ли значение в инпуте от выбранного value после нажатия Tab/Enter.
                    // Если изменилось, то возвращаем label выбранного айтема.
                    // Если нет выбранного элемента, то стираем значение инпута.
                    if (isEmpty(value)) {
                        setTextValue('');
                    } else {
                        setTextValue(valueToItemMap.get(value as string)?.label || '');
                    }
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
