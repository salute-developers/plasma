import { KeyboardEvent } from 'react';
import type { Dispatch } from 'react';

import { SuggestionItemType } from '../Autocomplete.types';
import type { FocusedPathAction } from '../reducers/focusedReducer';

export const keys = {
    Enter: 'Enter',
    Space: 'Space',
    Tab: 'Tab',
    Escape: 'Escape',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    Home: 'Home',
    End: 'End',
    PageUp: 'PageUp',
    PageDown: 'PageDown',
};

interface ReturnedProps {
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}

interface Props {
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
    focused: number | null;
    dispatchFocused: Dispatch<FocusedPathAction>;
    finalResults: SuggestionItemType[];
    handleItemClick: (e: SuggestionItemType) => void;
}

export const useKeyNavigation = ({
    isOpen,
    setIsOpen,
    focused,
    dispatchFocused,
    finalResults,
    handleItemClick,
}: Props): ReturnedProps => {
    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        switch (event.code) {
            case keys.ArrowDown: {
                if (!isOpen) {
                    setIsOpen(true);
                    dispatchFocused({ type: 'setFirstItem' });
                    break;
                }

                dispatchFocused({ type: 'setNextItem', listLength: finalResults.length });

                break;
            }

            case keys.ArrowUp: {
                if (!isOpen) {
                    setIsOpen(true);
                    dispatchFocused({ type: 'setLastItem', listLength: finalResults.length });
                    break;
                }

                dispatchFocused({ type: 'setPrevItem', listLength: finalResults.length });

                break;
            }

            case keys.Home: {
                if (!isOpen) {
                    return;
                }

                dispatchFocused({ type: 'setFirstItem' });

                break;
            }

            case keys.End: {
                if (!isOpen) {
                    return;
                }

                dispatchFocused({ type: 'setLastItem', listLength: finalResults.length });

                break;
            }

            case keys.Enter: {
                if (!isOpen || focused === null) {
                    return;
                }

                dispatchFocused({ type: 'reset' });
                handleItemClick(finalResults[focused]);

                break;
            }

            case keys.Tab:
            case keys.Escape: {
                if (!isOpen) {
                    return;
                }

                setIsOpen(false);
                dispatchFocused({ type: 'reset' });

                break;
            }

            default: {
                break;
            }
        }
    };

    return { onKeyDown };
};
