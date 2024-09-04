import React, { forwardRef } from 'react';

import { StyledChip } from './ComboboxChip.styles';
import type { ComboboxChipProps } from './ComboboxChip.types';

/**
 * Чип, отображающий выбранный элемент
 */
export const ComboboxChip = forwardRef<HTMLButtonElement, ComboboxChipProps>(
    ({ value, text, index, disabled, readOnly, onClick, onClear, onKeyDown }, ref) => {
        const onClearHandle = () => onClear(value, text);

        const onKeyDownHandle = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            onKeyDown?.(value, text, index, event);
        };

        return (
            <StyledChip
                ref={ref}
                tabIndex={-1}
                disabled={disabled}
                readOnly={readOnly}
                onClick={onClick}
                onClear={onClearHandle}
                onKeyDown={onKeyDownHandle}
                text={`${text}`}
            />
        );
    },
);
