import React, { HTMLAttributes } from 'react';

import { StyledTextboxSubtitle } from './CellTextboxSubtitle.styles';

export const CellTextboxSubtitle: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
    return <StyledTextboxSubtitle {...rest}>{children}</StyledTextboxSubtitle>;
};
