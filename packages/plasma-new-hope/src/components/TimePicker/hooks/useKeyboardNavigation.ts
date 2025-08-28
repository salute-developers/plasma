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

        switch (event.code) {
            case 'Space':
                if (!isCalendarOpen) {
                    event.preventDefault();
                    onToggle(true, event);
                }
                break;
            case 'Escape':
                if (isCalendarOpen && closeOnEsc) {
                    event.preventDefault();
                    onToggle(false, event);
                }
                break;
            default:
                break;
        }
    };

    return { onKeyDown };
};
