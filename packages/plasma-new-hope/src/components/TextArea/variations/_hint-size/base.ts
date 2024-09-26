import { css } from '@linaria/core';

import { tooltipTokens } from '../../../Tooltip';
import { tokens } from '../../TextArea.tokens';
import { Hint } from '../../TextArea.styles';

export const base = css`
    ${Hint} {
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
