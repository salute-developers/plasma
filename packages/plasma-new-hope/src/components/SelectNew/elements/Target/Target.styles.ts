import { styled } from '@linaria/react';

import { IconChevronDown } from '../../../_Icon';
import { applyEllipsis } from '../../../../mixins';
import { tokens } from '../../SelectNew.tokens';

export const StyledArrow = styled(IconChevronDown)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;
    color: var(${tokens.targetArrowColor});
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(${tokens.targetPadding});
`;

export const StyledText = styled.span`
    ${applyEllipsis()};

    position: relative;
    pointer-events: none;
    user-select: none;

    color: var(${tokens.targetColor});
`;

export const StyledChipsWrapper = styled.div`
    border-radius: var(${tokens.chipBorderRadius});

    overflow: scroll;
    position: relative;
    width: 100%;
    height: var(${tokens.chipHeight});
    display: flex;
    align-items: center;

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    overscroll-behavior: contain;
`;

export const StyledChips = styled.div`
    overflow: visible;
    display: flex;
    gap: var(${tokens.chipGap});

    position: absolute;
    user-select: none;
`;

export const StyledLabel = styled.label`
    ${applyEllipsis()};

    box-sizing: border-box;
    position: absolute;
    pointer-events: none;
    display: inline-flex;
    align-items: center;

    transition: all 0.1s ease-in-out;
    transform-origin: top left;

    width: 100%;
    height: auto;

    color: var(${tokens.targetLabelColor});

    font-family: var(${tokens.targetFontFamily});
    font-size: var(${tokens.targetFontSize});
    font-style: var(${tokens.targetFontStyle});
    font-weight: var(${tokens.targetFontWeight});
    letter-spacing: var(${tokens.targetLetterSpacing});
    line-height: var(${tokens.targetLineHeight});
`;
