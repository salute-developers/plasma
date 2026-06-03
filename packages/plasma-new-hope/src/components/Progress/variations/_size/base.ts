import { css } from 'styled-components';

import {
    StyledCaption,
    StyledLabel,
    StyledLabelWrapper,
    StyledTopRow,
    StyledMidRow,
    StyledValue,
} from '../../Progress.styles';
import { tokens } from '../../Progress.tokens';

export const base = css`
    ${StyledTopRow} {
        margin-bottom: var(${tokens.topRowMarginBottom});
    }

    ${StyledMidRow} {
        overflow: visible;
    }

    ${StyledLabelWrapper} {
        gap: var(${tokens.labelWrapperGap});
    }

    ${StyledLabel} {
        font-family: var(${tokens.labelFontFamily});
        font-size: var(${tokens.labelFontSize});
        font-style: var(${tokens.labelFontStyle});
        font-weight: var(${tokens.labelFontWeight});
        letter-spacing: var(${tokens.labelLetterSpacing});
        line-height: var(${tokens.labelLineHeight});
    }

    ${StyledMidRow} ${StyledLabelWrapper} {
        margin-right: var(${tokens.labelWrapperMarginRight});
    }

    ${StyledValue} {
        font-family: var(${tokens.valueFontFamily});
        font-size: var(${tokens.valueFontSize});
        font-style: var(${tokens.valueFontStyle});
        font-weight: var(${tokens.valueFontWeight});
        letter-spacing: var(${tokens.valueLetterSpacing});
        line-height: var(${tokens.valueLineHeight});
    }

    ${StyledMidRow} ${StyledValue} {
        margin-left: var(${tokens.valueMarginLeft});
    }

    ${StyledCaption} {
        margin-top: var(${tokens.captionMarginTop});
        font-family: var(${tokens.captionFontFamily});
        font-size: var(${tokens.captionFontSize});
        font-style: var(${tokens.captionFontStyle});
        font-weight: var(${tokens.captionFontWeight});
        letter-spacing: var(${tokens.captionLetterSpacing});
        line-height: var(${tokens.captionLineHeight});
    }
`;
