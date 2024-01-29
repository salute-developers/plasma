import { KeyboardEvent, useCallback, useEffect, useState } from 'react';

import type { UseKeyNavigationProps } from '../Select.types';

export const Keys = {
    Enter: 'Enter',
    Space: 'Space',
    Tab: 'Tab',
    Escape: 'Escape',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    Backspace: 'Backspace',
};

export const useKeyNavigation = ({
    controlledRefs: { targetRef, chipsRefs, selectRef, itemsRefs },
    isOpen,
    enumerationType,
    selectType,
    value,
    updateValue,
    updateIsOpen,
}: UseKeyNavigationProps) => {
    const [selectItemIndex, setSelectItemIndex] = useState(-1);
    const [selectChipIndex, setSelectChipIndex] = useState(-1);

    useEffect(() => {
        if (!isOpen) {
            setSelectItemIndex(-1);
            setSelectChipIndex(-1);
            return;
        }

        itemsRefs?.current?.[selectItemIndex]?.focus();
    }, [isOpen]);

    useEffect(() => {
        itemsRefs?.current?.[selectItemIndex]?.focus();
    }, [value]);

    const onKeyDownTarget = useCallback(
        (event: KeyboardEvent<HTMLButtonElement>) => {
            const { code, shiftKey } = event;

            const chipsRefsCount = chipsRefs.current.length;
            let newIsOpen = isOpen;
            let newSelectItemIndex = selectItemIndex;
            let newSelectChipIndex = selectChipIndex;
            let focusedItem: HTMLElement | null = null;

            if (code === Keys.Enter || code === Keys.Space) {
                event.preventDefault();
            }

            if (code === Keys.Escape) {
                newIsOpen = false;
                newSelectItemIndex = -1;
                newSelectChipIndex = -1;
                focusedItem = targetRef.current;
            }

            if (code === Keys.Tab) {
                newIsOpen = false;
                newSelectItemIndex = -1;
                newSelectChipIndex = -1;
                focusedItem = (shiftKey
                    ? selectRef.current?.previousSibling
                    : selectRef.current?.nextSibling) as HTMLElement;
            }

            if (code === Keys.ArrowLeft && selectType === 'multiple' && enumerationType === 'chip') {
                const index = selectChipIndex - 1 <= 0 ? 0 : selectChipIndex - 1;

                newSelectChipIndex = document.activeElement === targetRef.current ? 0 : index;
                focusedItem = chipsRefs.current?.[newSelectChipIndex];
            }

            if (code === Keys.ArrowRight && selectType === 'multiple' && enumerationType === 'chip') {
                const index = selectChipIndex + 1 === chipsRefsCount ? selectChipIndex : selectChipIndex + 1;

                newSelectChipIndex = document.activeElement === targetRef.current ? 0 : index;
                focusedItem = chipsRefs.current?.[newSelectChipIndex];
            }

            if (code === Keys.Backspace) {
                const index = selectChipIndex - 1 <= 0 ? 0 : selectChipIndex - 1;

                newSelectChipIndex = chipsRefsCount === 0 ? -1 : index;
                focusedItem = chipsRefsCount === 0 ? targetRef.current : chipsRefs?.current?.[index];
            }

            if (code === Keys.ArrowUp || code === Keys.ArrowDown || code === Keys.Enter || code === Keys.Space) {
                newIsOpen = true;
                newSelectItemIndex = selectItemIndex === -1 ? 0 : selectItemIndex;

                focusedItem = itemsRefs.current?.[newSelectItemIndex];
            }

            updateIsOpen(newIsOpen, event);
            setSelectItemIndex(newSelectItemIndex);
            setSelectChipIndex(newSelectChipIndex);

            focusedItem?.focus();
        },
        [isOpen, selectItemIndex, selectChipIndex, selectType, enumerationType, updateIsOpen],
    );

    const onKeyDownSelect = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const { code, shiftKey } = event;

            const itemsRefsCount = itemsRefs.current.length;
            const chipsRefsCount = chipsRefs.current.length;
            let newIsOpen = isOpen;
            let newSelectItemIndex = selectItemIndex;
            let newSelectChipIndex = selectChipIndex;
            let focusedItem: HTMLElement | null = null;

            if (code === Keys.Enter || code === Keys.Tab || (code === Keys.Tab && shiftKey)) {
                event.preventDefault();
            }

            if (code === Keys.Escape) {
                newIsOpen = false;
                newSelectItemIndex = -1;
                newSelectChipIndex = -1;
                focusedItem = targetRef.current;
            }

            if (code === Keys.Tab) {
                newIsOpen = false;
                newSelectItemIndex = -1;
                newSelectChipIndex = -1;
                focusedItem = (shiftKey
                    ? selectRef.current?.previousSibling
                    : selectRef.current?.nextSibling) as HTMLElement;
            }

            if (code === Keys.ArrowUp) {
                newSelectItemIndex = newSelectItemIndex - 1 === -1 ? itemsRefsCount - 1 : newSelectItemIndex - 1;
                focusedItem = itemsRefs?.current?.[newSelectItemIndex];
            }

            if (code === Keys.ArrowDown) {
                newSelectItemIndex = newSelectItemIndex + 1 === itemsRefsCount ? 0 : newSelectItemIndex + 1;
                focusedItem = itemsRefs?.current?.[newSelectItemIndex];
            }

            if (
                (code === Keys.ArrowRight || code === Keys.ArrowLeft) &&
                selectType === 'multiple' &&
                enumerationType === 'chip' &&
                chipsRefsCount
            ) {
                newSelectChipIndex = chipsRefsCount - 1;
                newSelectItemIndex = -1;
                focusedItem = chipsRefs?.current?.[newSelectChipIndex];
            }

            if (code === Keys.Enter || code === Keys.Space) {
                const item = itemsRefs.current[newSelectItemIndex] as HTMLElement;

                // TODO: #1016
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (item.ariaDisabled) {
                    return;
                }

                updateValue(item, event);

                newIsOpen = selectType === 'single' ? false : isOpen;
                focusedItem = selectType === 'single' ? targetRef.current : focusedItem;
            }

            updateIsOpen(newIsOpen, event);
            setSelectItemIndex(newSelectItemIndex);
            setSelectChipIndex(newSelectChipIndex);

            focusedItem?.focus();
        },
        [isOpen, selectItemIndex, selectChipIndex, selectType, enumerationType, updateIsOpen, updateValue],
    );

    return { onKeyDownTarget, onKeyDownSelect } as const;
};
