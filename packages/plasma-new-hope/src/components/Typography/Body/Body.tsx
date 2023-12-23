import { base as sizeCSS } from '../variations/_size/base';
import type { FontProps } from '../Typography.types';
import { typographyRoot } from '../Typography';
import { base } from '../Typography.styles';

export type BodyProps = FontProps;

export const bodyRoot = typographyRoot;

export const bodyConfig = {
    name: 'Body',
    tag: 'div',
    layout: bodyRoot,
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
