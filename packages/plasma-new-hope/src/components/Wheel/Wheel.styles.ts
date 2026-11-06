import styled, { css } from 'styled-components';

import { classes, privateTokens, tokens } from './Wheel.tokens';

export const base = css`
    display: inline-flex;
    width: max-content;
    vertical-align: top;
    align-items: stretch;
    gap: var(${tokens.columnGap});
    color: var(${tokens.color});
    box-sizing: border-box;

    &.${classes.dots}, &.${classes.customSeparator} {
        gap: var(${tokens.dotColumnGap});
    }

    &.${classes.divider} {
        gap: var(${tokens.dividerColumnGap});
    }
`;

export const Column = styled.div<{ $fixedWidth: boolean }>`
    ${privateTokens.alignItems}: center;
    ${privateTokens.justifyItems}: center;
    ${privateTokens.textAlign}: center;

    display: flex;
    flex: ${({ $fixedWidth }) => ($fixedWidth ? '0 0 auto' : '1 1 auto')};
    flex-direction: column;
    justify-content: center;
    align-items: var(${privateTokens.alignItems}, center);
    text-align: var(${privateTokens.textAlign}, center);
    gap: var(${tokens.controlGap});
    min-width: 0;
    box-sizing: border-box;

    .${classes.alignLeft} > &,
    .${classes.alignMixed} > &:last-child:not(:only-child) {
        ${privateTokens.alignItems}: flex-start;
        ${privateTokens.justifyItems}: start;
        ${privateTokens.textAlign}: left;
    }

    .${classes.alignRight} > &,
    .${classes.alignMixed} > &:first-child:not(:only-child) {
        ${privateTokens.alignItems}: flex-end;
        ${privateTokens.justifyItems}: end;
        ${privateTokens.textAlign}: right;
    }
`;

export const ColumnContent = styled.div`
    display: grid;
    align-self: stretch;
    min-width: 0;
`;

export const Items = styled.div`
    position: relative;
    display: grid;
    grid-area: 1 / 1;
    min-width: 0;
    overflow: hidden;
    gap: var(${tokens.itemGap});
    justify-items: var(${privateTokens.justifyItems}, center);
    outline: none;
    touch-action: pan-x;
    user-select: none;
    -webkit-user-select: none;

    &:focus-visible {
        outline: 0.125rem solid var(${tokens.focusColor});
        outline-offset: 0.25rem;
    }
`;

export const ItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(${tokens.textAfterGap});
    transform-origin: center;
`;

export const Item = styled.div`
    ${privateTokens.itemScale}: 1;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: var(${privateTokens.alignItems}, center);
    justify-content: center;
    min-height: var(${tokens.lineHeight});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
    white-space: nowrap;
    cursor: pointer;

    &[data-distance='1'] {
        ${privateTokens.itemScale}: var(${tokens.secondaryScale});
        min-height: calc(var(${tokens.lineHeight}) * var(${tokens.secondaryScale}));
        font-size: calc(var(${tokens.fontSize}) * var(${tokens.secondaryScale}));
        line-height: calc(var(${tokens.lineHeight}) * var(${tokens.secondaryScale}));
        ${ItemContent} {
            opacity: var(${tokens.secondaryOpacity});
        }
    }

    &[data-distance='2'],
    &[data-distance='3'] {
        ${privateTokens.itemScale}: var(${tokens.tertiaryScale});
        min-height: calc(var(${tokens.lineHeight}) * var(${tokens.tertiaryScale}));
        font-size: calc(var(${tokens.fontSize}) * var(${tokens.tertiaryScale}));
        line-height: calc(var(${tokens.lineHeight}) * var(${tokens.tertiaryScale}));
        ${ItemContent} {
            opacity: var(${tokens.tertiaryOpacity});
        }
    }

    &[data-buffer] {
        position: absolute;
        left: 0;
        right: 0;
        pointer-events: none;

        ${ItemContent} {
            opacity: 0;
        }
    }

    &[data-buffer='before'] {
        bottom: calc(100% + var(${tokens.itemGap}));
    }

    &[data-buffer='after'] {
        top: calc(100% + var(${tokens.itemGap}));
    }
`;

// Все значения участвуют в расчёте ширины в полном размере, не добавляя высоту колонке.
export const WidthMeasure = styled.div`
    display: grid;
    grid-area: 1 / 1;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    pointer-events: none;

    ${Item} {
        grid-area: 1 / 1;
        width: max-content;
    }
`;

export const TextAfter = styled.span`
    color: var(${tokens.textAfterColor});
`;

export const DescriptionWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: var(${privateTokens.alignItems}, center);
    pointer-events: none;

    ${Item}[data-distance='0'] > & {
        position: static;
        align-self: stretch;
        pointer-events: auto;
    }
`;

export const Description = styled.div`
    flex-shrink: 0;
    margin-top: calc(var(${tokens.descriptionGap}) * var(${privateTokens.itemScale}));
    font-family: var(${tokens.descriptionFontFamily});
    font-size: calc(var(${tokens.descriptionFontSize}) * var(${privateTokens.itemScale}));
    font-style: var(${tokens.descriptionFontStyle});
    font-weight: var(${tokens.descriptionFontWeight});
    letter-spacing: var(${tokens.descriptionLetterSpacing});
    line-height: calc(var(${tokens.descriptionLineHeight}) * var(${privateTokens.itemScale}));
    opacity: 0;
    transform-origin: center;

    ${Item}[data-distance='0'] & {
        opacity: 1;
    }
`;

export const Control = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(${tokens.controlSize});
    height: var(${tokens.controlSize});
    padding: 0;
    border: 0;
    background: transparent;
    color: var(${tokens.controlColor});
    cursor: pointer;

    &.${classes.previousControl} {
        transform: rotate(180deg);
    }
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    flex-shrink: 0;

    &.${classes.customSeparator} {
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});

        &.${classes.hasDescription} {
            padding-bottom: calc(var(${tokens.descriptionGap}) + var(${tokens.descriptionLineHeight}));
        }
    }

    &.${classes.dots} {
        flex-direction: column;
        gap: var(${tokens.dotGap});

        &.${classes.hasDescription} {
            padding-bottom: var(${tokens.dotOffset});
        }

        &::before,
        &::after {
            content: '';
            width: var(${tokens.dotSize});
            height: var(${tokens.dotSize});
            border-radius: 50%;
            background: currentColor;
        }
    }

    &.${classes.divider} {
        width: 1px;
        background: var(${tokens.dividerColor});
    }
`;
