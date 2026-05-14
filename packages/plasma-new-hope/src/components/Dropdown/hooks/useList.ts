import { useReducer } from 'react';
import type { RefObject } from 'react';
import { useOutsideClick } from 'src/hooks';

import { pathReducer } from '../reducers/pathReducer';
import { focusedPathReducer } from '../reducers/focusedPathReducer';
import type { DropdownProps, HandleGlobalToggleType } from '../Dropdown.types';

type Props = Pick<DropdownProps, 'alwaysOpened' | 'disabled' | 'onToggle' | 'closeOnOverlayClick'> & {
    floatingPopoverRef: RefObject<HTMLDivElement>;
    listWrapperRef: RefObject<HTMLDivElement>;
};

/**
 * Хук для управления логикой открытия/закрытия выпадающего списка.
 */
export const useList = ({
    alwaysOpened,
    disabled,
    onToggle,
    closeOnOverlayClick,
    floatingPopoverRef,
    listWrapperRef,
}: Props) => {
    const initialPath = alwaysOpened ? ['root'] : [];

    const [path, dispatchPath] = useReducer(pathReducer, initialPath);
    const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);

    /* Callback для глобального открытия/закрытия списка */
    const handleGlobalToggle: HandleGlobalToggleType = (opened, event) => {
        if (disabled) {
            return;
        }

        if (alwaysOpened || opened) {
            dispatchPath({ type: 'opened_first_level' });
        } else {
            dispatchFocusedPath({ type: 'reset' });
            dispatchPath({ type: 'reset' });
        }

        if (onToggle) {
            onToggle(opened, event);
        }
    };

    /* Логика работы при клике за пределами выпадающего списка */
    useOutsideClick(
        (event) => {
            if (!path[0] || !closeOnOverlayClick || alwaysOpened) {
                return;
            }

            dispatchPath({ type: 'reset' });
            dispatchFocusedPath({ type: 'reset' });

            if (onToggle) {
                onToggle(false, event);
            }
        },
        [floatingPopoverRef, listWrapperRef],
    );

    return {
        path,
        dispatchPath,
        focusedPath,
        dispatchFocusedPath,
        handleGlobalToggle,
    };
};
