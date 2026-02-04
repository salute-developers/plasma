import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { IconClose } from '../_Icon';

import { classes, tokens } from './File.tokens';

export const StyledIconClose = styled(IconClose)`
    width: 100%;
    height: 100%;
    color: currentColor;
`;

export const FileThumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;

    color: var(${tokens.cellTitleColor});

    width: var(${tokens.fileThumbSize});
    height: var(${tokens.fileThumbSize});
    margin: var(${tokens.fileThumbMargin});
    border-radius: var(${tokens.fileThumbRadius});
`;

export const ThumbImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const base = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    &.${classes.fileLoaderLinear} {
        gap: var(${tokens.progressLinearGap});
    }
`;
