import { css as cssLibrary } from '@linaria/core';

import type { CSS } from './types';

export const css = cssLibrary as CSS;
export { mergeConfig, component } from './common';

export type { Variant, ComponentConfig, RootProps, CSS } from './types';
