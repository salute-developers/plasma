import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component } from '../../engines';
import { popoverClasses, popoverConfig } from '../Popover';

import { getCorrectHeight } from './utils';
import { SelectProps } from './Select.types';
import { tokens, constants } from './Select.tokens';

const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)<{ listWidth?: SelectProps['listWidth'] }>`
    .${String(popoverClasses.root)} {
        width: ${({ listWidth }) => listWidth || '100%'};
    }

    .${String(popoverClasses.target)} {
        width: 100%;
    }
`;

export const Ul = styled.ul<{
    listOverflow?: SelectProps['listOverflow'];
    listHeight?: SelectProps['listHeight'];
    listWidth?: SelectProps['listWidth'];
    isInnerUl?: boolean;
}>`
    box-sizing: border-box;

    background: var(${constants.background});
    box-shadow: ${constants.boxShadow};

    border-radius: var(${tokens.borderRadius});
    width: ${({ listWidth }) => listWidth || '100%'};
    height: ${({ listHeight }) => (listHeight ? getCorrectHeight(listHeight) : 'auto')};
    overflow: ${({ listOverflow }) => listOverflow || 'initial'};
    border: var(${tokens.popoverBorderWidth}) solid var(${tokens.popoverBorderColor});

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
    color: var(${constants.textfieldOuterLabelColor});

    font-family: var(${tokens.labelFontFamily});
    font-size: var(${tokens.labelFontSize});
    font-style: var(${tokens.labelFontStyle});
    font-weight: var(${tokens.labelFontWeight});
    letter-spacing: var(${tokens.labelFontLetterSpacing});
    line-height: var(${tokens.labelFontLineHeight});
`;

export const HelperText = styled.div`
    margin-top: var(${tokens.helperTextOffset});
    color: var(${tokens.helperTextColor});
    font-family: var(${tokens.helperTextFontFamily});
    font-size: var(${tokens.helperTextFontSize});
    font-style: var(${tokens.helperTextFontStyle});
    font-weight: var(${tokens.helperTextFontWeight});
    letter-spacing: var(${tokens.helperTextFontLetterSpacing});
    line-height: var(${tokens.helperTextFontLineHeight});
`;
