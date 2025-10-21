import { styled } from '@linaria/react';
import { tooltipConfig, tooltipTokens } from 'src/components/Tooltip';
import { component, mergeConfig } from 'src/engines';

import { tokens } from '../../Calendar.tokens';

const mergedTooltipConfig = mergeConfig(tooltipConfig);
const Tooltip = component(mergedTooltipConfig);

export const EventTooltip = styled(Tooltip)`
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
    ${tooltipTokens.arrowBackground}: var(${tokens.tooltipArrowBackground});
    ${tooltipTokens.arrowHeight}: var(${tokens.tooltipArrowHeight});
    ${tooltipTokens.arrowEdgeMargin}: var(${tokens.tooltipArrowEdgeMargin});

    ${tooltipTokens.backgroundColor}: var(${tokens.tooltipBackgroundColor});
    ${tooltipTokens.boxShadow}: var(${tokens.tooltipBoxShadow});
    ${tooltipTokens.color}: var(${tokens.tooltipColor});
`;
