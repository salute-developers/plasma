import React, { HTMLAttributes } from 'react';

import { StyledTextboxLabel } from './CellTextboxLabel.styles';

export const CellTextboxLabel: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
    return <StyledTextboxLabel {...rest}>{children}</StyledTextboxLabel>;
};
