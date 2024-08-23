import { useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import type { UseKeyNavigationProps } from '../TextField.types';

export const Keys = {
    Enter: 'Enter',
    Tab: 'Tab',
    Escape: 'Escape',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    Backspace: 'Backspace',
};

export const useKeyNavigation = ({
    controlledRefs: { chipsRefs, contentRef, inputRef },
    disabled,
    readOnly,
    chips,
    enumerationType,
    updateChips,
    onChange,
    onSearch,
    onEnterDisabled = false,
}: UseKeyNavigationProps & { onEnterDisabled: boolean }) => {
    const [activeChipIndex, setActiveChipIndex] = useState(-1);

    const handleInputKeydown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;

        if (disabled || readOnly) {
            return;
        }

        if (event.key === Keys.Enter && !onEnterDisabled) {
            if (enumerationType === 'chip' && value) {
                const nextIndex = chips?.length || 0;

                const newChips = [...chips, { id: `${nextIndex}_${value}`, text: value }];
                const newValues = newChips.map(({ text }) => text);

                updateChips(newChips, newValues);
                event.target.value = '';
                onChange?.(event);
            }

            if (onSearch) {
                onSearch(value, event);
            }
        }

        if (event.key === Keys.Backspace && chips.length && inputRef?.current?.selectionStart === 0) {
            const newChips = [...chips];
            newChips?.pop();
            chipsRefs?.current.pop();

            const newValues = newChips.map(({ text }) => text);

            updateChips(newChips, newValues);
        }
    };

    const onChipClear = (clearId: string, index: number) => {
        if (!chips.length) {
            return;
        }

        const newChips = chips?.filter(({ id: chipId }) => chipId !== clearId) || [];
        const newValues = newChips.map(({ text }) => text);
        chipsRefs?.current.splice(index, 1);

        updateChips(newChips, newValues);
    };

    const handleChipKeyDown = (event: KeyboardEvent<HTMLButtonElement>, chipId: string, chipIndex: number) => {
        if (event.key === Keys.Tab) {
            event.preventDefault();
        }

        if (event.key === Keys.Backspace) {
            onChipClear(chipId, chipIndex);
        }
    };

    const handleContentKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const chipsRefsCount = chipsRefs.current.length;
        const currentCaretPosition = inputRef?.current?.selectionStart || 0;

        let newActiveChipIndex = activeChipIndex;
        let focusedItem: HTMLButtonElement | HTMLInputElement | null = null;

        if (event.key === Keys.ArrowLeft && enumerationType === 'chip' && currentCaretPosition <= 0) {
            const index = activeChipIndex - 1 <= 0 ? 0 : activeChipIndex - 1;

            newActiveChipIndex = document.activeElement === inputRef?.current ? chipsRefsCount - 1 : index;

            focusedItem = chipsRefs.current?.[newActiveChipIndex];
        }

        if (
            event.key === Keys.ArrowRight &&
            enumerationType === 'chip' &&
            document.activeElement !== inputRef?.current
        ) {
            const index = activeChipIndex + 1 >= chipsRefsCount ? activeChipIndex : activeChipIndex + 1;

            newActiveChipIndex = document.activeElement === contentRef?.current ? 0 : index;
            focusedItem =
                index === activeChipIndex
                    ? (inputRef?.current as HTMLInputElement)
                    : chipsRefs.current?.[newActiveChipIndex];
        }

        if (event.key === Keys.Backspace && document.activeElement !== inputRef?.current) {
            const index = activeChipIndex - 1 <= 0 ? 0 : activeChipIndex - 1;

            newActiveChipIndex = chipsRefsCount === 0 ? -1 : index;
            focusedItem =
                chipsRefsCount === 0
                    ? (inputRef?.current as HTMLInputElement)
                    : chipsRefs?.current?.[newActiveChipIndex];
        }

        focusedItem?.focus();
        focusedItem?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });

        setActiveChipIndex(newActiveChipIndex);
    };

    return { handleInputKeydown, handleChipKeyDown, onChipClear, handleContentKeyDown } as const;
};
