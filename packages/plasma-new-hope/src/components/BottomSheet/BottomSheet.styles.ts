import styled from 'styled-components';

import { mergeConfig, component } from '../../engines';
import { iconButtonConfig } from '../IconButton';
import { tokens as iconButtonTokens } from '../IconButton/IconButton.tokens';

import { tokens, classes } from './BottomSheet.tokens';

const IconButton = component(mergeConfig(iconButtonConfig));

const dividerLine = `
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    display: block;
    height: var(${tokens.dividerWidth});
    background-color: var(${tokens.dividerColor});
    opacity: 0;
    transition: opacity 0.2s ease;
`;

export const Panel = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    max-height: inherit;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: var(${tokens.borderRadius});
    overflow: visible;

    &.${classes.animated} {
        transition: transform 0.4s ease, opacity 0.4s ease, height 0.3s ease, visibility 0.4s ease;
    }

    &.${classes.closed} {
        transform: translateY(100%);
        opacity: 0;
        visibility: hidden;
    }
`;

export const PanelContent = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-height: 0;
    max-height: inherit;
    background-color: var(${tokens.contentBackgroundColor});
    border-radius: inherit;
    overflow: hidden;
`;

export const Handler = styled.div<{ $placement: 'inner' | 'outer' }>`
    position: absolute;
    z-index: 1;
    top: ${({ $placement }) =>
        $placement === 'outer' ? `calc(-1 * (2 * var(${tokens.handleGap}) + var(${tokens.handleHeight})))` : '0'};
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: var(${tokens.handleGap}) 0;
    touch-action: none;
    user-select: none;
    cursor: grab;

    &::before {
        content: '';
        display: none;
        width: var(${tokens.handleWidth});
        height: var(${tokens.handleHeight});
        border-radius: var(${tokens.handleBorderRadius});
        background-color: var(${tokens.handleBackgroundColor});
    }

    &.${classes.hasHandle}::before {
        display: block;
    }
`;

export const StyledBody = styled.div`
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    overscroll-behavior: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Header = styled.div`
    position: relative;
    flex-shrink: 0;

    &::after {
        ${dividerLine}
        bottom: 0;
    }

    &.${classes.headerDividerVisible}::after {
        opacity: 1;
    }
`;

export const Footer = styled.div`
    position: relative;
    flex-shrink: 0;

    &::before {
        ${dividerLine}
        top: 0;
    }

    &.${classes.footerDividerVisible}::before {
        opacity: 1;
    }
`;

export const BeforeHeader = styled.div`
    flex-shrink: 0;
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    z-index: 2;
    top: var(${tokens.closeIconOffset});
    right: var(${tokens.closeIconOffset});
    flex-shrink: 0;

    ${iconButtonTokens.iconButtonWidth}: var(${tokens.closeIconSize});
    ${iconButtonTokens.iconButtonHeight}: var(${tokens.closeIconSize});
    ${iconButtonTokens.iconButtonRadius}: var(${tokens.closeIconRadius});

    ${iconButtonTokens.iconButtonColor}: var(${tokens.closeIconColor});
    ${iconButtonTokens.iconButtonColorHover}: var(${tokens.closeIconColor});
    ${iconButtonTokens.iconButtonColorActive}: var(${tokens.closeIconColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.closeIconBackgroundColor});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${tokens.closeIconBackgroundColorHover});
`;
