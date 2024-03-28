import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { tokens } from '../../Cell.tokens';

const StyledTextTitle = styled.div`
    color: var(${tokens.cellTitleColor});
    font-size: var(${tokens.cellTitleFontSize});
    font-weight: var(${tokens.cellTitleFontWeight});
    font-family: var(${tokens.cellTitleFontFamily});
    font-style: var(${tokens.cellTitleFontStyle});
    line-height: var(${tokens.cellTitleLineHeight});
    letter-spacing: var(${tokens.cellTitleLetterSpacing});
`;

type TextTitleProps = {};

export const TextTitle: React.FC<HTMLAttributes<HTMLDivElement> & TextTitleProps> = (props) => {
    return <StyledTextTitle>{props.children}</StyledTextTitle>;
};
