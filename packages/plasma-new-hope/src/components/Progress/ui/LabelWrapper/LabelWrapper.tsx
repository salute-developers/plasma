import React from 'react';

import { StyledLabel, StyledLabelContent, StyledLabelWrapper } from '../../Progress.styles';

import type { LabelWrapperProps } from './LabelWrapper.types';

export const LabelWrapper = ({ labelIcon, labelTextPlacement = 'right', label }: LabelWrapperProps) => (
    <StyledLabelWrapper>
        {labelTextPlacement === 'left' && label && <StyledLabel>{label}</StyledLabel>}
        {labelIcon && <StyledLabelContent>{labelIcon}</StyledLabelContent>}
        {labelTextPlacement === 'right' && label && <StyledLabel>{label}</StyledLabel>}
    </StyledLabelWrapper>
);
