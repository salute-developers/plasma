import React, { HTMLAttributes } from 'react';

import { StyledTextboxTitle } from './CellTextboxTitle.styles';

export const CellTextboxTitle: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    // TODO: #1548
    return <StyledTextboxTitle className="cell-textbox-title">{props.children}</StyledTextboxTitle>;
};
