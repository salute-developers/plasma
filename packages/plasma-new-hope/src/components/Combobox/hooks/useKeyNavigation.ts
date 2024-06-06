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
    ShiftLeft: 'ShiftLeft',
    ShiftRight: 'ShiftRight',
};

export const useKeyNavigation = ({
    controlledRefs: { targetRef, chipsRefs, selectRef, itemsRefs, inputRef },
    opened,
    enumerationType,
    valueType,
    componentType = 'select',
    value,
    search,
    updateValue,
    updateOpened,
}: UseKeyNavigationProps) => {
    const [selectItemIndex, setSelectItemIndex] = useState(-1);
    const [selectChipIndex, setSelectChipIndex] = useState(-1);

    useEffect(() => {
        if (!opened) {
            setSelectItemIndex(-1);
            setSelectChipIndex(-1);

            return;
        }

        itemsRefs?.current?.[selectItemIndex]?.focus();
    }, [opened]);

    useEffect(() => {
        itemsRefs?.current?.[selectItemIndex]?.focus();
    }, [value, search]);

    const onKeyDownTarget = useCallback(
        (event: KeyboardEvent<HTMLButtonElement | HTMLInputElement>) => {
            const { code } = event;

            const chipsRefsCount = chipsRefs.current.length;
            let scrollIntoView = false;
            let newOpened = opened;
            let newSelectItemIndex = selectItemIndex;
            let newSelectChipIndex = selectChipIndex;
            let focusedItem: HTMLElement | HTMLInputElement | null = null;

            if (code === Keys.Enter || (code === Keys.Space && componentType !== 'combobox')) {
                event.preventDefault();
            }

            if (code === Keys.Escape) {
                newOpened = false;
                newSelectItemIndex = -1;
                newSelectChipIndex = -1;
                focusedItem = targetRef.current;
            }

            if (code === Keys.ArrowLeft && valueType === 'multiple' && enumerationType === 'chip') {
                const index = selectChipIndex - 1 <= 0 ? 0 : selectChipIndex - 1;

                newSelectChipIndex = document.activeElement === targetRef.current ? 0 : index;
                newSelectChipIndex =
                    document.activeElement === inputRef?.current ? chipsRefsCount - 1 : newSelectChipIndex;

                focusedItem = chipsRefs.current?.[newSelectChipIndex];

                scrollIntoView = true;
            }

            if (code === Keys.ArrowRight && valueType === 'multiple' && enumerationType === 'chip') {
                const index = selectChipIndex + 1 === chipsRefsCount ? selectChipIndex : selectChipIndex + 1;

                newSelectChipIndex = document.activeElement === targetRef.current ? 0 : index;
                focusedItem =
                    index === selectChipIndex
                        ? (inputRef?.current as HTMLInputElement)
                        : chipsRefs.current?.[newSelectChipIndex];

                scrollIntoView = true;
            }

            if (code === Keys.Backspace && document.activeElement !== inputRef?.current) {
                const index = selectChipIndex - 1 <= 0 ? 0 : selectChipIndex - 1;

                newSelectChipIndex = chipsRefsCount === 0 ? -1 : index;
                focusedItem = chipsRefsCount === 0 ? (inputRef || targetRef)?.current : chipsRefs?.current?.[index];

                scrollIntoView = true;
            }

            if (
                code === Keys.ArrowUp ||
                code === Keys.ArrowDown ||
                (code === Keys.Enter && componentType !== 'combobox') ||
                (code === Keys.Space && componentType !== 'combobox')
            ) {
                newOpened = true;
                newSelectItemIndex = selectItemIndex === -1 ? 0 : selectItemIndex;
                focusedItem = itemsRefs.current?.[newSelectItemIndex];
            }

            // INFO: Для кейсов, когда поведение закрытия может контролироваться снаружи
            if (code !== Keys.Enter || componentType !== 'combobox') {
                updateOpened(newOpened, event);
            }

            setSelectItemIndex(newSelectItemIndex);
            setSelectChipIndex(newSelectChipIndex);

            focusedItem?.focus();

            if (scrollIntoView) {
                focusedItem?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            }
        },
        [opened, selectItemIndex, selectChipIndex, valueType, enumerationType, componentType, updateOpened],
    );

    const onKeyDownSelect = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const { code, shiftKey } = event;

            const itemsRefsCount = itemsRefs.current.length;
            const chipsRefsCount = chipsRefs.current.length;
            let scrollIntoView = false;
            let newOpened = opened;
            let newSelectItemIndex = selectItemIndex;
            let newSelectChipIndex = selectChipIndex;
            let focusedItem: HTMLElement | HTMLInputElement | null = null;

            if (code === Keys.Enter || code === Keys.Tab) {
                event.preventDefault();
            }

            if (code === Keys.Escape) {
                newOpened = false;
                newSelectItemIndex = -1;
                newSelectChipIndex = -1;
                focusedItem = (inputRef || targetRef).current;
            }

            if (code === Keys.Tab) {
                newOpened = false;
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
                valueType === 'multiple' &&
                enumerationType === 'chip' &&
                chipsRefsCount
            ) {
                newSelectChipIndex = chipsRefsCount - 1;
                newSelectItemIndex = -1;
                focusedItem = chipsRefs?.current?.[newSelectChipIndex];

                scrollIntoView = true;
            }

            if (code === Keys.Enter || (code === Keys.Space && componentType !== 'combobox')) {
                const item = itemsRefs.current[newSelectItemIndex] as HTMLElement;

                // TODO: #1016
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (item.ariaDisabled) {
                    return;
                }

                updateValue(item, event);

                newOpened = valueType === 'single' ? false : opened;
                focusedItem = valueType === 'single' ? targetRef.current : focusedItem;
            }

            const isValidKeyCode = [
                Keys.ShiftLeft,
                Keys.ShiftRight,
                Keys.ArrowDown,
                Keys.ArrowLeft,
                Keys.ArrowRight,
                Keys.ArrowUp,
                Keys.Enter,
                Keys.Escape,
                Keys.Tab,
            ].includes(code);

            if (componentType === 'combobox' && !isValidKeyCode) {
                event.stopPropagation();

                focusedItem = inputRef?.current as HTMLInputElement;
                newSelectItemIndex = -1;
                newSelectChipIndex = -1;
            }

            updateOpened(newOpened, event);
            setSelectItemIndex(newSelectItemIndex);
            setSelectChipIndex(newSelectChipIndex);

            focusedItem?.focus();

            if (scrollIntoView) {
                focusedItem?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            }
        },
        [
            opened,
            selectItemIndex,
            selectChipIndex,
            valueType,
            enumerationType,
            componentType,
            updateOpened,
            updateValue,
        ],
    );

    return { onKeyDownTarget, onKeyDownSelect } as const;
};
