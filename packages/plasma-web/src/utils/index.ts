export {
    animatedScrollToX,
    animatedScrollToY,
    canUseDOM,
    convertRoundnessMatrix,
    extractTextFrom,
    padZeroNumber,
    monthLongName,
    monthShortName,
    formatCurrency,
    setRef,
    toCssSize,
    transformStyles,
} from '@salutejs/plasma-core';

export type { TimingFunction, PinProps, MediaQueryFunction } from '@salutejs/plasma-core';

export {
    mediaQuery,
    breakpoints as gridBreakpoints,
    columns as gridColumns,
    margins as gridMargins,
    gutters as gridGutters,
    sizes as gridSizes,
} from './mediaQuery';

export type { Breakpoint } from './mediaQuery';
