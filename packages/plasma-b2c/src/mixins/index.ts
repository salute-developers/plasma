import { createApplyPaperMixin, plasmaCore } from '@salutejs/plasma-new-hope/styled-components';
import * as allTokens from '@salutejs/plasma-themes/tokens/plasma_b2c';

export const {
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
} = plasmaCore;

export type FocusProps = plasmaCore.FocusProps;
export type OutlinedProps = plasmaCore.OutlinedProps;
export type BlurProps = plasmaCore.BlurProps;
export type DisabledProps = plasmaCore.DisabledProps;
export type MaxLinesProps = plasmaCore.MaxLinesProps;
export type RoundnessProps = plasmaCore.RoundnessProps;
export type Roundness = plasmaCore.Roundness;
export type SkeletonGradientProps = plasmaCore.SkeletonGradientProps;
export type ViewProps = plasmaCore.ViewProps;
export type View = plasmaCore.View;
export type ScrollSnapProps = plasmaCore.ScrollSnapProps;
export type SpacingProps = plasmaCore.SpacingProps;
export type BreakWordProps = plasmaCore.BreakWordProps;

export { addScrollbar } from '../components/Scrollbar/Scrollbar';

export const applyPaper = createApplyPaperMixin(allTokens);
