import { styled } from '@linaria/react';

import { classes, tokens } from '../../Calendar.tokens';
import { component, mergeConfig } from '../../../../engines';
import { iconButtonConfig, iconButtonTokens } from '../../../IconButton';
import { flexCenter } from '../../mixins';
import { addFocus } from '../../../../mixins';

const mergedIconButtonConfig = mergeConfig(iconButtonConfig);
const IconButton = component(mergedIconButtonConfig);

export const StyledCalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(${tokens.calendarHeaderWrapperPadding});
`;

export const StyledHeader = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;
    font-family: var(${tokens.calendarHeaderFontFamily});
    font-size: var(${tokens.calendarHeaderFontSize});
    font-style: var(${tokens.calendarHeaderFontStyle});
    font-weight: var(${tokens.calendarHeaderFontWeightBold});
    letter-spacing: var(${tokens.calendarHeaderFontLetterSpacing});
    line-height: var(${tokens.calendarHeaderFontLineHeight});
    padding: var(${tokens.calendarHeaderPadding});

    color: var(${tokens.calendarContentPrimaryColor});

    cursor: pointer;
    display: flex;
    gap: var(${tokens.calendarHeaderDateGap});
    justify-content: space-between;
    align-items: center;

    &:hover,
    &:active {
        color: var(${tokens.calendarContentSecondaryColor});
    }

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
        outlineRadius: '0.563rem',
    })};
`;

export const StyledHeaderDate = styled.span`
    ${flexCenter};
    pointer-events: none;
`;

export const StyledArrows = styled.div`
    display: flex;
    gap: var(${tokens.calendarHeaderArrowGap});
    padding: var(${tokens.calendarHeaderArrowPadding});
`;

// NOTE: переопределение токенов IconButton
export const StyledArrow = styled(IconButton)`
    ${iconButtonTokens.iconButtonColor}: var(${tokens.iconButtonColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.iconButtonBackgroundColor});
    ${iconButtonTokens.iconButtonColorHover}: var(${tokens.iconButtonColorHover});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${tokens.iconButtonBackgroundColorHover});
    ${iconButtonTokens.iconButtonColorActive}: var(${tokens.iconButtonColorActive});
    ${iconButtonTokens.iconButtonBackgroundColorActive}: var(${tokens.iconButtonBackgroundColorActive});
    ${iconButtonTokens.iconButtonHeight}: var(${tokens.iconButtonHeight});
    ${iconButtonTokens.iconButtonWidth}: var(${tokens.iconButtonWidth});
    ${iconButtonTokens.iconButtonPadding}: var(${tokens.iconButtonPadding});
    ${iconButtonTokens.iconButtonRadius}: var(${tokens.iconButtonRadius});
    ${iconButtonTokens.iconButtonFocusColor}: var(${tokens.iconButtonFocusColor});
`;

export const StyledNavigation = styled.div`
    width: 100%;
    ${flexCenter};
`;

export const StyledDoubleHeaderWrapper = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: var(${tokens.iconButtonWidth}) 1fr var(${tokens.iconButtonWidth});
    grid-template-areas: 'a b c';

    ${StyledArrow} {
        grid-area: a;
    }

    &.${classes.doubleHeaderLastDateWrapper} ${StyledArrow} {
        grid-area: c;
    }
`;

export const StyledHeaderDouble = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;

    font-family: var(${tokens.calendarHeaderFontFamily});
    font-size: var(${tokens.calendarHeaderFontSize});
    font-style: var(${tokens.calendarHeaderFontStyle});
    font-weight: var(${tokens.calendarHeaderFontWeightBold});
    letter-spacing: var(${tokens.calendarHeaderFontLetterSpacing});
    line-height: var(${tokens.calendarHeaderFontLineHeight});

    color: var(${tokens.calendarContentPrimaryColor});

    grid-area: b;
    justify-self: center;
    cursor: pointer;
    display: flex;
    gap: var(${tokens.calendarHeaderDateGap});
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: fit-content;

    ${String(flexCenter)};

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
        outlineRadius: '0.563rem',
    })};
`;
