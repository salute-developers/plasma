import { styled } from '@linaria/react';

import { classes, tokens } from '../Header.tokens';

import type { StyledHeaderRootProps } from './HeaderRoot.types';

export const StyledHeaderRoot = styled.header<StyledHeaderRootProps>`
    box-sizing: content-box;

    width: 100%;
    height: var(${tokens.headerHeight});
    padding-top: var(${tokens.headerPaddingTop});
    padding-bottom: var(${tokens.headerPaddingBottom});

    --header_private-gradient-color: ${({ $gradientColor }) => String($gradientColor)};
    &.${String(classes.headerWithGradient)} {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: calc(
                var(${tokens.headerHeight}) + var(${tokens.headerPaddingTop}) + var(${tokens.headerPaddingBottom})
            );
            background-image: linear-gradient(180deg, var(--header_private-gradient-color), rgba(0, 0, 0, 0));
        }
    }
`;

export const StyledInner = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: row;

    width: 100%;
    height: 100%;
`;
