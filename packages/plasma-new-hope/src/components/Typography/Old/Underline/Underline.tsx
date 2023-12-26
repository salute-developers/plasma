import { base as sizeCSS } from '../../variations/_size/base';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

import { base } from './Underline.styles';

export type UnderlineProps = TypographyOldProps;

export const underlineRoot = typographyOldRoot;

export const underlineConfig = {
    name: 'Underline',
    tag: 'div',
    layout: underlineRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'm',
    },
};
