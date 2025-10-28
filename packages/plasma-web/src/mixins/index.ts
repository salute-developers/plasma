import { createApplyPaperMixin } from '@salutejs/plasma-new-hope/styled-components';
import * as allTokens from '@salutejs/plasma-themes/tokens/plasma_web';

export {
    addFocus,
    syntheticFocus,
    applyBlur,
    blurs,
    applyDisabled,
    applyEllipsis,
    applyHyphens,
    applyMaxLines,
    applyNoSelect,
    applyRoundness,
    radiuses,
    applySkeletonGradient,
    applyView,
    views,
    applyScrollSnap,
    shadows,
    applySpacing,
    spacing,
} from '@salutejs/plasma-core';

export type {
    FocusProps,
    OutlinedProps,
    BlurProps,
    DisabledProps,
    MaxLinesProps,
    RoundnessProps,
    Roundness,
    SkeletonGradientProps,
    ViewProps,
    View,
    ScrollSnapProps,
    SpacingProps,
    BreakWordProps,
} from '@salutejs/plasma-core';

export { addScrollbar } from '@salutejs/plasma-new-hope/styled-components';

export const applyPaper = createApplyPaperMixin(allTokens);
