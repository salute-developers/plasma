import React, { FC } from 'react';

import { StyledIconButton } from './ActionButton.styles';
import type { ActionButtonProps } from './ActionButton.types';

export const ActionButton: FC<ActionButtonProps> = ({ icon, className, onClick }) => {
    return (
        <StyledIconButton className={className} onClick={onClick}>
            {icon}
        </StyledIconButton>
    );
};
