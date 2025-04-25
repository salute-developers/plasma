import type { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, SyntheticEvent } from 'react';

export type SelectionBeforeChange = {
    selectionStart: number;
    selectionEnd: number;
};

type UseNavigationArgs = {
    isCalendarOpen: boolean;
    closeOnEsc: boolean;
    delimiter: string;
    onToggle: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    setCurrentKey?: Dispatch<SetStateAction<string | undefined>>;
    setSelectionBeforeChange?: Dispatch<SetStateAction<SelectionBeforeChange>>;
};

export const keys = {
    Space: 'Space',
    Escape: 'Escape',
    Backspace: 'Backspace',
    Delete: 'Delete',
};

export const useKeyNavigation = ({
    isCalendarOpen,
    closeOnEsc,
    delimiter,
    onToggle,
    setCurrentKey,
    setSelectionBeforeChange,
}: UseNavigationArgs) => {
    const onKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        const { selectionStart, selectionEnd } = event.target;

        setSelectionBeforeChange?.({ selectionStart: selectionStart || 0, selectionEnd: selectionEnd || 0 });

        if (event.key === delimiter) {
            event.preventDefault();
            return;
        }

        switch (event.code) {
            case keys.Space: {
                if (!isCalendarOpen) {
                    event.preventDefault();
                    onToggle(true, event);
                }
                break;
            }
            case keys.Escape: {
                if (isCalendarOpen && closeOnEsc) {
                    event.preventDefault();
                    onToggle(false, event);
                }
                break;
            }

            case keys.Backspace:
            case keys.Delete: {
                setCurrentKey?.(event.code);
                break;
            }

            default: {
                setCurrentKey?.(undefined);
                break;
            }
        }
    };

    return { onKeyDown };
};
