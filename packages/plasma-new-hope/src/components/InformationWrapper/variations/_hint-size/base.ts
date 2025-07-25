import { css } from '@linaria/core';
import { tooltipTokens } from 'src/components/Tooltip';

import { tokens } from '../../InformationWrapper.tokens';
import { Hint } from '../../InformationWrapper.styles';

export const base = css`
    ${Hint} {
        white-space: normal;

        ${tooltipTokens.paddingTop}: var(${tokens.tooltipPaddingTop});
        ${tooltipTokens.paddingRight}: var(${tokens.tooltipPaddingRight});
        ${tooltipTokens.paddingBottom}: var(${tokens.tooltipPaddingBottom});
        ${tooltipTokens.paddingLeft}: var(${tokens.tooltipPaddingLeft});

        ${tooltipTokens.minHeight}: var(${tokens.tooltipMinHeight});
        ${tooltipTokens.borderRadius}: var(${tokens.tooltipBorderRadius});

        ${tooltipTokens.textFontFamily}: var(${tokens.tooltipTextFontFamily});
        ${tooltipTokens.textFontSize}: var(${tokens.tooltipTextFontSize});
        ${tooltipTokens.textFontStyle}: var(${tokens.tooltipTextFontStyle});
        ${tooltipTokens.textFontWeight}: var(${tokens.tooltipTextFontWeight});
        ${tooltipTokens.textFontLetterSpacing}: var(${tokens.tooltipTextFontLetterSpacing});
        ${tooltipTokens.textFontLineHeight}: var(${tokens.tooltipTextFontLineHeight});

        ${tooltipTokens.contentLeftMargin}: var(${tokens.tooltipContentLeftMargin});

        ${tooltipTokens.arrowMaskWidth}: var(${tokens.tooltipArrowMaskWidth});
        ${tooltipTokens.arrowMaskHeight}: var(${tokens.tooltipArrowMaskHeight});
        ${tooltipTokens.arrowMaskImage}: var(${tokens.tooltipArrowMaskImage});
        ${tooltipTokens.arrowHeight}: var(${tokens.tooltipArrowHeight});
        ${tooltipTokens.arrowEdgeMargin}: var(${tokens.tooltipArrowEdgeMargin});
        ${tooltipTokens.arrowBackground}: var(${tokens.tooltipArrowBackground});
    }
`;
