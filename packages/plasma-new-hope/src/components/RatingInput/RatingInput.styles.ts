import styled, { css } from 'styled-components';

import { addFocus } from '../../mixins';

import { classes, privateTokens, tokens } from './RatingInput.tokens';

export const base = css`
    display: inline-grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-areas: 'min scale max';
    align-items: center;
    justify-items: center;

    &.${classes.hasValue} {
        grid-template-areas: 'min scale max' '. value .';
    }

    &.${classes.valueTop} {
        grid-template-areas: '. value .' 'min scale max';
    }

    &.${classes.valueStart} {
        justify-items: start;
    }
`;

export const Score = styled.div`
    grid-area: value;
    display: flex;
    align-items: center;
    justify-content: center;

    .${classes.sideLabels} & {
        /* Длинное значение не раздвигает боковые подписи относительно звёзд. */
        max-width: 0;
        white-space: nowrap;
    }

    .${classes.valueStart} & {
        justify-content: flex-start;
    }
`;

export const LimitLabel = styled.span`
    display: flex;
    align-items: center;
    white-space: nowrap;
`;

export const Content = styled.div`
    display: contents;

    > ${LimitLabel}:first-child {
        grid-area: min;
    }

    > ${LimitLabel}:last-child {
        grid-area: max;
    }
`;

export const Scale = styled.div`
    grid-area: scale;
    display: flex;
    flex-direction: column;
`;

export const Stars = styled.div`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
`;

export const Star = styled.div`
    position: relative;
    flex-shrink: 0;
`;

export const Icon = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    pointer-events: none;

    svg {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const EmptyIcon = styled(Icon)``;

export const FilledIcon = styled(Icon)`
    position: absolute;
    inset: 0;
    clip-path: inset(0 calc(100% - var(${privateTokens.filledPercentage})) 0 0);
`;

export const Fraction = styled.label`
    position: absolute;
    inset-block: 0;
    cursor: pointer;
`;

export const Focus = styled.span`
    ${addFocus({
        outlineRadius: `var(${tokens.focusBorderRadius})`,
        outlineColor: `var(${tokens.focusColor})`,
        hasTransition: false,
        customFocusRules: `
            input.focus-visible:focus + &::before,
            input[data-focus-visible-added] + &::before {
                outline-color: var(${tokens.focusColor});
            }
        `,
    })}

    position: absolute;
    inset: 0;
    pointer-events: none;
`;

export const Radio = styled.input`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
`;

export const LimitLabels = styled.div`
    display: flex;
    justify-content: space-between;
`;
