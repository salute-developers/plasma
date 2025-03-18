import { css } from '@linaria/core';

import { classes, tokens } from '../../Range.tokens';
import {
    StyledLabel,
    LeftHelper,
    StyledContentLeft,
    StyledContentRight,
    StyledDivider,
    ContentWrapper,
    StyledIndicator,
} from '../../Range.styles';

export const base = css`
    ${ContentWrapper} {
        width: inherit;
        border-radius: var(${tokens.borderRadius});

        &:before {
            border-radius: var(${tokens.borderRadius});
            box-shadow: var(${tokens.shadow});
        }
    }

    ${StyledDivider} {
        padding: var(${tokens.dividerPadding});
        font-family: var(${tokens.dividerFontFamily});
        font-size: var(${tokens.dividerFontSize});
        font-style: var(${tokens.dividerFontStyle});
        font-weight: var(${tokens.dividerFontWeight});
        letter-spacing: var(${tokens.dividerLetterSpacing});
        line-height: var(${tokens.dividerLineHeight});
    }

    ${StyledLabel} {
        margin-bottom: var(${tokens.labelOffset});
        font-family: var(${tokens.labelFontFamily});
        font-size: var(${tokens.labelFontSize});
        font-style: var(${tokens.labelFontStyle});
        font-weight: var(${tokens.labelFontWeight});
        letter-spacing: var(${tokens.labelLetterSpacing});
        line-height: var(${tokens.labelLineHeight});
    }

    ${StyledIndicator} {
        width: var(${tokens.indicatorSize});
        height: var(${tokens.indicatorSize});
        inset: var(${tokens.indicatorPlacement});

        &.${classes.requiredAlignRight} {
            inset: var(${tokens.indicatorPlacementRight});
        }

        &.${classes.requiredOuterPlacement} {
            width: var(${tokens.indicatorSizeOuter});
            height: var(${tokens.indicatorSizeOuter});
            inset: var(${tokens.indicatorOuterPlacement});

            &.${classes.requiredAlignRight} {
                inset: var(${tokens.indicatorOuterPlacementRight});
            }
        }
    }

    ${StyledContentLeft} {
        margin: var(${tokens.leftContentMargin});
    }

    ${StyledContentRight} {
        margin: var(${tokens.rightContentMargin});
    }

    ${LeftHelper} {
        margin: var(${tokens.leftHelperOffset});

        font-family: var(${tokens.leftHelperFontFamily});
        font-size: var(${tokens.leftHelperFontSize});
        font-style: var(${tokens.leftHelperFontStyle});
        font-weight: var(${tokens.leftHelperFontWeight});
        letter-spacing: var(${tokens.leftHelperLetterSpacing});
        line-height: var(${tokens.leftHelperLineHeight});
    }
`;
