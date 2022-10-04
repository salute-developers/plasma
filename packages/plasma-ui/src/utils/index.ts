export {
    animatedScrollToX,
    animatedScrollToY,
    convertRoundnessMatrix,
    padZeroNumber,
    monthLongName,
    formatCurrency,
    setRef,
    toCssSize,
    transformStyles,
} from '@salutejs/plasma-core';

export {
    mediaQuery,
    breakpoints as gridBreakpoints,
    columns as gridColumns,
    margins as gridMargins,
    gutters as gridGutters,
    sizes as gridSizes,
} from './mediaQuery';
export type { Breakpoint, MediaQueryFunction } from './mediaQuery';

export type { PinProps } from '@salutejs/plasma-core';

export { detectDevice, deviceScales, isSberBox, isSberPortal, DeviceKindList } from './deviceDetection';
export type { DeviceKind } from './deviceDetection';
