import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

export const {
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
} = plasmaCore;

export type TimingFunction = plasmaCore.TimingFunction;
export type PinProps = plasmaCore.PinProps;

export {
    mediaQuery,
    breakpoints as gridBreakpoints,
    columns as gridColumns,
    margins as gridMargins,
    gutters as gridGutters,
    sizes as gridSizes,
} from './mediaQuery';

export type { Breakpoint, MediaQueryFunction } from './mediaQuery';

export { clearSelection } from './clearSelection';
export { selectText } from './selectText';
