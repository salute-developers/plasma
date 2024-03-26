import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { tokens } from '../../Cell.tokens';

const StyledTextSubtitle = styled.div`
    color: var(${tokens.cellSubtitleColor});
    font-size: var(${tokens.cellSubtitleFontSize});
    font-weight: var(${tokens.cellSubtitleFontWeight});
    font-family: var(${tokens.cellSubtitleFontFamily});
    font-style: var(${tokens.cellSubtitleFontStyle});
    line-height: var(${tokens.cellSubtitleLineHeight});
    letter-spacing: var(${tokens.cellSubtitleLetterSpacing});
`;

type TextSubtitleProps = {};

export const TextSubtitle: React.FC<HTMLAttributes<HTMLDivElement> & TextSubtitleProps> = (props) => {
    return <StyledTextSubtitle>{props.children}</StyledTextSubtitle>;
};
