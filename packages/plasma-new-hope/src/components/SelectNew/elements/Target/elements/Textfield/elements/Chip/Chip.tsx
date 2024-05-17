import React, { useCallback } from 'react';

import { StyledChip } from './Chip.styles';

export const Chip: React.FC<any> = ({ value, text, index, disabled, readOnly, onClick, onClear, onKeyDown }) => {
    return <StyledChip tabIndex={-1} disabled={disabled} readOnly={readOnly} onClick={onClick} text={`${text}`} />;
};
