import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';

type Props = {
    opened: boolean;
    closeOnEsc: boolean;
    onToggle: (isOpen: boolean, event: SyntheticEvent | Event) => void;

    delimiters?: string[];
    format?: string;
    maskWithFormat?: boolean;
};

export const keys = {
    Space: 'Space',
    Escape: 'Escape',
};

export const useKeyNavigation = ({ opened, closeOnEsc, onToggle }: Props) => {
    const onKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
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
