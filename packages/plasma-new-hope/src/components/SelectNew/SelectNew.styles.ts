import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component } from '../../engines';
import { popoverClasses, popoverConfig } from '../Popover';

import { tokens } from './SelectNew.tokens';

const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)``;

export const Ul = styled.ul<{
    isInnerUl?: boolean;
}>`
    box-sizing: border-box;

    background: var(${tokens.background});
    box-shadow: var(${tokens.boxShadow});

    border-radius: var(${tokens.borderRadius});
    width: 200px;
    height: auto;

    margin: ${({ isInnerUl }) => (isInnerUl ? `calc(var(${tokens.padding}) * -1) 0 0 var(${tokens.padding})` : 0)};
    padding: var(${tokens.padding});
`;

export const base = css`
    .${popoverClasses.wrapper}, .${popoverClasses.target} {
        display: block;
    }
`;

export const OuterLabel = styled.label`
    display: block;
    margin-bottom: var(${tokens.labelOffset});
    color: var(${tokens.labelColor});

    font-family: var(${tokens.labelFontFamily});
    font-size: var(${tokens.labelFontSize});
    font-style: var(${tokens.labelFontStyle});
    font-weight: var(${tokens.labelFontWeight});
    letter-spacing: var(${tokens.labelLetterSpacing});
    line-height: var(${tokens.labelLineHeight});
`;

export const HelperText = styled.div`
    margin-top: var(${tokens.helperTextOffset});
    color: var(${tokens.helperTextColor});
    font-family: var(${tokens.helperTextFontFamily});
    font-size: var(${tokens.helperTextFontSize});
    font-style: var(${tokens.helperTextFontStyle});
    font-weight: var(${tokens.helperTextFontWeight});
    letter-spacing: var(${tokens.helperTextLetterSpacing});
    line-height: var(${tokens.helperTextLineHeight});
`;
