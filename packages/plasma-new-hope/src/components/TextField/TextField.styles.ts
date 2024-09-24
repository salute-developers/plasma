import { styled } from '@linaria/react';

import { classes, tokens } from './TextField.tokens';

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const InputLabelWrapper = styled.div`
    flex: 1;
    overflow: scroll;
    position: relative;
    width: 100%;
    display: inline-flex;
    align-items: center;

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    overscroll-behavior: contain;

    &.${String(classes.hasChips)} {
        height: var(${tokens.chipHeight});
        border-radius: var(${tokens.chipBorderRadius});
    }
`;

export const StyledChips = styled.div`
    display: flex;
    gap: var(${tokens.chipGap});
    margin-right: var(${tokens.chipGap});
    user-select: none;
`;

export const Input = styled.input`
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
    width: 100%;
    z-index: 1;

    &::placeholder {
        opacity: 0;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    flex: 1;
    min-width: 60%;
`;

export const InputPlaceholder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    white-space: nowrap;

    pointer-events: none;
    user-select: none;
    font: inherit;
    letter-spacing: inherit;
    line-height: inherit;

    color: var(${tokens.placeholderColor});
`;

export const Label = styled.label`
    position: relative;
    display: inline-flex;
`;

const StyledContentSlot = styled.div`
    color: var(${tokens.contentSlotColor});
    line-height: 0;
`;

export const StyledContentLeft = styled(StyledContentSlot)`
    margin: var(${tokens.leftContentMargin});
`;

export const StyledContentRight = styled(StyledContentSlot)`
    margin: var(${tokens.rightContentMargin});
    color: var(${tokens.contentSlotRightColor}, var(${tokens.contentSlotColor}));

    &:hover {
        color: var(${tokens.contentSlotColorHover});
        color: var(${tokens.contentSlotRightColorHover}, var(${tokens.contentSlotColorHover}));
        cursor: pointer;
    }

    &:active {
        color: var(${tokens.contentSlotRightColorActive}, var(${tokens.contentSlotColorActive}));
    }
`;

export const LeftHelper = styled.div``;

export const StyledTextBefore = styled.div``;

export const StyledTextAfter = styled.div``;

export const StyledOptionalText = styled.span`
    color: var(${tokens.optionalColor});
`;

export const StyledIndicator = styled.div`
    position: absolute;
    border-radius: 50%;

    background-color: var(${tokens.indicatorColor});

    &.${classes.outerLabelPlacement} {
        width: var(${tokens.indicatorSizeOuter});
        height: var(${tokens.indicatorSizeOuter});
        inset: var(${tokens.indicatorLabelPlacementOuter});

        &.align-right {
            inset: var(${tokens.indicatorLabelPlacementOuterRight});
        }
    }

    &.${classes.innerLabelPlacement} {
        width: var(${tokens.indicatorSizeInner});
        height: var(${tokens.indicatorSizeInner});
        inset: var(${tokens.indicatorLabelPlacementInner});

        &.align-right {
            inset: var(${tokens.indicatorLabelPlacementInnerRight});
        }
    }
`;
