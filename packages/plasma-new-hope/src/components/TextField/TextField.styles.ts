import { styled } from '@linaria/react';

import { classes, tokens } from './TextField.tokens';

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const InputLabelWrapper = styled.div`
    flex: 1;
    overflow: scroll;
    position: relative;
    width: 100%;
    display: inline-flex;
    align-items: center;

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    overscroll-behavior: contain;

    &.${String(classes.hasChips)} {
        height: var(${tokens.chipHeight});
        border-radius: var(${tokens.chipBorderRadius});
    }
`;

export const StyledChips = styled.div`
    display: flex;
    gap: var(${tokens.chipGap});
    margin-right: var(${tokens.chipGap});
    user-select: none;
`;

export const Input = styled.input`
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
    flex: 1;
    min-width: 60%;
`;

export const Label = styled.label``;

export const StyledContentLeft = styled.div`
    margin: var(${tokens.leftContentMargin});
`;

export const StyledContentRight = styled.div`
    margin: var(${tokens.rightContentMargin});
`;

export const LeftHelper = styled.div``;

export const StyledTextBefore = styled.div``;

export const StyledTextAfter = styled.div``;
