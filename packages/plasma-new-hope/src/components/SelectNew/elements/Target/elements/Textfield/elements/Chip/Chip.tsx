import React from 'react';

import { StyledChip } from './Chip.styles';

export const Chip: React.FC<{ text: string; onClick: (e: React.MouseEvent<HTMLElement>) => void }> = ({
    text,
    onClick,
}) => {
    return <StyledChip tabIndex={-1} onClick={onClick} text={`${text}`} />;
};
