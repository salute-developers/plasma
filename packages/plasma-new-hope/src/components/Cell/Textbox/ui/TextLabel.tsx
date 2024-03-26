import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { tokens } from '../../Cell.tokens';

const StyledTextLabel = styled.div`
    color: var(${tokens.cellLabelColor});
    font-size: var(${tokens.cellLabelFontSize});
    font-weight: var(${tokens.cellLabelFontWeight});
    font-family: var(${tokens.cellLabelFontFamily});
    font-style: var(${tokens.cellLabelFontStyle});
    line-height: var(${tokens.cellLabelLineHeight});
    letter-spacing: var(${tokens.cellLabelLetterSpacing});
`;

type TextLabelProps = {};

export const TextLabel: React.FC<HTMLAttributes<HTMLDivElement> & TextLabelProps> = (props) => {
    return <StyledTextLabel>{props.children}</StyledTextLabel>;
};
