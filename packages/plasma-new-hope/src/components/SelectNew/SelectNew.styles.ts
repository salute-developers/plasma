import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component } from '../../engines';
import { popoverClasses, popoverConfig } from '../Popover';

import { getCorrectHeight } from './utils';
import { SelectNewProps } from './SelectNew.types';
import { tokens, constants } from './SelectNew.tokens';

const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)`
    .${String(popoverClasses.root)}, .${String(popoverClasses.target)} {
        width: 100%;
    }
`;

export const Ul = styled.ul<{
    listOverflow?: SelectNewProps['listOverflow'];
    listHeight?: SelectNewProps['listHeight'];
    isInnerUl?: boolean;
}>`
    box-sizing: border-box;

    background: var(${constants.background});
    box-shadow: var(${constants.boxShadow});

    border-radius: var(${tokens.borderRadius});
    width: 100%;
    height: ${({ listHeight }) => (listHeight ? getCorrectHeight(listHeight) : 'auto')};
    overflow: ${({ listOverflow }) => listOverflow || 'initial'};

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
    color: var(${constants.outerLabelColor});

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
    font-family: var(--plasma-typo-body-xs-font-family);
    font-size: var(--plasma-typo-body-xs-font-size);
    font-style: var(--plasma-typo-body-xs-font-style);
    font-weight: var(--plasma-typo-body-xs-font-weight);
    letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
    line-height: var(--plasma-typo-body-xs-line-height);
`;
