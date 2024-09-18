import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './Editable.tokens';

export const EditButton = styled.span<{ isHidden: boolean }>`
    position: relative;
    align-self: stretch;

    display: ${({ isHidden }) => (isHidden ? 'none' : '')};
`;

export const StyledInput = styled.input``;

export const StyledPlacehpolder = styled.span`
    display: inline-block;
    color: var(${tokens.placeholderColor});
`;

export const base = css`
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    cursor: pointer;

    .${classes.editableTextBox} {
        outline: none;
        overflow: hidden;
        white-space: nowrap;
        caret-color: var(${tokens.caretColor});
    }
`;
