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

export type { TimingFunction, PinProps } from '@salutejs/plasma-core';

export {
    mediaQuery,
    breakpoints as gridBreakpoints,
    columns as gridColumns,
    margins as gridMargins,
    gutters as gridGutters,
    sizes as gridSizes,
} from './mediaQuery';

export type { MediaQueryFunction, Breakpoint } from './mediaQuery';

export * from './clearSelection';
export * from './selectText';
