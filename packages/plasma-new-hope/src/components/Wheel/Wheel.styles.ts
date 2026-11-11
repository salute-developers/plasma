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
    -webkit-tap-highlight-color: transparent;

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
    ${privateTokens.itemContentDisplay}: var(${tokens.itemContentDisplay}, flex);

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
        ${privateTokens.itemContentDisplay}: flex;
    }

    .${classes.alignRight} > &,
    .${classes.alignMixed} > &:first-child:not(:only-child) {
        ${privateTokens.alignItems}: flex-end;
        ${privateTokens.justifyItems}: end;
        ${privateTokens.textAlign}: right;
        ${privateTokens.itemContentDisplay}: flex;
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
    padding-inline: var(${privateTokens.staticTextAfterPadding}, 0px);
    box-sizing: border-box;
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
    display: var(${privateTokens.itemContentDisplay}, flex);
    /* В режиме grid пустой первый трек уравновешивает textAfter справа от значения. */
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: center;
    gap: var(${tokens.textAfterGap});
    transform-origin: center;
`;

export const ItemLabel = styled.div`
    grid-column: 2;

    &:only-child {
        grid-column: 1 / -1;
    }
`;

const labelTypography = `
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
`;

export const Item = styled.div<{ $row?: number }>`
    position: relative;
    grid-column: 1;
    grid-row: ${({ $row }) => $row};
    display: flex;
    flex-direction: column;
    align-items: var(${privateTokens.alignItems}, center);
    align-self: start;
    justify-content: center;
    min-height: calc(var(${tokens.lineHeight}) + 2 * var(${tokens.itemVerticalPadding}, 0px));
    padding-block: var(${tokens.itemVerticalPadding}, 0px);
    box-sizing: border-box;
    ${labelTypography};
    white-space: nowrap;
    cursor: pointer;

    .${classes.staticTextAfter} [role='listbox'] > &:not([data-buffer]) {
        width: var(${privateTokens.staticValueWidth});
        max-width: 100%;
    }

    &[data-distance='1'] {
        min-height: calc(
            var(${tokens.lineHeight}) * var(${tokens.secondaryScale}) + 2 *
                var(${tokens.secondaryItemVerticalPadding}, var(${tokens.itemVerticalPadding}, 0px))
        );
        padding-block: var(${tokens.secondaryItemVerticalPadding}, var(${tokens.itemVerticalPadding}, 0px));
        font-size: calc(var(${tokens.fontSize}) * var(${tokens.secondaryScale}));
        line-height: calc(var(${tokens.lineHeight}) * var(${tokens.secondaryScale}));
        ${ItemContent} {
            opacity: var(${tokens.secondaryOpacity});
        }
    }

    &[data-distance='2'],
    &[data-distance='3'] {
        min-height: calc(
            var(${tokens.lineHeight}) * var(${tokens.tertiaryScale}) + 2 *
                var(${tokens.tertiaryItemVerticalPadding}, var(${tokens.itemVerticalPadding}, 0px))
        );
        padding-block: var(${tokens.tertiaryItemVerticalPadding}, var(${tokens.itemVerticalPadding}, 0px));
        font-size: calc(var(${tokens.fontSize}) * var(${tokens.tertiaryScale}));
        line-height: calc(var(${tokens.lineHeight}) * var(${tokens.tertiaryScale}));
        ${ItemContent} {
            opacity: var(${tokens.tertiaryOpacity});
        }
    }

    &[data-buffer] {
        position: absolute;
        left: var(${privateTokens.staticTextAfterPadding}, 0px);
        right: var(${privateTokens.staticTextAfterPadding}, 0px);
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

export const ValueWidthMeasure = styled.div`
    grid-area: 1 / 1;
    width: max-content;
    padding-inline: var(${privateTokens.staticTextAfterPadding}, 0px);
`;

export const LabelWidthMeasure = styled.div`
    display: grid;
    width: max-content;
`;

export const TextAfter = styled.span`
    color: var(${tokens.textAfterColor});
`;

export const StaticTextAfterWrapper = styled.div<{ $row: number }>`
    position: relative;
    grid-column: 1;
    grid-row: ${({ $row }) => $row};
    justify-self: var(${privateTokens.justifyItems}, center);
    align-self: start;
    width: var(${privateTokens.staticValueWidth});
    max-width: 100%;
    height: 0;
    pointer-events: none;
    ${labelTypography};
    white-space: nowrap;

    ${TextAfter} {
        position: absolute;
        top: var(${tokens.itemVerticalPadding}, 0px);
        left: calc(100% + var(${tokens.textAfterGap}));
        width: max-content;
    }
`;

export const DescriptionWrapper = styled.div<{ $row: number }>`
    grid-column: 1;
    grid-row: ${({ $row }) => $row};
    display: flex;
    align-self: start;
    justify-self: stretch;
    justify-content: var(${privateTokens.alignItems}, center);
    padding-top: calc(
        var(${tokens.itemVerticalPadding}, 0px) + var(${tokens.lineHeight}) + var(${tokens.descriptionGap})
    );
    padding-bottom: var(${tokens.itemVerticalPadding}, 0px);
    pointer-events: none;
`;

export const Description = styled.div`
    flex-shrink: 0;
    pointer-events: auto;
    font-family: var(${tokens.descriptionFontFamily});
    font-size: var(${tokens.descriptionFontSize});
    font-style: var(${tokens.descriptionFontStyle});
    font-weight: var(${tokens.descriptionFontWeight});
    letter-spacing: var(${tokens.descriptionLetterSpacing});
    line-height: var(${tokens.descriptionLineHeight});
    white-space: nowrap;
`;

export const Control = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(${tokens.controlSize});
    height: var(${tokens.controlSize});
    padding: 0;
    margin-inline: var(${privateTokens.staticTextAfterPadding}, 0px);
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

    &.${classes.customSeparator}, &.${classes.dots} {
        ${labelTypography};
        padding-inline: var(${tokens.separatorInlinePadding}, 0px);
    }

    &.${classes.customSeparator} {
        &.${classes.hasDescription} {
            padding-bottom: calc(var(${tokens.descriptionGap}) + var(${tokens.descriptionLineHeight}));
        }
    }

    &.${classes.dots} {
        flex-direction: column;
        width: var(${tokens.dotSeparatorWidth}, var(${tokens.dotSize}));
        box-sizing: content-box;
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
