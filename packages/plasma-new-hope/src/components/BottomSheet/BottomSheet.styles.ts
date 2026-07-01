import styled from 'styled-components';

import { mergeConfig, component } from '../../engines';
import { iconButtonConfig } from '../IconButton';
import { tokens as iconButtonTokens } from '../IconButton/IconButton.tokens';
import { applyHyphens } from '../../mixins';

import { tokens, classes } from './BottomSheet.tokens';

const IconButton = component(mergeConfig(iconButtonConfig));

const dividerLine = `
    content: '';
    position: absolute;
    left: calc(-1 * var(${tokens.contentPaddingHorizontal}));
    right: calc(-1 * var(${tokens.contentPaddingHorizontal}));
    display: block;
    height: var(${tokens.dividerWidth});
    background-color: var(${tokens.dividerColor});
    opacity: 0;
    transition: opacity 0.2s ease;
`;

export const StyledPanel = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1001;
    width: 100%;
    max-height: var(${tokens.maxHeight});

    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    height: auto;
    padding-top: var(${tokens.contentPaddingTop});
    padding-bottom: var(${tokens.contentPaddingBottom});

    background-color: var(${tokens.contentBackgroundColor});
    border-radius: var(${tokens.borderRadius});
    overflow: hidden;

    transition: unset;

    &.${classes.animated} {
        transition: transform 0.4s ease, opacity 0.4s ease, height 0.3s ease, visibility 0.4s ease;
    }

    &.${classes.withImage} {
        padding-top: 0;
        border-radius: var(${tokens.imageBorderRadius}) var(${tokens.imageBorderRadius}) 0 0;
    }

    &.${classes.collapsed} {
        height: var(${tokens.collapsedHeight});
    }

    &.${classes.expanded} {
        height: var(${tokens.maxHeight});
    }

    &.${classes.closed} {
        transform: translateY(100%);
        opacity: 0;
        visibility: hidden;
    }
`;

export const StyledHandle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding-top: var(${tokens.handleGapTop});
    padding-bottom: var(${tokens.handleGapBottom});
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

    &.${classes.withGrip}::before {
        display: block;
    }
`;

export const StyledContent = styled.div`
    flex: 0 1 auto;
    min-height: auto;
    max-height: 100%;
    overflow: hidden;

    padding-left: var(${tokens.contentPaddingHorizontal});
    padding-right: var(${tokens.contentPaddingHorizontal});

    &.${classes.scrollable} {
        flex: 1 1 auto;
        min-height: 0;
        max-height: none;
        overflow: auto;
        overscroll-behavior: none;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledBody = styled.div``;

export const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    padding: var(${tokens.headerPadding});
    background-color: var(${tokens.contentBackgroundColor});

    &::after {
        ${dividerLine}
        bottom: 0;
    }

    &.${classes.headerDividerVisible}::after {
        opacity: 1;
    }
`;

export const StyledTitleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    &.${classes.afterImage} {
        padding-top: var(${tokens.contentPaddingTop});
    }
`;

export const StyledTitle = styled.div`
    flex-grow: 1;
    color: var(${tokens.titleColor});
    font-family: var(${tokens.titleFontFamily});
    font-size: var(${tokens.titleFontSize});
    font-style: var(${tokens.titleFontStyle});
    font-weight: var(${tokens.titleFontWeight});
    letter-spacing: var(${tokens.titleFontLetterSpacing});
    line-height: var(${tokens.titleFontLineHeight});
    ${String(applyHyphens)};
`;

export const StyledFooter = styled.div`
    position: relative;
    flex-shrink: 0;
    padding-top: var(${tokens.footerPaddingTop});
    padding-left: var(${tokens.contentPaddingHorizontal});
    padding-right: var(${tokens.contentPaddingHorizontal});
    background-color: var(${tokens.contentBackgroundColor});

    &::before {
        ${dividerLine}
        top: 0;
    }

    &.${classes.footerDividerVisible}::before {
        opacity: 1;
    }
`;

export const StyledImageWrapper = styled.div`
    position: relative;
    width: calc(100% + 2 * var(${tokens.contentPaddingHorizontal}));
    height: var(${tokens.imageHeight});
    flex-shrink: 0;
    margin: 0 calc(-1 * var(${tokens.contentPaddingHorizontal}));
    overflow: hidden;

    & > :first-child {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CloseButton = styled(IconButton)`
    position: relative;
    flex-shrink: 0;

    ${iconButtonTokens.iconButtonWidth}: var(${tokens.closeIconSize});
    ${iconButtonTokens.iconButtonHeight}: var(${tokens.closeIconSize});
    ${iconButtonTokens.iconButtonRadius}: var(${tokens.closeIconRadius});

    ${iconButtonTokens.iconButtonColor}: var(${tokens.closeIconColor});
    ${iconButtonTokens.iconButtonColorHover}: var(${tokens.closeIconColor});
    ${iconButtonTokens.iconButtonColorActive}: var(${tokens.closeIconColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.closeIconBackgroundColor});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${tokens.closeIconBackgroundColorHover});

    &.${classes.closeIconOnImage} {
        position: absolute;
        top: var(${tokens.closeIconOnImageOffset});
        right: var(${tokens.closeIconOnImageOffset});

        ${iconButtonTokens.iconButtonColor}: var(${tokens.closeIconColorOnImage});
        ${iconButtonTokens.iconButtonColorHover}: var(${tokens.closeIconColorOnImage});
        ${iconButtonTokens.iconButtonColorActive}: var(${tokens.closeIconColorOnImage});
        ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.closeIconBackgroundColorOnImage});
        ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${tokens.closeIconBackgroundColorOnImage});
    }
`;
