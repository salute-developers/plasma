import { css } from '@linaria/core';
import { popoverClasses } from 'src/components/Popover';
import { informationWrapperTokens } from 'src/components/InformationWrapper';
import { Indicator } from 'src/components/InformationWrapper/InformationWrapper.styles';

import { classes, tokens } from '../../Range.tokens';
import {
    StyledContentLeft,
    StyledContentRight,
    StyledDivider,
    ContentWrapper,
    StyledContentRightWrapper,
} from '../../Range.styles';
import { InformationWrapperUI } from '../../ui';

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

    ${StyledContentLeft} {
        margin: var(${tokens.leftContentMargin});
    }

    ${StyledContentRight} {
        margin: var(${tokens.rightContentMargin});
    }

    ${StyledContentRightWrapper} {
        .${popoverClasses.wrapper} {
            margin: var(${tokens.hintPlacementInnerMargin});
        }
    }

    ${InformationWrapperUI}.${classes.clearHasOuterHint} {
        ${informationWrapperTokens.indicatorWithoutLabelInner}: var(${tokens.indicatorWithoutLabelOuterHint});
    }

    &.${classes.clear}.${classes.noCaptionAndLabel} {
        ${InformationWrapperUI} ${Indicator} {
            --plasma_private-translateY-without-title-caption: calc(-1 * var(${tokens.titleCaptionLineHeight}));

            transform: translateY(var(--plasma_private-translateY-without-title-caption));
        }
    }
`;
