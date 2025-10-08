import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';
import { needFullMonth } from 'src/components/DatePicker/utils/dateHelper';

type Props = {
    opened: boolean;
    closeOnEsc: boolean;
    delimiters?: string[];
    format?: string;
    maskWithFormat?: boolean;
    onToggle: (isOpen: boolean, event: SyntheticEvent | Event) => void;
};

export const keys = {
    Space: 'Space',
    Escape: 'Escape',
};

export const useKeyNavigation = ({ opened, closeOnEsc, format, maskWithFormat, delimiters, onToggle }: Props) => {
    const onKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        if (delimiters?.includes(event.key) && maskWithFormat && format && !needFullMonth(format)) {
            event.preventDefault();
            return;
        }

        switch (event.code) {
            case keys.Space: {
                if (!opened) {
                    event.preventDefault();
                    onToggle(true, event);
                }
                break;
            }
            case keys.Escape: {
                if (opened && closeOnEsc) {
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
