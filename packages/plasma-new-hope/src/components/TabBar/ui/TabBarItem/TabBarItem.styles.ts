import styled, { css } from 'styled-components';

import { component, mergeConfig } from '../../../../engines';
import { addFocus } from '../../../../mixins/addFocus';
import { counterConfig, counterTokens } from '../../../Counter';
import { weighted } from '../../TabBar.styles';
import { classes, tokens } from '../../TabBar.tokens';

const mergedCounterConfig = mergeConfig(counterConfig);
const Counter = component(mergedCounterConfig);

export const base = css`
    appearance: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    margin: 0;
    border: 0;
    background: var(${tokens.itemBackground});
    cursor: pointer;
    color: var(${tokens.itemColor});
    padding: var(${tokens.itemPadding});
    gap: var(${tokens.itemGap});
    border-radius: var(${tokens.itemBorderRadius});
    -webkit-tap-highlight-color: transparent;

    ${weighted}

    &.${classes.selected} {
        color: var(${tokens.itemColorSelected});
    }

    .${classes.selectedBackground} &.${classes.selected} {
        color: var(${tokens.itemColorSelectedBackground});
        background: var(${tokens.itemBackgroundSelected});
    }

    &:focus-visible {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '0.125rem',
        outlineSize: '0.0625rem',
        outlineRadius: `var(${tokens.itemBorderRadius})`,
        outlineColor: `var(${tokens.itemFocusColor})`,
    })}
`;

export const Icon = styled.span`
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    width: var(${tokens.itemIconSize});
    height: var(${tokens.itemIconSize});
    color: inherit;

    & > * {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const CounterWrap = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    transform: translate(50%, -50%);
    pointer-events: none;
`;

export const ExtraCounter = styled(Counter)`
    ${counterTokens.background}: var(${tokens.counterBackground});
    ${counterTokens.color}: var(${tokens.counterColor});
    ${counterTokens.borderRadius}: var(${tokens.counterBorderRadius});
    ${counterTokens.height}: var(${tokens.counterHeight});
    ${counterTokens.padding}: var(${tokens.counterPadding});
    ${counterTokens.fontFamily}: var(${tokens.counterFontFamily});
    ${counterTokens.fontSize}: var(${tokens.counterFontSize});
    ${counterTokens.fontStyle}: var(${tokens.counterFontStyle});
    ${counterTokens.fontWeight}: var(${tokens.counterFontWeight});
    ${counterTokens.letterSpacing}: var(${tokens.counterLetterSpacing});
    ${counterTokens.lineHeight}: var(${tokens.counterLineHeight});
`;

export const Label = styled.span`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;

    font-family: var(${tokens.itemLabelFontFamily});
    font-size: var(${tokens.itemLabelFontSize});
    font-style: var(${tokens.itemLabelFontStyle});
    font-weight: var(${tokens.itemLabelFontWeight});
    letter-spacing: var(${tokens.itemLabelLetterSpacing});
    line-height: var(${tokens.itemLabelLineHeight});
`;
