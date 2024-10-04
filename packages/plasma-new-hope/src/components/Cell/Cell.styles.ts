import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import type { AlignProp } from './Cell.types';
import { tokens, classes } from './Cell.tokens';

const alignToFlex = {
    center: 'center',
    top: 'flex-start',
    bottom: 'flex-end',
};

export const base = css`
    &&.${classes.fixedStretching} {
        width: var(${tokens.cellWidth});
    }
    &&.${classes.filledStretching} {
        width: 100%;
    }
    &&.${classes.autoStretching} {
        width: auto;
    }
`;

export const CellContentWrapper = styled.div`
    display: flex;
    flex: auto;
    align-items: stretch;
    justify-content: space-between;
    gap: var(${tokens.cellGap});
    height: auto;
`;

export const CellContent = styled.div`
    display: flex;
    align-items: center;
    height: auto;
`;

export const CellLeft = styled.div<{ align: AlignProp }>`
    display: flex;
    align-items: ${({ align }) => alignToFlex[align]};
`;

export const CellRight = styled.div<{ align: AlignProp }>`
    display: flex;
    align-items: ${({ align }) => alignToFlex[align]};
    text-align: right;
`;
