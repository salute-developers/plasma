import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { tooltipConfig } from '../Tooltip';
import { popoverClasses } from '../Popover';

import { classes, privateTokens, tokens } from './InformationWrapper.tokens';

const mergedConfig = mergeConfig(tooltipConfig);
const Tooltip = component(mergedConfig);

export const base = css`
    display: flex;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: var(${tokens.contentGap});
`;

export const ContentChildrenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const LabelWrapper = styled.div<{ hasLabel: boolean; hasCaption: boolean }>`
    display: flex;
    align-items: center;

    white-space: ${({ hasLabel }) => (hasLabel ? 'nowrap' : 'normal')};
    margin-bottom: ${({ hasLabel }) =>
        hasLabel ? `var(${tokens.labelWrapperOffset})` : `var(${tokens.labelWrapperTitleCaptionOffset})`};

    &.${classes.withoutLabel} {
        position: relative;
        margin-bottom: ${({ hasCaption }) => (hasCaption ? `var(${tokens.labelWrapperTitleCaptionOffset})` : '0')};
        display: ${({ hasCaption }) => (hasCaption ? 'flex' : 'block')};
        height: ${({ hasCaption }) => (hasCaption ? 'fit-content' : '0')};
    }
`;

export const IndicatorWrapper = styled.div<{ hasLabel: boolean }>`
    position: ${({ hasLabel }) => (hasLabel ? 'relative' : 'static')};
    display: inline-flex;
    align-items: center;
    gap: var(${tokens.indicatorWrapperGap});
`;

export const Label = styled.label`
    display: inline-flex;
`;

export const HintWrapper = styled.div<{ hasCaption?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;

    &.${classes.withoutLabel} {
        position: absolute;
        margin: 0;
        z-index: 2;
        inset: var(${tokens.hintWithoutLabelPlacementOffset});

        ${privateTokens.translateYWithoutTitle}: calc(-1 * var(${tokens.titleCaptionLineHeight}));

        transform: ${({ hasCaption }) =>
            hasCaption
                ? `translateY(var(${tokens.labelWrapperTitleCaptionOffset}))`
<<<<<<< HEAD
                : 'translateY(var(--plasma_private-translateY-without-title-caption)'};
=======
                : `translateY(var(${privateTokens.translateYWithoutTitle}))`};
>>>>>>> d1246f74a (feat(plasma-new-hope): add shortcuts for DatePicker)
    }
`;

export const HintTargetWrapper = styled.div`
    color: var(${tokens.hintIconColor});

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hint = styled(Tooltip)`
    ${HintTargetWrapper} .${popoverClasses.root} {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const HintIconWrapper = styled.div`
    display: flex;
`;

export const Indicator = styled.div<{ hasCaption?: boolean }>`
    border-radius: 50%;
    align-self: flex-start;

    background-color: var(${tokens.indicatorColor});

    width: var(${tokens.indicatorSizeOuter});
    height: var(${tokens.indicatorSizeOuter});
    margin-top: var(${tokens.indicatorMarginTop});
    z-index: 2;

    &.${classes.requiredAlignLeft} {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: var(${tokens.indicatorOuterLeft});
        margin-top: unset;
        align-self: unset;
    }

    &.${classes.withoutLabel} {
        position: absolute;
        margin-top: unset;
        align-self: unset;

        width: var(${tokens.indicatorSizeInner});
        height: var(${tokens.indicatorSizeInner});
        inset: var(${tokens.indicatorWithoutLabelInner});

        transform: ${({ hasCaption }) =>
            hasCaption ? `translateY(var(${tokens.labelWrapperTitleCaptionOffset}))` : 'translateY(0)'};
        &.${classes.requiredAlignLeft} {
            inset: var(${tokens.indicatorWithoutLabelInnerLeft});
        }
    }
`;

export const OptionalText = styled.span`
    color: var(${tokens.optionalColor});
`;

export const TitleCaption = styled.div<{ hasLabel: boolean }>`
    display: inline-block;
    margin-left: auto;
    margin-top: ${({ hasLabel }) => (hasLabel ? `var(${tokens.titleCaptionOffset})` : 'unset')};
`;

export const Helpers = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

export const LeftHelper = styled.div``;
export const RightHelper = styled.div``;
