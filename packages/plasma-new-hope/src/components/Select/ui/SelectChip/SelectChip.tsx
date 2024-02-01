import React, { forwardRef, useCallback } from 'react';

import { StyledChip } from './SelectChip.styles';
import type { SelectChipProps } from './SelectChip.types';

/**
 * Чип, отображающий выбранный элемент
 */
export const SelectChip = forwardRef<HTMLButtonElement, SelectChipProps>(
    ({ value, text, index, disabled, readOnly, onClick, onClear, onKeyDown }, ref) => {
        const onClearHandle = useCallback(() => {
            onClear(value, text);
        }, [onClear, value, text]);

        const onKeyDownHandle = useCallback(
            (event: React.KeyboardEvent<HTMLButtonElement>) => {
                onKeyDown?.(value, text, index, event);
            },
            [onKeyDown],
        );

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
