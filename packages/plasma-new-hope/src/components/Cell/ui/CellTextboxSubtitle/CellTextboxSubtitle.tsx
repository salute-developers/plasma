import React, { HTMLAttributes } from 'react';

import { StyledTextboxSubtitle } from './CellTextboxSubtitle.styles';

export const CellTextboxSubtitle: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return <StyledTextboxSubtitle>{props.children}</StyledTextboxSubtitle>;
};
