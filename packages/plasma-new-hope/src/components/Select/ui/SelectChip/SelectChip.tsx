import React, { useCallback } from 'react';

import { StyledChip } from './SelectChip.styles';
import type { SelectChipProps } from './SelectChip.types';

/**
 * Чип, отображающий выбранный элемент
 */
export const SelectChip = ({ value, text, disabled, readOnly, onClick, onClear }: SelectChipProps) => {
    const onClearHandle = useCallback(() => {
        onClear(value, text);
    }, [onClear, value, text]);

    return (
        <StyledChip
            disabled={disabled}
            readOnly={readOnly}
            onClick={onClick}
            onClear={onClearHandle}
            text={`${text}`}
        />
    );
};
