import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';

interface Props {
    isCalendarOpen: boolean;
    closeOnEsc: boolean;
    onToggle: (isOpen: boolean, event: SyntheticEvent | Event) => void;
}

export const keys = {
    Space: 'Space',
    Escape: 'Escape',
};

export const useKeyNavigation = ({ isCalendarOpen, closeOnEsc, onToggle }: Props) => {
    const onKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
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

            default: {
                break;
            }
        }
    };

    return { onKeyDown };
};
