import { base as sizeCSS } from '../variations/_size/base';
import type { FontProps } from '../Typography.types';
import { base } from '../Typography.styles';
import { typographyRootBoldDefault } from '../Typography';

export type DsplProps = FontProps;

export const dsplRoot = typographyRootBoldDefault;

export const dsplConfig = {
    name: 'Dspl',
    tag: 'div',
    layout: dsplRoot,
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
