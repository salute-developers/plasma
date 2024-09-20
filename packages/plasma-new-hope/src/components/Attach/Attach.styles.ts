import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens as attachTokens } from './Attach.tokens';

export const base = css`
    position: relative;
    display: flex;
`;

export const StyledHiddenInput = styled.input`
    display: none;
`;

export const StyledHiddenInputHelper = styled.div`
    position: absolute;
    visibility: hidden;

    font-family: var(${attachTokens.cellTitleFontFamily});
    font-size: var(${attachTokens.cellTitleFontSize});
    font-style: var(${attachTokens.cellTitleFontStyle});
    font-weight: var(${attachTokens.cellTitleFontWeight});
    letter-spacing: var(${attachTokens.cellTitleLetterSpacing});
    line-height: var(${attachTokens.cellTitleLineHeight});
`;
