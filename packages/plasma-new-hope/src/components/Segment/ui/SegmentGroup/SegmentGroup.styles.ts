import styled, { css } from 'styled-components';
import { component, mergeConfig } from 'src/engines';
import { addFocus } from 'src/mixins';

import { classes, tokens } from '../../tokens';
import { dividerConfig, dividerTokens } from '../../../Divider';

const mergedDividerConfig = mergeConfig(dividerConfig);
const Divider = component(mergedDividerConfig);

export const StyledDivider = styled(Divider)`
    ${dividerTokens.baseSideSize}:  var(${tokens.dividerWidth}, 0.0625rem);
    ${dividerTokens.borderRadius}: var(${tokens.dividerBorderRadius}, 0.0625rem);
    ${dividerTokens.background}:  var(${tokens.dividerColor});
    
    margin: var(${tokens.dividerMargin});

    .${classes.segmentVertical} &{
        width: calc(100% - var(${tokens.dividerVerticalCompensation}, 1rem));
     
        margin: var(${tokens.dividerVerticalMargin});
    }
`;

export const base = css`
    display: inline-flex;
    align-items: center;
    max-width: 100%;

    &.${classes.segmentVertical} {
        max-width: none;
        max-height: 100%;
    }

    border-radius: var(${tokens.groupBorderRadius});

    ${StyledDivider}:first-child {
        display: none;
    }

    & .${classes.selectedSegmentItem} + ${StyledDivider} {
        display: none;
    }

    & ${StyledDivider}:has(+ .${classes.selectedSegmentItem}){
        display: none;
    }
`;

export const StyledContent = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
`;

export const StyledContentWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;

    --plasma_private-clip-outline-offset: -0.063rem;
    --plasma_private-clip-outline-radius: 0.063rem;

    &.${classes.segmentGroupClipScroll} {
        overflow: scroll;
        scroll-padding: 0.25rem;
        overscroll-behavior: contain;

        --plasma_private-clip-outline-offset: 0.063rem;
        --plasma_private-clip-outline-radius: -0.063rem;

        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }

        ${StyledContent} {
            max-width: none;
        }
    }
`;

export const StyledArrow = styled.button`
    display: flex;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '0',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'calc(var(--plasma_private-outline-radius) - 0.063rem)',
    })};

    &[disabled] {
        cursor: not-allowed;
    }
`;

export const StyledLeftArrow = styled(StyledArrow)`
    padding: var(${tokens.groupArrowPadding});
    padding-right: 0;
    margin-right: 0.1875rem;
    margin-left: 0.125rem;
`;

export const StyledRightArrow = styled(StyledArrow)`
    padding: var(${tokens.groupArrowPadding});
    padding-left: 0;
    margin-left: 0.1875rem;
    margin-right: 0.125rem;
`;

export const StyledTopArrow = styled(StyledArrow)`
    padding: var(${tokens.groupVerticalArrowPadding});
    padding-bottom: 0;
    margin-bottom: 0.1875rem;
`;

export const StyledBottomArrow = styled(StyledArrow)`
    padding: var(${tokens.groupVerticalArrowPadding});
    padding-top: 0;
    margin-top: 0.1875rem;
`;
