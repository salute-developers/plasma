import { styled } from '@linaria/react';

import { tokens } from './Tooltip.tokens';
import { TooltipProps } from './Tooltip.types';

export const TooltipRoot = styled.div<Pick<TooltipProps, 'minWidth' | 'maxWidth'>>`
    display: flex;
    align-items: center;

    padding: var(${tokens.paddingTop}) var(${tokens.paddingRight}) var(${tokens.paddingBottom})
        var(${tokens.paddingLeft});

    min-height: var(${tokens.minHeight});
    max-width: ${({ maxWidth }) => maxWidth || 'unset'};
    min-width: ${({ minWidth }) => minWidth || 'unset'};
    width: max-content;

    background-color: var(${tokens.backgroundColor});
    border-radius: var(${tokens.borderRadius});
    box-shadow: var(${tokens.boxShadow});
    color: var(${tokens.color});

    font-family: var(${tokens.textFontFamily});
    font-size: var(${tokens.textFontSize});
    font-style: var(${tokens.textFontStyle});
    font-weight: var(${tokens.textFontWeight});
    letter-spacing: var(${tokens.textFontLetterSpacing});
    line-height: var(${tokens.textFontLineHeight});

    box-sizing: border-box;
    word-break: break-word;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const StyledContentLeft = styled.div`
    display: flex;
    align-items: center;
    margin-right: var(${tokens.contentLeftMargin});
    height: var(${tokens.textFontLineHeight});
`;
