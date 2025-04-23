import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';

import { needFullMonth } from '../utils/dateHelper';

interface Props {
    isCalendarOpen: boolean;
    closeOnEsc: boolean;
    delimiter: string;
    format?: string;
    maskWithFormat?: boolean;
    onToggle: (isOpen: boolean, event: SyntheticEvent | Event) => void;
}

export const keys = {
    Space: 'Space',
    Escape: 'Escape',
};

export const useKeyNavigation = ({
    isCalendarOpen,
    closeOnEsc,
    format,
    maskWithFormat,
    delimiter,
    onToggle,
}: Props) => {
    const onKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        if (event.key === delimiter && maskWithFormat && format && !needFullMonth(format)) {
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

            default: {
                break;
            }
        }
    };

    return { onKeyDown };
};
