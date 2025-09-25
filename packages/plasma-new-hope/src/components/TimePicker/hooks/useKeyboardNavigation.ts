import type { KeyboardEvent, SyntheticEvent } from 'react';

interface UseKeyNavigationProps {
    isCalendarOpen: boolean;
    closeOnEsc: boolean;
    delimiter: string;
    format?: string;
    maskWithFormat?: boolean;
    onToggle: (isOpen: boolean, event: SyntheticEvent | Event) => void;
}

export const useKeyNavigation = ({
    isCalendarOpen,
    closeOnEsc,
    format,
    maskWithFormat,
    delimiter,
    onToggle,
}: UseKeyNavigationProps) => {
    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === delimiter && maskWithFormat && format) {
            event.preventDefault();
            return;
        }

        if (event.code === 'Space' && !isCalendarOpen) {
            event.preventDefault();
            onToggle(true, event);
        }
        if (event.code === 'Escape' && isCalendarOpen && closeOnEsc) {
            event.preventDefault();
            onToggle(false, event);
        }
    };

    return { onKeyDown };
};
