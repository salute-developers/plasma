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

    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
`;

export const HelperText = styled.div`
    margin-top: var(${tokens.helperTextOffset});
    color: var(${tokens.helperTextColor});
    font-family: var(${constants.fontFamily});
    font-size: var(${constants.fontSize});
    font-style: var(${constants.fontStyle});
    font-weight: var(${constants.fontWeight});
    letter-spacing: var(${constants.fontLetterSpacing});
    line-height: var(${constants.fontLineHeight});
`;
