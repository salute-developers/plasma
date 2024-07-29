import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';

interface Props {
    isCalendarOpen: boolean;
    onToggle: (isOpen: boolean, event: SyntheticEvent | Event) => void;
}

export const keys = {
    Space: 'Space',
};

export const useKeyNavigation = ({ isCalendarOpen, onToggle }: Props) => {
    const onKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        switch (event.code) {
            case keys.Space: {
                if (!isCalendarOpen) {
                    event.preventDefault();
                    onToggle(true, event);
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
