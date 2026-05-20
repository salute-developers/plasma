import { css as cssLibrary } from 'styled-components';

import type { CSS } from './types';

export const css = cssLibrary as CSS;
export { mergeConfig, component } from './common';
export { getResponsiveCSS } from './utils';

export type {
    Variant,
    ComponentConfig,
    MediaQueryRule,
    RootProps,
    CSS,
    RootPropsOmitOnChange,
    RootPropsOmitOnChangeAndDefaultValue,
    RootPropsOmitDraggable,
} from './types';
