import React, { HTMLAttributes } from 'react';

import { StyledTextboxLabel } from './CellTextboxLabel.styles';

export const CellTextboxLabel: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return <StyledTextboxLabel>{props.children}</StyledTextboxLabel>;
};
