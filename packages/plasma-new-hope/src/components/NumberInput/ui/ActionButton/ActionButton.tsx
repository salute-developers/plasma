import React, { FC } from 'react';

import { StyledIconButton } from './ActionButton.styles';
import type { ActionButtonProps } from './ActionButton.types';

export const ActionButton: FC<ActionButtonProps> = ({ icon, className, onClick, tabIndex = -1 }) => {
    return (
        <StyledIconButton tabIndex={tabIndex} className={className} onClick={onClick}>
            {icon}
        </StyledIconButton>
    );
};
