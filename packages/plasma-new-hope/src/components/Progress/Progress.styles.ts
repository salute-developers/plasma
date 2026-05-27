import styled, { css } from 'styled-components';

import { classes, tokens } from './Progress.tokens';

export const StyledTopRow = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledMidRow = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
`;

export const StyledTrack = styled.div`
    flex: 1;
    position: relative;
`;

export const StyledProgress = styled.div<{ value: number }>`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: ${({ value }) => `${value}%`};
`;

export const StyledLabelWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLabel = styled.span``;

export const StyledLabelContent = styled.div`
    display: inline-flex;
`;

export const StyledValue = styled.span``;

export const StyledCaption = styled.span``;

export const base = css`
    display: flex;
    flex-direction: column;

    &.${classes.hasCaption} ${StyledMidRow} {
        height: var(${tokens.trackHeight});
    }

    &.${classes.labelPlacementLeft} ${StyledMidRow} {
        height: auto;
    }

    &.${classes.valueAlignStart} ${StyledTopRow} {
        justify-content: flex-start;
    }

    &.${classes.valueAlignCenter} ${StyledTopRow} {
        justify-content: center;
    }

    &.${classes.valueAlignEnd} ${StyledTopRow} {
        justify-content: flex-end;
    }
`;
