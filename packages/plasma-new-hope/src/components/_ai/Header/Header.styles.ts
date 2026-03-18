import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './Header.tokens';

export const base = css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;

    padding: var(${tokens.padding});
    gap: var(${tokens.gap});
    border-radius: var(${tokens.borderRadius});
    background: var(${tokens.backgroundColor});

    &.${classes.enableDivider} {
        border-bottom: 0.063rem solid var(${tokens.dividerColor});
    }
`;

export const ActionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

export const Title = styled.div`
    box-sizing: border-box;

    color: var(${tokens.titleColor});
    font-family: var(${tokens.titleFontFamily});
    font-size: var(${tokens.titleFontSize});
    font-style: var(${tokens.titleFontStyle});
    font-weight: var(${tokens.titleFontWeight});
    letter-spacing: var(${tokens.titleLetterSpacing});
    line-height: var(${tokens.titleLineHeight});
`;

export const Description = styled.div`
    box-sizing: border-box;

    color: var(${tokens.descriptionColor});
    font-family: var(${tokens.descriptionFontFamily});
    font-size: var(${tokens.descriptionFontSize});
    font-style: var(${tokens.descriptionFontStyle});
    font-weight: var(${tokens.descriptionFontWeight});
    letter-spacing: var(${tokens.descriptionLetterSpacing});
    line-height: var(${tokens.descriptionLineHeight});
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    padding: var(${tokens.contentPadding});
    gap: var(${tokens.contentGap});

    &.${classes.textAlignCenter} ${Title}, &.${classes.textAlignCenter} ${Description} {
        text-align: center;
    }
`;
