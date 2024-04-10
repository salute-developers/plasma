import React, { HTMLAttributes } from 'react';

import { StyledTextboxTitle } from './CellTextboxTitle.styles';

export const CellTextboxTitle: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return <StyledTextboxTitle>{props.children}</StyledTextboxTitle>;
};
